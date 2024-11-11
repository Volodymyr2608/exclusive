export interface IAuthenticationService {
  signIn({ email, password }:{ email: string, password: string }): void
}