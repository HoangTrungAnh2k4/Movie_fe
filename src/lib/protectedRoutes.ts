export const protectedRoutes = ['/manage-account'];

export const isProtectedRoute = (pathname: string): boolean => {
    return protectedRoutes.some((route) => pathname.startsWith(route));
};
