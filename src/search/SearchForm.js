import React from 'react';
import {connect} from 'react-redux';
import {searchStart} from './searchActions';
import InputFieldComponent from './InputFieldComponent'; // eslint-disable-line no-unused-vars

export const mapStateToProps = state => {
  return state;
};

export const mapDispatchToProps = (dispatch, _, action = searchStart) => {
  return {
    onSearchSubmit: criteria => dispatch(action(criteria))
  };
};

export const SearchForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    const criteria = {
      accountNumber: this.refs.accountNumber.getValue(),
      lastNameKana: this.refs.lastNameKana.getValue(),
      firstNameKana: this.refs.firstNameKana.getValue(),
      lastNameKanji: this.refs.lastNameKanji.getValue(),
      firstNameKanji: this.refs.firstNameKanji.getValue(),
      postCode1: this.refs.postCode1.getValue(),
      postCode2: this.refs.postCode2.getValue(),
      address: this.refs.address.getValue(),
      phoneNumber: this.refs.phoneNumber.getValue(),
      emailAddress: this.refs.emailAddress.getValue(),
      prospectNumber: this.refs.prospectNumber.getValue(),
      dateOfBirth: this.refs.dateOfBirth.getValue()
    };
    this.props.onSearchSubmit(criteria);
  },

  render: function() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>顧客名（半角カナ)</label><br/>
          <InputFieldComponent label="セイ" ref="lastNameKana" name="lastNameKana"/>
          <InputFieldComponent label="メイ" ref="firstNameKana" name="firstNameKana"/>
        </div>
        <div>
          <label>顧客名（漢字)</label><br/>
          <InputFieldComponent label="姓" ref="lastNameKanji" name="lastNameKanji"/>
          <InputFieldComponent label="名" ref="firstNameKanji" name="firstNameKanji"/>
        </div>
        <div><InputFieldComponent label="口座番号" ref="accountNumber" name="accountNumber"/></div>
        <div>
          <InputFieldComponent label="郵便番号" ref="postCode1" name="postCode1"/>
          <InputFieldComponent label="" ref="postCode2" name="postCode2"/>
        </div>
        <div><InputFieldComponent label="住所" ref="address" name="address"/></div>
        <div><InputFieldComponent label="電話番号" ref="phoneNumber" name="phoneNumber"/></div>
        <div><InputFieldComponent label="メールアドレス" ref="emailAddress" name="emailAddress"/></div>
        <div><InputFieldComponent label="生年月日" ref="dateOfBirth" name="dateOfBirth"/></div>
        <div><InputFieldComponent
          label="プロスペクト番号"
          ref="prospectNumber"
          name="prospectNumber" />
        </div>
        <div><input type="submit" value="検索" /></div>
      </form>
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
