import expect from 'expect';
import {mapStateToProps} from '../../src/knowYourCustomer/KnowYourCustomer';

describe('KnowYourCustomer', () => {
  it('maps STABLE_PRINCIPAL investment goal', () => {
    const state = {customer: {
      currentCustomer: {
        investmentGoal: 'STABLE_PRINCIPAL',
        investmentExperience: []
      }
    }};

    let result = mapStateToProps(state);

    expect(result.investmentGoal).toEqual('1. 投資元本の安定重視');
  });

  it('maps STABLE_PRINCIPAL_AND_STABLE_INCOME investment goal', () => {
    const state = {customer: {
      currentCustomer: {
        investmentGoal: 'STABLE_PRINCIPAL_AND_STABLE_INCOME',
        investmentExperience: []
      }
    }};

    let result = mapStateToProps(state);

    expect(result.investmentGoal).toEqual('2. 元本の安定性と安定収入');
  });

  it('maps investment goal REGULAR_INCOME_OF_INTEREST_AND_DIVIDENDS to props', () => {
    const state = {customer: {
      currentCustomer: {
        investmentGoal: 'REGULAR_INCOME_OF_INTEREST_AND_DIVIDENDS',
        investmentExperience: []
      }
    }};

    let result = mapStateToProps(state);

    expect(result.investmentGoal).toEqual('3. 利子、配当など定期的な収入を重視');
  });

  it('maps investment goal REGULAR_INCOME_AND_INCREASE_IN_ASSETS to props', () => {
    const state = {customer: {
      currentCustomer: {
        investmentGoal: 'REGULAR_INCOME_AND_INCREASE_IN_ASSETS',
        investmentExperience: []
      }
    }};

    let result = mapStateToProps(state);

    expect(result.investmentGoal).toEqual('4. 定期的な収入を重視するが、投資資産の値上がり');
  });

  it('maps investment goal PRIORITIZE_INCREASE_IN_ASSETS to props', () => {
    const state = {customer: {
      currentCustomer: {
        investmentGoal: 'PRIORITIZE_INCREASE_IN_ASSETS',
        investmentExperience: []
      }
    }};

    let result = mapStateToProps(state);

    expect(result.investmentGoal).toEqual('5. 投資資産の価値の大幅増大が優先する');
  });

  it('maps investment goal FIVE_YEAR_AND_ABOVE_INVESTMENT to props', () => {
    const state = {customer: {
      currentCustomer: {
        investmentGoal: 'FIVE_YEAR_AND_ABOVE_INVESTMENT',
        investmentExperience: []
      }
    }};

    let result = mapStateToProps(state);

    expect(result.investmentGoal).toEqual('6. 5年以上での資産運用');
  });

  it('maps investment goal ONE_TO_FIVE_YEARS_INVESTMENT to props', () => {
    const state = {customer: {
      currentCustomer: {
        investmentGoal: 'ONE_TO_FIVE_YEARS_INVESTMENT',
        investmentExperience: []
      }
    }};

    let result = mapStateToProps(state);

    expect(result.investmentGoal).toEqual('7. 1年以上5年未満での資産運用');
  });

  it('maps investment goal ONE_YEAR_AND_LESS_INVESTMENT to props', () => {
    const state = {customer: {
      currentCustomer: {
        investmentGoal: 'ONE_YEAR_AND_LESS_INVESTMENT',
        investmentExperience: []
      }
    }};

    let result = mapStateToProps(state);

    expect(result.investmentGoal).toEqual('8. 1年未満での資産運用');
  });

  it('maps investment goal OTHER to props', () => {
    const state = {customer: {
      currentCustomer: {
        investmentGoal: 'OTHER',
        investmentExperience: []
      }
    }};

    let result = mapStateToProps(state);

    expect(result.investmentGoal).toEqual('9. その他');
  });

  it('maps investment goal UNKNOWN to props', () => {
    const state = {customer: {
      currentCustomer: {
        investmentGoal: 'UNKNOWN',
        investmentExperience: []
      }
    }};

    let result = mapStateToProps(state);

    expect(result.investmentGoal).toEqual(undefined);
  });

  it('maps investment experience in STOCK to props', () => {
    const state = {customer: {
      currentCustomer: {investmentExperience: ['STOCK']}
    }};

    let result = mapStateToProps(state);

    expect(result.investmentExperience).toEqual('1. 株式');
  });

  it('maps investment experience in BOND to props', () => {
    const state = {customer: {
      currentCustomer: {investmentExperience: ['BOND']}
    }};

    let result = mapStateToProps(state);

    expect(result.investmentExperience).toEqual('2. 債券');
  });

  it('maps investment experience in MUTUAL_FUND to props', () => {
    const state = {customer: {
      currentCustomer: {investmentExperience: ['MUTUAL_FUND']}
    }};

    let result = mapStateToProps(state);

    expect(result.investmentExperience).toEqual('3. 投資信託（4以外）');
  });

  it('maps investment experience in MMF to props', () => {
    const state = {customer: {
      currentCustomer: {investmentExperience: ['MMF']}
    }};

    let result = mapStateToProps(state);

    expect(result.investmentExperience).toEqual('4. MMF/中期国債ファンド/公社債投信');
  });

  it('maps investment experience in FOREIGN_INVESTMENT to props', () => {
    const state = {customer: {
      currentCustomer: {investmentExperience: ['FOREIGN_INVESTMENT']}
    }};

    let result = mapStateToProps(state);

    expect(result.investmentExperience).toEqual('5. 海外に投資する金融商品');
  });

  it('maps investment experience in OTHER to props', () => {
    const state = {customer: {
      currentCustomer: {investmentExperience: ['OTHER']}
    }};

    let result = mapStateToProps(state);

    expect(result.investmentExperience).toEqual('6. その他');
  });

  it('maps many investment experiences props as a string separated with a slash', () => {
    const state = {customer: {
      currentCustomer: {investmentExperience: ['STOCK', 'OTHER']}
    }};

    let result = mapStateToProps(state);

    expect(result.investmentExperience).toEqual('1. 株式 / 6. その他');
  });

  it('maps discovery method INTRODUCTION to props', () => {
    const state = {customer: {
      currentCustomer: {discoveryMethod: 'INTRODUCTION', investmentExperience: []}
    }};

    let result = mapStateToProps(state);

    expect(result.discoveryMethod).toEqual('1. お知り合いからのご紹介');
  });

  it('maps discovery method PRINT_ADVERTISEMENT to props', () => {
    const state = {customer: {
      currentCustomer: {discoveryMethod: 'PRINT_ADVERTISEMENT', investmentExperience: []}
    }};

    let result = mapStateToProps(state);

    expect(result.discoveryMethod).toEqual('2. 新聞や雑誌の広告');
  });

  it('maps discovery method INTERNET to props', () => {
    const state = {customer: {
      currentCustomer: {discoveryMethod: 'INTERNET', investmentExperience: []}
    }};

    let result = mapStateToProps(state);

    expect(result.discoveryMethod).toEqual('3. インターネット');
  });

  it('maps discovery method PRIOR_KNOWLEDGE to props', () => {
    const state = {customer: {
      currentCustomer: {discoveryMethod: 'PRIOR_KNOWLEDGE', investmentExperience: []}
    }};

    let result = mapStateToProps(state);

    expect(result.discoveryMethod).toEqual('4. 以前からフィデリティを知っていた');
  });

  it('maps discovery method EMAIL to props', () => {
    const state = {customer: {
      currentCustomer: {discoveryMethod: 'EMAIL', investmentExperience: []}
    }};

    let result = mapStateToProps(state);

    expect(result.discoveryMethod).toEqual('5. 当社からのDM・Eメール');
  });

  it('maps discovery method SEMINAR to props', () => {
    const state = {customer: {
      currentCustomer: {discoveryMethod: 'SEMINAR', investmentExperience: []}
    }};

    let result = mapStateToProps(state);

    expect(result.discoveryMethod).toEqual('6. 各類セミナー');
  });

  it('maps discovery method NOT_APPLICABLE to props', () => {
    const state = {customer: {
      currentCustomer: {discoveryMethod: 'NOT_APPLICABLE', investmentExperience: []}
    }};

    let result = mapStateToProps(state);

    expect(result.discoveryMethod).toEqual('7. －');
  });

  it('maps discovery method OTHER to props', () => {
    const state = {customer: {
      currentCustomer: {discoveryMethod: 'OTHER', investmentExperience: []}
    }};

    let result = mapStateToProps(state);

    expect(result.discoveryMethod).toEqual('8. その他');
  });

  it('maps discovery method UNKNOWN to props', () => {
    const state = {customer: {
      currentCustomer: {discoveryMethod: 'UNKNOWN', investmentExperience: []}
    }};

    let result = mapStateToProps(state);

    expect(result.discoveryMethod).toEqual(undefined);
  });

  it('maps income range to props', () => {
    const state = {customer: {
      currentCustomer: {
        incomeFrom: '0',
        incomeTo: '500',
        investmentExperience: []
      }
    }};

    let result = mapStateToProps(state);

    expect(result.incomeRange).toEqual("0 - 500");
  });

  it('maps income range to props when income is undefined', () => {
    const state = {customer: {
      currentCustomer: {
        incomeFrom: undefined,
        incomeTo: undefined,
        investmentExperience: []
      }
    }};

    let result = mapStateToProps(state);

    expect(result.incomeRange).toEqual(undefined);
  });

  it('maps income range to props when one of income range is undefined', () => {
    const state = {customer: {
      currentCustomer: {
        incomeFrom: undefined,
        incomeTo: '500',
        investmentExperience: []
      }
    }};

    let result = mapStateToProps(state);

    expect(result.incomeRange).toEqual(undefined);
  });

  it('maps asset range to props', () => {
    const state = {customer: {
      currentCustomer: {
        assetsFrom: '500',
        assetsTo: '700',
        investmentExperience: []
      }
    }};

    let result = mapStateToProps(state);

    expect(result.assetsRange).toEqual("500 - 700");
  });

  it('maps asset range to props when income is undefined', () => {
    const state = {customer: {
      currentCustomer: {
        assetsFrom: undefined,
        assetsTo: undefined,
        investmentExperience: []
      }
    }};

    let result = mapStateToProps(state);

    expect(result.assetsRange).toEqual(undefined);
  });

  it('maps asset range to props when one of asset range is undefined', () => {
    const state = {customer: {
      currentCustomer: {
        assetsFrom: undefined,
        assetsTo: '500',
        investmentExperience: []
      }
    }};

    let result = mapStateToProps(state);

    expect(result.assetsRange).toEqual(undefined);
  });

  it('maps registration status to not registered when discovery method is undefined', () => {
    const state = {customer: {
      currentCustomer: {
        discoveryMethod: "UNKNOWN",
        investmentExperience: []
      }
    }};

    let result = mapStateToProps(state);

    expect(result.registrationStatus).toEqual('登録なし');
  });

  it('maps registration status to not registered when investment goal is UNKNOWN', () => {
    const state = {customer: {
      currentCustomer: {
        discoveryMethod: "UNKNOWN",
        investmentGoal: "UNKNOWN",
        investmentExperience: []
      }
    }};

    let result = mapStateToProps(state);

    expect(result.registrationStatus).toEqual('登録なし');
  });

  it('maps registration status to not registered when investment goal is OTHER', () => {
    const state = {customer: {
      currentCustomer: {
        discoveryMethod: "UNKNOWN",
        investmentGoal: "OTHER",
        investmentExperience: []
      }
    }};

    let result = mapStateToProps(state);

    expect(result.registrationStatus).toEqual('登録なし');
  });

  it('maps registration status to not registered when income range is zero', () => {
    const state = {customer: {
      currentCustomer: {
        discoveryMethod: "UNKNOWN",
        incomeFrom: "0",
        incomeTo: "0",
        investmentExperience: []
      }
    }};

    let result = mapStateToProps(state);

    expect(result.registrationStatus).toEqual('登録なし');
  });

  it('maps registration status to not registered when asset range is zero', () => {
    const state = {customer: {
      currentCustomer: {
        discoveryMethod: "UNKNOWN",
        assetsFrom: "0",
        assetsTo: "0",
        investmentExperience: []
      }
    }};

    let result = mapStateToProps(state);

    expect(result.registrationStatus).toEqual('登録なし');
  });

  it('maps registration status to registered when all data is provided', () => {
    const state = {customer: {
      currentCustomer: {
        discoveryMethod: "INTRODUCTION",
        investmentGoal: "REGULAR_INCOME_OF_INTEREST_AND_DIVIDENDS",
        incomeFrom: "0", incomeTo: "500",
        assetsFrom: "500", assetsTo: "700",
        investmentExperience: []
      }
    }};

    let result = mapStateToProps(state);

    expect(result.registrationStatus).toEqual('登録あり');
  });

  it('maps registration status to undefined when cutomer data is not yet loaded', () => {
    const state = {customer: {
      currentCustomer: {
        discoveryMethod: undefined,
        investmentExperience: []
      }
    }};

    let result = mapStateToProps(state);

    expect(result.registrationStatus).toEqual(undefined);
  });
});
