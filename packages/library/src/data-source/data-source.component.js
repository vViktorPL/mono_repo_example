// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import { Spin } from 'antd';
import * as styles from './data-source.module.css';
import { Button } from '..';
import classNames from 'classnames';

export type DataSourceProps = {
  url: string,
  children: (*) => Node,
};

export type DataSourceState = {
  data: *,
  error: ?string,
  loading: boolean,
  fetchedUrl: ?string,
};

export class DataSource extends Component<DataSourceProps, DataSourceState> {
  state = {
    data: null,
    error: null,
    loading: true,
    fetchedUrl: null,
  };

  loadData = () => {
    this.setState(
      {
        loading: true,
        data: null,
        error: null,
        fetchedUrl: this.props.url,
      },
      () =>
        setTimeout(() =>
          fetch(this.props.url)
            .then(data => data.json())
            .then(result =>
              this.setState({
                data: result,
                error: null,
                loading: false,
              })
            )
            .catch(() => {
              this.setState({
                loading: false,
                data: null,
                error: 'Something went wrong',
              });
            })
        )
    );
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    if (this.props.url !== this.state.fetchedUrl) {
      this.loadData();
    }
  }

  render() {
    const { children } = this.props;
    const { loading, data, error } = this.state;

    if (loading)
      return (
        <div className={styles.center}>
          <Spin size="large" />
        </div>
      );

    if (error) {
      return (
        <div className={classNames(styles.center, styles.error)}>
          {error}
          <Button className={styles.errorBtn} onClick={this.loadData}>
            Retry
          </Button>
        </div>
      );
    }

    return children(data);
  }
}
