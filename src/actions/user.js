export const LOGIN = 'LOGIN'

export function login(userId) {
  return {
    type: LOGIN,
    userId: userId,
    loggedIn: true,
  };
}
