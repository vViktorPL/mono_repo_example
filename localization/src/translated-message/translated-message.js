// @flow

import React from 'react';
import { LocalizationContext } from '../localization-context/localization.context';
import type { LocalizationContextType } from '../localization-context/localization.context';

export type TranslatedMessageProps = {
  localeKey: string,
};

export class TranslatedMessage extends React.Component<TranslatedMessageProps> {
  render() {
    return (
      <LocalizationContext.Consumer>
        {(localizations: LocalizationContextType) => localizations[this.props.localeKey] || this.props.localeKey}
      </LocalizationContext.Consumer>
    );
  }
}
