import styled from 'styled-components';

const Select = styled.select`
  border-radius: 4px;
  border: solid 1px #bdbdbd;
  width: 100%;
  max-width: ${props => (props.width ? props.width : '35rem')};
  height: 4.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.19;
  color: #212121;
  padding: 0.25rem 1rem;

  &:focus {
    border-radius: 5px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    border: solid 1px #9e9e9e;
    outline: none;
  }
`;

export default Select;
