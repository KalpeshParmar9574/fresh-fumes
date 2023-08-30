import DashboardLayout from "../../layouts/dashboard";
import * as React from "react";
import OfferCarousel from "./OfferCarousel";
import { Container, Grid } from "@mui/material";
import Category from "./Category";
import Brand from "./Brand";
import BestSeller from "./BestSeller";
import Sliders from "./Sliders";
import OfferOfTheDay from "./OfferOfTheDay";
import NewArrival from "./NewArrival";
import { useEffect } from "react";
import SubscribeModel from "../../components/Model/SubscribeModel";
import NiceModal from "@ebay/nice-modal-react";

function Home() {
useEffect(()=>{
  setTimeout(() => {
    NiceModal.show(SubscribeModel);
  }, 100);
})
  return (
    <>
      <OfferCarousel />
      <Category />
      <NewArrival />
      <BestSeller />
      <OfferOfTheDay />
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