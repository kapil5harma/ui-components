import React from 'react';

const LayoutWithoutSideBar = props => {
  const { children } = props;

  return (
    <div>
      <h5>Layout without sidebar</h5>
      {children}
    </div>
  );
};

export default LayoutWithoutSideBar;
