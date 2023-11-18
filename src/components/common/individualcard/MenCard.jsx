import styled from "styled-components";
import Card from "../../../assets/images/perfect.png";
import "./style.css";

const MenCard = () => {
  const IndividualCardContainer = styled.div`
    border-radius: 10px 0px 0px 10px;
    background: radial-gradient(
      72.07% 72.07% at 50% 27.93%,
      #2a323d 0%,
      #222831 100%
    );

    ${'' /* width: 560px; */}
    height: 785px;
    margin-top: 62px;
    flex-shrink: 0;
    position: relative;
  `;

  const IndividualCardContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 62px;
    align-items: center;
    position: relative;
    z-index: 1;
  `;

  const IndividualCardImage = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  `;

  const IndividualBackground = styled.div`
    position: absolute;
    width: 266px;
    height: 132px;
    left: 50px;
    background: rgba(79, 138, 139, 0.85);
    filter: blur(125px);
    z-index: 0;
  `;

  return (
    <IndividualCardContainer>
      <IndividualCardContent>
        <p className="Individual-ContentP">Need residence</p>
        <p className="Individual-Content01P">visas for you and your family?</p>
      </IndividualCardContent>
      <IndividualCardImage>
        <img src={Card} alt="" />
      </IndividualCardImage>
      <IndividualBackground />
    </IndividualCardContainer>
  );
};

export default MenCard;
