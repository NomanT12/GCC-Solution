import React from "react";
import { ConsultancyContainer } from "./styles";
import business_man from "assets/images/businessman.png";

function Consultancy() {
  return (
    <ConsultancyContainer>
      <div className="ec_left_section">
        <p className="ec_ls_heading">
          Book a
          <br />
          <span className="ec_ls_h_bold">Free Consultation</span>
        </p>
        <p className="ec_ls_long_desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
        <p className="ec_ls_short_desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <button className="ec_ls_button">Enquire Now</button>
      </div>
      <div className="ec_right_section">
        <img
          className="ec_rs_image"
          src={business_man}
          alt="Book A Consultant"
        />
      </div>

      <div className="ec_left_light_effect"></div>
      <div className="ec_right_light_effect"></div>
    </ConsultancyContainer>
  );
}

export default Consultancy;
