export const todayString = () => {
  const dayList = ['일', '월', '화', '수', '목', '금', '토'];

  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = today.getDay();

  return `${year}.${String(month).padStart(2, '0')}.${String(date).padStart(2, '0')} ${dayList[day]}`;
};

export const tomorrowString = () => {
  const dayList = ['일', '월', '화', '수', '목', '금', '토'];

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const year = tomorrow.getFullYear();
  const month = tomorrow.getMonth() + 1;
  const date = tomorrow.getDate();
  const day = tomorrow.getDay();

  return `${year}.${String(month).padStart(2, '0')}.${String(date).padStart(2, '0')} ${dayList[day]}`;
};

export const getDateString = (data: any) => {
  const dayList = ['일', '월', '화', '수', '목', '금', '토'];

  const year = data.getFullYear();
  const month = data.getMonth() + 1;
  const date = data.getDate();
  const day = data.getDay();

  return `${year}.${String(month).padStart(2, '0')}.${String(date).padStart(2, '0')} ${dayList[day]}`;
};