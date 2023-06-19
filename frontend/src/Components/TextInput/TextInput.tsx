import { FC } from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  FieldPath,
  RegisterOptions,
} from 'react-hook-form';

//components
import { Input } from '@mui/material';

//types
import { FormData } from '@/types';

export type FieldType =
  | 'email'
  | 'emailConfirmation'
  | 'password'
  | 'passwordConfirmation';

type TextInputProps = {
  formControl: Control<FormData>;
  name: FieldType;
  rules: {
    required: boolean;
    minLength?: number;
    pattern?: RegExp;
    validate?: Record<string, (value: string) => boolean>;
  };
  errors: FieldErrors<FormData>;
  placeholder: string;
  type: FieldType;
};

export const TextInput: FC<TextInputProps> = ({
  formControl,
  name,
  rules,
  errors,
  placeholder,
  type,
}) => (
  <Controller
    control={formControl}
    name={name as FieldPath<FormData>}
    rules={
      rules as Omit<
        RegisterOptions<FormData>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    }
    render={({ field }) => (
      <Input
        {...field}
        placeholder={placeholder}
        type={type}
        error={!!errors[name as keyof FormData]?.message}
        style={{ margin: '10px' }}
      />
    )}
  />
);
