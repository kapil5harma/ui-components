import styled from 'styled-components';

const TextArea = styled.textarea`
  border-radius: 5px;
  border: solid 1px #bdbdbd;
  width: ${props => (props.width ? props.width : '100%')};
  max-width: ${props => (props.maxWidth ? props.maxWidth : '35rem')};
  height: ${props => (props.height ? props.height : '7.8rem')};
  font-size: ${props => (props.fontSize ? props.fontSize : '1.6rem')};
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

export default TextArea;
