import { Route, Redirect, useLocation } from 'react-router-dom';
import { useAppContext } from '../libs/contextLib';

export default function AuthenticatedRoute({ children, ...rest }) {
  const { pathname, search } = useLocation();
  const { isAuthenticated } = useAppContext();

  console.log('--pathname--->', pathname);
  console.log('--search--->', search);
  return (
    <Route {...rest}>
      {isAuthenticated ? (
        children
      ) : (
        <Redirect to={`/login?redirect=${pathname}${search}`} />
      )}
    </Route>
  );
}
