/*
  # Database Schema Setup for Apartments Delfin

  1. New Tables
    - `apartments` - Store apartment information with images, amenities, and features
    - `profiles` - User profile information linked to auth.users
    - `bookings` - Booking records linking users to apartments

  2. Security
    - Enable RLS on all tables
    - Add policies for secure data access
    - Users can only access their own data
    - Public can view available apartments

  3. Performance
    - Add indexes for common queries
    - Add triggers for automatic timestamp updates

  4. Sample Data
    - Insert sample apartments for demonstration
*/

-- Create apartments table
CREATE TABLE IF NOT EXISTS apartments (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price_per_night INTEGER NOT NULL,
  max_guests INTEGER NOT NULL DEFAULT 2,
  bedrooms INTEGER NOT NULL DEFAULT 1,
  bathrooms INTEGER NOT NULL DEFAULT 1,
  size_sqft INTEGER NOT NULL DEFAULT 500,
  images TEXT[] NOT NULL DEFAULT '{}',
  amenities TEXT[] NOT NULL DEFAULT '{}',
  features TEXT[] NOT NULL DEFAULT '{}',
  available BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT NOT NULL DEFAULT '',
  phone TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  apartment_id INTEGER NOT NULL REFERENCES apartments(id) ON DELETE CASCADE,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  guests INTEGER NOT NULL DEFAULT 1,
  total_price INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS (only if not already enabled)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_tables 
    WHERE tablename = 'apartments' 
    AND rowsecurity = true
  ) THEN
    ALTER TABLE apartments ENABLE ROW LEVEL SECURITY;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_tables 
    WHERE tablename = 'profiles' 
    AND rowsecurity = true
  ) THEN
    ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_tables 
    WHERE tablename = 'bookings' 
    AND rowsecurity = true
  ) THEN
    ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
  END IF;
END $$;

-- Drop existing policies if they exist and recreate them
DO $$
BEGIN
  -- Apartments policies
  IF EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'apartments' AND policyname = 'Anyone can view apartments') THEN
    DROP POLICY "Anyone can view apartments" ON apartments;
  END IF;
  
  -- Profiles policies
  IF EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Users can view own profile') THEN
    DROP POLICY "Users can view own profile" ON profiles;
  END IF;
  
  IF EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Users can update own profile') THEN
    DROP POLICY "Users can update own profile" ON profiles;
  END IF;
  
  IF EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Users can insert own profile') THEN
    DROP POLICY "Users can insert own profile" ON profiles;
  END IF;
  
  -- Bookings policies
  IF EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'bookings' AND policyname = 'Users can view own bookings') THEN
    DROP POLICY "Users can view own bookings" ON bookings;
  END IF;
  
  IF EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'bookings' AND policyname = 'Users can create own bookings') THEN
    DROP POLICY "Users can create own bookings" ON bookings;
  END IF;
  
  IF EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'bookings' AND policyname = 'Users can update own bookings') THEN
    DROP POLICY "Users can update own bookings" ON bookings;
  END IF;
END $$;

-- Create policies
CREATE POLICY "Anyone can view apartments"
  ON apartments
  FOR SELECT
  TO public
  USING (available = true);

CREATE POLICY "Users can view own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can view own bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own bookings"
  ON bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Insert sample apartments data (only if table is empty)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM apartments LIMIT 1) THEN
    INSERT INTO apartments (name, description, price_per_night, max_guests, bedrooms, bathrooms, size_sqft, images, amenities, features) VALUES
    (
      'Ocean View Studio',
      'Perfect for couples seeking a romantic getaway with stunning ocean views. This modern studio features a comfortable king-size bed, fully equipped kitchenette, and a private balcony overlooking the sea.',
      150,
      2,
      1,
      1,
      450,
      ARRAY[
        'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      ARRAY['Free WiFi', 'Ocean View', 'Balcony', 'Kitchenette', 'Air Conditioning', 'Smart TV', 'Coffee Machine', 'Hair Dryer'],
      ARRAY['Ocean View', 'Balcony', 'Kitchen', 'WiFi', 'Air Conditioning', 'Smart TV']
    ),
    (
      'Deluxe One Bedroom',
      'Spacious one-bedroom apartment ideal for small families or groups. Features a separate living area, full kitchen, and panoramic ocean views from multiple windows.',
      220,
      4,
      1,
      1,
      650,
      ARRAY[
        'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      ARRAY['Free WiFi', 'Ocean View', 'Balcony', 'Full Kitchen', 'Living Room', 'Air Conditioning', 'Smart TV', 'Dishwasher', 'Washing Machine', 'Free Parking'],
      ARRAY['Ocean View', 'Living Room', 'Full Kitchen', 'Balcony', 'WiFi', 'Parking']
    ),
    (
      'Premium Two Bedroom',
      'Our premium offering perfect for larger families or groups. Two spacious bedrooms, two full bathrooms, expansive living area, and breathtaking panoramic ocean views.',
      320,
      6,
      2,
      2,
      950,
      ARRAY[
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      ARRAY['Free WiFi', 'Panoramic Ocean View', 'Two Balconies', 'Full Kitchen', 'Dining Area', 'Living Room', 'Master Suite', 'Two Bathrooms', 'Air Conditioning', 'Smart TVs', 'Dishwasher', 'Washing Machine', 'Free Parking', 'Premium Toiletries'],
      ARRAY['Panoramic Ocean View', 'Two Balconies', 'Dining Area', 'Premium Amenities', 'Master Suite', 'Guest Bathroom']
    ),
    (
      'Penthouse Suite',
      'The ultimate luxury experience with three bedrooms, three bathrooms, and a private rooftop terrace. Perfect for special occasions and large groups seeking unparalleled comfort.',
      450,
      8,
      3,
      3,
      1200,
      ARRAY[
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      ARRAY['Free WiFi', 'Private Rooftop Terrace', 'Panoramic Ocean View', 'Gourmet Kitchen', 'Dining Area', 'Living Room', 'Three Bedrooms', 'Three Bathrooms', 'Air Conditioning', 'Smart TVs', 'Dishwasher', 'Washing Machine', 'Dryer', 'Free Parking', 'Concierge Service', 'Premium Toiletries', 'Jacuzzi'],
      ARRAY['Private Rooftop Terrace', 'Three Bedrooms', 'Luxury Finishes', 'Panoramic Views', 'Premium Location']
    );
  END IF;
END $$;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_bookings_user_id ON bookings(user_id);
CREATE INDEX IF NOT EXISTS idx_bookings_apartment_id ON bookings(apartment_id);
CREATE INDEX IF NOT EXISTS idx_bookings_dates ON bookings(check_in, check_out);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at (drop existing ones first)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_apartments_updated_at') THEN
    DROP TRIGGER update_apartments_updated_at ON apartments;
  END IF;
  
  IF EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_profiles_updated_at') THEN
    DROP TRIGGER update_profiles_updated_at ON profiles;
  END IF;
  
  IF EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_bookings_updated_at') THEN
    DROP TRIGGER update_bookings_updated_at ON bookings;
  END IF;
END $$;

CREATE TRIGGER update_apartments_updated_at BEFORE UPDATE ON apartments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();