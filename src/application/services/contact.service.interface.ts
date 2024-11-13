export interface IContactService {
  create(data: {
    email: string,
    phone: string,
    name: string,
    message: string,
    file: { id: string } | null;
  }): Promise<void>;
}