import styled from 'styled-components';

const Button = styled.button`
  width: ${props => (props.width ? props.width : '100%')};
  height: 4.8rem;
  border-radius: 5px;
  background: ${props => (props.light ? '#fff' : '#0288d1')};
  border: ${props => (props.light ? '1px solid #0288d1' : 'unset')};
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.19;
  color: ${props => (props.light ? '#0288d1' : '#fff')};
  margin: ${props => (props.margin ? props.margin : 'unset')};
  outline: none;
  cursor: pointer;
  /* margin-top: 2rem;
  margin-bottom: 2rem; */
`;

export default Button;
