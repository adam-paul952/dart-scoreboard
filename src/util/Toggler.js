import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ThemeContext } from "../contexts/Provider";

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  }
`;

const Toggle = () => {
  const { theme, themeToggle } = useContext(ThemeContext);
  return <Button onClick={themeToggle}>Switch Theme</Button>;
};

Toggle.propTypes = {
  theme: PropTypes.string,
  toggleTheme: PropTypes.func,
};

export default Toggle;
