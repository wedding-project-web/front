import styled from "@emotion/styled";
import mainWedding from "../assets/image/wedding-hall.jpg";
import { useState } from "react";
import right from "../assets/icon/chevron-right.svg";
import TermModal from "../components/Reservation/TermModal";

const ReservationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;

  @media screen and (max-width: 840px) {
    margin-top: 50px;
  }
`;

const BannerContainer = styled.div<{ $src: string }>`
  width: 100%;
  height: 100dvh;
  position: relative;
  background-image: url(${(props) => props.$src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  ::after {
    content: "";
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    background-color: #222020a6;
  }
`;

const BannerContentWrapper = styled.div`
  width: 800px;
  position: absolute;
  top: 100px;
  left: calc(50% - 400px);
  bottom: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 30px;
  user-select: none;

  @media screen and (max-width: 840px) {
    width: 90%;
    left: 5%;
    top: 0;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 24px;

  @media screen and (max-width: 840px) {
    flex-direction: column-reverse;
    gap: 10px;
  }
`;

const FormContainer = styled.form`
  width: 350px;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 12px;

  @media screen and (max-width: 840px) {
    width: 100%;
    min-width: 100%;
    gap: 6px;
  }
`;

const FormLabel = styled.label`
  font-size: 22px;
  color: #e0e0e0;
  padding-left: 4px;

  @media screen and (max-width: 840px) {
    font-size: 14px;
  }
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

  @media screen and (max-width: 840px) {
    height: 38px;
    font-size: 12px;
    margin-bottom: 8px;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 840px) {
    gap: 8px;
  }
`;

const InfoLabel = styled.label`
  font-size: 16px;
  color: #e0e0e0;

  @media screen and (max-width: 840px) {
    font-size: 14px;
  }
`;

const InfoText = styled.p`
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 16px;

  @media screen and (max-width: 840px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
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

  @media screen and (max-width: 840px) {
    font-size: 12px;
    padding: 8px 12px;
    margin-top: 10px;
  }
`;

const TermContainer = styled.div`
  width: 100%;
  padding: 40px;
  background-color: #ffffffc3;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (max-width: 840px) {
    padding: 24px;
    gap: 8px;
  }
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

  @media screen and (max-width: 840px) {
    font-size: 12px;
    padding: 0px 4px 10px 4px;
  }
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

  @media screen and (max-width: 840px) {
    width: 14px;
    height: 14px;
    font-size: 9px;
  }
`;

const SelectCheckBox = styled(CheckBox)`
  background-color: #f56a0e;
  color: #ffffff;
  border: none;
`;

const BottomLane = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;

  @media screen and (max-width: 840px) {
    padding: 0px 4px;
  }
`;

const ExpireText = styled.div`
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  @media screen and (max-width: 840px) {
    font-size: 12px;
  }
`;

const ExpireSpan = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #f56a0e;

  @media screen and (max-width: 840px) {
    font-size: 12px;
  }
`;

const ArrowIcon = styled.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
  margin-top: 2px;

  @media screen and (max-width: 840px) {
    width: 14px;
    height: 14px;
  }
`;

const ReservationButton = styled.button`
  width: 100%;
  height: 48px;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f56a0e;
  color: #ffffff;
  box-shadow: 2px 2px 4px 0px #33333380;
  border-radius: 4px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #eb9760;
  }

  &:active {
    background-color: #994309;
  }

  @media screen and (max-width: 840px) {
    height: 38px;
    font-size: 14px;
  }
`;

const DisableButton = styled.button`
  width: 100%;
  height: 48px;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #aaaaaa;
  color: #e2e2e2;

  @media screen and (max-width: 840px) {
    height: 38px;
    font-size: 14px;
  }
`;

const EmptyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

const EmptyTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #ffffff;

  @media screen and (max-width: 840px) {
    font-size: 32px;
  }
`;

const MoveButton = styled.a`
  width: 180px;
  height: 180px;
  border-radius: 100%;
  border: 1px solid #ffffff;
  color: #ffffff;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  cursor: pointer;

  @media screen and (max-width: 840px) {
    font-size: 18px;
    width: 140px;
    height: 140px;
  }
`;

const ReservationPage = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const startDate = urlParams.get("sd");
  const endDate = urlParams.get("ed");
  const time = urlParams.get("t");
  const count = urlParams.get("c");

  const [weddingValue, setWeddingValue] = useState<any>({
    name: "",
    phone: "",
    email: "",
  });
  const [check, setCheck] = useState<any>({
    use: false,
    privacy: false,
    ad: false,
  });
  const { name, phone, email } = weddingValue;
  const { use, privacy, ad } = check;
  const [termOpen, setTermOpen] = useState<number>(0);

  const onChangeHandler = (e: any) => {
    const { name, value } = e.target;
    setWeddingValue({
      ...weddingValue,
      [name]: value,
    });
  };

  const onClickCheckHandler = (key?: string) => {
    if (!key) {
      if (use && privacy && ad)
        return setCheck({ use: false, privacy: false, ad: false });
      return setCheck({ use: true, privacy: true, ad: true });
    }
    if (key === "use") return setCheck({ ...check, use: !use });
    if (key === "privacy") return setCheck({ ...check, privacy: !privacy });
    if (key === "ad") return setCheck({ ...check, ad: !ad });
  };

  const privacyOnClick = () => {};
  const handleReservation = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const data = {
      startDate,
      endDate,
      time,
      count,
      use,
      privacy,
      ad,
      ...weddingValue,
    };

    const serverPath = 'https://api.marieedemay.com';

    try {
      const response = await fetch(`${serverPath}/community/reservations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert(`예약 완료`);
      }
    } catch (err) {
      alert(`예약 중 오류가 발생했습니다: ${err}`);
    }
  };

  const handleTermOpen = (key: number) => {
    if (termOpen !== 0) return setTermOpen(0);
    setTermOpen(key);
  };

  const infoFunc = () => {
    if (!startDate || !endDate || !time || !count) {
      return (
        <BannerContentWrapper>
          <EmptyContainer>
            <EmptyTitle>웨딩홀 예약하기</EmptyTitle>
            <MoveButton href="/">예약 신청</MoveButton>
          </EmptyContainer>
        </BannerContentWrapper>
      );
    } else {
      return (
        <BannerContentWrapper>
          <TopContainer>
            <FormContainer>
              <FormLabel>성함</FormLabel>
              <FormInput
                name="name"
                value={name}
                placeholder="예약자의 성함을 입력해주세요."
                onChange={onChangeHandler}
                autoComplete="off"
              />
              <FormLabel>휴대폰 번호</FormLabel>
              <FormInput
                name="phone"
                value={phone}
                placeholder="'-'을 제외한 휴대폰 번호을 입력해주세요."
                onChange={onChangeHandler}
                autoComplete="off"
              />
              <FormLabel>이메일</FormLabel>
              <FormInput
                name="email"
                value={email}
                placeholder="예약자의 이메일을 입력해주세요."
                onChange={onChangeHandler}
                autoComplete="off"
              />
            </FormContainer>
            <InfoContainer>
              <InfoLabel>예약일</InfoLabel>
              <InfoText>
                {startDate} ~ {endDate}
              </InfoText>
              <InfoLabel>예약시간</InfoLabel>
              <InfoText>{time}</InfoText>
              <InfoLabel>예상 하객수</InfoLabel>
              <InfoText>{count} 명</InfoText>
              <ModifyButton href="/">예약정보 수정</ModifyButton>
            </InfoContainer>
          </TopContainer>
          <TermContainer>
            <TermTopLane>
              전체동의
              {privacy ? (
                <SelectCheckBox onClick={() => onClickCheckHandler()}>
                  ✔
                </SelectCheckBox>
              ) : (
                <CheckBox onClick={() => onClickCheckHandler()} />
              )}
            </TermTopLane>

            <BottomLane>
              <ExpireText onClick={() => handleTermOpen(2)}>
                개인정보 처리방침
                <ExpireSpan onClick={privacyOnClick}>(필수)</ExpireSpan>
                <ArrowIcon src={right} alt="화살표" />
              </ExpireText>
              {privacy ? (
                <SelectCheckBox onClick={() => onClickCheckHandler("privacy")}>
                  ✔
                </SelectCheckBox>
              ) : (
                <CheckBox onClick={() => onClickCheckHandler("privacy")} />
              )}
            </BottomLane>
          </TermContainer>
          {name === "" || phone === "" || email === "" || !privacy ? (
            <DisableButton>예약 신청</DisableButton>
          ) : (
            <ReservationButton onClick={handleReservation}>
              예약 신청
            </ReservationButton>
          )}
        </BannerContentWrapper>
      );
    }
  };

  return (
    <ReservationContainer>
      <BannerContainer $src={mainWedding}>{infoFunc()}</BannerContainer>
      <TermModal
        termOpen={termOpen}
        setTermOpen={setTermOpen}
        check={check}
        setCheck={setCheck}
      />
    </ReservationContainer>
  );
};

export default ReservationPage;
