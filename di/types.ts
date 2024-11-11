import { IAuthenticationService } from '@/src/application/services/authentication.service.interface';
import { ICrashReporterService } from '@/src/application/services/crash-reporter.service.interface';
import { IInstrumentationService } from '@/src/application/services/instrumentation.service.interface';
import { ISignInUseCase } from '@/src/application/use-cases/auth/sign-in.use-case';
import { ISignInController } from '@/src/interface-adapters/controllers/auth/sign-in.controller';

export const DI_SYMBOLS = {
  // Services
  IAuthenticationService: Symbol.for('IAuthenticationService'),
  IInstrumentationService: Symbol.for('IInstrumentationService'),
  ICrashReporterService: Symbol.for('ICrashReporterService'),

  // Use Cases
  ISignInUseCase: Symbol.for('ISignInUseCase'),

  // Controllers
  ISignInController: Symbol.for('ISignInController'),
};

export interface DI_RETURN_TYPES {
  // Services
  IAuthenticationService: IAuthenticationService;
  IInstrumentationService: IInstrumentationService;
  ICrashReporterService: ICrashReporterService;

  // Use Cases
  ISignInUseCase: ISignInUseCase;

  // Controllers
  ISignInController: ISignInController;
}
