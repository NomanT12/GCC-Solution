import React from "react";
import NotificationBar from "components/notification-bar";
import { HeaderContainer } from "components/common";
import MainHeader from "components/main-header";
import BusinessSetupComponent from "components/steps-section";
import styled from "styled-components";
import FemalCard from "components/common/individualcard/FemalCard";
import VisaProcessingCard from "components/common/individualcard/VisaProcessingCard";
import MenCard from "components/common/individualcard/MenCard";
import CardContainer from "components/common/cards/card01";
import EcosystemSection from "components/home/ecosystem-section";
import CalculateBusiness from "components/home/calculate-business";
import Consultancy from "components/home/consultancy";

const Home = () => {
  return (
    <HomeContainer>
      <NotificationBar />
      <HeaderContainer>
        <MainHeader />
      </HeaderContainer>
      <BusinessSetupComponent />
      <div className="jurisdiction_container">
        <CardsHeading>Choose Your Jurisdiction</CardsHeading>
        <CardsContainer>
          <CardContainer />
        </CardsContainer>
      </div>
      <EcosystemSection />
      <CalculateBusiness />
      <div className="visa_processing_container">
        <FemalCard />
        <VisaProcessingCard />
        <MenCard />
      </div>
      <Consultancy />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  .jurisdiction_container {
    margin-bottom: 100px;
  }
  .visa_processing_container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 120px 100px 120px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const CardsHeading = styled.p`
  color: #000;
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  margin-top: 95px;
  margin-bottom: 50px;
  text-align: center;
`;
