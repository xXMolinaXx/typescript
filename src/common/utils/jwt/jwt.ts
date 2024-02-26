import jwt from 'jsonwebtoken'
import { CONFIGURATION } from '../../config/server.conf'

export const jwtGenerator = ({ userId, rol }: { userId: string, rol: string }): string => {
  return jwt.sign({ sub: userId, role: rol }, CONFIGURATION.JWT_SECRET)
}
