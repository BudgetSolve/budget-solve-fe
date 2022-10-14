import Home from "../pages/Home";
import Users from "../pages/Users";
import AuthPage from "../pages/AuthPage";
import Projects from "../pages/Projects";
import Items from "../pages/Items";

export const routes = [
    {
        path: '/Home',
        component: () => <Home/>,
        exact: true,
    },
    {
        path: '/users',
        component: () => <Users/>,
        exact: true,
    },
    {
        path: '/items',
        component: () => <Items/>,
        exact: true,
    },
    {
        path: '/auth',
        component:  () => <AuthPage/>,
        exact: true
    },
    {
        path: '/projects',
        component:  () => <Projects/>,
        exact: true
    },
];