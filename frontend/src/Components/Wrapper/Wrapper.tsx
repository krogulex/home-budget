import React, { CSSProperties, FunctionComponent, ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
  title?: string;
}

export const Wrapper: FunctionComponent<WrapperProps> = ({
  children,
  title,
}) => {
  const wrapperStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5px',
  };

  return (
    <div style={wrapperStyle}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};
