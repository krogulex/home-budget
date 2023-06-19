import { CSSProperties, FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

//components
import AuthForm from '@components/AuthForm';
import Wrapper from '@components/Wrapper';

//components mui
import { Button } from '@mui/material';

const HomePage: FunctionComponent = () => {
  return (
    <Wrapper>
      <AuthForm />
      <div>
        <legend style={{ marginBottom: '10px' }}>Lub zarejestruj się</legend>
        <NavLink to="/registration">
          <Button variant="contained">Załóż konto</Button>
        </NavLink>
      </div>
    </Wrapper>
  );
};

export default HomePage;
