
import Signin from "../components/auth/signin";
import Signup from "../components/auth/signup";
import Welcome from "../pages/welcome";
import Aboutus from "../pages/aboutus";

import Contactus from "../pages/contactus";
import LoginLayout from "../layouts/LoginLayout";

import Dashboard from "../pages/DashboardPage";
import Form  from "../pages/FormPage";
import BasicTable from "../pages/Table/BasicTables";
import DataTable from "../pages/Table/DataTables";
import NotFound from "../pages/NotFoundPage";

import DashboardLayout from "../layouts/DashboardLayout";
export const publicRoutes = [

  {
    path: "/",
    layout: LoginLayout,
    component: Welcome
  },
  {
    path: "/signin",
    layout: LoginLayout,
    component: Signin
  },
  {
    path: "/signup",
    layout: LoginLayout,
    component: Signup
  },
  {
    path: "/aboutus",
    layout: LoginLayout,
    component: Aboutus
  },
  {
    path: "/contactus",
    layout: LoginLayout,
    component: Contactus
  }
];

export const dashboardRoutes = [
  {
    path: "/",
    layout: DashboardLayout,
    component: Dashboard
  },
  {
    path: "/dashboard",
    layout: DashboardLayout,
    component: Dashboard
  },
  {
    path: "/form",
    layout: DashboardLayout,
    component: Form
  },
  {
    path: "/table/basic",
    layout: DashboardLayout,
    component: BasicTable
  },
  {
    path: "/table/data",
    layout: DashboardLayout,
    component: DataTable
  }
];
