import expect from 'expect';
import {mapStateToProps} from '../../src/customerOverview/RegisterInfo';

describe('RegisterInfo', () => {
  it('maps current customer to registration info', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      address: "東京都品川区西五反田",
      age: 31,
      agentAccountNumber: "",
      agentAddress: "東京都品川区西五反田",
      agentConfirmationDate: "20160110",
      agentName: "Father Taro",
      agentPhoneNumber: "08022222222",
      agentPostCode: "141-0031",
      birthDate: "19850517",
      companyName: "Fidelity",
      daytimePhoneNumber: "0802211111",
      gender: "MALE",
      residentStatus: "RESIDENT",
      juniorAccountNumber: "",
      juniorNISAAccountNumber: "",
      mailAddress: "fidelity@fidelity.com",
      phoneNumber: "0802211111",
      postCode: "141-0031",
      workPhoneNumber: "080111111"
    }}},
    {}
    );

    expect(result.registration.address).toEqual("東京都品川区西五反田");
    expect(result.registration.age).toEqual(31);
    expect(result.registration.agentAccountNumber).toEqual("");
    expect(result.registration.agentAddress).toEqual("東京都品川区西五反田");
    expect(result.registration.agentConfirmationDate).toEqual("20160110");
    expect(result.registration.agentName).toEqual("Father Taro");
    expect(result.registration.agentPhoneNumber).toEqual("08022222222");
    expect(result.registration.agentPostCode).toEqual("141-0031");
    expect(result.registration.birthDate).toEqual("19850517");
    expect(result.registration.companyName).toEqual("Fidelity");
    expect(result.registration.daytimePhoneNumber).toEqual("0802211111");
    expect(result.registration.gender).toEqual("男");
    expect(result.registration.residentStatus).toEqual("居住者");
    expect(result.registration.juniorAccountNumber).toEqual("");
    expect(result.registration.juniorNISAAccountNumber).toEqual("");
    expect(result.registration.mailAddress).toEqual("fidelity@fidelity.com");
    expect(result.registration.phoneNumber).toEqual("0802211111");
    expect(result.registration.postCode).toEqual("141-0031");
    expect(result.registration.workPhoneNumber).toEqual("080111111");
  });

  it('show MALE for gender', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      gender: "MALE"
    }}},
    {}
  );

    expect(result.registration.gender).toEqual("男");
  });

  it('show FEMALE for gender', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      gender: "FEMALE"
    }}},
    {}
  );

    expect(result.registration.gender).toEqual("女");
  });

  it('show CORPORATION for gender', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      gender: "CORPORATION"
    }}},
    {}
  );

    expect(result.registration.gender).toEqual("法人");
  });

  it('show UNKNOWN for gender', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      gender: "UNKNOWN"
    }}},
    {}
  );

    expect(result.registration.gender).toEqual("不明");
  });

  it('maps resident status of RESIDENT to props', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      residentStatus: "RESIDENT"
    }}},
    {}
  );

    expect(result.registration.residentStatus).toEqual("居住者");
  });

  it('maps resident status of SPECIAL_NON_RESIDENT to props', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      residentStatus: "SPECIAL_NON_RESIDENT"
    }}},
    {}
  );

    expect(result.registration.residentStatus).toEqual("特別非居住者");
  });

  it('maps resident status of NON_RESIDENT to props', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      residentStatus: "NON_RESIDENT"
    }}},
    {}
  );

    expect(result.registration.residentStatus).toEqual("非居住者");
  });
});
