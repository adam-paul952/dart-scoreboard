import React from "react";
import Proptypes from "prop-types";
import { Route } from "react-router-dom";

import { AuthContext } from "../contexts/AuthProvider";

import LoginUser from "../screens/dashboard/LogIn";

const ProtectedRoute = ({ component: Component, ...args }) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  return (
    <Route
      {...args}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <LoginUser />
      }
    />
  );
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  component: Proptypes.elementType.isRequired,
};
