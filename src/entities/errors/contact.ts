export class ContactError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}
