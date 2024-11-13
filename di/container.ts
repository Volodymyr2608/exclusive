import { createContainer } from '@evyweb/ioctopus';

import { DI_RETURN_TYPES, DI_SYMBOLS } from '@/di/types';

import { IInstrumentationService } from '@/src/application/services/instrumentation.service.interface';
import { registerAuthenticationModule } from '@/di/modules/authentication.module';
import { registerMonitoringModule } from '@/di/modules/monitoring.module';
import { registerContactModule } from '@/di/modules/contact.module';
import { registerFileModule } from '@/di/modules/file.module';

const ApplicationContainer = createContainer();

registerAuthenticationModule(ApplicationContainer);
registerMonitoringModule(ApplicationContainer);
registerContactModule(ApplicationContainer);
registerFileModule(ApplicationContainer);

export function getInjection<K extends keyof typeof DI_SYMBOLS>(
  symbol: K
): DI_RETURN_TYPES[K] {
  const instrumentationService =
    ApplicationContainer.get<IInstrumentationService>(
      DI_SYMBOLS.IInstrumentationService
    );

  return instrumentationService.startSpan(
    {
      name: '(di) getInjection',
      op: 'function',
      attributes: { symbol: symbol.toString() },
    },
    () => ApplicationContainer.get(DI_SYMBOLS[symbol])
  );
}
