import styled, { css } from 'styled-components';

const ConfigInputContainer = styled.div`
  height: 20vh;
  width: 100vw;
  background-color: red;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SettingWrapper = styled.div`
`;

const InnerSettingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 40px;
`

const ConfigInputs = styled.input`
  color: blue;
`;

const DropdownHeader = styled.div`
  width: 100px;
  height: 40px;
  background-color: #ce0fae;
`;

const DropdownList = styled.ul`

`;

const DropdownListElement = styled.li`

`;

const TimerButton = styled.button`

`;

const DaysWrapper = styled.div`
  display: flex;
`;

const InnerDays = styled.div`
  flex-direction: row;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 5rem;
  background: lightblue;
  color: white;
  border: 2px solid white;


  ${props => props.primary && css`
  background: palevioletred;
  color: white;
`}
`;

export {
  ConfigInputContainer,
  ConfigInputs,
  SettingWrapper,
  InnerSettingWrapper,
  DropdownHeader,
  DropdownList,
  DropdownListElement,
  TimerButton,
  DaysWrapper,
  InnerDays
};