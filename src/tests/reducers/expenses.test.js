import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expenseReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expenseReducer(expenses,action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expenseReducer(expenses,action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    desciption: 'Electric Bill',
    note: '',
    createdAt: 0,
    amount: 30000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expenseReducer(expenses,action);
  expect(state).toEqual([...expenses,expense]);
});

test('should edit an expense', () => {
  const amount = 20000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      amount
    }
  };
  const state = expenseReducer(expenses,action);
  expect(state[0].amount).toBe(amount);
});

test('should not edit an expense if not found', () => {
  const amount = 20000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = expenseReducer(expenses,action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const newExpenses = [{
    id: '4',
    desciption: 'Phone Bill',
    amount: 3500,
    note: '',
    createdAt: 2000
  },{
    id: '5',
    desciption: 'Market Bill',
    amount: 23400,
    note: '',
    createdAt: 5000
  }];
  const action = {
    type: 'SET_EXPENSES',
    expenses: newExpenses
  };
  const state = expenseReducer(expenses,action);
  expect(state).toEqual(newExpenses);
});