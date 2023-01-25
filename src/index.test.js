import Index from './index.js';

it('test Index file renders', () => {
  expect(
    JSON.stringify(
      Object.assign({}, Index, { _reactInternalInstance: 'censored' }),
    ),
  ).toMatchSnapshot();
});