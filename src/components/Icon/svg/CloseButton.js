import * as React from "react";

const CloseButton = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={20}
    height={18}
    fill="none"
    {...props}
  >
    <path fill="url(#closeButton)" d="M0 0h20v18H0z" />
    <defs>
      <pattern
        id="closeButton"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#closeButton_b" transform="scale(.01042 .01176)" />
      </pattern>
      <image
        id="closeButton_b"
        width={96}
        height={96}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAB6klEQVR4nO3cS07DQBBF0YIlwSDsjMxgyGZB7AAGyZMiK3b6Z3dV9z2SZyA57yYK2FHMAAAAAAAAAAAAENbZzE69T6KBk10eSyifZvZnZr9m9tb5XGq8mtmPXR7LV+dzSabxdUSNcDu+DvcRluNHjXBvfPcR1saPFmFrfLcRzrZ9wrcRPL8xn+xyjimPxdUb84uZfVt6BI+vhJRnvusnUuQI4ceXiBGGGV8iRRhufIkQYdjxxXOE4ccXjxGmGV88RZhufPEQYdrxpWeE6ceXHhEYf+HICIy/4ogIjP/AnhEYP9EeERg/U8sIjF+oRQTGr1QTgfEbKYnA+I3l3Jf9zfxZxk+U80pg/J20isD4FWojMH4DpREYv6HcCGHGf+59Aomerkfu76CBnL/zt/5ZQ4HS8YnQQO34RKjQanwiFOBSREclF9Y8fORlCDVXNYlQqcUlZSIUank9nwiZ9riZQoREe97JIsIDR9xGJMKKI+/hEmGhxw10Ilz1/PTC9BE8fHRk2ggexpfpIngaX6aJ4HF8GT6C5/Fl2AgRxpfhIkQaX4aJEHF8CR8h8vgSOgJfWebAu8UeX1JeCR/dzu6BtQhRxpetCG7Hl2WEaOPLvQjuxxdFiDq+3EYIM77w5d0AAAAAAAAAAADo7x8LJKAQgSH97QAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
);

export default CloseButton;
