import * as React from 'react';
import cx from 'classnames';
import { TeamsSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 20 20" className={classes.svg}>
      <g className={cx(teamsIconClassNames.outline, classes.outlinePart)}>
        <path d="M18 4.5L18 10.2006C17.6975 10.0262 17.3425 9.96316 17 10.0207L17 4.5C17 4.22386 16.7761 4 16.5 4L12 4C11.1716 4 10.5 4.67157 10.5 5.5V12.0001C10.1158 12.0001 9.76538 12.1445 9.5 12.382V5.5C9.5 4.67157 8.82843 4 8 4H3.5C3.22386 4 3 4.22386 3 4.5V15.5C3 15.7761 3.22386 16 3.5 16H8C8.38625 16 8.7384 15.854 9.00428 15.6142C9.03166 15.9781 9.18888 16.3058 9.42976 16.5511C9.02459 16.834 8.53168 17 8 17H3.5C2.67157 17 2 16.3284 2 15.5V4.5C2 3.67157 2.67157 3 3.5 3H8C8.8178 3 9.54389 3.39267 10 3.99976C10.4561 3.39267 11.1822 3 12 3H16.5C17.3284 3 18 3.67157 18 4.5Z" />
        <path d="M13.6913 11.0381C13.8782 11.1155 14 11.2978 14 11.5V17.5C14 17.7022 13.8782 17.8846 13.6913 17.962C13.5045 18.0393 13.2894 17.9966 13.1464 17.8536L11.2929 16H10.5C10.2239 16 10 15.7762 10 15.5V13.5C10 13.2239 10.2239 13 10.5 13H11.2929L13.1464 11.1465C13.2894 11.0035 13.5045 10.9607 13.6913 11.0381Z" />
        <path d="M18.1498 11.2C18.271 11.3617 18.4349 11.6531 18.5929 12.0745C18.848 12.7547 18.9998 13.564 18.9998 14.5C18.9998 15.436 18.848 16.2454 18.5929 16.9256C18.4349 17.347 18.271 17.6384 18.1498 17.8C17.9841 18.0209 17.6707 18.0657 17.4498 17.9C17.2534 17.7528 17.1962 17.4888 17.3023 17.2768L17.418 17.0948C17.4836 16.9827 17.5686 16.8092 17.6566 16.5745C17.8703 16.0047 17.9998 15.314 17.9998 14.5C17.9998 13.686 17.8703 12.9954 17.6566 12.4256C17.5686 12.1909 17.4836 12.0174 17.418 11.9052L17.3498 11.8C17.1841 11.5791 17.2289 11.2657 17.4498 11.1C17.6707 10.9343 17.9841 10.9791 18.1498 11.2Z" />
        <path d="M16.7241 12.9669C16.6222 12.661 16.5194 12.4211 16.447 12.2764C16.3235 12.0294 16.0232 11.9293 15.7762 12.0528C15.5292 12.1763 15.4291 12.4766 15.5526 12.7236C15.6052 12.8289 15.6899 13.0266 15.7754 13.2831C15.9161 13.7051 15.9998 14.1236 15.9998 14.5C15.9998 14.8765 15.9161 15.295 15.7754 15.7169C15.7241 15.8709 15.6731 16.0036 15.6291 16.1079L15.5526 16.2764C15.4291 16.5234 15.5292 16.8237 15.7762 16.9472C16.0232 17.0707 16.3235 16.9706 16.447 16.7236C16.5194 16.5789 16.6222 16.3391 16.7241 16.0331C16.896 15.5176 16.9998 14.9986 16.9998 14.5C16.9998 14.0015 16.896 13.4825 16.7241 12.9669Z" />
      </g>
      <g className={cx(teamsIconClassNames.filled, classes.filledPart)}>
        <path d="M18 4.75L18 10.2006C17.5451 9.93832 16.9715 9.9279 16.5 10.2009L16.5 4.75C16.5 4.61193 16.3881 4.5 16.25 4.5L12 4.5C11.3096 4.5 10.75 5.05964 10.75 5.75V12.0001H10.5C9.97826 12.0001 9.51873 12.2665 9.25 12.6706V5.75C9.25 5.05964 8.69036 4.5 8 4.5H3.75C3.61193 4.5 3.5 4.61193 3.5 4.75V15.25C3.5 15.3881 3.61193 15.5 3.75 15.5H8C8.4089 15.5 8.77194 15.3037 9 15.0001V15.5001C9 15.9247 9.17641 16.308 9.45991 16.5809C9.03685 16.8465 8.53636 17 8 17H3.75C2.7835 17 2 16.2165 2 15.25V4.75C2 3.7835 2.7835 3 3.75 3H8C8.78802 3 9.49862 3.33145 10 3.86253C10.5014 3.33145 11.212 3 12 3H16.25C17.2165 3 18 3.7835 18 4.75Z" />
        <path d="M18.1329 11.2C18.2541 11.3616 18.418 11.653 18.5761 12.0744C18.8312 12.7546 18.9829 13.564 18.9829 14.5C18.9829 15.436 18.8312 16.2453 18.5761 16.9255C18.418 17.3469 18.2541 17.6383 18.1329 17.8C17.9672 18.0209 17.6538 18.0656 17.4329 17.9C17.2365 17.7527 17.1794 17.4887 17.2854 17.2767L17.4012 17.0948C17.4667 16.9826 17.5517 16.8091 17.6397 16.5744C17.8534 16.0046 17.9829 15.314 17.9829 14.5C17.9829 13.686 17.8534 12.9953 17.6397 12.4255C17.5517 12.1908 17.4667 12.0173 17.4012 11.9051L17.3329 11.8C17.1672 11.579 17.212 11.2656 17.4329 11.1C17.6538 10.9343 17.9672 10.979 18.1329 11.2Z" />
        <path d="M13.6913 11.0381C13.8782 11.1155 14 11.2978 14 11.5V17.5C14 17.7022 13.8782 17.8846 13.6913 17.962C13.5045 18.0393 13.2894 17.9966 13.1464 17.8536L11.2929 16H10.5C10.2239 16 10 15.7762 10 15.5V13.5C10 13.2239 10.2239 13 10.5 13H11.2929L13.1464 11.1465C13.2894 11.0035 13.5045 10.9607 13.6913 11.0381Z" />
        <path d="M16.7073 12.9668C16.6053 12.6609 16.5025 12.4211 16.4301 12.2764C16.3066 12.0294 16.0063 11.9293 15.7593 12.0527C15.5123 12.1762 15.4122 12.4766 15.5357 12.7236C15.5883 12.8288 15.673 13.0265 15.7586 13.2831C15.8992 13.705 15.9829 14.1235 15.9829 14.5C15.9829 14.8764 15.8992 15.2949 15.7586 15.7168C15.7073 15.8708 15.6562 16.0035 15.6123 16.1078L15.5357 16.2764C15.4122 16.5233 15.5123 16.8237 15.7593 16.9472C16.0063 17.0707 16.3066 16.9706 16.4301 16.7236C16.5025 16.5788 16.6053 16.339 16.7073 16.0331C16.8791 15.5175 16.9829 14.9985 16.9829 14.5C16.9829 14.0014 16.8791 13.4824 16.7073 12.9668Z" />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsSvgIconSpec;