import * as React from "react";

const SearchIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#5C6C79"
      d="m19.53 18.47-3.66-3.66A8.98 8.98 0 0 0 18 9a9 9 0 1 0-9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66a.746.746 0 0 0 1.06 0 .747.747 0 0 0 .002-1.06ZM1.5 9c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5S1.5 13.135 1.5 9Z"
    />
  </svg>
);

export default SearchIcon;
