// @flow
import React, { PureComponent } from 'react';
import { Pagination as AntdPagination } from 'antd';
import './pagination.css';

export type PaginationProps = {
  colors?: {
    color?: string,
    colorActive?: string,
    backgroundColor?: string,
    backgroundColorActive?: string,
  },
};

export class Pagination extends PureComponent<PaginationProps> {
  render() {
    const { colors, ...rest } = this.props;
    const { color, colorActive, backgroundColor, backgroundColorActive } = colors || {};
    return (
      <AntdPagination
        style={{
          '--pagination-bg-color': backgroundColor,
          '--pagination-bg-color--active': backgroundColorActive,
          '--pagination-color': color,
          '--pagination-color--active': colorActive,
        }}
        {...rest}
      />
    );
  }
}
