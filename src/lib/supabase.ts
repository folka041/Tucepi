import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: {
          id: string;
          user_id: string;
          apartment_id: number;
          check_in: string;
          check_out: string;
          guests: number;
          total_price: number;
          status: 'pending' | 'confirmed' | 'cancelled';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          apartment_id: number;
          check_in: string;
          check_out: string;
          guests: number;
          total_price: number;
          status?: 'pending' | 'confirmed' | 'cancelled';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          apartment_id?: number;
          check_in?: string;
          check_out?: string;
          guests?: number;
          total_price?: number;
          status?: 'pending' | 'confirmed' | 'cancelled';
          created_at?: string;
          updated_at?: string;
        };
      };
      apartments: {
        Row: {
          id: number;
          name: string;
          description: string;
          price_per_night: number;
          max_guests: number;
          bedrooms: number;
          bathrooms: number;
          size_sqft: number;
          images: string[];
          amenities: string[];
          features: string[];
          available: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          description: string;
          price_per_night: number;
          max_guests: number;
          bedrooms: number;
          bathrooms: number;
          size_sqft: number;
          images: string[];
          amenities: string[];
          features: string[];
          available?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          description?: string;
          price_per_night?: number;
          max_guests?: number;
          bedrooms?: number;
          bathrooms?: number;
          size_sqft?: number;
          images?: string[];
          amenities?: string[];
          features?: string[];
          available?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          phone: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name: string;
          phone?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string;
          phone?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};