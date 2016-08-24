import expect from 'expect';
import {shallow} from 'enzyme';
/* eslint-disable no-unused-vars */
import React from 'react';
import {Link} from 'react-router';
import PageLink from '../../src/genericUI/PageLink';
/* eslint-enable no-unused-vars */

describe('PageLink', () => {
  it('renders a link to passed in page', () => {
    let wrapper = shallow(
      <PageLink pagePath="/some-path" title="Hi there" />
    );

    expect(wrapper.contains(
      <Link to="/some-path">Hi there</Link>
    )).toEqual(true);
  });
});
