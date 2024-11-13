import { IInstrumentationService } from "@/src/application/services/instrumentation.service.interface";
import { IFileService } from "@/src/application/services/file.service.interface";
import { UploadFileError } from "@/src/entities/errors/common";
import { createClient } from "@/supabase/server";

export class FileService implements IFileService {
  constructor(
    private readonly _instrumentationService: IInstrumentationService
  ) {}

  async single({ file, backetName = 'exclusive-backet'}: { file: File; backetName?: string }): Promise<{
    id: string,
    path: string,
    fullPath: string,
  }> {
    return await this._instrumentationService.startSpan(
      { name: 'UploadFileService > single' },
      async () => {
        const supabase = await createClient();

        const { data, error } = await supabase.storage.from(backetName).upload(`file_${Date.now()}`, file);
      
        if (error) {
          throw new UploadFileError('Incorrect file type');
        }

        return data;
      }
    )
  }
}