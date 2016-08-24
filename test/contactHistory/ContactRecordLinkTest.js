import expect from 'expect';
import {shallow} from 'enzyme';
/* eslint-disable no-unused-vars */
import React from 'react';
import ContactRecordLink from '../../src/contactEntry/ContactRecordLink';
import PageLink from '../../src/genericUI/PageLink';
/* eslint-enable no-unused-vars */

describe('ContactRecordLink', () => {
  it('renders a link to the contact record input page', () => {
    let wrapper = shallow(
      <ContactRecordLink customerId={1234} />
    );

    expect(wrapper.contains(
      <PageLink pagePath="/1234/contact-record/input" title="コンタクト記録" />
    )).toEqual(true);
  });
});
