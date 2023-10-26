import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string({ required_error: "El nombre es obligatorio" })
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(20, { message: "El nombre debe tener como maximo 20 caracteres" }),
  email: z
    .string({ required_error: "El email es obligatorio" })
    .email({ message: "El email no es valido" })
    .min(11, { message: "El email debe tener al menos 11 caracteres" })
    .max(50, { message: "El email debe tener como maximo 50 caracteres" }),
  password: z
    .string({ required_error: "La contraseña es obligatoria" })
    .min(5, { message: "La contraseña debe tener al menos 5 caracteres" })
    .max(70, { message: "La contraseña debe tener como maximo 70 caracteres" }),
});
