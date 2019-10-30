import asyncComponent from '../components/asyncComponent';

const Home = asyncComponent(() => import('./home'));
const Login = asyncComponent(() => import('./login'));
const PageNotFound = asyncComponent(() => import('../components/notFound'));

export { Home, Login, PageNotFound };
