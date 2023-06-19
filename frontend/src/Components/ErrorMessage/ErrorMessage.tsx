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
        <p style={{ margin: '10px', color: 'red' }} role="alert">
          {errorMessage}
        </p>
      )}
    </>
  );
};
