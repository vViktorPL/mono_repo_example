// @flow

import React from 'react';
import { LocalizationContext } from '../localization-context/localization.context';

export type LocalizationsType = {
  [locale: string]: {
    [key: string]: string,
  },
};

export type LocalizationProviderProps = {
  localization: LocalizationsType,
  lang: string,
  children: *,
};

export class LocalizationProvider extends React.Component<LocalizationProviderProps> {
  render() {
    const { children, localization, lang } = this.props;
    const selectedLocale = localization ? localization[lang] : {};
    return <LocalizationContext.Provider value={selectedLocale}>{children}</LocalizationContext.Provider>;
  }
}
