export const protectedRoutes = ['/chat'];

export const isProtectedRoute = (pathname: string): boolean => {
    return protectedRoutes.some((route) => pathname.startsWith(route));
};
