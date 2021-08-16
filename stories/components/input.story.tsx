import { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { Input } from '../../src';
import ShowDocs from '../util/ShowDocs';

const defaultInput = () => (
  <>
    <Input style={{ width: '300px' }} placeholder="placeholder" onChange={action('changed')} />
  </>
);
const disabledInput = () => (
  <Input style={{ width: '300px' }} placeholder="disabled input" disabled />
);

const iconInput = () => (
  <Input style={{ width: '300px' }} placeholder="input with icon" icon="search" />
);

const sizeInput = () => (
  <>
    <Input style={{ width: '300px' }} defaultValue="large size" size="lg" />
    <Input style={{ width: '300px' }} placeholder="small size" size="sm" />
  </>
);

const pandInput = () => (
  <>
    <Input style={{ width: '300px' }} defaultValue="预置文字" prepend="https://" />
    <Input style={{ width: '300px' }} defaultValue="baidu" append=".com" />
  </>
);

storiesOf('Components/Input', module)
  .add('Docs', () => <ShowDocs md={require('../../docs/Input.md')} />)
  .add('size', sizeInput)
  .add('default', pandInput);
