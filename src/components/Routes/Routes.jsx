import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import OurBlog from "../Pages/OurBlog/OurBlog";
import HowItWorks from "../Pages/HowItWorks/HowItWorks";
import Terms from "../Pages/Home/Terms/Terms";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
      path:'/',
      element:<Home></Home>
      },
      {
        path:'/blog',
        element:<OurBlog></OurBlog>,
        loader:()=>fetch('/Blog.json')
      },
      {
        path:'/howItWorks',
        element:<HowItWorks></HowItWorks>
      },
      {
        path:'/terms',
        element:<Terms></Terms>
      }
    ]
  },
]);
