import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_round: process.env.BCRYPY_SALT_ROUNDS,
  jwt_token_secret: process.env.JWT_TOKEN_SECRET,
};
