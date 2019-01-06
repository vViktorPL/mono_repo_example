// @flow
import React, { PureComponent } from 'react';
import { Modal as AntModal } from 'antd';
import './modal.css';

export type ModalProps = {
  footerClassName?: string,
};

export class Modal extends PureComponent<ModalProps> {
  render() {
    return (
      <AntModal
        {...this.props}
        title={null}
        footer={null}
        bodyStyle={{
          backgroundColor: 'inherit',
        }}
      />
    );
  }
}
