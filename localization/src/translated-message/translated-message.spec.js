import React from 'react';
import { shallow } from 'enzyme';

const getTranslatedMessageWithContext = context => {
  jest.doMock('../localization-context/localization.context', () => ({
    LocalizationContext: {
      Consumer: props => props.children(context),
    },
  }));

  return require('./translated-message').TranslatedMessage;
};

describe('translated message', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('renders message if localeKey match', () => {
    const context = {
      key1: 'value1',
      key2: 'value2',
    };
    const TranslatedMessage = getTranslatedMessageWithContext(context);

    const component = shallow(<TranslatedMessage localeKey="key2" />).dive();
    expect(component.text()).toBe('value2');
  });

  it('renders key as fallback if localeKey do not match', () => {
    const TranslatedMessage = getTranslatedMessageWithContext({});

    const component = shallow(<TranslatedMessage localeKey="key2" />).dive();
    expect(component.text()).toBe('key2');
  });
});
