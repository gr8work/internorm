const breakpointsObject = {
  xxl: 1920,
  xl: 1440,
  lg: 1240,
  md: 768,
  sm: 576,
  xs: 380,
};

const breakpoints = [
  { name: 'xxl', breakpoint: breakpointsObject.xxl, container: { default: 1426 } },
  { name: 'xl', breakpoint: breakpointsObject.xl, container: { default: 1200 } },
  { name: 'lg', breakpoint: breakpointsObject.lg, container: { default: 800 } },
  { name: 'md', breakpoint: breakpointsObject.md, container: { default: 540 } },
  { name: 'sm', breakpoint: breakpointsObject.sm, container: { default: 368 } },
  { name: 'xs', breakpoint: breakpointsObject.xs, container: { default: 335 } },
];

export { breakpoints, breakpointsObject };
