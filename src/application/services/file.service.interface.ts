export interface IFileService {
  single(data: {
    file: File,
    backetName?: string;
  }): Promise<{
    id: string,
    path: string,
    fullPath: string,
  }>;
}