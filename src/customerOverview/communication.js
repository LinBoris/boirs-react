import React from 'react';
import {connect} from 'react-redux';

const postalMailStatusToDescription = {
  true: 'DM可',
  false: 'DM不可'
};

const statusToYesNoDescription = {
  true: '可',
  false: '不可'
};

const statusToTrueFalseDescription = {
  true: 'あり',
  false: 'なし'
};

export const mapStateToProps = state => {
  return {
    communication: {
      sendPostalMail:
        postalMailStatusToDescription[state.customer.currentCustomer.sendPostalMail],
      sendEmail:
        statusToYesNoDescription[state.customer.currentCustomer.sendEmail],
      sendCampaignLetter:
        statusToTrueFalseDescription[state.customer.currentCustomer.sendCampaignLetter],
      sendNotificationLetter:
        statusToTrueFalseDescription[state.customer.currentCustomer.sendNotificationLetter]
    }
  };
};

export const Communication = React.createClass({
  render: function() {
    return (
      <div>
        <h1>コミュニケーション</h1>
        <dl>
          <dt>資料発送</dt>
          <dd>{this.props.communication.sendPostalMail}</dd>
          <dt>案内メール配信</dt>
          <dd>{this.props.communication.sendEmail}</dd>
          <dt>手数料優遇レター</dt>
          <dd>{this.props.communication.sendCampaignLetter}</dd>
          <dt>分配金通知書・再投資報告書郵送</dt>
          <dd>{this.props.communication.sendNotificationLetter}</dd>
        </dl>
      </div>
    );
  }
});

export default connect(mapStateToProps)(Communication);
