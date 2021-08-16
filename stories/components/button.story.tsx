import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { Button } from '../../src';
import ShowDocs from '../util/ShowDocs';

const buttonWithSize = () => (
  <>
    <Button size="lg"> large button </Button>
    <Button size="sm"> small button </Button>
  </>
);

const buttonWithType = () => (
  <>
    <Button btnType="primary"> primary button </Button>
    <Button btnType="danger"> danger button </Button>
    <Button btnType="link" href="https://baidu.com">
      {' '}
      link button{' '}
    </Button>
  </>
);

storiesOf('Components/Button', module)
  .add('docs', () => <ShowDocs md={require('../../docs/Button.md')} />)
  .add('type', buttonWithType)
  .add('size', buttonWithSize);
