import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Header = styled.h1`
	font-size: 2.1rem;
	line-height: 1.2;
	color: #424242;
`;

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

const Label = styled.p`
	font-size: 1.8rem;
	font-weight: 600;
	line-height: 1.22;
	color: #424242
`;

const Button = styled.button`
	width: 30rem;
	height: 4.8rem;
	border-radius: 5px;
	background-color: #0288d1;
	font-size: 1.6rem;
	font-weight: 600;
	line-height: 1.19;
	color: #ffffff;
	margin-top: 2rem;
	margin-bottom: 2rem;
`;

const LinkComponent = ({ className, children }) => (
	<Link className={className}>
		{children}
	</Link>
);

const StyledLink = styled(LinkComponent)`
	font-size: 16px;
	font-weight: 500;
	line-height: 1.19;
	color: var(--warm-grey);
	text-decoration: none;
`;

const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

class LoginForm extends Component {
	render() {	
		return (
			<LoginFormContainer>
				<Header>
					Log In
				</Header>
				<FormContainer>
					<Label>Username</Label>
					<Input type="email" />
					<Label>Password</Label>
					<Input type="password" />
				</FormContainer>
				<Button>
					Login
				</Button>
				<StyledLink to="/auth/forgot">Forgot Password</StyledLink>
			</LoginFormContainer>
		)
	}
};

export default LoginForm;
