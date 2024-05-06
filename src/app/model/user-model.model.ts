export class User {
  email: String = '';
  username: String = '';
  firstName: String = '';
  lastName: String = '';
  password: String = '';
  profile: String = '';
  phone: String = '';
  userRole: [
    {
      id: number;
      role: {
        id: number;
        role: string;
      };
    }
  ];
}
