import styled from "styled-components";

export const CalculateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.white};
  padding-block: 100px;
  overflow-x: hidden;
  .cc_heading {
    color: ${({ theme }) => theme.black};
    text-align: center;
    font-size: 36px;
    font-weight: 400;
    /* line-height: normal; */
    text-transform: uppercase;
    .cc_heading_bold {
      font-weight: 600;
    }
  }
  .cc_progress_bar_container {
    width: 62.5%;
    height: 7px;
    background-color: ${({ theme }) => theme.progress_bar_color};
    border-radius: 10px;
    margin: 28px 0 114px;
    .cc_progress {
      width: 10.5%;
      height: 100%;
      background: ${({ theme }) => theme.bar_gradient};
      border-radius: 10px;
    }
  }
  .cc_question {
    color: ${({ theme }) => theme.black};
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .cc_left_image {
    position: absolute;
    bottom: 100px;
    left: -453px;
  }
  .cc_right_image {
    position: absolute;
    bottom: 100px;
    right: -252px;
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 511px;
  height: 71px;
  padding-inline: 30px;
  border-radius: 36px;
  border: 1px solid ${({ theme }) => theme.border_color};
  background-color: ${({ theme }) => theme.white};
  margin-block: 58px;
  .dc_value {
    color: ${({ theme }) => theme.black};
    text-align: center;
    font-size: 22px;
    font-weight: 400;
    line-height: normal;
  }
  .dc_icon {
    margin-top: 14px;
    border: 11px solid;
    border-color: ${({ theme }) => theme.secondary_primary} transparent
      transparent transparent;
  }
`;
