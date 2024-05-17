/**
 * An array of routes that are accessible to the public
 * Required no authentication
 * @type {string[]}
 */
export const publicRoutes = [
    '/'
];

/**
 * An array of routes that are used for authentication
 * Redirect to main page
 * @type {string[]}
 */
export const authRoutes = [
    '/sign-in',
    '/sign-up'
];

/**
 * The prefix for api authentication routes
 * Used for API authentication
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

export const DEFAULT_LOGIN_REDIRECT = '/products';
