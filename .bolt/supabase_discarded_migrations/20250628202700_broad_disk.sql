/*
  # Create apartments booking system schema

  1. New Tables
    - `apartments`
      - `id` (integer, primary key)
      - `name` (text)
      - `description` (text)
      - `price_per_night` (integer)
      - `max_guests` (integer)
      - `bedrooms` (integer)
      - `bathrooms` (integer)
      - `size_sqft` (integer)
      - `images` (text array)
      - `amenities` (text array)
      - `features` (text array)
      - `available` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `profiles`
      - `id` (uuid, primary key, references auth.users)
      - `email` (text)
      - `full_name` (text)
      - `phone` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `bookings`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `apartment_id` (integer, references apartments)
      - `check_in` (date)
      - `check_out` (date)
      - `guests` (integer)
      - `total_price` (integer)
      - `status` (enum: pending, confirmed, cancelled)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
    - Add policies for public read access to apartments
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

-- Enable RLS
ALTER TABLE apartments ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Apartments policies (public read, admin write)
CREATE POLICY "Anyone can view apartments"
  ON apartments
  FOR SELECT
  TO public
  USING (available = true);

-- Profiles policies
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

-- Bookings policies
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

-- Insert sample apartments data
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

-- Create triggers for updated_at
CREATE TRIGGER update_apartments_updated_at BEFORE UPDATE ON apartments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();