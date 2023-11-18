import React from "react";
import { CalculateContainer, DropdownContainer } from "./styles";
import { Button } from "components/common";
import buildings from "assets/images/buildings.png";
function CalculateBusiness() {
  return (
    <CalculateContainer>
      <p className="cc_heading">
        Calculate Your
        <br />
        <span className="cc_heading_bold">Business Setup Cost Now</span>
      </p>
      <div className="cc_progress_bar_container">
        <div className="cc_progress"></div>
      </div>
      <p className="cc_question">
        Which Business activity are you looking for?
      </p>
      <DropdownContainer>
        <p className="dc_value">Advertising</p>
        <div className="dc_icon"></div>
      </DropdownContainer>
      <Button
        title="Continue"
        bgColor="#00D0B0"
        width="511px"
        height="66px"
        color="#ffffff"
        fontsize="22px"
      />
      <img
        className="cc_left_image"
        src={buildings}
        alt="Business Setup Cost"
      />
      <img
        className="cc_right_image"
        src={buildings}
        alt="Business Setup Cost"
      />
    </CalculateContainer>
  );
}

export default CalculateBusiness;
