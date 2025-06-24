import { S } from './styles';

import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { isAxiosError } from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';

import { clientSchema } from '@/schemas/clientSchema';
import Logo from '../../logo';
import { useRouter } from 'next/router';
import { useAuth } from '@/providers/authProvider';

interface LoginFormInputs {
  email: string;
  password: string;
}

const FormLogin = () => {
  const router = useRouter();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(clientSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      await login(data.email, data.password);
      router.push('/dashboard');
    } catch (e: unknown) {
      if (isAxiosError(e)) {
        if (e.response?.status === 401) {
          toast.error('Email ou senha inválidos');
        } else {
          const message = e.response?.data?.message || 'Problemas de conexão. Tente mais tarde.';
          toast.error(message);
        }
      } else if (e instanceof Error) {
        toast.error(e.message);
      } else {
        toast.error('Erro desconhecido');
      }
    }
  };

  return (
    <S.Container onSubmit={handleSubmit(onSubmit)} noValidate>
      <S.ContainerTitle>
        <S.Title>Conta -</S.Title>
        <Logo />
      </S.ContainerTitle>

      <S.FieldWrapper>
        <S.Label htmlFor="email">Email:</S.Label>
        <S.Input
          id="email"
          type="email"
          {...register('email')}
          disabled={isSubmitting}
          placeholder="ex: admin@example.com"
        />
        <S.ErrorMessage>{errors.email?.message || ' '}</S.ErrorMessage>
      </S.FieldWrapper>

      <S.FieldWrapper>
        <S.Label htmlFor="password">Senha:</S.Label>
        <S.Input
          id="password"
          type="password"
          {...register('password')}
          disabled={isSubmitting}
          placeholder="ex: 123456"
        />
        <S.ErrorMessage>{errors.password?.message || ' '}</S.ErrorMessage>
      </S.FieldWrapper>

      <S.Button type="submit" disabled={isSubmitting}>
        Acessar Conta
      </S.Button>
    </S.Container>
  );
};

export default FormLogin;
