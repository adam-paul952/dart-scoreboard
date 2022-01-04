import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

const PingContext = createContext();

const PingProvider = ({ children }) => {
  const [ping, setPing] = useState(false);

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
