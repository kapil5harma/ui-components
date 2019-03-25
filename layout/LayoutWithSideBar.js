import React, { Fragment } from 'react';

const LayoutWithSideBar = props => {
  const { children } = props;

  return (
    <Fragment>
      <header>ATS</header>
      <main>{children}</main>
    </Fragment>
  );
};

export default LayoutWithSideBar;
