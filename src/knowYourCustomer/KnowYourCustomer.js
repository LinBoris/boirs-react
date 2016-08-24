import React from 'react';
import {connect} from 'react-redux';

const goalToDescription = {
  STABLE_PRINCIPAL: '1. 投資元本の安定重視',
  STABLE_PRINCIPAL_AND_STABLE_INCOME: '2. 元本の安定性と安定収入',
  REGULAR_INCOME_OF_INTEREST_AND_DIVIDENDS: '3. 利子、配当など定期的な収入を重視',
  REGULAR_INCOME_AND_INCREASE_IN_ASSETS: '4. 定期的な収入を重視するが、投資資産の値上がり',
  PRIORITIZE_INCREASE_IN_ASSETS: '5. 投資資産の価値の大幅増大が優先する',
  FIVE_YEAR_AND_ABOVE_INVESTMENT: '6. 5年以上での資産運用',
  ONE_TO_FIVE_YEARS_INVESTMENT: '7. 1年以上5年未満での資産運用',
  ONE_YEAR_AND_LESS_INVESTMENT: '8. 1年未満での資産運用',
  OTHER: '9. その他'
};

const investmentExperienceToDescription = {
  STOCK: '1. 株式',
  BOND: '2. 債券',
  MUTUAL_FUND: '3. 投資信託（4以外）',
  MMF: '4. MMF/中期国債ファンド/公社債投信',
  FOREIGN_INVESTMENT: '5. 海外に投資する金融商品',
  OTHER: '6. その他'
};

const discoveryMethodToDescription = {
  INTRODUCTION: '1. お知り合いからのご紹介',
  PRINT_ADVERTISEMENT: '2. 新聞や雑誌の広告',
  INTERNET: '3. インターネット',
  PRIOR_KNOWLEDGE: '4. 以前からフィデリティを知っていた',
  EMAIL: '5. 当社からのDM・Eメール',
  SEMINAR: '6. 各類セミナー',
  NOT_APPLICABLE: '7. －',
  OTHER: '8. その他'
};

const rangeDescription = (start, end) => {
  if (!(start && end)) {
    return;
  }
  return `${start} - ${end}`;
};

const getRegistrationStatus = customer => {
  if (customer.discoveryMethod === undefined) {
    return;
  }
  if (customer.discoveryMethod === 'UNKNOWN') {
    return '登録なし';
  }
  if (customer.investmentGoal === 'UNKNOWN' ||
      customer.investmentGoal === 'OTHER') {
    return '登録なし';
  }
  if (customer.incomeFrom === '0' && customer.incomeTo === '0') {
    return '登録なし';
  }
  if (customer.assetsFrom === '0' && customer.assetsTo === '0') {
    return '登録なし';
  }
  return '登録あり';
};

export const mapStateToProps = state => {
  return {
    investmentGoal: goalToDescription[state.customer.currentCustomer.investmentGoal],
    investmentExperience:
      state.customer.currentCustomer.investmentExperience
      .map(investmentExperienceType => investmentExperienceToDescription[investmentExperienceType])
      .join(' / '),
    discoveryMethod: discoveryMethodToDescription[state.customer.currentCustomer.discoveryMethod],
    incomeRange: rangeDescription(
      state.customer.currentCustomer.incomeFrom,
      state.customer.currentCustomer.incomeTo
    ),
    assetsRange: rangeDescription(
      state.customer.currentCustomer.assetsFrom,
      state.customer.currentCustomer.assetsTo
    ),
    registrationStatus: getRegistrationStatus(state.customer.currentCustomer)
  };
};

export const KnowYourCustomer = React.createClass({
  render: function() {
    return (
      <div>
        <h1>KYC情報</h1>
        <dl>
          <dt>投資目的</dt>
          <dd>{this.props.investmentGoal}</dd>
          <dt>投資経験</dt>
          <dd>{this.props.investmentExperience}</dd>
          <dt>お取引の動機</dt>
          <dd>{this.props.discoveryMethod}</dd>
          <dt>年収</dt>
          <dd>{this.props.incomeRange}</dd>
          <dt>金融資産</dt>
          <dd>{this.props.assetsRange}</dd>
          <dt>登録状況</dt>
          <dd>{this.props.registrationStatus}</dd>
        </dl>
      </div>
    );
  }
});

export default connect(mapStateToProps)(KnowYourCustomer);
