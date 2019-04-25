
import Dashboard from "./DashboardPage";
import Form from "./FormPage";
import BasicTable from "../pages/Table/BasicTables";
import DataTable from "../pages/Table/DataTables";
import NotFound from "./NotFoundPage";
import DashboardLayout from "../layouts/DashboardLayout";
import LoginLayout from "../layouts/LandingLayout";
import Signin from "../components/auth/signin";
import Signup from "../components/auth/signup";
import Welcome from "./welcome";
import Aboutus from "./aboutus";
import Contactus from "./contactus";
 
export const dashboardRoutes = [
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
    ,
    {
      //path: "/table/data",
      layout: DashboardLayout,
      component: NotFound
    }
  ];  
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