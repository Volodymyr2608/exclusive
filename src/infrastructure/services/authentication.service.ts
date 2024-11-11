import { IAuthenticationService } from "@/src/application/services/authentication.service.interface";
import { IInstrumentationService } from "@/src/application/services/instrumentation.service.interface";
import { AuthenticationError } from "@/src/entities/errors/auth";
import { createClient } from "@/supabase/server";


export class AuthenticationService implements IAuthenticationService {
  constructor(
    private readonly _instrumentationService: IInstrumentationService
  ) {}

  async signIn({ email, password }: { email: string; password: string; }): Promise<void> {
    return await this._instrumentationService.startSpan(
      { name: 'AuthenticationService > SignIn' },
      async () => {
        const supabase = await createClient();

        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
      
        if (error) {
          throw new AuthenticationError('Incorrect email or password');
        }

        return;
      }
    )
  }
}