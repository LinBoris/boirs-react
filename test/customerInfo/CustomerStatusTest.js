import expect from 'expect';
import {mapStateToProps} from '../../src/customerOverview/CustomerStatus';
describe('CustomerStatus', () => {
  it('maps current customer special account status to text', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      specialAccountType: "SPECIAL",
      accountStatus: []
    }}},
    {}
    );

    expect(result.customerStatus.specialAccountStatus).toEqual("特定口座源あり");
  });

  it('maps current customer special account unknown to text', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      specialAccountType: "UNKNOWN",
      accountStatus: []
    }}},
    {}
    );

    expect(result.customerStatus.specialAccountStatus).toEqual(undefined);
  });

  it('maps normal account status to text', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      accountStatusList: ["NORMAL"]
    }}});

    expect(result.customerStatus.accountStatusList).toEqual("一般");
  });

  it('maps junior account status to text', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      accountStatusList: ["JUNIOR"]
    }}});
    expect(result.customerStatus.accountStatusList).toEqual("未成年");
  });

  it('maps junior account status to text', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      accountStatusList: ["CORPORATION"]
    }}});
    expect(result.customerStatus.accountStatusList).toEqual("法人顧客");
  });

  it('maps family account status to text', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      accountStatusList: ["JUNIOR", "FAMILY"]
    }}});
    expect(result.customerStatus.accountStatusList[0]).toEqual("未成年");
    expect(result.customerStatus.accountStatusList[1]).toEqual("社員＆家族");
  });

  it('maps nisa types of account to text', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      openedAccountsList: ["NISA"]
    }}});

    expect(result.customerStatus.openedAccountsList[0]).toEqual("NISA");
  });

  it('maps junior nisa without limited types of account to text', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      openedAccountsList: ["JUNIOR_NISA_NO_LIMITED"]
    }}});

    expect(result.customerStatus.openedAccountsList[0]).toEqual("ジュニアNISA制限なし");
  });

  it('maps junior nisa with limited types of account to text', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      openedAccountsList: ["JUNIOR_NISA_LIMITED"]
    }}});

    expect(result.customerStatus.openedAccountsList[0]).toEqual("ジュニアNISA制限あり");
  });

  it('maps my number to text', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      myNumberStatus: "REGISTERED"
    }}});

    expect(result.customerStatus.myNumberStatus).toEqual("あり");
  });

  it('maps unkonwn my number status to blank string', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      myNumberStatus: ""
    }}});

    expect(result.customerStatus.myNumberStatus).toEqual("");
  });

  it('maps stock trade account to text', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      openedAccountsList: ["STOCK_TRADE"]
    }}});

    expect(result.customerStatus.openedAccountsList).toEqual("株式取引");
  });

  it('maps MRF account to customerStatus', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      openedAccountsList: ["MRF"]
    }}});

    expect(result.customerStatus.openedAccountsList).toEqual("MRF");
  });

  it('maps MRF account to text', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      openedAccountsList: ["FOREIGN"]
    }}});

    expect(result.customerStatus.openedAccountsList).toEqual("外国口座");
  });

  it('maps NISA account status when open to text', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      nisaAccountStatus: "OPEN"
    }}});

    expect(result.customerStatus.nisaAccountStatus).toEqual("開設済");
  });

  it('maps NISA account status when open with another company to text', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      nisaAccountStatus: "OPEN_OTHER_COMPANY"
    }}});

    expect(result.customerStatus.nisaAccountStatus).toEqual("開設済（他社）");
  });

  it('maps NISA account status when not open to text', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      nisaAccountStatus: "NOT_OPEN"
    }}});

    expect(result.customerStatus.nisaAccountStatus).toEqual("未開設");
  });

  it('maps no seal warning to text', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      warnings: ["NO_SEAL"]
    }}});

    expect(result.customerStatus.warnings).toEqual("印鑑登録なし");
  });

  it('maps returned mail warning to text', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      warnings: ["RETURNED_MAIL"]
    }}});

    expect(result.customerStatus.warnings).toEqual("RM顧客");
  });

  it('maps account closed warning to text', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      warnings: ["ACCOUNT_CLOSED"]
    }}});

    expect(result.customerStatus.warnings).toEqual("口座閉鎖");
  });

  it('maps yellow card warning to text', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      warnings: ["YELLOW_CARD"]
    }}});

    expect(result.customerStatus.warnings).toEqual("Y客");
  });

  it('maps dividend delivery method to text when no preference', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      dividendDelivery: "NO_PREFERENCE"
    }}});

    expect(result.customerStatus.dividendDelivery).toEqual("指定なし");
  });

  it('maps dividend delivery method to text when registered bank', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      dividendDelivery: "REGISTERED_BANK"
    }}});

    expect(result.customerStatus.dividendDelivery).toEqual("登録配当金受領口座");
  });

  it('maps dividend delivery method to text when fund', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      dividendDelivery: "FUND"
    }}});

    expect(result.customerStatus.dividendDelivery).toEqual("株式数比例配分方式");
  });
});
