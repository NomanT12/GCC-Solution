import React from "react";

import NotificationBar from "components/notification-bar";
import { HeaderContainer } from "components/common";
import MainHeader from "components/main-header";
import BusinessSetupComponent from "components/steps-section";
import EcosystemSection from "components/home/ecosystem-section";
import CalculateBusiness from "components/home/calculate-business";
import Consultancy from "components/home/consultancy";

const Home = () => {
  return (
    <>
      <NotificationBar />
      <HeaderContainer>
        <MainHeader />
      </HeaderContainer>
      <BusinessSetupComponent />
      <EcosystemSection />
      <CalculateBusiness />
      <Consultancy />
    </>
  );
};

export default Home;
