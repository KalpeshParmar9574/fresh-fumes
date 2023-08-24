import DashboardLayout from "../../layouts/dashboard";
import * as React from "react";
import OfferCarousel from "./OfferCarousel";
import { Container } from "@mui/material";
import Category from "./Category";
import Brand from "./Brand";
import NewArrivalCard from "./NewArrivalCard";
function Home() {

  return (
    <>
    
    <OfferCarousel />
    <Category />
    <NewArrivalCard />
    <Brand />
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