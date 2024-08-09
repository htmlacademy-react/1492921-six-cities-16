const AUTH_TOKEN_KEY_NAME = 'six-sities-token';

type Token = string;

export function getToken(): Token {
  return localStorage.getItem(AUTH_TOKEN_KEY_NAME) || '';
}

export function setToken(token: Token): void {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
}

export function dropToken(): void {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
}
