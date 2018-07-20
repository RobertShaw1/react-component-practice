import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from '../../components/Buttons/Button';

storiesOf('Button', module)
  .add('with color inverted', () => (
    <div>
      <Button inverted color={'goldenrod'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted color={'#00649f'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted color={'#5d6ec7'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted color={'#01aac1'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted color={'palevioletred'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted color={'orange'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted color={'#456173'} onClick={action('clicked')}>Hello Button</Button>
      {/* End Row 1 */}
      <Button inverted color={'#499491'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted color={'#528078'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted color={'#375a7f'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted color={'#4d7cae'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted color={'#6a99cb'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted color={'#2c3e50'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted color={'#34495e'} onClick={action('clicked')}>Hello Button</Button>
      {/* End Row 2 */}
      <Button inverted color={'#cb007b'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted color={'#986ead'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted color={'#c83b3b'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted color={'#ef9b59'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted color={'#5727a3'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted color={'#9153f4'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted color={'#95956e'} onClick={action('clicked')}>Hello Button</Button>
      {/* End 3 */}
      <Button inverted color={'#c3a655'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted color={'#9fa180'} onClick={action('clicked')}>Hello Button</Button>
    </div>
  ))
  .add('with color', () => <Button color={'blue'} onClick={action('clicked')}>Hello Button</Button>)
