import React from "react";
import styled from "styled-components";

const VisaProcessingCard = () => {
  return (
    <VisaProcessingCardContainer>
      <VisaProcessingMainContainer>
        <p className="VisaProcesing_heading_text">Visa Processing</p>
        <p className="VisaProcesing_subheading_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="VisaProcesing_Content_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt consectetur adipiscing elit, Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt consectetur adipiscing elit,{" "}
        </p>
        <button className="VisaProcesing_Button">Learn More</button>
      </VisaProcessingMainContainer>
    </VisaProcessingCardContainer>
  );
};

export default VisaProcessingCard;

const VisaProcessingCardContainer = styled.div`
  background: #f0f0f0;
  width: 33%;
  height: 785px;
  padding: 45px;
`;

const VisaProcessingMainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
