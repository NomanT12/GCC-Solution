import React from "react";

import styled from "styled-components";
import { routes, socialLinks } from "routes";
import { device } from "utils/devices";
import { useLocation } from "react-router-dom";
import { Button } from "components/common";

const NavigationBar = () => {
  const { pathname } = useLocation();
  return (
    <NBmain>
      <div className="c_name">
        GCC
        <span className="c_name_span"> Solutions </span>
      </div>
      <Bar>
        <div className="links_cont">
          {routes.map((r, i) => (
            <div
              className={`link ${pathname === r.path ? "active" : ""} `}
              key={i}
            >
              {r.label}
            </div>
          ))}
        </div>
        <div className="social_links_cont">
          {socialLinks.map((sl, i) => (
            <div key={i} className="social_link">
              <img className="s_img" src={sl.icon} />
            </div>
          ))}
        </div>
      </Bar>

      <Button title="consultation" />
    </NBmain>
  );
};

export default NavigationBar;

const NBmain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  line-height: normal;
  text-transform: uppercase;

  .c_name {
    font-size: 28px;
    font-weight: 600;
    .c_name_span {
      font-size: 28px;
      font-weight: 400;
    }
  }
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 29.5px;
  border: 1px solid ${({ theme }) => theme.white};
  padding: 17px 30px;
  gap: 95px;
  @media ${device.laptopXL} {
    gap: 60px;
  }

  .links_cont {
    display: flex;
    align-items: center;
    gap: 59px;
    @media ${device.laptopXL} {
      gap: 25px;
    }

    .link {
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      &.active {
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
  .social_links_cont {
    display: flex;
    align-items: center;
    gap: 24.66px;

    .social_link {
      cursor: pointer;
    }
  }
`;
