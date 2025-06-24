import { setLocale } from 'yup';

setLocale({
  mixed: {
    required: 'Este campo é obrigatório',
  },
  string: {
    email: 'Digite um e-mail válido',
    min: ({ min }) => `Deve conter no mínimo ${min} caracteres`,
    max: ({ max }) => `Deve conter no máximo ${max} caracteres`,
  },
});
