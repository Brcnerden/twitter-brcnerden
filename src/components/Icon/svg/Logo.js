import * as React from "react";

const TwitterLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path fill="url(#TwitterLogo)" d="M0 0h40v40H0z" />
    <defs>
      <pattern
        id="TwitterLogo"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#TwitterLogo_ab" transform="scale(.01042)" />
      </pattern>
      <image
        id="TwitterLogo_ab"
        width={96}
        height={96}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default TwitterLogo;
