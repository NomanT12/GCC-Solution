import React from "react";

import styled from "styled-components";
import Gicon from "assets/images/Vector.png";

const Button = (props) => {
  const {
    title,
    disabled,
    onClick,
    width = "194px",
    height = "45px",
    bgColor,
    color,
    icon,
    fontsize = "16px",
  } = props;
  return (
    <CButton
      className={`${disabled ? "disabled" : ""}`}
      disabled={disabled}
      onClick={onClick}
      $width={width}
      $height={height}
      $bgColor={bgColor}
      $color={color}
      $fontsize={fontsize}
    >
      {title}

      {icon && (
        <span className="icon_cont">
          <img className="icon" src={Gicon} alt="" />
        </span>
      )}
    </CButton>
  );
};

export default Button;

const CButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  border-radius: 35px;
  background: ${({ $bgColor, theme }) => ($bgColor ? $bgColor : theme.white)};
  color: ${({ $color, theme }) => ($color ? $color : theme.black)};
  font-size: ${(props) => props.$fontsize};
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  &.disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
