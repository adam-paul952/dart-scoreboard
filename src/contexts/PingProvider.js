import React from "react";
import PropTypes from "prop-types";
import useSessionStorage from "../util/useSessionStorage";

const PingContext = React.createContext();

const PingProvider = ({ children }) => {
  const [ping, setPing] = useSessionStorage("ping", false);

  return (
    <PingContext.Provider value={{ ping, setPing }}>
      {children}
    </PingContext.Provider>
  );
};

PingProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { PingProvider, PingContext };
