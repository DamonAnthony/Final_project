import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import M from "../node_modules/materialize-css/dist/js/materialize.min";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/Footer";
import Store from "./pages/store/Store";
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUs from "./pages/contactUs/ContactUs";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import DragonAgeOrigins from "./pages/game/Dragon Age Origins/DragonAgeOrigins";
import DragonAge2 from "./pages/game/Dragon Age 2/DragonAge2";
import DragonAgeInquisition from "./pages/game/Dragon Age Inquisition/DragonAgeInquisition";
import BattlefieldBadCompany2 from "./pages/game/Battlefield Bad Company 2/BattlefieldBadCompany2";
import Battlefield3 from "./pages/game/Battlefield 3/Battlefield3";
import Battlefield4 from "./pages/game/Battlefield 4/Battlefield4";
import Battlefield1 from "./pages/game/Battlefield 1/Battlefield1";
import Madden20 from "./pages/game/Madden 20/Madden20";
import Fifa20 from "./pages/game/Fifa 20/Fifa20";
import NFSHeat from "./pages/game/NFS Heat/NFSHeat";
import Payment from "./pages/payment/payment";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import Alerts from "./components/alert/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <AuthState>
      <AlertState>
        <Router>
          <Fragment>
            <NavBar />
            <div>
              <Alerts />
              <Switch>
                <Route exact path="/" component={Store} />
                <Route exact path="/AboutUs" component={AboutUs} />
                <Route exact path="/ContactUs" component={ContactUs} />
                <Route exact path="/Store" component={Store} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Register" component={Register} />
                <Route
                  exact
                  path="/Store/DragonAgeOrigins"
                  component={DragonAgeOrigins}
                />
                <Route exact path="/Store/DragonAge2" component={DragonAge2} />
                <Route
                  exact
                  path="/Store/DragonAgeInquisition"
                  component={DragonAgeInquisition}
                />
                <Route
                  exact
                  path="/Store/BattlefieldBadCompany2"
                  component={BattlefieldBadCompany2}
                />
                <Route
                  exact
                  path="/Store/Battlefield3"
                  component={Battlefield3}
                />
                <Route
                  exact
                  path="/Store/Battlefield4"
                  component={Battlefield4}
                />
                <Route
                  exact
                  path="/Store/Battlefield1"
                  component={Battlefield1}
                />
                <Route exact path="/Store/Madden20" component={Madden20} />
                <Route exact path="/Store/Fifa20" component={Fifa20} />
                <Route exact path="/Store/NFSHeat" component={NFSHeat} />
                <PrivateRoute
                  exact
                  path="/payments"
                  component={Payment}
                ></PrivateRoute>
              </Switch>
            </div>
            <Footer />
          </Fragment>
        </Router>
      </AlertState>
    </AuthState>
  );
};

export default App;
