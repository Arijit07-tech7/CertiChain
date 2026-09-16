const SESSION='certivault_admin_session';
export const ADMIN_USER='admin';
export const ADMIN_PASSWORD='Admin@2026';
export function isLoggedIn(){return sessionStorage.getItem(SESSION)==='1'}
export function login(user,password){if(user===ADMIN_USER&&password===ADMIN_PASSWORD){sessionStorage.setItem(SESSION,'1');return true}return false}
export function logout(){sessionStorage.removeItem(SESSION)}
