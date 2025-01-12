import styled from "@emotion/styled";
import mainWedding from "../../assets/image/wedding-hall.jpg";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import CalendarModal from "./CalendarModal";
import { todayString, tomorrowString } from "../../utils/dateString";

const BannerContainer = styled.section<{ $src: string }>`
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

const BannerTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #ffffff;

  @media screen and (max-width: 980px) {
    font-size: 24px;
  }
`;

const BannerBottomWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  @media screen and (max-width: 980px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const SelectorBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 16px;

  @media screen and (max-width: 980px) {
    align-items: center;
  }
`;

const SelectorLabel = styled.label`
  font-size: 18px;
  color: #d6d6d6;

  @media screen and (max-width: 980px) {
    font-size: 13px;
  }
`;

const SelectButton = styled.button`
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  background-color: transparent;
  outline: none;
  border: none;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;
  position: relative;
  cursor: pointer;

  &:hover {
    color: #e9e9e9;
  }

  @media screen and (max-width: 980px) {
    font-size: 16px;
  }
`;

const Arrow = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;

  @media screen and (max-width: 980px) {
    font-size: 16px;
  }
`;

const SideBar = styled.div`
  width: 1px;
  height: 50px;
  background-color: #d6d6d6;

  @media screen and (max-width: 980px) {
    height: 20px;
  }
`;

const SearchButton = styled.a`
  width: 180px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  border: 1px solid;
  border-radius: 30px;
  margin-left: 40px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    border: none;
    background-color: #333333;
  }

  @media screen and (max-width: 980px) {
    width: 120px;
    height: 34px;
    margin-left: 0px;
    margin-top: 40px;
    font-size: 16px;
  }
`;

const Banner = () => {

  const timeList = ['11시', '13시', '15시'];
  const countList = [200, 300, 400];

  const [isOpen, setIsOpen] = useState<string | null>(null);
  const [reservation, setReservation] = useState<any>({
    startDate: todayString(),
    endDate: tomorrowString(),
    time: '11시',
    count: 200
  });
  const { startDate, endDate, time, count } = reservation;

  const onClickOpenHandler = (value: string) => {
    if (isOpen) {
      if (isOpen === value) return setIsOpen(null);
      return setIsOpen(value)
    };
    setIsOpen(value);
  };

  return (
    <BannerContainer $src={mainWedding}>
      <BannerContentWrapper>
        <BannerTitle>웨딩홀 예약하기</BannerTitle>
        <BannerBottomWrapper>
          <SelectorBox>
            <SelectorLabel>예식 예정일</SelectorLabel>
            <SelectButton onClick={() => onClickOpenHandler('calendar')}>
              {startDate} ~ {endDate}
              <Arrow>▽</Arrow>
              {(isOpen === 'calendar')
                && <CalendarModal
                  startValue={startDate}
                  endValue={endDate}
                  state={reservation}
                  action={setReservation} />}
            </SelectButton>
          </SelectorBox>
          <SideBar />
          <SelectorBox>
            <SelectorLabel>예식 시간</SelectorLabel>
            <SelectButton onClick={() => onClickOpenHandler('time')}>
              {time}
              <Arrow>▽</Arrow>
              {(isOpen === 'time')
                && <DropdownMenu
                  option={timeList}
                  value={'time'}
                  state={reservation}
                  action={setReservation}
                  openAction={setIsOpen} />}
            </SelectButton>
          </SelectorBox>
          <SideBar />
          <SelectorBox>
            <SelectorLabel>예상 하객수</SelectorLabel>
            <SelectButton onClick={() => onClickOpenHandler('count')}>
              {count} 명
              <Arrow>▽</Arrow>
              {(isOpen === 'count')
                && <DropdownMenu
                  option={countList}
                  value={'count'}
                  state={reservation}
                  action={setReservation}
                  openAction={setIsOpen} />}
            </SelectButton>
          </SelectorBox>
          <SearchButton href={`/reservation?sd=${startDate}&ed=${endDate}&t=${time}&c=${count}`}>
            Search
          </SearchButton>
        </BannerBottomWrapper>
      </BannerContentWrapper>
    </BannerContainer>
  )
};

export default Banner;