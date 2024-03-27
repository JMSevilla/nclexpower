import * as z from 'zod';

export const checkboxSchema = z.array(z.boolean());