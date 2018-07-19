import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from '../../components/Buttons/Button';

storiesOf('Button', module)
  .add('with styled components', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with primary prop', () => <Button primary onClick={action('clicked')}>Hello Button</Button>)
