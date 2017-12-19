import * as jwt from '../utils/jwt';

export function fetchTokens(params) {
  return jwt.generateTokens(params);
}
