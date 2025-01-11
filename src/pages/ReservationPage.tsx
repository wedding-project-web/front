import styled from "@emotion/styled";
import mainWedding from "../assets/image/wedding-hall.jpg";
import { useState } from "react";
import right from "../assets/icon/arrow-right.png";

const ReservationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 30px;
`;

const BannerContainer = styled.div<{ $src: string }>`
  width: 100%;
  height: 100dvh;
  position: relative;
  background-image: url(${(props) => props.$src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: #22202080;
  }
`;

const BannerContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  user-select: none;
`;

const TopContainer = styled.div`
  width: 800px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 24px;
`;

const FormContainer = styled.form`
  width: 400px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 12px;
`;

const FormLabel = styled.label`
  font-size: 22px;
  color: #e0e0e0;
  padding-left: 4px;
`;

const FormInput = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid #e0e0e0;
  outline: none;
  color: #ffffff;
  background-color: transparent;
  padding: 12px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;

  &::placeholder {
    color: #bdbdbd;
  }

  &:focus {
    border: 1px solid #ffffff;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

const InfoLabel = styled.label`
  font-size: 14px;
  color: #e0e0e0;
`;

const InfoText = styled.p`
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 10px;
`;

const ModifyButton = styled.a`
  padding: 10px 24px;
  font-size: 18px;
  color: #ffffff;
  border: 1px solid;
  margin-top: 20px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #333333;
    border: 1px solid #333333;
  }
`;

const TermContainer = styled.div`
  width: 800px;
  padding: 40px;
  background-color: #ffffffc3;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TermTopLane = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 16px;
  font-size: 16px;
  font-weight: 700;
  padding: 0px 10px 20px 10px;
  border-bottom: 1px solid #a0a0a0;
`;

const CheckBox = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border: 1px solid;
  border-radius: 2px;
  cursor: pointer;
`;

const SelectCheckBox = styled(CheckBox)`
  background-color: #333333;
  color: #ffffff;
  border: none;
`;

const BottomLane = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
`;

const ExpireText = styled.div`
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const ExpireSpan = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #ce832e;
`;

const ArrowIcon = styled.img`
  width: 10px;
  height: 10px;
  object-fit: contain;
  margin-top: 2px;
`;

const ReservationPage = () => {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const startDate = urlParams.get('sd');
  const endDate = urlParams.get('ed');
  const time = urlParams.get('t');
  const count = urlParams.get('c');
  console.log(startDate, endDate, time, count);

  const [check, setCheck] = useState<any>({
    use: false,
    privacy: false,
    ad: false
  });
  const { use, privacy, ad } = check;

  const onClickCheckHandler = (key?: string) => {
    if (!key) {
      if (use && privacy && ad) return setCheck({ use: false, privacy: false, ad: false });
      return setCheck({ use: true, privacy: true, ad: true });
    }
    if (key === 'use') return setCheck({ ...check, use: !use });
    if (key === 'privacy') return setCheck({ ...check, privacy: !privacy });
    if (key === 'ad') return setCheck({ ...check, ad: !ad });
  };

  return (
    <ReservationContainer>
      <BannerContainer $src={mainWedding}>
        <BannerContentWrapper>
          <TopContainer>
            <FormContainer>
              <FormLabel>성함</FormLabel>
              <FormInput
                placeholder="예약자의 성함을 입력해주세요." />
              <FormLabel>휴대폰 번호</FormLabel>
              <FormInput
                placeholder="예약자의 휴대폰 번호를 입력해주세요." />
              <FormLabel>이메일</FormLabel>
              <FormInput
                placeholder="예약자의 이메일을 입력해주세요." />
            </FormContainer>
            <InfoContainer>
              <InfoLabel>예약일</InfoLabel>
              <InfoText>
                {startDate} ~ {endDate}
              </InfoText>
              <InfoLabel>예약시간</InfoLabel>
              <InfoText>
                {time}
              </InfoText>
              <InfoLabel>예상 하객수</InfoLabel>
              <InfoText>
                {count} 명
              </InfoText>
              <ModifyButton href='/'>예약정보 수정하기</ModifyButton>
            </InfoContainer>
          </TopContainer>
          <TermContainer>
            <TermTopLane>
              전체동의
              {(use && privacy && ad)
                ? <SelectCheckBox onClick={() => onClickCheckHandler()}>
                  ✔
                </SelectCheckBox>
                : <CheckBox onClick={() => onClickCheckHandler()} />}
            </TermTopLane>
            <BottomLane>
              <ExpireText>
                이용약관 동의
                <ExpireSpan>(필수)</ExpireSpan>
                <ArrowIcon src={right} alt="화살표" />
              </ExpireText>
              {(use)
                ? <SelectCheckBox onClick={() => onClickCheckHandler('use')}>
                  ✔
                </SelectCheckBox>
                : <CheckBox onClick={() => onClickCheckHandler('use')} />}
            </BottomLane>
            <BottomLane>
              <ExpireText>
                개인정보 처리방침
                <ExpireSpan>(필수)</ExpireSpan>
                <ArrowIcon src={right} alt="화살표" />
              </ExpireText>
              {(privacy)
                ? <SelectCheckBox onClick={() => onClickCheckHandler('privacy')}>
                  ✔
                </SelectCheckBox>
                : <CheckBox onClick={() => onClickCheckHandler('privacy')} />}
            </BottomLane>
            <BottomLane>
              <ExpireText>
                광고성 정보 수신 동의
                <ExpireSpan style={{ color: 'inherit' }}>(선택)</ExpireSpan>
                <ArrowIcon src={right} alt="화살표" />
              </ExpireText>
              {(ad)
                ? <SelectCheckBox onClick={() => onClickCheckHandler('ad')}>
                  ✔
                </SelectCheckBox>
                : <CheckBox onClick={() => onClickCheckHandler('ad')} />}
            </BottomLane>
          </TermContainer>
        </BannerContentWrapper>
      </BannerContainer>
    </ReservationContainer>
  )
};

export default ReservationPage;