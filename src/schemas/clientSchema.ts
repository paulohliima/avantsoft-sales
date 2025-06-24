import * as yup from 'yup';

export const clientSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export const clientCreateSchema = yup.object().shape({
  nomeCompleto: yup.string().required('Nome completo é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  nascimento: yup.string().required('Data de nascimento é obrigatória'),
});
