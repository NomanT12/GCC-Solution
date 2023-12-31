import React from "react";

import { Stepper } from "components/common";
import { HeaderSteps } from "data/headerData";
import styled from "styled-components";

const BusinessSetupComponent = () => {
  return (
    <BSCmain>
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
      <div className="ec_left_light_effect"></div>
      <div className="ec_right_light_effect"></div>
    </BSCmain>
  );
};

export default BusinessSetupComponent;

const BSCmain = styled.div`
  position: relative;
  display: flex;
  background: #222831;
  color: white;
  padding: 93px 131px 51px 131px;
  position: relative;
  z-index: 1;

  .ec_left_light_effect {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 220px;
    height: 132px;
    /* left: -102px; */
    /* width: 266px;
    height: 132px; */
    background: rgba(79, 138, 139, 0.85);
    filter: blur(125px);
    z-index: 1;
  }

  .ec_right_light_effect {
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 200px;
    /* right: -152px; */
    /* width: 350px;
    height: 234px; */
    z-index: 1;
    background: rgba(79, 138, 139, 0.89);
    filter: blur(125px);
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
  }
  .ap_desc {
    color: ${({ theme }) => theme.white};
    font-size: 20px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: -0.5px;
    margin-bottom: 17px;
  }
`;
