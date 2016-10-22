export const LOGIN = 'LOGIN'

export function login(credentials) {
  return {
    type: LOGIN,
    credentials: credentials,
  };
}
