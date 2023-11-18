import React from "react";

import NavigationBar from "components/navigation-bar";
import { device } from "utils/devices";
import img from "assets/images/header1.png";
import HeaderGradient from "assets/images/headerGradient.png";
import styled from "styled-components";

const HeaderContainer = ({ children }) => {
  return (
    <HCmain>
      <div className="hcm_wrapper">
        <img src={HeaderGradient} className="hcm_img" />

        <div className="nav_bar">
          <NavigationBar />
        </div>

        <div className="header_content">{children}</div>
      </div>
    </HCmain>
  );
};

export default HeaderContainer;

const HCmain = styled.div`
  background-image: url(${img});
  height: 955px;
  background-color: transparent;
  background-repeat: no-repeat;
  margin-top: -2px;
  color: ${({ theme }) => theme.white};

  .hcm_wrapper {
    width: 100%;
    height: 100%;
    padding: 0 120px;
    background: rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 1;

    .hcm_img {
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
    }

    @media ${device.laptopXL} {
      padding: 0 90px;
    }

    .nav_bar {
      padding-top: 32px;
    }

    .header_content {
      margin-top: 228px;
    }
  }
`;
