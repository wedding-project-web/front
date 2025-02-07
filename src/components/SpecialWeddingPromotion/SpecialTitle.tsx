import styled from "@emotion/styled";

const TitleContainer = styled.div`
  background-color: #fdffed;
  margin-top: 90px;
  padding: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    padding: 50px;
    margin-top: 50px;
  }
`;

const Title = styled.div`
  font-size: 30px;
  color: #166237;
    font-family: "Merriweather"; /* 영어+한글 폰트 적용 */


    @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const SubTitle = styled.div`
  font-size: 26px;
  color: #166237;
    font-family: "Merriweather"; /* 영어+한글 폰트 적용 */


    @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const SpecialTitle = () => {
  return (
    <TitleContainer>
      <Title>Special Wedding Promotion</Title>
      {/*<SubTitle>마리드 메이 프로모션</SubTitle>*/}
    </TitleContainer>
  );
};

export default SpecialTitle;
