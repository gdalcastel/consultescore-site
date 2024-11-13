import { z } from 'zod';

export const BusinessSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Digite seu nome' })
    .regex(/^[a-zA-Zà-úÀ-Ú\s]*$/, { message: 'Deve conter apenas letras' })
    .refine(
      (value) => {
        // Verifica se o valor contém pelo menos dois nomes
        return value.trim().split(/\s+/).length >= 2;
      },
      { message: 'Deve conter pelo menos um sobrenome' }
    ),
  email: z.string().email({ message: 'E-mail inválido' }),
  tel: z
    .string()
    .min(8, { message: 'Número inválido' })
    .regex(/^[^_]*$/, { message: 'Número inválido' })
    .refine(
      (value) => {
        // Remove todos os caracteres não numéricos para validar apenas os números
        const numericValue = value.replace(/\D/g, '');

        // Verifica se está no formato de telefone celular ou fixo
        const isCellphone = numericValue.length === 11; // Ex: (99) 9.9999-9999
        const isLandline = numericValue.length === 10; // Ex: (99) 9999-9999

        return isCellphone || isLandline;
      },
      {
        message: 'Número inválido'
      }
    ),
  doubt: z.string().optional(),
  cnpj: z
    .string()
    .min(14, { message: 'CNPJ incompleto' })
    .max(18, { message: 'CNPJ incompleto' }) // 14 dígitos + 4 caracteres de máscara
    .regex(/^[^_]*$/, { message: 'CNPJ incompleto' }) // Garante que não há underscores
    .refine(
      (value) => {
        // Remove todos os caracteres não numéricos
        const numericValue = value.replace(/\D/g, '');

        // Verifica se o CNPJ possui exatamente 14 dígitos
        return numericValue.length === 14;
      },
      {
        message: 'CNPJ deve ter 14 dígitos'
      }
    )
});

export type SchemaBusiness = z.infer<typeof BusinessSchema>;
