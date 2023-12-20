import RoleEnum from 'domain/entity/RoleEnum';
import User from 'domain/entity/User';
import avatar from 'presentation/image/account/avatar.jpg';

export const MOCK_USER = new User(
    '',
    'Username',
    avatar.src,
    [RoleEnum.Visitor],
    'N2',
    'AZ, Tucson',
    'ewing-meghan79@outlook.com',
    210,
    181350,
    86,
);
