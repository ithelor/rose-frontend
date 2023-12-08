export const HOME = '/';
export const NEWS = '/news';
export const DASHBOARD = '/dashboard';
export const STUDY = '/study';
export const SETTINGS = '/settings';

export const SIGN_UP = '/sign-up';
export const SIGN_IN = '/sign-in';

/**
 * Dashboard sidebar items
 */
export const OVERVIEW = `${DASHBOARD}/overview`;
export const STATISTICS = `${DASHBOARD}/statistics`;

/**
 * Study sidebar items
 */
export const KANJI = `${DASHBOARD}/kanji`;
export const VOCABULARY = `${DASHBOARD}/vocabulary`;
export const DICTIONARY = `${DASHBOARD}/dictionary`;

/**
 * Settings sidebar items
 */
export const PROFILE = `${SETTINGS}/profile`;
export const SECURITY = `${SETTINGS}/security`;
export const ADVANCED = `${SETTINGS}/advanced`;

/**
 * API routes
 */
const USER = (url: string) => `/user/${url}`;
export const USER_LOGIN = USER('login');
export const GET_USER = USER('');
