import User from '@models/User';

class UserController {
  create(name: string, email: string): User {
    const user = new User(name, email);
    return user;
  }
}

export default UserController;
