import DashboardLayout from "../../layouts/dashboard";
import * as React from "react";
function Home() {

  return (
    <>
    HELLLLOO
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