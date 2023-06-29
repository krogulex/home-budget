import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

//components
import TextInput from '@components/TextInput';
import ErrorMessage from '@components/ErrorMessage';
import Wrapper from '@components/Wrapper';

//components mui
import { Button } from '@mui/material';

//types
import { FormData } from '@/types';

const API_URL = 'http://localhost:8000/api';

type AuthFormProps = {
  isRegistration?: boolean;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@.]+$/;

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
} as const;

export const AuthForm: FC<AuthFormProps> = ({ isRegistration }) => {
  const endpoint = isRegistration ? 'register' : 'login';

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/${endpoint}`, data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      emailConfirmation: '',
      password: '',
      passwordConfirmation: '',
    },
  });

  const emailValue = watch('email', '');
  const emailConfirmationValue = watch('emailConfirmation', '');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isEmailConfirmationValid = emailValue === emailConfirmationValue;

  const passwordValue = watch('password', '');
  const passwordConfirmationValue = watch('passwordConfirmation', '');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isPasswordConfirmationValid =
    passwordValue === passwordConfirmationValue;

  return (
    <Wrapper title="Budżet domowy">
      <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <legend>{isRegistration ? 'Rejestracja' : 'Logowanie'}</legend>
        <legend>
          {isRegistration
            ? 'Załóż konto podając e-mail i hasło'
            : 'Aby sie zalogować, podaj e-mail i hasło:'}
        </legend>

        <TextInput
          formControl={control}
          name="email"
          rules={{ required: true, pattern: emailPattern }}
          errors={errors}
          placeholder="Email"
          type="email"
        />

        {errors.email?.type === 'required' && (
          <ErrorMessage errorMessage="Pole wymagane" />
        )}

        {errors.email?.type === 'pattern' && (
          <ErrorMessage errorMessage="Nieprawidłowy format adresu e-mail" />
        )}

        {isRegistration && (
          <>
            <TextInput
              formControl={control}
              name="emailConfirmation"
              rules={{
                required: true,
                validate: {
                  isEmailConfirmationValid: (value: string) =>
                    value === emailValue,
                },
              }}
              errors={errors}
              placeholder="Potwierdź email"
              type="email"
            />

            {errors.emailConfirmation?.type === 'required' && (
              <ErrorMessage errorMessage="Pole wymagane" />
            )}

            {errors.emailConfirmation?.type === 'isEmailConfirmationValid' && (
              <ErrorMessage errorMessage="Adresy e-mail nie są identyczne" />
            )}
          </>
        )}

        <TextInput
          formControl={control}
          name="password"
          rules={{ required: true, minLength: 4 }}
          errors={errors}
          placeholder="Hasło"
          type="password"
        />

        {errors.password?.type === 'required' && (
          <ErrorMessage errorMessage="Pole wymagane" />
        )}

        {errors.password?.type === 'minLength' && (
          <ErrorMessage errorMessage="Minimalna długość hasła wynosi 4 znaki" />
        )}

        {isRegistration && (
          <>
            <TextInput
              formControl={control}
              name="passwordConfirmation"
              rules={{
                required: true,
                validate: {
                  isPasswordConfirmationValid: (value: string) =>
                    value === passwordValue,
                },
              }}
              errors={errors}
              placeholder="Potwierdź hasło"
              type="password"
            />

            {errors.passwordConfirmation?.type === 'required' && (
              <ErrorMessage errorMessage="Pole wymagane" />
            )}

            {errors.passwordConfirmation?.type ===
              'isPasswordConfirmationValid' && (
              <ErrorMessage errorMessage="Hasła nie są identyczne" />
            )}
          </>
        )}

        <Button type="submit" variant="contained">
          {isRegistration ? 'Zarejestruj' : 'Zaloguj'}
        </Button>

        {isRegistration && (
          <NavLink to="/">
            <Button variant="contained" style={{ marginTop: '10px' }}>
              Wróc do strony logowana
            </Button>
          </NavLink>
        )}
      </form>
    </Wrapper>
  );
};
