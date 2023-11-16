import React from "react";
import styled from "styled-components";
import NotificationBar from "components/notification-bar";
import HeaderContainer from "components/common/header-container";
import Card02 from "components/common/cards/card02";
import Card03 from "components/common/cards/card03";
import Cards from "components/common/cards/card01";

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
      <HeaderContainer />
      <div style={{ marginBottom: "100px" }}>
        <CardsHeading>Choose Your Jurisdiction</CardsHeading>
        <CardsContainer>
          <Cards />
          <Card02 />
          <Card03 />
        </CardsContainer>
      </div>
    </>
  );
};

export default Home;
