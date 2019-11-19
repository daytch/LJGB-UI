import asyncComponent from '../components/asyncComponent';

const Home = asyncComponent(() => import('./home'));
const Login = asyncComponent(() => import('./login'));
const Logout = asyncComponent(() => import('./logout'));
const PageNotFound = asyncComponent(() => import('../components/notFound'));
const Search = asyncComponent(() => import('./search'));
const Transaction = asyncComponent(() => import('./transaction'));

export { Home, Login, PageNotFound, Logout, Search, Transaction };
