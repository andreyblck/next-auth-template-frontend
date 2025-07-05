import { z } from "zod";

export const recoverySchema = z.object({
  email: z.string().email("Invalid email address"),
});

export type RecoverySchemaType = z.infer<typeof recoverySchema>;
