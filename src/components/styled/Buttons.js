import styled from 'styled-components';

const Buttons = styled.button`
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 1.1em;
  padding: 0.3em;
  border: 0;
  border-radius: 3px;
  background-color: var(--on-background);
  color: var(--background);
  cursor: pointer;

  &:hover {
    background-color: green;
  }
`;

export default Buttons;
