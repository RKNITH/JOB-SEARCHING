import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; 2024 All Rights Reserved By Raviranjan.</div>
      <div>

        <FaFacebookF />


        <FaYoutube />


        <FaLinkedin />

        <RiInstagramFill />

      </div>
    </footer>
  );
};

export default Footer;
