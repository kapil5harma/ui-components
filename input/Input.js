import styled from 'styled-components';

const Input = styled.input`
  border-radius: 4px;
  border: solid 1px #bdbdbd;
  width: 35rem;
  height: 4.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.19;
  color: #212121;
  &:focus {
    border-radius: 5px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    border: solid 1px var(--warm-grey);
  }
`;

export default Input;
