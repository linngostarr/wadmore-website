export function middleware(request) {
  const basicAuth = request.headers.get('authorization');
  
  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');
    
    if (user === 'wadmore' && pwd === 'Wadmore26') {
      return;
    }
  }
  
  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Wadmore Preview"',
    },
  });
}

export const config = {
  matcher: '/:path*',
};
