import { z } from 'zod';

export const selectProductSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  created_at: z.string()
});
export type Product = z.infer<typeof selectProductSchema>;

export const insertProductSchema = selectProductSchema.pick({
  title: true,
  description: true,
  price: true,
});

export type ProductInsert = z.infer<typeof insertProductSchema>;