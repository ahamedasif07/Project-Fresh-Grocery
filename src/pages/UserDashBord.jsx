import React from "react";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import Dashboard from "../components/DashBord/DashBord";
import PageHeader from "../components/PageHeader/PageHeader";

const UserDashBord = () => {
  return (
    <div>
      <PageHeader heading="Dashbord" path="Home / Dashbord"></PageHeader>
      <SectionContainer>
        <Dashboard />
      </SectionContainer>
    </div>
  );
};

export default UserDashBord;
