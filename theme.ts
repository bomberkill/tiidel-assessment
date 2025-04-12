import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'Cabin Condensed, sans-serif',
  headings: {
    fontFamily: 'Cabin Condensed, sans-serif',
    fontWeight: '400',
    sizes: {
      h1: {
        fontSize: rem(48),
        lineHeight: rem(56),
        fontWeight: '400',
      },
      h2: {
        fontSize: rem(36),
        lineHeight: rem(44),
        fontWeight: '400',
      },
      h3: {
        fontSize: rem(24),
        lineHeight: rem(32),
        fontWeight: '400',
      },
      h4: {
        fontSize: rem(20),
        lineHeight: rem(28),
        fontWeight: '400',
      },
      h5: {
        fontSize: rem(20),
        lineHeight: rem(28),
        fontWeight: '400',
      },
      h6: {
        fontSize: rem(20),
        lineHeight: rem(28),
        fontWeight: '400',
      },
    },
  },
  /* Put your mantine theme override here */
});
