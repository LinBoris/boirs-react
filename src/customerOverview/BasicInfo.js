import React from 'react';
import {connect} from 'react-redux';

export const mapStateToProps = state => {
  return {
    customerInfo: {
      kanaName: state.customer.currentCustomer.kanaName,
      kanjiName: state.customer.currentCustomer.kanjiName,
      branchCode: state.customer.currentCustomer.branchCode,
      accountNumber: state.customer.currentCustomer.accountNumber,
      prospectNumber: state.customer.currentCustomer.prospectNumber,
      accountOpenDate: state.customer.currentCustomer.accountOpenDate,
      specAccountOpenDate: state.customer.currentCustomer.specAccountOpenDate
    }
  };
};

const BasicInfo = React.createClass({
  render: function() {
    return (
      <div>
        <h1>基本情報</h1>
        <p>フリガナ: {this.props.customerInfo.kanaName}</p>
        <p>客様名前: {this.props.customerInfo.kanjiName}</p>
        <p>部店コード: {this.props.customerInfo.branchCode}</p>
        <p>口座番号: {this.props.customerInfo.accountNumber}</p>
        <p>見込顧客番号: {this.props.customerInfo.prospectNumber}</p>
        <p>口座開設日: {this.props.customerInfo.accountOpenDate}</p>
        <p>特定口座開設日: {this.props.customerInfo.specAccountOpenDate}</p>
       </div>
    );
  }
});

export default connect(mapStateToProps)(BasicInfo);
