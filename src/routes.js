import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";
const routes = [
    {
        path: '/',
        main: <ProductListPage/>

    },
    {
        path: '/product',
        main: <ProductListPage/>

    },
    {
        path: '/product/add',
        main: <ProductActionPage />

    },
    {
        path: '/product/:id/edit',
        main: <ProductActionPage/>

    },
    {
        path: '*',
        main: <NotFoundPage/>

    }
];
export default routes;