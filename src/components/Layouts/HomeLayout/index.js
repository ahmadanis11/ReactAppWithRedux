import React from "react";
import Header from "../../Header";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export const HomeLayout = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;


  return (
    <>
      <div className="flex bg_color ">
        <div>
          <div
            className={`fixed top-0 bottom-0 left-0 right-0 w-full bg-for-light`}
          ></div>
        </div>
          <Header
            pathname={pathname}
          />
        <div className="mt-20 ml-20 w-11/12">{children}</div>
      </div>
    </>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
