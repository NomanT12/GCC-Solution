import styled from "styled-components";

export const EcosytemContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  /* max-width: 1920px;
  margin-inline: auto; */
  background-color: ${({ theme }) => theme.primary};
  padding: 93px 0 116px 131px;
  /* overflow-x: hidden; */
  .ec_left_section {
    position: relative;
    width: 47%;
    padding-right: 11%;
    z-index: 2;
    .ec_ls_heading {
      color: ${({ theme }) => theme.white};
      font-size: 30px;
      font-weight: 400;
      text-transform: uppercase;
      .ec_ls_h_bold {
        font-weight: 600;
      }
    }
    .ec_ls_long_desc,
    .ec_ls_short_desc {
      color: ${({ theme }) => theme.white};
      font-size: 20px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: -0.5px;
      margin: 38px 0 13px;
    }
    .ec_ls_short_desc {
      margin: 0 0 69px;
    }
    .ec_ls_button {
      border: none;
      outline: none;
      padding: 14px 33px;
      border-radius: 35px;
      background-color: ${({ theme }) => theme.secondary_primary};
      color: ${({ theme }) => theme.white};
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
  .ec_right_section {
    position: relative;
    width: 53%;
    z-index: 2;
    /* background-color: gold ; */
    .slick-slider {
      .slick-list {
        padding: 0 0 0 20%;
      }
      .slick-dots {
        display: flex;
        align-items: center;
        bottom: -40px;
        li {
          margin: 0 1px;
          button {
            /* width: 30px; */
            &::before {
              opacity: 1;
              font-size: 10px;
              color: ${({ theme }) => theme.white};
            }
            &:hover::before {
              opacity: 0.9;
              color: ${({ theme }) => theme.secondary_primary};
            }
          }
          &.slick-active {
            button {
              &::before {
                opacity: 0.9;
                color: ${({ theme }) => theme.secondary_primary};
                font-size: 16px;
              }
            }
          }
        }
      }
    }

    .ec_rc_card_container {
      padding-inline: 15px;
    }
  }

  .ec_left_light_effect {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 220px;
    height: 132px;
    /* left: -102px; */
    /* width: 266px;
    height: 132px; */
    background: rgba(79, 138, 139, 0.85);
    filter: blur(125px);
    z-index: 1;
  }

  .ec_right_light_effect {
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 200px;
    /* right: -152px; */
    /* width: 350px;
    height: 234px; */
    z-index: 1;
    background: rgba(79, 138, 139, 0.89);
    filter: blur(125px);
  }
`;

export const EcosystemCard = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.white};
  padding: 51px 24px 78px 35px;
  border-radius: 10px;
  .ec_heading {
    color: ${({ theme }) => theme.black};
    font-size: 22px;
    font-weight: 600;
    line-height: 33px;
    letter-spacing: -0.5px;
    text-transform: uppercase;
  }
  .ec_desc {
    color: ${({ theme }) => theme.black};
    font-size: 18px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: -0.5px;
    margin: 18px 0 67px;
  }
  .ec_button {
    border: none;
    outline: none;
    padding: 14px 31px;
    border-radius: 35px;
    background-color: ${({ theme }) => theme.secondary_primary};
    color: ${({ theme }) => theme.white};
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    cursor: pointer;
  }
`;
