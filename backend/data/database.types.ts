// database types.ts

export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    created_at: Date | string;
    updated_at: Date | string;
  }
  
  export interface UserProfile {
    id: string;
    user_id: string;
    avatar?: string;
    name?: string;
    phone?: string;
    address_id?: string;
    social?: string;
    created_at: Date | string;
    updated_at: Date | string;
  }
  
  export interface Address {
    id: string;
    street?: string;
    steet?: string;
    city?: string;
    zipcode?: string;
    geo?: string;
    created_at: Date | string;
    updated_at: Date | string;
  }
  
  export interface Event {
    id: string;
    user_id: string;
    title?: string;
    start?: Date;
    end?: Date;
    created_at: Date | string;
    updated_at: Date | string;
  }
  
  export interface Task {
    id: string;
    user_id: string;
    title?: string;
    isComplete?: boolean;
  }
  