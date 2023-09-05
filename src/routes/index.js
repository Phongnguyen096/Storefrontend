import Home from '~/pages/Home';
import AdminPage from '~/pages/Admin';
import Error from '~/pages/Error';
import ProductBySubType from '~/pages/Products/components/ProductbySubType';
import Products from '~/pages/Products';
import ProductByType from '~/pages/Products/components/ProductByType';
import Product from '~/pages/Products/components/Product';
const publicRoutes = [
    { path: '/', component: Home },
    {
        path: '/products',
        component: Products,
    },
    {
        path: '/products/:type',
        component: ProductByType,
    },
    {
        path: '/products/:type/:subType',
        component: ProductBySubType,
    },
    {
        path: '/products/:type/:subType/:id',
        component: Product,
    },
    { path: '/admin', component: AdminPage },
    { path: '/*', component: Error },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
