import styled from "@emotion/styled";

const HambugIcon = styled.div<{ $open: boolean }>`
  width: 100%;
  height: 4px;
  position: relative;
  background-color: ${(props) => (props.$open ? 'transparent' : '#6e6e6e')};
  border-radius: 2px;
  pointer-events: none;
  user-select: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: #6e6e6e;
    border-radius: 2px;
    transition: transform 0.2s ease;
    left: 8px;
  }

  &::before {
    top: ${(props) => (props.$open ? '0' : '-7px')};
    transform: ${(props) => (props.$open ? 'rotate(45deg)' : 'none')};
  }

  &::after {
    top: ${(props) => (props.$open ? '0' : '7px')};
    transform: ${(props) => (props.$open ? 'rotate(-45deg)' : 'none')};
  }
`;

interface HambugProps {
  isOpen: boolean;
};

const Hambug = ({ isOpen }: HambugProps) => {
  return (
    <HambugIcon $open={isOpen} />
  )
};

export default Hambug;