import React from "react";
import {connect} from 'react-redux';

const transformAccoutStatus = accountStatus => {
  if (!accountStatus) return [];
  let result = accountStatus.map(function(status, index) {
    switch (status) {
      case 'NORMAL':
        return '一般';
      case 'JUNIOR':
        return '未成年';
      case 'CORPORATION':
        return '法人顧客';
      case 'FAMILY':
        return '社員＆家族';
      default:
        return '';
    }
  });
  return result;
};

const transformOpenedAccounts = openedAccounts => {
  if (!openedAccounts) return [];
  let result = openedAccounts.map(function(status, index) {
    switch (status) {
      case 'NISA':
        return 'NISA';
      case 'JUNIOR_NISA_NO_LIMITED':
        return 'ジュニアNISA制限なし';
      case 'JUNIOR_NISA_LIMITED':
        return 'ジュニアNISA制限あり';
      case 'STOCK_TRADE':
        return '株式取引';
      case 'MRF':
        return "MRF";
      case 'FOREIGN':
        return '外国口座';
      default:
        return '';
    }
  });
  return result;
};

const transformMyNumberStatus = myNumberFlag => {
  switch (myNumberFlag) {
    case "REGISTERED":
      return "あり";
    default:
      return "";
  }
};

const transformNisaAccountStatus = nisaAccountStatus => {
  switch (nisaAccountStatus) {
    case "OPEN":
      return "開設済";
    case "OPEN_OTHER_COMPANY":
      return "開設済（他社）";
    case "NOT_OPEN":
      return "未開設";
    default:
      return "";
  }
};

const transformWarnings = warnings => {
  if (!warnings) return [];
  let result = warnings.map(function(warning) {
    switch (warning) {
      case 'NO_SEAL':
        return '印鑑登録なし';
      case 'RETURNED_MAIL':
        return 'RM顧客';
      case 'ACCOUNT_CLOSED':
        return '口座閉鎖';
      case 'YELLOW_CARD':
        return 'Y客';
      default:
        return '';
    }
  });
  return result;
};

const transformDividendDelivery = dividendType => {
  switch (dividendType) {
    case 'NO_PREFERENCE':
      return '指定なし';
    case 'REGISTERED_BANK':
      return '登録配当金受領口座';
    case 'FUND':
      return '株式数比例配分方式';
    default:
      return '';
  }
};

const specialAccountTypeToDescription = {
  SPECIAL: '特定口座源あり'
};

export const mapStateToProps = state => {
  return {
    customerStatus: {
      specialAccountStatus:
        specialAccountTypeToDescription[state.customer.currentCustomer.specialAccountType],
      accountStatusList: transformAccoutStatus(state.customer.currentCustomer.accountStatusList),
      openedAccountsList: transformOpenedAccounts(
        state.customer.currentCustomer.openedAccountsList
      ),
      myNumberStatus: transformMyNumberStatus(state.customer.currentCustomer.myNumberStatus),
      nisaAccountStatus: transformNisaAccountStatus(
        state.customer.currentCustomer.nisaAccountStatus
      ),
      warnings: transformWarnings(state.customer.currentCustomer.warnings),
      dividendDelivery: transformDividendDelivery(state.customer.currentCustomer.dividendDelivery)
    }
  };
};

const CustomerStatus = React.createClass({
  render: function() {
    return (
      <div>
        <h1>ステータス</h1>
        <p>特定口座区分: {this.props.customerStatus.specialAccountStatus}</p>
        <p>口座区分: {this.props.customerStatus.accountStatusList.join(" / ")}</p>
        <p>開設口座: {this.props.customerStatus.openedAccountsList.join(" / ")}</p>
        <p>マイナンバー登録: {this.props.customerStatus.myNumberStatus}</p>
        <p>NISA口座ステータス: {this.props.customerStatus.nisaAccountStatus}</p>
        <p>例外事項: {this.props.customerStatus.warnings.join(" / ")}</p>
        <p>配当金受領方式: {this.props.customerStatus.dividendDelivery}</p>
      </div>
    );
  }
});

export default connect(mapStateToProps)(CustomerStatus);
