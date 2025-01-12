import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { getDateString } from "../../utils/dateString";
import { CalendarStyle } from "../../styles/CalendarStyle";

const CalendarContainer = styled.div`
  width: 700px;
  display: flex;
  justify-content: center;
  align-items: start;
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 3;

  @media screen and (max-width: 980px) {
    width: 300px;
    flex-direction: column;
    top: 30px;
    left: -30px;
  }
`;

const CalendarBox = styled.div`
  width: 100%;
  height: 100%;
`;

interface CalendarModalProps {
  startValue: any;
  endValue: any;
  state: any;
  action: React.Dispatch<React.SetStateAction<any>>;
};

const CalendarModal = ({ startValue, endValue, state, action }: CalendarModalProps) => {

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const [startDate, setStartDate] = useState<any>(today);
  const [endDate, setEndDate] = useState<any>(tomorrow);

  const nextTomorrow = new Date(startDate);
  nextTomorrow.setDate(startDate.getDate() + 1)

  const handleEvent = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleStartDateChange = (newDate: any) => {
    const nextDay = new Date(newDate);
    nextDay.setDate(newDate.getDate() + 1);

    setStartDate(newDate);
    setEndDate(nextDay);
  };

  const handleEndDateChange = ( newDate: any) => {
    setEndDate(newDate);
  };

  useEffect(() => {
    action({ ...state, startDate: getDateString(startDate), endDate: getDateString(endDate) });
  }, [startDate, endDate]);

  return (
    <CalendarContainer onClick={handleEvent}>
      <CalendarBox>
        <CalendarStyle
          value={startDate}
          onChange={handleStartDateChange}
          formatDay={(locale, date) => format(date, "d")} // 일 제거, 숫자만 보이게
          formatYear={(locale, date) => format(date, "yyyy")} // 네비게이션에서 숫자 연도만 보이게
          formatMonthYear={(locale, date) => format(date, "yyyy. MM")} // 네비게이션에서 2023. 12처럼 보이게 설정
          calendarType="gregory" // 일요일 부터 시작
          showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
          next2Label={null} // +1년 & +10년 이동 버튼 숨기기
          prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
          minDetail="year" // 10년단위 년도 숨기기
          minDate={today}
        />
      </CalendarBox>
      <CalendarBox>
        <CalendarStyle
          value={endDate}
          onChange={handleEndDateChange}
          formatDay={(locale, date) => format(date, "d")} // 일 제거, 숫자만 보이게
          formatYear={(locale, date) => format(date, "yyyy")} // 네비게이션에서 숫자 연도만 보이게
          formatMonthYear={(locale, date) => format(date, "yyyy. MM")} // 네비게이션에서 2023. 12처럼 보이게 설정
          calendarType="gregory" // 일요일 부터 시작
          showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
          next2Label={null} // +1년 & +10년 이동 버튼 숨기기
          prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
          minDetail="year" // 10년단위 년도 숨기기
          minDate={nextTomorrow}
        />
      </CalendarBox>
    </CalendarContainer>
  )
};

export default CalendarModal;