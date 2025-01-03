import { IGetAllProductsController } from '@/src/interface-adapters/controllers/products/get-products.controller';
import { IAuthenticationService } from '@/src/application/services/authentication.service.interface';
import { IContactService } from '@/src/application/services/contact.service.interface';
import { ICrashReporterService } from '@/src/application/services/crash-reporter.service.interface';
import { IFileService } from '@/src/application/services/file.service.interface';
import { IInstrumentationService } from '@/src/application/services/instrumentation.service.interface';
import { ISignInUseCase } from '@/src/application/use-cases/auth/sign-in.use-case';
import { IUploadFileUseCase } from '@/src/application/use-cases/common/file/upload-file.use-case';
import { IContactUseCase } from '@/src/application/use-cases/contact/contact.use-case';
import { IGetAllProductsUseCase } from '@/src/application/use-cases/product/get-all-products.use-case';
import { ISignInController } from '@/src/interface-adapters/controllers/auth/sign-in.controller';
import { IContactController } from '@/src/interface-adapters/controllers/contact/contact.controller';
import { IProductsRepository } from '@/src/application/repositories/products.repository.interface';
import { ICreateProductUseCase } from '@/src/application/use-cases/product/create-product.use-case';
import { ICreateProductController } from '@/src/interface-adapters/controllers/products/create-product.controller';
import { IUserService } from '@/src/application/services/user.service.interface';

export const DI_SYMBOLS = {
  // Services
  IAuthenticationService: Symbol.for('IAuthenticationService'),
  IInstrumentationService: Symbol.for('IInstrumentationService'),
  ICrashReporterService: Symbol.for('ICrashReporterService'),
  IContactService: Symbol.for('IContactService'),
  IFileService: Symbol.for('IFileService'),
  IUserService: Symbol.for('IUserService'),

  // Repositories
  IProductsRepository: Symbol.for('IProductsRepository'),

  // Use Cases
  ISignInUseCase: Symbol.for('ISignInUseCase'),
  IContactUseCase: Symbol.for('IContactUseCase'),
  IUploadFileUseCase: Symbol.for('IUploadFileUseCase'),
  IGetAllProductsUseCase: Symbol.for('IGetAllProductsUseCase'),
  ICreateProductUseCase: Symbol.for('ICreateProductUseCase'),

  // Controllers
  ISignInController: Symbol.for('ISignInController'),
  IContactController: Symbol.for('IContactController'),
  IGetAllProductsController: Symbol.for('IGetAllProductsController'),
  ICreateProductController: Symbol.for('ICreateProductController'),
};

export interface DI_RETURN_TYPES {
  // Services
  IAuthenticationService: IAuthenticationService;
  IInstrumentationService: IInstrumentationService;
  ICrashReporterService: ICrashReporterService;
  IContactService: IContactService;
  IFileService: IFileService;
  IUserService: IUserService;

  // Repositories
  IProductsRepository: IProductsRepository;

  // Use Cases
  ISignInUseCase: ISignInUseCase;
  IContactUseCase: IContactUseCase;
  IUploadFileUseCase: IUploadFileUseCase;
  IGetAllProductsUseCase: IGetAllProductsUseCase;
  ICreateProductUseCase: ICreateProductUseCase;

  // Controllers
  ISignInController: ISignInController;
  IContactController: IContactController;
  IGetAllProductsController: IGetAllProductsController;
  ICreateProductController: ICreateProductController;
}
