import { Home, Panel, Senha, Service, SpecialNeeds,NotFound  } from "../pages/index"
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
        label: "SpecialNeeds",
        path: "/special",
        Component: SpecialNeeds
    },
    {
        label: "notfound",
        path: "*",
        Component: NotFound
    },
]