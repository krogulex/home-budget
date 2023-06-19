import { FunctionComponent } from 'react';

import AuthForm from '@components/AuthForm';
import Wrapper from '@components/Wrapper';

const RegistrationPage: FunctionComponent = () => {
  return (
    <Wrapper>
      <AuthForm isRegistration />
    </Wrapper>
  );
};

export default RegistrationPage;
