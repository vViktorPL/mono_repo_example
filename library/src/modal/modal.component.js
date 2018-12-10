// @flow
import React, {PureComponent} from 'react';
import {Modal as AntModal} from 'antd';

export type ModalProps = {};

export class Modal extends PureComponent<ModalProps> {
  render() {
    return (
      <AntModal
        {...this.props}
      />
    )
  }
}