enum AuthError {
  WRONG_CREDENTIALS,
  SERVER_FAIL,
  EXPIRED_SESSION
}

console.log(AuthError[AuthError.WRONG_CREDENTIALS]) //gets string

enum AuthError2 {
  WRONG_CREDENTIALS = 'wrong',
  SERVER_FAIL = 'failed',
  EXPIRED_SESSION = 'expired'
}

function handleError(error: AuthError) {
  switch (error) {
    case AuthError.EXPIRED_SESSION:
      console.log('Get new session')
      break;
    case AuthError.SERVER_FAIL:
    case AuthError.EXPIRED_SESSION: //multiple cases allowed
      console.log('Server Failed')
      break;

    default:

      break;
  }
}