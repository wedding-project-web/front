import styled from "@emotion/styled";

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 50px;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const FirstContent = styled.div`
  color: #166237;
  font-size: 30px;
    font-family: "Merriweather"; /* 영어+한글 폰트 적용 */


    @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

// const SecondContent = styled.div`
//   color: #166237;
//   font-size: 20px;
//
//   @media (max-width: 768px) {
//     font-size: 18px;
//   }
//
//   @media (max-width: 480px) {
//     font-size: 16px;
//   }
// `;

const ThirdContent = styled.div`
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Icon = styled.div`
  color: lightgray;
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const SubTitle = () => {
  return (
    <SubContainer>
      <FirstContent>Promotion</FirstContent>
      {/*<SecondContent>마리드메이 프로모션</SecondContent>*/}
      <Icon>X</Icon>
      <ThirdContent>마리드메이 다양한 프로모션을 진행합니다.</ThirdContent>
    </SubContainer>
  );
};

export default SubTitle;
