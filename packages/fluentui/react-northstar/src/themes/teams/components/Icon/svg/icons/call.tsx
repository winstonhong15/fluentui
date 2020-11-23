import * as React from 'react';
import cx from 'classnames';
import { TeamsSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg viewBox="0 0 20 20" role="presentation" focusable="false" className={classes.svg}>
      <path
        className={cx(teamsIconClassNames.outline, classes.outlinePart)}
        d="M6.98608 2.06583L6.26939 2.28186C4.96586 2.67478 4.00847 3.78795 3.815 5.13559C3.51803 7.20432 4.18226 9.62236 5.78271 12.3944C7.37979 15.1606 9.13769 16.9432 11.0729 17.723C12.3425 18.2346 13.7938 17.9591 14.7877 17.0179L15.3305 16.5039C16.0579 15.8149 16.1634 14.694 15.5771 13.8815L14.2205 12.0013C13.8448 11.4807 13.1795 11.2568 12.5655 11.4445L10.5148 12.0715L10.4618 12.0819C10.2357 12.1149 9.71443 11.6259 9.06429 10.4998C8.38415 9.32175 8.24319 8.63292 8.43096 8.45535L9.47432 7.48242C10.2563 6.75326 10.4873 5.60722 10.0489 4.63206L9.38744 3.16069C8.97554 2.24445 7.9479 1.77591 6.98608 2.06583ZM8.47536 3.57071L9.13681 5.04209C9.39965 5.62676 9.26114 6.31388 8.79232 6.75107L7.74642 7.72639C7.07732 8.35912 7.29894 9.44212 8.19827 10.9998C9.04447 12.4655 9.81646 13.1898 10.646 13.0642L10.7703 13.0376L12.8579 12.4008C13.0626 12.3383 13.2843 12.4129 13.4096 12.5864L14.7662 14.4666C15.0593 14.8728 15.0066 15.4333 14.6428 15.7778L14.1001 16.2918C13.3902 16.9641 12.3535 17.1609 11.4467 16.7955C9.74859 16.1112 8.14378 14.4839 6.64873 11.8944C5.15063 9.29963 4.54433 7.09248 4.80485 5.27769C4.94304 4.31509 5.6269 3.51997 6.55799 3.23931L7.27468 3.02328C7.75559 2.87832 8.26941 3.11259 8.47536 3.57071Z"
      />
      <path
        className={cx(teamsIconClassNames.filled, classes.filledPart)}
        d="M6.98608 2.06583C7.89447 1.79202 8.86156 2.19473 9.3132 3.01218L9.38744 3.16069L10.0489 4.63206C10.4615 5.54986 10.2811 6.61902 9.60656 7.34954L9.47432 7.48242L8.43096 8.45535C8.24319 8.63292 8.38415 9.32175 9.06429 10.4998C9.67618 11.5596 10.1739 12.0552 10.4189 12.0823L10.4618 12.0819L10.5148 12.0715L12.5655 11.4445C13.1323 11.2713 13.7428 11.4487 14.1288 11.8865L14.2205 12.0013L15.5771 13.8815C16.1289 14.6462 16.068 15.6841 15.4524 16.3779L15.3305 16.5039L14.7877 17.0179C13.7938 17.9591 12.3425 18.2346 11.0729 17.723C9.13769 16.9432 7.37979 15.1606 5.78271 12.3944C4.18226 9.62236 3.51803 7.20432 3.815 5.13559C3.99879 3.85533 4.87203 2.78668 6.07651 2.34614L6.26939 2.28186L6.98608 2.06583Z"
      />
    </svg>
  ),
  styles: {},
} as TeamsSvgIconSpec;