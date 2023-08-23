import Home from '~/pages/Home';
import Products from '~/pages/Products';
import AdminPage from '~/pages/Admin';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/admin', component: AdminPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
