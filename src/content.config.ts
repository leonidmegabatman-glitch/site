import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const elementCard = z.object({
  id: z
    .string()
    .regex(/^[a-z0-9-]+$/, 'id может содержать только строчные латинские буквы, цифры и дефис'),
  uiKey: z.string().optional(),
  title: z.string().min(1),
  kind: z.enum(['button', 'checkbox', 'field', 'switch', 'panel', 'select', 'tab', 'menu', 'link']),
  where: z.string().min(1),
  parent: z.string().optional(),
  why: z.string().min(1),
  how: z.array(z.string()).default([]),
  screenshot: z.string().optional(),
  highlight: z
    .object({
      x: z.number().min(0).max(1),
      y: z.number().min(0).max(1),
      w: z.number().min(0).max(1),
      h: z.number().min(0).max(1),
    })
    .optional(),
  notes: z.array(z.string()).default([]),
});

export const docs = defineCollection({
  loader: glob({ base: './src/content/doc', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().default(''),
    section: z.enum(['znakomstvo', 'interface', 'recipes', 'tricks', 'reference']),
    order: z.number(),
    draft: z.boolean().default(false),
    elements: z.array(elementCard).default([]),
  }),
});

export const collections = { docs };