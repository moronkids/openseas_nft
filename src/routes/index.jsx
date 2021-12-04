import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import GuestRoutes from "routes/Public";
import Home from "components/Home";
import TheGame from "components/TheGame";
import Menu from "components/Menu/LoadPdf";
import Connect from "components/Transactions";
import MenuMobile from "components/Menu";
import LoadingScreen from "components/LoadingScreen";

const Routes = () => {
  //for dev mode
  return (
    <>
      <Switch>
        <GuestRoutes exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default Routes;
