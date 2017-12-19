import jwt from 'jsonwebtoken';
import Boom from 'boom';

export function generateTokens(data) {
  return {
    accessToken: generateAccessToken(data),
    refreshToken: generateRefreshToken(data)
  };
}

export function generateAccessToken(data) {
  return jwt.sign({ encryptedData: data }, 'hellofromtheotherside', {
    expiresIn: 100000
  });
}

export function generateRefreshToken(data) {
  return jwt.sign({ encryptedData: data }, 'hello', {
    expiresIn: 800000
  });
}

export function verifyAccessToken(token) {
  return jwt.verify(token, 'hellofromtheotherside', (err, decode) => {
    if (!err) {
      console.log('authorized');

      return decode;
    } else {
      throw new Boom.unauthorized('unauthorized user');
    }
  });
}

export function verifyRefreshToken(token) {
  jwt.verify(token, 'hello');
}
