import React from 'react';
import {connect} from 'react-redux';

const preferenceToDescription = {
  true: '申込みあり',
  false: '申込みなし'
};

export const mapStateToProps = state => {
  return {
    communicationPreferences: {
      isEveryDealingReport:
        preferenceToDescription[state.customer.currentCustomer.isEveryDealingReport],
      isImportantNews:
        preferenceToDescription[state.customer.currentCustomer.isImportantNews],
      isOperationReport:
        preferenceToDescription[state.customer.currentCustomer.isOperationReport],
      isPeriodicDealingReport:
        preferenceToDescription[state.customer.currentCustomer.isPeriodicDealingReport]
    }
  };
};

const ElectronicCommunication = React.createClass({
  render: function() {
    return (
      <div>
        <h1>電子交付</h1>
        <p>取引・応募報告書:{this.props.communicationPreferences.isEveryDealingReport}</p>
        <p>取引残高報告書:{this.props.communicationPreferences.isPeriodicDealingReport}</p>
        <p>運用報告書:{this.props.communicationPreferences.isOperationReport}</p>
        <p>重要なお知らせ:{this.props.communicationPreferences.isImportantNews}</p>
      </div>
    );
  }
});

export default connect(mapStateToProps)(ElectronicCommunication);
