import styled from "styled-components";

export const MHmain = styled.div`
  display: flex;
  justify-content: space-between;
  .section_left {
    display: flex;
    flex-direction: column;
    .desc_div {
      color: ${({ theme }) => theme.white};
      max-width: 735px;
      font-size: 18px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: -0.5px;
      margin-top: 15px;
    }

    .btn_cont {
      margin-top: 62px;
      display: flex;
      align-items: center;
      gap: 28px;
    }

    .steps_div {
      display: flex;
      align-items: center;
      text-align: right;
      font-size: 14px;
      font-weight: 700;
      margin-top: 48px;
      gap: 7px;
    }
  }

  .section_right {
    .point_main {
      text-align: right;
      display: flex;
      gap: 41.85px;
      margin-bottom: 10.58px;
      .text_cont {
        .label {
          width: 196.154px;
          font-size: 18px;
          font-weight: 700;
        }
        .desc {
          width: 196.154px;
          font-size: 12px;
          font-weight: 400;
        }
      }
      .num_cont {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 11.54px;
        .num {
          width: 57.692px;
          height: 57.692px;
          background-color: #fff;
          border-radius: 100%;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
          filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.25));
          display: flex;
          justify-content: center;
          align-items: center;
          color: #000;
          font-size: 28px;
          font-weight: 700;
        }
      }
    }
  }
`;

export const H1 = styled.h1`
  color: ${({ theme }) => theme.white};
  font-size: 60px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const P = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 60px;
  font-weight: 400;
  text-transform: uppercase;
`;