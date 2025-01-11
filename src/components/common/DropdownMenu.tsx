import styled from "@emotion/styled";

const DropdownMenuContainer = styled.ul`
  width: 180px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-color: #ffffff;
  border-radius: 10px;
  overflow-y: auto;
  position: absolute;
  top: 50px;
  left: -10px;
  z-index: 3;
  padding: 10px 0px;
`;

const DropdownMenuLane = styled.li`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 18px;
  padding: 0px 16px;
`;

interface DropdownMenuProps {
  option: any[];
  value: any;
  state: any;
  action: React.Dispatch<React.SetStateAction<any>>;
  openAction: React.Dispatch<React.SetStateAction<string | null>>;
};

const DropdownMenu = ({ option, value, state, action, openAction }: DropdownMenuProps) => {

  const onClickSelectHandler = (e: any, item: any) => {
    e.preventDefault();
    action({
      ...state,
      [value]: item
    });
    openAction(null);
    console.log(value, item);
  };

  return (
    <DropdownMenuContainer>
      {option?.map((item: any, index: number) =>
        <DropdownMenuLane
          key={index}
          onClick={(e: any) => onClickSelectHandler(e, item)}>
          {item}
        </DropdownMenuLane>
      )}
    </DropdownMenuContainer>
  )
};

export default DropdownMenu;