import { FC } from 'react';

type ErrorMessageProps = {
  errorMessage: string;
};

export const ErrorMessage: FC<ErrorMessageProps> = ({ errorMessage }) => {
  return (
    <>
      <p style={{ margin: '10px', color: 'red' }} role="alert">
        {errorMessage}
      </p>
    </>
  );
};
