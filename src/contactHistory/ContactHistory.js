import React from 'react';
import {connect} from 'react-redux';
import {getContactHistory} from './contactHistoryActions';

function secondsToString(seconds) {
  return new Date(seconds * 1000)
    .toISOString()
    .substr(11, 8);
}

const transformWarningFlag = warningFlag => {
  return warningFlag ? '有' : '';
};

export const mapStateToProps = (state, ownProps) => {
  return {
    contactRecords: state.contactRecords.contactRecords.map(contactRecord => {
      let categories = contactRecord.categories || [];
      let memos = contactRecord.contactMemo || '';
      let memoLines = memos.split('\n');

      return Object.assign(
        {},
        contactRecord, {
          contactMemo: memoLines,
          callDuration: secondsToString(contactRecord.callDuration || 0),
          categories: categories.join(' / '),
          warningFlag: transformWarningFlag(contactRecord.warningFlag)
        }
      );
    }),
    customerId: ownProps.params.customerId
  };
};

export const mapDispatchToProps = (dispatch, ownProps, action = getContactHistory) => {
  return {
    onComponentWillMount: customerId => dispatch(action(customerId))
  };
};

export const ContactHistory = React.createClass({
  componentWillMount: function() {
    this.props.onComponentWillMount(this.props.customerId);
  },

  render: function() {
    const contactRecords = this.props.contactRecords.map((contactRecord, index) => {
      let multilineMemo = contactRecord.contactMemo.map((line, index) => {
        return (<div key={index}>{line}</div>);
      });

      return (
        <tr key={index}>
          <td>{contactRecord.contactDate}</td>
          <td>{contactRecord.callDuration}</td>
          <td>{contactRecord.callRepName}</td>
          <td>{contactRecord.contactType}</td>
          <td>{multilineMemo}</td>
          <td>{contactRecord.categories}</td>
          <td>{contactRecord.warningFlag}</td>
        </tr>
      );
    });
    return (
      <div>
      <h1>コンタクト記録履歴</h1>
      <table>
        <thead>
          <tr>
            <th>日時</th>
            <th>通話時間</th>
            <th>対応者</th>
            <th>コンタクトタイプ</th>
            <th>メモ</th>
            <th>通話内容</th>
            <th>ワーニング</th>
          </tr>
        </thead>
        <tbody>
          {contactRecords}
        </tbody>
      </table>
      </div>
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactHistory);
