import React from "react";

import { Stepper } from "components/common";
import { HeaderSteps } from "data/headerData";
import SR from "assets/images/SR_gradient.png";
import SL from "assets/images/SL_gradient.png";
import styled from "styled-components";

const BusinessSetupComponent = () => {
  return (
    <BSCmain>
      <img className="grad right" src={SR} />
      <img className="grad left" src={SL} />
      <SectionLeft>
        <Stepper data={HeaderSteps} sectionTitle />
      </SectionLeft>

      <SectionRight>
        <p className="ap_number">1</p>
        <p className="ap_title">
          One-to-one Consultation with Business 
          <p>Setup Advisor</p>
        </p>
        <p className="ap_desc">
          Arrange a face-to-face meeting or a Zoom call with one of our
          advisors. We recommend having a basic understanding of your business
          activity, the number of shareholders, your target customers, and
          office space requirements. Even if you need assistance, our team is
          ready to support you in finalizing your business plan.
        </p>
        <p className="ap_desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </SectionRight>
    </BSCmain>
  );
};

export default BusinessSetupComponent;

const BSCmain = styled.div`
  display: flex;
  background: #222831;
  color: white;
  padding: 93px 131px 51px 131px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  .grad {
    position: absolute;
    z-index: -1;
    &.right {
      right: -20px;
      top: -235px;
    }
    &.left {
      left: -75px;
      bottom: -240px;
    }
  }
`;

const SectionLeft = styled.div``;
const SectionRight = styled.div`
  padding: 95px 0px 1px 197px;
  .ap_number {
    color: ${({ theme }) => theme.activeColor};
    font-size: 70px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .ap_title {
    color: ${({ theme }) => theme.white};
    font-size: 28px;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: -0.5px;
    margin-bottom: 45px;
    ${'' /* width: 534px; */}
  }
  .ap_desc {
    color: ${({ theme }) => theme.white};
    font-size: 20px;
    font-weight: 400;
    line-height: 33px; /* 165% */
    letter-spacing: -0.5px;
    ${'' /* width: 729px; */}
    margin-bottom: 17px;
  }
`;
