import React, { Component } from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import LoginForm from '../../app/auth/login';
import ForgotPasswordForm from '../../app/auth/forgot-password';
import ResetPasswordForm from '../../app/auth/reset-password';

const ParentContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.bgOffWhite};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.buttonBGLight};
  width: 100%;
  height: 100%;
  max-width: 105rem;
  max-height: 50rem;
  border-radius: 4px;
  box-shadow: ${props => props.theme.boxShadow};
  border: ${props => `solid 1px ${props.theme.borderDefaultColor}`};
`;

const ComponentContainer = styled.div`
  margin: 1rem 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class AuthLayout extends Component {
  render() {
    console.log(this.props);
    const {
      match: { path }
    } = this.props;
    return (
      <ParentContainer>
        <FormContainer>
          {path === '/auth' ? (
            <LoginForm />
          ) : path === '/auth/forgot' ? (
            <ForgotPasswordForm />
          ) : path === '/auth/forgot/:token' ? (
            <ResetPasswordForm {...this.props} />
          ) : null}
          <ComponentContainer>
            <ReactSVG src='/assets/login.svg' />
          </ComponentContainer>
        </FormContainer>
      </ParentContainer>
    );
  }
}

export default AuthLayout;
