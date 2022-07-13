const componentStyles = (theme) => ({
  header: {
    position: "relative",
    background:
      "linear-gradient(87deg, #8511ef ,#1171ef)",
    paddingBottom: "8rem",
    paddingTop: "0rem",
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
    [theme.breakpoints.up("md")]: {
      paddingTop: "0rem",
    },
  },
  containerRoot: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "0px",
      paddingRight: "0px",
    },
  },
});

export default componentStyles;
