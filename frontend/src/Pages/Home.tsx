import React from "react";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <NavLink to="/login">
        <button>Login in</button>
      </NavLink>
      <NavLink to="/registration">
        <button>Sign up</button>
      </NavLink>
    </div>
  );
};

export default HomePage;
