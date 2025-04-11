import { z } from 'zod';

export const ProductDtoSchema = z.object({
    id: z.number(),
    title: z.string(),
    price: z.number(),
    discont_price: z.number(),
    description: z.string(),
    image: z.string(),
    createdAt: z.date().or(z.string()),
    updatedAt: z.date().or(z.string()),
    categoryId: z.number(),
});

export type Product = z.infer<typeof ProductDtoSchema>;

export const CategoryDtoSchema = z.object({
    id: z.number(),
    title: z.string(),
    image: z.string(),
    createdAt: z.date().or(z.string()),
    updatedAt: z.date().or(z.string()),
});

export type Category = z.infer<typeof CategoryDtoSchema>;
