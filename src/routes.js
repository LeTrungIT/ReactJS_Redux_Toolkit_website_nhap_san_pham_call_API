import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';

const routes = [
    {
        path: '/',
        component: <ProductListPage />,
    },
    {
        path: '/product',
        component: <ProductListPage />,
    },
    {
        path: '/product/add',
        component: <ProductActionPage />,
    },
    {
        path: '/product/:id/edit',
        component: <ProductActionPage />,
    },
    {
        path: '*',
        component: <NotFoundPage />,
    },
];
export default routes;
