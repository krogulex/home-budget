import React from "react";
import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/Home";
import RegistrationPage from "./Pages/Registration";
import LoginPage from "./Pages/Login";
import ProductPage from "./Pages/Product";
import DashboardPage from "./Pages/DashboardPage";
import NotFoundPage from "./Pages/NotFoundPage";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="registration" element={<RegistrationPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="dashboard" element={<DashboardPage />}></Route>
        <Route path="product/:id" element={<ProductPage />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
