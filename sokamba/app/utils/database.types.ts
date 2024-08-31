
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      circulation_types: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          name: string | null
          updated_at: string | null
          updated_by: string | null
          uuid: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: number
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
          uuid?: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
          uuid?: string
        }
        Relationships: []
      }
      ecosystem_categories: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number | null
          name: string | null
          updated_at: string | null
          updated_by: string | null
          uuid: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id?: number | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
          uuid?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
          uuid?: string | null
        }
        Relationships: []
      }
      events: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          end_time: string | null
          offering_id: string | null
          profile_id: string | null
          start_time: string | null
          title: string | null
          updated_at: string | null
          updated_by: string | null
          uuid: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_time?: string | null
          offering_id?: string | null
          profile_id?: string | null
          start_time?: string | null
          title?: string | null
          updated_at?: string | null
          updated_by?: string | null
          uuid: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_time?: string | null
          offering_id?: string | null
          profile_id?: string | null
          start_time?: string | null
          title?: string | null
          updated_at?: string | null
          updated_by?: string | null
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "events_offering_id_fkey"
            columns: ["offering_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["uuid"]
          },
          {
            foreignKeyName: "events_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["uuid"]
          },
        ]
      }
      items: {
        Row: {
          additional_info: string | null
          circulation_id: string | null
          created_at: string | null
          details: Json | null
          practice_id: number | null
          practice_type: string | null
          price: number | null
          profile_id: string | null
          review_id: string | null
          updated_at: string | null
          uuid: string
        }
        Insert: {
          additional_info?: string | null
          circulation_id?: string | null
          created_at?: string | null
          details?: Json | null
          practice_id?: number | null
          practice_type?: string | null
          price?: number | null
          profile_id?: string | null
          review_id?: string | null
          updated_at?: string | null
          uuid?: string
        }
        Update: {
          additional_info?: string | null
          circulation_id?: string | null
          created_at?: string | null
          details?: Json | null
          practice_id?: number | null
          practice_type?: string | null
          price?: number | null
          profile_id?: string | null
          review_id?: string | null
          updated_at?: string | null
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "offerings_circulation_id_fkey"
            columns: ["circulation_id"]
            isOneToOne: false
            referencedRelation: "circulation_types"
            referencedColumns: ["uuid"]
          },
          {
            foreignKeyName: "offerings_practice_type_fkey"
            columns: ["practice_type"]
            isOneToOne: false
            referencedRelation: "practice_types"
            referencedColumns: ["uuid"]
          },
        ]
      }
      languages: {
        Row: {
          created_at: string | null
          created_by: string | null
          Language: string | null
          updated_at: string | null
          updated_by: string | null
          uuid: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          Language?: string | null
          updated_at?: string | null
          updated_by?: string | null
          uuid?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          Language?: string | null
          updated_at?: string | null
          updated_by?: string | null
          uuid?: string | null
        }
        Relationships: []
      }
      offerings_junct_ecosystem_categories: {
        Row: {
          created_at: string | null
          created_by: string | null
          ecosystem_category_id: number
          offering_id: string
          updated_at: string | null
          updated_by: string | null
          uuid: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          ecosystem_category_id: number
          offering_id: string
          updated_at?: string | null
          updated_by?: string | null
          uuid?: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          ecosystem_category_id?: number
          offering_id?: string
          updated_at?: string | null
          updated_by?: string | null
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "offering_ecosystem_categories_ecosystem_category_id_fkey"
            columns: ["ecosystem_category_id"]
            isOneToOne: false
            referencedRelation: "ecosystem_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "offering_ecosystem_categories_offering_id_fkey"
            columns: ["offering_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["uuid"]
          },
        ]
      }
      practice_types: {
        Row: {
          created_at: string | null
          created_by: string | null
          ecosystem_category_id: number | null
          name: string | null
          updated_at: string | null
          updated_by: string | null
          uuid: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          ecosystem_category_id?: number | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
          uuid?: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          ecosystem_category_id?: number | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
          uuid?: string
        }
        Relationships: []
      }
      profile_types: {
        Row: {
          category: Database["public"]["Enums"]["profile_category"] | null
          created_by: string | null
          name: string | null
          updated_at: string | null
          updated_by: string | null
          uuid: string
        }
        Insert: {
          category?: Database["public"]["Enums"]["profile_category"] | null
          created_by?: string | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
          uuid?: string
        }
        Update: {
          category?: Database["public"]["Enums"]["profile_category"] | null
          created_by?: string | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
          uuid?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          about_bio: string | null
          accessibility_features: boolean | null
          account_status: boolean | null
          certifications_credentials: string | null
          created_at: string | null
          created_by: string | null
          email: string | null
          languages_spoken: boolean | null
          location_city: string | null
          location_country: string | null
          location_latitude: number | null
          location_longitude: number | null
          location_postalcode: string | null
          location_state: string | null
          location_streetaddress: string | null
          name: string | null
          offerings_schedule: boolean | null
          peace_center_affiliations: boolean | null
          phone_number: string | null
          profile_picture_url: string | null
          profile_type: string | null
          tagline: string | null
          tags: string[] | null
          updated_at: string | null
          updated_by: string | null
          uuid: string
          verification_status: boolean | null
          website_url: string | null
        }
        Insert: {
          about_bio?: string | null
          accessibility_features?: boolean | null
          account_status?: boolean | null
          certifications_credentials?: string | null
          created_at?: string | null
          created_by?: string | null
          email?: string | null
          languages_spoken?: boolean | null
          location_city?: string | null
          location_country?: string | null
          location_latitude?: number | null
          location_longitude?: number | null
          location_postalcode?: string | null
          location_state?: string | null
          location_streetaddress?: string | null
          name?: string | null
          offerings_schedule?: boolean | null
          peace_center_affiliations?: boolean | null
          phone_number?: string | null
          profile_picture_url?: string | null
          profile_type?: string | null
          tagline?: string | null
          tags?: string[] | null
          updated_at?: string | null
          updated_by?: string | null
          uuid: string
          verification_status?: boolean | null
          website_url?: string | null
        }
        Update: {
          about_bio?: string | null
          accessibility_features?: boolean | null
          account_status?: boolean | null
          certifications_credentials?: string | null
          created_at?: string | null
          created_by?: string | null
          email?: string | null
          languages_spoken?: boolean | null
          location_city?: string | null
          location_country?: string | null
          location_latitude?: number | null
          location_longitude?: number | null
          location_postalcode?: string | null
          location_state?: string | null
          location_streetaddress?: string | null
          name?: string | null
          offerings_schedule?: boolean | null
          peace_center_affiliations?: boolean | null
          phone_number?: string | null
          profile_picture_url?: string | null
          profile_type?: string | null
          tagline?: string | null
          tags?: string[] | null
          updated_at?: string | null
          updated_by?: string | null
          uuid?: string
          verification_status?: boolean | null
          website_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_profile_type_fkey"
            columns: ["profile_type"]
            isOneToOne: false
            referencedRelation: "profile_types"
            referencedColumns: ["uuid"]
          },
        ]
      }
      regions: {
        Row: {
          created_at: string | null
          created_by: string | null
          name: string | null
          updated_at: string | null
          updated_by: string | null
          uuid: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
          uuid?: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
          uuid?: string
        }
        Relationships: []
      }
      reviews: {
        Row: {
          comment: string | null
          created_at: string | null
          created_by: string | null
          offering_id: string | null
          profile_id: string | null
          rating: number | null
          updated_at: string | null
          updated_by: string | null
          uuid: string
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          created_by?: string | null
          offering_id?: string | null
          profile_id?: string | null
          rating?: number | null
          updated_at?: string | null
          updated_by?: string | null
          uuid: string
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          created_by?: string | null
          offering_id?: string | null
          profile_id?: string | null
          rating?: number | null
          updated_at?: string | null
          updated_by?: string | null
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "reviews_offering_id_fkey"
            columns: ["offering_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["uuid"]
          },
          {
            foreignKeyName: "reviews_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["uuid"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      profile_category:
        | "Individual"
        | "Business"
        | "University/Educational Institution"
        | "Community Group"
        | "Government/Public Agency"
        | "Admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
