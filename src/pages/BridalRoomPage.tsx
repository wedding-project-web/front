import styled from "@emotion/styled";
import bridalRoom from "../assets/image/신부대기실.jpg";

const WeddingHallPageContainer = styled.div`
  width: 100%;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center; /* 이미지 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  min-height: 100vdh;
`;

const MainImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const Title = styled.div`
  font-size: 50px;
  margin: 50px 0px 0px 0px;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  gap: 20px;
  margin: 50px 0px 0px 0px;
  border: 1px solid black;
`;

const ImgSlideContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 50px 0px 0px 0px;
`;

const ImgGalleryContainer = styled.div`
  font-size: 50px;
  width: 70%;
`;

const Img = styled.img`
  width: 100%;
`;

const BridalRoomPage = () => {
  return (
    <WeddingHallPageContainer>
      <ImgContainer>
        <MainImg src={bridalRoom} />
      </ImgContainer>
      {/* <div>WEDDING HALL</div> */}
      <Title>신부 대기실</Title>

      <ContentsContainer>
        <div>
          01 화려하고 풍성한 생화 장식 그리고 특별한 파티 테이블은 그날, 그
          순간을 더욱 인상 깊게 느낄 수 있도록 합니다.
        </div>
        <div>
          02 대리석을 감싸는 러블리한 색상의 생화 장식은 신부님을 더욱 화사하고
          아름답게 연출해드립니다.
        </div>
        <div>
          03 아름다운 생화 장식으로 야외 대기실 분위기를 연상하게 해주며
          신부님의 아름다운 자태가 빛이 날 수 있도록 화사한 조명이 함께합니다.
          <br />
          넓고 편안한 공간으로 하객분들과 소중하고 의미 있는 시간을 가져보실 수
          있습니다.
        </div>

        <div>더욱 화사하고 아름답게, 신부 대기실</div>
      </ContentsContainer>

      <ImgSlideContainer>
        <ImgGalleryContainer>
          <Img src={bridalRoom} />
        </ImgGalleryContainer>
      </ImgSlideContainer>
    </WeddingHallPageContainer>
  );
};

export default BridalRoomPage;
