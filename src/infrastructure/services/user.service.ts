import { IAuthenticationService } from "@/src/application/services/authentication.service.interface";
import { IInstrumentationService } from "@/src/application/services/instrumentation.service.interface";
import { IUserService } from "@/src/application/services/user.service.interface";
import { AuthenticationError } from "@/src/entities/errors/auth";
import { createClient } from "@/supabase/server";
import { User } from "@supabase/supabase-js";


export class UserService implements IUserService {
  constructor(
    private readonly _instrumentationService: IInstrumentationService
  ) {}

  async getUser(): Promise<User> {
    return await this._instrumentationService.startSpan(
      { name: 'AuthenticationService > SignIn' },
      async () => {
        const supabase = await createClient();

        const { error, data } = await supabase.auth.getUser();
      
        if (error) {
          throw new AuthenticationError('User is not available');
        }

        return data.user;
      }
    )
  }
}