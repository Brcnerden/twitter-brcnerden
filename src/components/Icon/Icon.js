import React from "react";
import Logo from "./svg/Logo";
import CloseButton from "./svg/CloseButton";

const Icon = ({ children }) => children;

Icon.Logo = (props) => <Logo {...props} />;
Icon.CloseButton = (props) => <CloseButton {...props} />;

export default Icon;
