import styled from 'styled-components';

const Input = styled.input`
  border-radius: 5px;
  border: ${props =>
    props.error ? props.error : props.success ? props.success : `solid 1px ${props.theme.borderDefaultColor}`};
  width: ${props => (props.width ? props.width : '100%')};
  max-width: ${props => (props.maxWidth ? props.maxWidth : '35rem')};
  height: ${props => (props.height ? props.height : '4.8rem')};
  font-size: ${props => (props.fontSize ? props.fontSize : '1.6rem')};
  font-weight: 600;
  line-height: 1.19;
  color: ${props => (props.color ? props.color : '#212121')};
  padding: 0.25rem 1rem;
  &:focus {
    border-radius: 5px;
    box-shadow: ${props => props.theme.boxShadow};
    /* border: ${props => `solid 1px ${props.theme.borderDefaultColor}`}; */
    outline: none;
  }
`;

export default Input;
