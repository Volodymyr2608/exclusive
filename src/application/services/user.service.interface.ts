import { User } from "@supabase/supabase-js";

export interface IUserService {
  getUser(): Promise<User>
}