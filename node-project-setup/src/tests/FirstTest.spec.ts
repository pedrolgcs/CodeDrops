import User from '@models/User';

test('it should be ok', () => {
  const user = new User('Peter', 'peter@gmail.com');

  expect(user.name).toEqual('Peter');
  expect(user.email).toEqual('peter@gmail.com');
});
