import React from "react";

import { Divider } from "..";
import { Smain, Steps } from "./styles";

const Stepper = ({ data, sectionTitle }) => {
  return (
    <Smain>
      {sectionTitle && (
        <div className="point_start">
          <div className="title_container">
            <p className="bold"> Easy Steps </p>
            <p className="normal"> To Start Your </p>
            <p className="normal">
              <span className="bold">Business</span> in the
              <span className="bold">UAE</span>
            </p>
          </div>
          <div className="divider_div">
            <Divider width="0.5px" height="100%" />
          </div>
        </div>
      )}
      <>
        {data?.map((point) => (
          <Steps key={point.id}>
            <p className={`step_title ${point.active ? "t_active" : ""}`}>
              {point.title}
            </p>
            <div className="step_circle_div">
              <div className={`circle ${point.active ? "c_active" : ""} `}>
                {point.active && <div className="active"> </div>}
              </div>
              <Divider width="1px" height="100%" />
            </div>
          </Steps>
        ))}
      </>
    </Smain>
  );
};

export default Stepper;