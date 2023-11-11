import User from 'domain/entity/User';
import avatar from 'presentation/image/account/avatar.jpg';

export const MOCK_USER = new User(
    0,
    'Username',
    avatar.src,
    'N2',
    'AZ, Tucson',
    'ewing-meghan79@outlook.com',
    210,
    181350,
    86,
);
