
export default {
    routes: [{
    path: "/",
    name: "Home",
    component: () => import("@/views/home"),
},
{
    path: "/login",
    name: "Lagin",
    component: () => import("@/views/Login"),
},
{
    path: "/reg",
    name: "Reg",
    component: () => import("@/views/Reg"),
},
{
    path: "/news/:id",
    name: "News",
    component: () => import("@/views/ChannelNews"),
},
{
    path: "*",
    component: () => import("@/views/NotFound"),
},
],
mode:"history",
}