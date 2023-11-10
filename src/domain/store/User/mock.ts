import User from 'domain/entity/User';
import avatar from 'presentation/image/account/avatar.jpg';

export const MOCK_USER = new User(0, avatar.src, 'Username', 0);
