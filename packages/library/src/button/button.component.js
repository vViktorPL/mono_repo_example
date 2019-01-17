// @flow
import React, { PureComponent } from 'react';
import { Button as AntButton } from 'antd';

export type ButtonProps = {};

export class Button extends PureComponent<ButtonProps> {
  render() {
    return <AntButton {...this.props} />;
  }
}
