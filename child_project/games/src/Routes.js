import CrossLoad from './views/crossLoad/index.jsx';
import Home from './views/home/index.jsx';

// const CrossLoad = () => import('./views/crossLoad');

export const Routes = [
    {
        path: '/home',
        key: 'home',
        component: Home
    },
    {
        path: '/crossLoad',
        key: 'crossLoad',
        component: CrossLoad
    }
];
