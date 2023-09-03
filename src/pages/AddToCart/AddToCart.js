import React from 'react'
import DashboardLayout from "../../layouts/dashboard";
function AddToCart() {
  return (
    <div>
      
    </div>
  )
}

const componentConfig = {
  component: AddToCart,
  path: "/addtocart",
  public: false,
  layout: DashboardLayout,
  roles: ["admin"],
  group: null,
  sidebar: true,
};

export default componentConfig;
