import styled from "styled-components";

export const Smain = styled.div`
  color: ${({ theme }) => theme.white};

  .point_start {
    display: flex;
    gap: 198px;
    .title_container {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-bottom: 64px;
      width: 418px;
      .bold {
        font-size: 30px;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
      }

      .normal {
        color: ${({ theme }) => theme.white};
        font-size: 30px;
        font-weight: 400;
        text-transform: uppercase;
      }
    }

    .divider_div {
      height: auto;
      width: 24px;
      display: flex;
      justify-content: center;
    }
  }
`;

export const Steps = styled.div`
  display: flex;
  gap: 198px;

  .step_title {
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: -0.5px;
    width: 418px;
    margin-bottom: 70px;
    cursor: pointer;
    &.t_active {
      color: ${({ theme }) => theme.activeColor};
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: -0.5px;
    }
  }

  .step_circle_div {
    display: flex;
    flex-direction: column;
    align-items: center;
    .circle {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 1px solid white;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      &.c_active {
        border-color: ${({ theme }) => theme.activePoint};
      }
      .active {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.activePoint};
        box-shadow: 0px 0px 3px ${({ theme }) => theme.activeColor_shadow};
      }
    }
  }
`;
