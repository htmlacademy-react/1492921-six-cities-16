const user = {
  email: 'oliver.conner@gmail.com',
  token: 'b2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
  name: 'Oliver.conner',
  avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/5.jpg',
  isPro: false,
};

const validationError = {
  errorType: 'VALIDATION_ERROR',
  message: 'Validation error: /six-cities/login',
  details: [
    {
      property: 'password',
      value: 'p',
      messages: ['password must contain at least one letter and one digit'],
    },
  ],
};

const authorizationError = {
  errorType: 'COMMON_ERROR',
  message: 'Access deny.',
};

export { user, validationError, authorizationError };
