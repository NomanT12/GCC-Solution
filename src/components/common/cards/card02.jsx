import styled from "styled-components";
import Card from "../../../assets/images/offshorecard.png";
const CardsMain = styled.div`
  background-image: url(${Card});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  border-radius: 10px;
`;

const CardsMainContainer = styled.div`
  width: 32%;
  max-width: 620px;
  flex-grow: 1;
  height: 884px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(54, 54, 54, 0.71) 56.64%,
    #000 100%
  );
`;

const CardsContentHeading = styled.p`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  text-align: center;
`;
const CardsButton = styled.button`
  border-radius: 35px;
  background: #00d0b0;
  padding: 11px 25px;
  color: #fff;
  font-family: Montserrat;
  font-size: 18px;
  width: 50%;
  margin: 0 auto;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  border: none;
  margin-top: 20px;
`;

const CardsContentDiscreption = styled.p`
  color: #fff;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: -0.5px;
  margin: 0;
`;

const Card02 = () => {
  return (
    <CardsMain>
      <CardsMainContainer>
        <CardsContentHeading>Offshore</CardsContentHeading>
        <CardsContentDiscreption>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </CardsContentDiscreption>
        <CardsButton>Learn more</CardsButton>
      </CardsMainContainer>
    </CardsMain>
  );
};

export default Card02;
