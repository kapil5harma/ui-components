import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Hamburger from '../components/hamburger/Hamburger';

storiesOf('Hamburger', module).add('with hamburger', () => <Hamburger onClick={action('clicked')} />);
