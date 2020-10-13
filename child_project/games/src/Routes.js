import CrossLoad from './views/crossLoad/index.jsx';
import Home from './views/home/index.jsx';
import GoBang from './views/goBang/index.jsx';

// const CrossLoad = () => import('./views/crossLoad');

export const Routes = [
    {
        path: '/',
        key: 'home',
        component: Home
    },
    {
        path: '/crossLoad',
        key: 'crossLoad',
        component: CrossLoad
    },
    {
        path: '/goBang',
        component: GoBang,
        key: 'goBang'
    }
];
