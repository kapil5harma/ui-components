import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 28.5rem;
  height: 15rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  background-color: #ffffff;
  display: flex;
  padding: 1.6rem;
  margin: 0 3rem 1.5rem 0;
  .left {
    display: flex;
    flex: 3;
    flex-direction: column;
    justify-content: center;
    .number {
      font-size: 2rem;
      font-weight: 600;
      line-height: 2;
      color: #9e9e9e;
    }
    .text {
      font-size: 1.8rem;
      font-weight: bold;
      line-height: 2;
      color: #212121;
    }
  }
  .right {
    display: flex;
    flex: 1;
  }
`;

const Card = props => {
  console.log('props: ', props);
  const { number, text, image } = props;

  return (
    <StyledCard>
      <div className='left'>
        <div className='number'>{number}</div>
        <div className='text'>{text}</div>
      </div>
      <div className='right' image={image} />
    </StyledCard>
  );
};

export default Card;
