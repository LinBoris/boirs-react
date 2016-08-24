import React from 'react';
import {connect} from 'react-redux';
import {createRecord} from './contactEntryActions';

export const mapStateToProps = (state, ownProps) => {
  return {
    customerId: state.customer.currentCustomer.customerId
  };
};

export const mapDispatchToProps = (dispatch, _, action = createRecord) => {
  return {
    onSubmit: (customerId, data) => dispatch(action(customerId, data))
  };
};

export const ContactRecordForm = React.createClass({
  getInitialState: function() {
    return {};
  },

  onSubmit: function(e, customerId) {
    e.preventDefault();

    this.props.onSubmit(customerId, {
      memo: this.state.memo,
      warningFlag: this.state.warningFlag
    });

    this.refs.memo.value = '';
    this.refs.warningFlag.checked = false;
  },

  render: function() {
    let customerId = this.props.customerId;

    return (
        <div>
          <h1>コンタクト記録</h1>
          <form onSubmit={e => this.onSubmit(e, customerId)}>
            <div>
              <textarea
                id="memo"
                ref="memo"
                onChange={e => this.setState({memo: e.target.value})}>
              </textarea>
            </div>

            <div>
              <label>
                ワーニング有
                <input type="checkbox"
                  id="warningFlag"
                  ref="warningFlag"
                  onChange={e => this.setState({warningFlag: e.target.checked})}>
                </input>
              </label>
            </div>
            <div>
              <input type="submit" value="登録" />
            </div>
          </form>
        </div>
      );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactRecordForm);
