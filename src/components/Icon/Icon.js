import React from 'react';
import CloseButton from './svg/CloseButton';
import Logo from './svg/Logo';
import SearchIcon from './svg/SearchIcon';

const Icon = ({ children }) => children;

Icon.Logo = (props) => <Logo {...props} />;
Icon.CloseButton = (props) => <CloseButton {...props} />;
Icon.SearchIcon = (props) => <SearchIcon {...props} />;

export default Icon;
