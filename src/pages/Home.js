import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Servises } from "../components/Servises";
import { Grid4 } from "../components/Grid4";
import Details from "../components/Details"

export const Home = () => (
  <div className="wrapper">
    <Sidebar />
    <div className="main-content">
      <Servises />
      <Grid4 />
      Details.render(<Details />)
    </div>
  </div>
)
