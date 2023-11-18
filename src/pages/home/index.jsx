import React from "react";
import "./style.css";
import NotificationBar from "components/notification-bar";
import { HeaderContainer } from "components/common";
import MainHeader from "components/main-header";
import BusinessSetupComponent from "components/steps-section";
import styled from "styled-components";
import FemalCard from "components/common/individualcard/FemalCard";
import VisaProcessingCard from "components/common/individualcard/VisaProcessingCard";
import MenCard from "components/common/individualcard/MenCard";
import CardContainer from "components/common/cards/card01";

const Home = () => {
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
  return (
    <>
      <NotificationBar />
      <HeaderContainer>
        <MainHeader />
      </HeaderContainer>
      <BusinessSetupComponent />
      <div style={{ marginBottom: "100px" }}>
        <CardsHeading>Choose Your Jurisdiction</CardsHeading>
        <CardsContainer>
          <CardContainer />
        </CardsContainer>
      </div>
      <div className="VisaProcessingContainer">
        <FemalCard />
        <VisaProcessingCard />
        <MenCard />
      </div>
    </>
  );
};

export default Home;
