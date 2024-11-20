export class ProductError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}