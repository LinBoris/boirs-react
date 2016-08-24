import React from 'react';
import {connect} from 'react-redux';

const residentStatusToDescription = {
  RESIDENT: '居住者',
  SPECIAL_NON_RESIDENT: '特別非居住者',
  NON_RESIDENT: '非居住者'
};

export const mapStateToProps = state => {
  let gender = '';
  switch (state.customer.currentCustomer.gender) {
    case 'MALE':
      gender = '男';
      break;
    case 'FEMALE':
      gender = '女';
      break;
    case 'CORPORATION':
      gender = '法人';
      break;
    default:
      gender = '不明';
  }
  return {
    registration: {
      address: state.customer.currentCustomer.address,
      age: state.customer.currentCustomer.age,
      agentAccountNumber: state.customer.currentCustomer.agentAccountNumber,
      agentAddress: state.customer.currentCustomer.agentAddress,
      agentConfirmationDate: state.customer.currentCustomer.agentConfirmationDate,
      agentName: state.customer.currentCustomer.agentName,
      agentPhoneNumber: state.customer.currentCustomer.agentPhoneNumber,
      agentPostCode: state.customer.currentCustomer.agentPostCode,
      birthDate: state.customer.currentCustomer.birthDate,
      companyName: state.customer.currentCustomer.companyName,
      daytimePhoneNumber: state.customer.currentCustomer.daytimePhoneNumber,
      gender: gender,
      residentStatus:
        residentStatusToDescription[state.customer.currentCustomer.residentStatus],
      juniorAccountNumber: state.customer.currentCustomer.juniorAccountNumber,
      juniorNISAAccountNumber: state.customer.currentCustomer.juniorNISAAccountNumber,
      mailAddress: state.customer.currentCustomer.mailAddress,
      phoneNumber: state.customer.currentCustomer.phoneNumber,
      postCode: state.customer.currentCustomer.postCode,
      workPhoneNumber: state.customer.currentCustomer.workPhoneNumber
    }
  };
};

const RegisterInfo = React.createClass({
  render: function() {
    return (
      <div>
        <h1>登録情報</h1>
        <p>性別: {this.props.registration.gender}</p>
        <p>年齢: {this.props.registration.age}</p>
        <p>生年月日: {this.props.registration.birthDate}</p>
        <p>郵便番号: {this.props.registration.postCode}</p>
        <p>住所: {this.props.registration.address}</p>
        <p>電話番号: {this.props.registration.phoneNumber}</p>
        <p>日中連絡先: {this.props.registration.daytimePhoneNumber}</p>
        <p>勤務先/代表者: {this.props.registration.companyName} </p>
        <p>勤務先電話番号: {this.props.registration.workPhoneNumber}</p>
        <p>メールアドレス: {this.props.registration.mailAddress}</p>
        <p>居住: {this.props.registration.residentStatus}</p>
        <p>代理人名: {this.props.registration.agentName}</p>
        <p>確認日: {this.props.registration.agentConfirmationDate}</p>
        <p>電話番号: {this.props.registration.agentPhoneNumber}</p>
        <p>郵便番号: {this.props.registration.agentPostCode}</p>
        <p>住所: {this.props.registration.agentAddress}</p>
        <p>未成年口座番号: {this.props.registration.juniorAccountNumber}</p>
        <p>ジュニアNiSA口座番号: {this.props.registration.juniorNISAAccountNumber}</p>
        <p>代理人口座番号: {this.props.registration.agentAccountNumber}</p>
      </div>
    );
  }
});

export default connect(mapStateToProps)(RegisterInfo);
