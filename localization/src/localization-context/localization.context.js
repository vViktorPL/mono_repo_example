// @flow
import * as React from 'react';

export type LocalizationContextType = {
  [key: string]: string,
};

export const LocalizationContext = React.createContext<LocalizationContextType>({});
