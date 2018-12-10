// @flow
import React, {PureComponent} from 'react';
import {Pagination as AntdPagination} from 'antd';

export type PaginationProps = {};

export class Pagination extends PureComponent<PaginationProps> {
  render() {
    return (
      <AntdPagination
        {...this.props}
      />
    )
  }
}