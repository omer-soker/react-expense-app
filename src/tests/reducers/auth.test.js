import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const uid = '123abc';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer({},action);
  expect(state.uid).toBe(uid);
});

test('should clear uid for logout', () => {
  const auth = {
    uid: '123abc'
  };
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer(auth,action);
  expect(state).toEqual({});
});