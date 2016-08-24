import expect from 'expect';
import {shallow} from 'enzyme';
/* eslint-disable no-unused-vars */
import React from 'react';
import ContactHistoryLink from '../../src/contactHistory/ContactHistoryLink';
import PageLink from '../../src/genericUI/PageLink';
/* eslint-enable no-unused-vars */

describe('ContactHistoryLink', () => {
  it('renders a link to the contact history', () => {
    let wrapper = shallow(
      <ContactHistoryLink customerId={1234} />
    );

    expect(wrapper.contains(
      <PageLink pagePath="/1234/contact-history" title="コンタクト記録履歴" />
    )).toEqual(true);
  });
});
