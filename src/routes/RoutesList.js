import { Home, Panel, Senha, Service,NotFound, Dashboard } from "../pages/index"
export const routesList = [
    {
        label: "Home",
        path: "/",
        Component: Home
    },
    {
        label: "Panel",
        path: "/panel",
        Component: Panel
    },
    {
        label: "Senha",
        path: "/senha",
        Component: Senha
    },
    {
        label: "Service",
        path: "/service",
        Component: Service
    },
    {
        label: "Dashboard",
        path: "/dashboard",
        Component: Dashboard
    },
    {
        label: "notfound",
        path: "*",
        Component: NotFound
    },
]