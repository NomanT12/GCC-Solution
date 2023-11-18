import styled from "styled-components";

export const ConsultancyContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  /* max-width: 1920px;
  margin-inline: auto; */
  background-color: ${({ theme }) => theme.primary};
  padding: 0 170px 0 120px;
  /* overflow-x: hidden; */
  .ec_left_section {
    padding: 117px 0 116px;
    position: relative;
    width: 47%;
    padding-right: 1%;
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
    height: 100%;
    background-color: gold;
    z-index: 2;
    align-self: flex-end;
    .ec_rs_image {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }

  .ec_left_light_effect {
    position: absolute;
    bottom: 26px;
    left: 0px;
    width: 200px;
    height: 100px;
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
    background: rgba(79, 138, 139, 0.89);
    filter: blur(125px);
    z-index: 1;
  }
`;
