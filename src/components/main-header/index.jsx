import React from "react";

import { Button, Divider } from "components/common";
import { timeLinePoints } from "data/headerData";
import { MHmain, P, H1 } from "./styles";

const MainHeader = () => {
  return (
    <MHmain>
      <div className="section_left">
        <H1>
          Business Setup
          <P>Is Just The Beginning</P>
        </H1>

        <div className="desc_div">
          GCC Solutions is a leading corporate services provider in the Middle
          East providing market entry, local partnership and government liaison
          services in Dubai, Abu Dhabi, Saudi Arabia and Kuwait.
        </div>

        <div className="btn_cont">
          <Button
            title="consultation"
            bgColor="#00D0B0"
            width="200px"
            height="49px"
            color="#ffffff"
            fontsize="18px"
          />
          <Button
            title="Cost Calculator"
            bgColor="transparent"
            width="230px"
            height="49px"
            color="#ffffff"
            fontsize="18px"
            icon
          />
        </div>

        <div className="steps_div">
          <span> 01 </span> <Divider width="69px" />
          <span> 03 </span>
        </div>
      </div>
      <div className="section_right">
        {timeLinePoints.map((point) => (
          <div key={point.id} className="point_main">
            <div className="text_cont">
              <div className="label"> {point.label} </div>
              <div className="desc">{point.desc}</div>
            </div>

            <div className="num_cont">
              <div className="num"> {point.id}</div>
              {point.id !== timeLinePoints.length && (
                <Divider height="46.154px" />
              )}
            </div>
          </div>
        ))}
      </div>
    </MHmain>
  );
};

export default MainHeader;
