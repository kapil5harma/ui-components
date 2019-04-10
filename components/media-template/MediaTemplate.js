import { css } from 'styled-components';

const sizes = {
  giant: 1200,
  desktop: 992,
  tablet: 768,
  phone: 480
};

const mediaMax = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    /* @media (max-width: ${sizes[label] / 16}em) { */
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

const mediaMin = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    /* @media (max-width: ${sizes[label] / 16}em) { */
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export { mediaMin, mediaMax };
