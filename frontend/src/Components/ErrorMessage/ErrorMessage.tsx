import React, { FC } from 'react';

type ErrorMessageProps = {
  errorMessage: string;
  condition: boolean;
};

export const ErrorMessage: FC<ErrorMessageProps> = ({
  errorMessage,
  condition,
}) => {
  return (
    <>
      {condition && (
        <p style={{ color: 'red' }} role="alert">
          {errorMessage}
        </p>
      )}
    </>
  );
};
