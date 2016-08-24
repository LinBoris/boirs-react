import expect from 'expect';
import nock from 'nock';
import {getJSON, postJSON} from '../../src/http/http';

describe('getJSON', () => {
  it('fetches json', () => {
    // mock network call
    let responseBody = {
      accountNumber: '1234',
      nameOnAccount: 'Noriko'
    };
    let getRequest = nock('http://localhost:8000')
      .get('/accounts/1234')
      .reply(200, responseBody);

    // verify response
    return getJSON('/accounts/1234')
      .then(function(account) {
        expect(getRequest.isDone()).toEqual(true);
        expect(account.accountNumber).toEqual('1234');
        expect(account.nameOnAccount).toEqual('Noriko');
      });
  });

  it('returns a failed promise when request fails', () => {
    // mock network call
    let responseBody = {errorMessage: 'something went wrong'};
    nock('http://localhost:8000')
      .get('/accounts/1234')
      .reply(400, responseBody);

    // verify response
    return getJSON('/accounts/1234')
      .then(function() {
        throw new Error('expected a rejected promise');
      })
      .catch(function(error) {
        expect(error).toEqual({errorMessage: 'something went wrong'});
      });
  });
});

describe('postJSON', () => {
  it('sends a JSON POST request', () => {
    let postRequest = nock('http://localhost:8000', {
      reqheaders: {'content-type': 'application/json;charset=utf-8'}
    })
    .post('/persons', {name: 'Apple'})
    .reply(201, {id: 1234});

    // verify response
    return postJSON('/persons', {name: 'Apple'})
      .then(function(person) {
        expect(postRequest.isDone()).toEqual(true);
        expect(person.id).toEqual(1234);
      });
  });
});
