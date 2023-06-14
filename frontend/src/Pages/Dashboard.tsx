import React from "react";
import { FunctionComponent } from "react";

interface DashboardPageProps {}

const DashboardPage: FunctionComponent<DashboardPageProps> = () => {
  return (
    <div>
      <h1>Dashboard</h1> <p>This is page where we can manage our products</p>
    </div>
  );
};

export default DashboardPage;
