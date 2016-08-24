/* eslint-disable no-unused-vars */
import React from 'react';
import PageLink from '../genericUI/PageLink';
/* eslint-enable no-unused-vars */

const ContactRecordLink = React.createClass({
  render: function() {
    return (
      <div>
        <h1>コンタクト記録</h1>
        <PageLink
          pagePath={`/${this.props.customerId}/contact-record/input`}
          title={'コンタクト記録'} />
      </div>
    );
  }
});

export default ContactRecordLink;
