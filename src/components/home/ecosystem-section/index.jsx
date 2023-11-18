import React from "react";
import { EcosystemCard, EcosytemContainer } from "./styles";
import SlickSlider from "components/common/slick-slider";

const data = [
  {
    id: "0",
    title: "Visa Processing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt consectetur adipiscing elit,",
    button_title: "learn more",
  },
  {
    id: "1",
    title: "Accounting Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt consectetur adipiscing elit,",
    button_title: "learn more",
  },
  {
    id: "2",
    title: "Company Incorporation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt consectetur adipiscing elit,",
    button_title: "learn more",
  },
  {
    id: "3",
    title: "Credit Card",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt consectetur adipiscing elit,",
    button_title: "learn more",
  },
];

const slider_settings = {
  dots: true,
  autoplay: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2.5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

function EcosystemSection() {
  return (
    <EcosytemContainer>
      <div className="ec_left_section">
        <p className="ec_ls_heading">
          the
          <br />
          <span className="ec_ls_h_bold">gcc solutions</span>
          <br /> Ecosystem
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
        <SlickSlider settings={slider_settings}>
          {data.map((service) => (
            <div className="ec_rc_card_container" key={service.id}>
              <EcosystemCard>
                <p className="ec_heading">{service.title}</p>
                <p className="ec_desc">{service.desc}</p>
                <button className="ec_button">{service.button_title}</button>
              </EcosystemCard>
            </div>
          ))}
        </SlickSlider>
      </div>

      <div className="ec_left_light_effect"></div>
      <div className="ec_right_light_effect"></div>
    </EcosytemContainer>
  );
}

export default EcosystemSection;
