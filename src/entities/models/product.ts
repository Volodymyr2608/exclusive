import { z } from 'zod';

export const selectProductSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  price: z.string(),
  created_at: z.string(),
  userId: z.string()
});
export type Product = z.infer<typeof selectProductSchema>;

export const insertProductSchema = selectProductSchema.pick({
  title: true,
  description: true,
  price: true,
  userId: true
});

export type ProductInsert = z.infer<typeof insertProductSchema>;