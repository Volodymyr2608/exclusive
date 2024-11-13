export class InputParseError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}

export class UploadFileError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}
