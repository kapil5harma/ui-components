import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Backdrop from '../components/backdrop/Backdrop';

storiesOf('Backdrop', module).add('with backdrop', () => <Backdrop />);
