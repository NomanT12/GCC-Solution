import React from "react";

import styled from "styled-components";
import NavigationBar from "components/navigation-bar";
import img from "assets/images/header1.png";

const HeaderContainer = () => {
    return (
        <HCmain>
            <div className="nav-bar" >

                <NavigationBar/>

            </div>
      </HCmain>
  )
};

export default HeaderContainer;

const HCmain = styled.div`
  background-image: url(${img});
  height: 984px;
  background-color: transparent;
  background-repeat:no-repeat;
  margin-top: -2px ;
`;
