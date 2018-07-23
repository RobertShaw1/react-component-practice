import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from '../../components/Buttons/Button';

storiesOf('Button', module)
  .add('with color', () => <Button color={'blue'} onClick={action('clicked')}>Hello Button</Button>)
  .add('with color inverted', () => (
    // #region color inverted
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
  // #endregion
  .add('with shadow on hover', () => (
    // #region color inverted w/ shadow on hover
    <div>
      <Button inverted shadow color={'goldenrod'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted shadow color={'#00649f'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted shadow color={'#5d6ec7'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted shadow color={'#01aac1'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted shadow color={'palevioletred'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted shadow color={'orange'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted shadow color={'#456173'} onClick={action('clicked')}>Hello Button</Button>
      {/* End Row 1 */}
      <Button inverted shadow color={'#499491'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted shadow color={'#528078'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted shadow color={'#375a7f'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted shadow color={'#4d7cae'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted shadow color={'#6a99cb'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted shadow color={'#2c3e50'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted shadow color={'#34495e'} onClick={action('clicked')}>Hello Button</Button>
      {/* End Row 2 */}
      <Button inverted shadow color={'#cb007b'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted shadow color={'#986ead'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted shadow color={'#c83b3b'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted shadow color={'#ef9b59'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted shadow color={'#5727a3'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted shadow color={'#9153f4'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted shadow color={'#95956e'} onClick={action('clicked')}>Hello Button</Button>
      {/* End 3 */}
      <Button inverted shadow color={'#c3a655'} onClick={action('clicked')}>Hello Button</Button>
      <Button inverted shadow color={'#9fa180'} onClick={action('clicked')}>Hello Button</Button>
    </div>
  ))
  // #endregion
  .add('with static shadow', () => (
    // #region color inverted w/ static shadow
    <div>
      <Button staticShadow color={'goldenrod'} onClick={action('clicked')}>Hello Button</Button>
      <Button staticShadow color={'#00649f'} onClick={action('clicked')}>Hello Button</Button>
      <Button staticShadow color={'#5d6ec7'} onClick={action('clicked')}>Hello Button</Button>
      <Button staticShadow color={'#01aac1'} onClick={action('clicked')}>Hello Button</Button>
      <Button staticShadow color={'palevioletred'} onClick={action('clicked')}>Hello Button</Button>
      <Button staticShadow color={'orange'} onClick={action('clicked')}>Hello Button</Button>
      <Button staticShadow color={'#456173'} onClick={action('clicked')}>Hello Button</Button>
      {/* End Row 1 */}
      <Button staticShadow color={'#499491'} onClick={action('clicked')}>Hello Button</Button>
      <Button staticShadow color={'#528078'} onClick={action('clicked')}>Hello Button</Button>
      <Button staticShadow color={'#375a7f'} onClick={action('clicked')}>Hello Button</Button>
      <Button staticShadow color={'#4d7cae'} onClick={action('clicked')}>Hello Button</Button>
      <Button staticShadow color={'#6a99cb'} onClick={action('clicked')}>Hello Button</Button>
      <Button staticShadow color={'#2c3e50'} onClick={action('clicked')}>Hello Button</Button>
      <Button staticShadow color={'#34495e'} onClick={action('clicked')}>Hello Button</Button>
      {/* End Row 2 */}
      <Button staticShadow color={'#cb007b'} onClick={action('clicked')}>Hello Button</Button>
      <Button staticShadow color={'#986ead'} onClick={action('clicked')}>Hello Button</Button>
      <Button staticShadow color={'#c83b3b'} onClick={action('clicked')}>Hello Button</Button>
      <Button staticShadow color={'#ef9b59'} onClick={action('clicked')}>Hello Button</Button>
      <Button staticShadow color={'#5727a3'} onClick={action('clicked')}>Hello Button</Button>
      <Button staticShadow color={'#9153f4'} onClick={action('clicked')}>Hello Button</Button>
      <Button staticShadow color={'#95956e'} onClick={action('clicked')}>Hello Button</Button>
      {/* End 3 */}
      <Button staticShadow color={'#c3a655'} onClick={action('clicked')}>Hello Button</Button>
      <Button staticShadow color={'#9fa180'} onClick={action('clicked')}>Hello Button</Button>
    </div>
  ))
  // #endregion
