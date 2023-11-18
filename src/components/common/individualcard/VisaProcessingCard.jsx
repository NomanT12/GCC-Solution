import React from "react";
import styled from "styled-components";

const VisaProcessingCard = () => {
  const VisaProcessingCardContainer = styled.div`
    background: #f0f0f0;
    width: 560px;
    height: 785px;
    padding: 45px;
    margin-top: 62px;
  `;

const VisaProcessingMainContainer = styled.div`
   
`;
  return (
    <VisaProcessingCardContainer>
      <VisaProcessingMainContainer>
        <p>Visa Processing</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt consectetur adipiscing elit, Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt consectetur adipiscing elit,{" "}
        </p>
      </VisaProcessingMainContainer>
    </VisaProcessingCardContainer>
  );
};

export default VisaProcessingCard;
