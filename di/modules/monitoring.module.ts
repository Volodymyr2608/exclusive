import { Container } from '@evyweb/ioctopus';

import { InstrumentationService } from '@/src/infrastructure/services/instrumentation.service';
import { CrashReporterService } from '@/src/infrastructure/services/crash-reporter.service';

import { DI_SYMBOLS } from '@/di/types';

export function registerMonitoringModule(container: Container) {
  container
    .bind(DI_SYMBOLS.IInstrumentationService)
    .toClass(InstrumentationService);

  container
    .bind(DI_SYMBOLS.ICrashReporterService)
    .toClass(CrashReporterService);
}
