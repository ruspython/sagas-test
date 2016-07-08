import expect from 'expect';
import { shallow, mount } from 'enzyme';
import React from 'react';

import { Section } from '../index';

describe('<Section />', () => {

  it('should render the repositories if loading was successful', () => {
    const section = {
      name: "Private",
      subsections: []
    };
    const renderedComponent = shallow(
      <Section
        section={section}
      />
    );

  });
});
