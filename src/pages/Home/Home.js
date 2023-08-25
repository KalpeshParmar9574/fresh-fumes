import DashboardLayout from "../../layouts/dashboard";
import * as React from "react";
import OfferCarousel from "./OfferCarousel";
import { Container, Grid } from "@mui/material";
import Category from "./Category";
import Brand from "./Brand";
import NewArrival from "./NewArrival";
import BestSeller from "./BestSeller";
import Sliders from "./Sliders";

function Home() {

  return (
    <>
      <OfferCarousel />
      <Category />
      <NewArrival />
      <BestSeller />
      <Brand />
      <Sliders /> 
    </>
  );
}

const componentConfig = {
  component: Home,
  path: "/home",
  public: false,
  layout: DashboardLayout,
  roles: ["admin"],
  group: null,
  sidebar: true,
};

export default componentConfig;