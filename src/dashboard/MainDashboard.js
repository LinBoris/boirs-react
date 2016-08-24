import React from 'react';
import {connect} from 'react-redux';
/* eslint-disable no-unused-vars */
import CustomerStatus from '../customerOverview/CustomerStatus';
import BasicInfo from '../customerOverview/BasicInfo';
import RegisterInfo from '../customerOverview/RegisterInfo';
import ElectronicCommunication from '../customerOverview/ElectronicCommunication';
import {getCustomer} from '../customerOverview/customerInfoActions';
import Communication from '../customerOverview/communication';
import KnowYourCustomer from '../knowYourCustomer/KnowYourCustomer';
import ContactHistoryLink from '../contactHistory/ContactHistoryLink';
import ContactRecordLink from '../contactEntry/ContactRecordLink';
/* eslint-enable no-unused-vars */

export const mapStateToProps = (state, ownProps) => {
  return {
    customerId: ownProps.params.customerId
  };
};

export const mapDispatchToProps = (dispatch, ownProps, action = getCustomer) => {
  return {
    onComponentWillMount: customerId => dispatch(action(customerId))
  };
};

export const MainDashboard = React.createClass({
  componentWillMount: function() {
    this.props.onComponentWillMount(this.props.customerId);
  },

  render() {
    return (
      <div>
        <BasicInfo />
        <RegisterInfo />
        <ElectronicCommunication />
        <CustomerStatus />
        <KnowYourCustomer />
        <ContactHistoryLink customerId={this.props.customerId} />
        <ContactRecordLink customerId={this.props.customerId}/>
        <Communication />
      </div>
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainDashboard);
