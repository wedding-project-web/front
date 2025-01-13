import styled from "@emotion/styled";
import { useEffect, useRef } from "react";

const TermModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 26;
  background-color: #22202080;
  backdrop-filter: blur(3px);
  display: none;
  justify-content: center;
  align-items: center;
`;

const TermModalContainer = styled.section`
  width: 500px;
  max-height: 700px;
  background-color: #ffffff;
  position: relative;
  display: none;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px #22202080;
  transition: all 0.2s;
  padding: 40px 20px;
  user-select: none;
  overflow-y: auto;

  @media screen and (max-width: 840px) {
    width: 90%;
  }
`;

const TopLane = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TermModalTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 600;
`;

const CheckIcon = styled.span<{ $color: string }>`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: ${(props) => props.$color};
  margin-right: 16px;
  transition: all 0.2s;
`;

const Essential = styled.span`
  font-size: 17px;
  font-weight: 700;
  color: #f56a0e;
`;

const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  font-size: 20px;
  font-weight: 700;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #cccccc;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: #333333;
  }
`;

const TermContentBox = styled.p`
  width: 100%;
  height: 100%;
  text-align: start;
  white-space: pre-line;
  font-size: 14px;
  font-weight: 400;
  padding: 16px;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
`;

const AgreeButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const AgreeButton = styled.button<{ $color: string }>`
  font-size: 12px;
  font-weight: 300;
  color: ${(props) => props.$color};
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 8px;

  &:hover {
    color: #33333380;
  }
`;

const CheckBox = styled.span<{ $border: string, $bgcolor: string }>`
  width: 12px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  color: #ffffff;
  background-color: ${(props) => props.$bgcolor};
  border: ${(props) => props.$border};
  border-radius: 2px;
`;

interface TermModalProps {
  termOpen: number;
  setTermOpen: React.Dispatch<React.SetStateAction<number>>;
  check: any;
  setCheck: React.Dispatch<React.SetStateAction<any>>;
};

const TermModal = ({ termOpen, setTermOpen, check, setCheck }: TermModalProps) => {

  const backRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const { privacy } = check;

  const clickEventStopping = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleCheck = (e: any, key: number) => {
    clickEventStopping(e);
    if (key === 2) return setCheck({ ...check, privacy: !privacy });
  };

  useEffect(() => {
    if (!modalRef.current || !backRef.current) return;
    if (termOpen !== 0) {
      backRef.current.style.display = 'flex';
      modalRef.current.style.display = 'flex';
      setTimeout(() => {
        if (!modalRef.current || !backRef.current) return;
        modalRef.current.style.scale = '1';
        modalRef.current.style.opacity = '1';
      }, 10);
    } else {
      modalRef.current.style.scale = '0';
      modalRef.current.style.opacity = '0';
      setTimeout(() => {
        if (!modalRef.current || !backRef.current) return;
        modalRef.current.style.display = 'none';
        backRef.current.style.display = 'none';
      }, 200);
    };
  }, [termOpen]);

  return (
    <TermModalBackground ref={backRef} onClick={() => setTermOpen(0)}>
      <TermModalContainer ref={modalRef} onClick={clickEventStopping}>
        <TopLane>
          <TermModalTitleWrapper>
            <CheckIcon $color={(privacy) ? '#f56a0e' : '#cccccc'}>✔</CheckIcon>
            개인정보 처리방침
            <Essential>(필수)</Essential>
          </TermModalTitleWrapper>
          <CloseButton onClick={() => setTermOpen(0)}>
            X
          </CloseButton>
        </TopLane>
        <TermContentBox>
          {`■ 수집하는 개인정보 항목

            회사는 상담 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
            ο 수집항목 : 이름, 연락처, 이메일, 견적의뢰 정보(비개인정보)
            ο 개인정보 수집방법 : 홈페이지(온라인 문의)

            ■ 개인정보의 수집 및 이용목적

            회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
            ο 서비스 제공에 관하여 견적 상담문의 답변 전달

            ■ 개인정보의 보유 및 이용기간

            회원정보만을 추출하여 별도로 축적하지는 않으며, 고객불만사항 내용과 함께 3년 동안 보존됩니다. `}
        </TermContentBox>
        <AgreeButtonWrapper>
          <AgreeButton
            onClick={(e: any) => handleCheck(e, 2)}
            $color={(privacy) ? '#333333' : '#929292'}>
            <CheckBox
              $border={(privacy) ? 'none' : '1px solid #929292'}
              $bgcolor={(privacy) ? '#f56a0e' : 'transparent'}>
              {(privacy) && '✔'}
            </CheckBox>
            동의합니다.
          </AgreeButton>
        </AgreeButtonWrapper>
      </TermModalContainer>
    </TermModalBackground>
  )
};

export default TermModal;