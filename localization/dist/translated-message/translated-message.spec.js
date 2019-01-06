import React from 'react';
import { shallow } from 'enzyme';

var getTranslatedMessageWithContext = function getTranslatedMessageWithContext(context) {
  jest.doMock('../localization-context/localization.context', function () {
    return {
      LocalizationContext: {
        Consumer: function Consumer(props) {
          return props.children(context);
        }
      }
    };
  });
  return require('./translated-message').TranslatedMessage;
};

describe('translated message', function () {
  beforeEach(function () {
    jest.resetModules();
  });
  it('renders message if localeKey match', function () {
    var context = {
      key1: 'value1',
      key2: 'value2'
    };
    var TranslatedMessage = getTranslatedMessageWithContext(context);
    var component = shallow(React.createElement(TranslatedMessage, {
      localeKey: "key2"
    })).dive();
    expect(component.text()).toBe('value2');
  });
  it('renders key as fallback if localeKey do not match', function () {
    var TranslatedMessage = getTranslatedMessageWithContext({});
    var component = shallow(React.createElement(TranslatedMessage, {
      localeKey: "key2"
    })).dive();
    expect(component.text()).toBe('key2');
  });
});