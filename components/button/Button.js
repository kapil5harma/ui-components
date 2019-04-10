import styled from 'styled-components';

const Button = styled.button`
  width: ${props => (props.width ? props.width : '100%')};
  height: 4.8rem;
  border-radius: 5px;
  background: ${props => (props.light ? 'yellow' : 'red')};
  border: ${props => (props.light ? `1px solid ${props.theme.buttonBGDark}` : 'unset')};
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.19;
  color: ${props => (props.light ? props.theme.buttonBGDark : props.theme.buttonBGLight)};
  margin: ${props => (props.margin ? props.margin : 'unset')};
  outline: none;
  cursor: pointer;
`;

export default Button;
