import React from 'react';
import PageLink from '../genericUI/PageLink';// eslint-disable-line no-unused-vars

const ContactHistoryLink = React.createClass({
  render: function() {
    return (
      <div>
        <h1>コンタクト記録履歴</h1>
        <PageLink
          pagePath={`/${this.props.customerId}/contact-history`}
          title={'コンタクト記録履歴'} />
      </div>
    );
  }
});

export default ContactHistoryLink;
