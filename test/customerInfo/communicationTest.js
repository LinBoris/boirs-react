import expect from 'expect';

import {mapStateToProps} from '../../src/customerOverview/Communication';

describe('Communication', () => {
  it('map postal mail status to props when DM enabled', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      sendPostalMail: true
    }}});

    expect(result.communication.sendPostalMail).toEqual('DM可');
  });

  it('map postal mail status to props when DM disabled', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      sendPostalMail: false
    }}});

    expect(result.communication.sendPostalMail).toEqual('DM不可');
  });

  it('map email to props when enabled', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      sendEmail: true
    }}});

    expect(result.communication.sendEmail).toEqual('可');
  });

  it('map email to props when disabled', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      sendEmail: false
    }}});

    expect(result.communication.sendEmail).toEqual('不可');
  });

  it('map campaign letter to props when enabled', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      sendCampaignLetter: true
    }}});

    expect(result.communication.sendCampaignLetter).toEqual('あり');
  });

  it('map campaign letter to props when disabled', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      sendCampaignLetter: false
    }}});

    expect(result.communication.sendCampaignLetter).toEqual('なし');
  });

  it('map notification letter to props when enabled', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      sendNotificationLetter: true
    }}});

    expect(result.communication.sendNotificationLetter).toEqual('あり');
  });

  it('map notification letter to props when disabled', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      sendNotificationLetter: false
    }}});

    expect(result.communication.sendNotificationLetter).toEqual('なし');
  });
});
