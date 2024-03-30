const homePageStyles = {
  mainContainer: {
    minHeight: "100vh",
    width: "100%",
  },

  topContainer: {
    backgroundImage:
      "url('https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg3.jpg')",
    backgroundSize: "cover",
    minHeight: { xs: "100vh", lg: "35vw" },
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "50px",
  },

  navContainer: {
    height: "70px",
    backgroundColor: "transparent",
  },

  navChildContainer: {
    width: { xs: "95%", sm: "90%", md: "85%", lg: "80%", xl: "65%" },
    margin: "auto",
    height: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  makeMytripLogo: {
    width: "115px",
    height: "36px",
  },

  cardContainerOne: {
    width: { xs: "98%", sm: "90%", md: "85%", lg: "80%", xl: "65%" },
    margin: "auto",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    height: { xs: "auto", lg: "400px" },
    background: "#fff",
    borderRadius: "14px",
    position: "relative",
    pt: { xs: "90px", xl: "75px" },
    px: { xs: "5px", sm: "19px" },
    border: "4px solid green",
  },

  cardContainerTwo: {
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    background: "#fff",
    borderRadius: "14px",
    position: "absolute",
    top: "-50px",
    height: "113px",
    width: { xs: "100%", md: "90%" },
    padding: { xs: "10px 0px 0px 0px", md: "10px 20px 0px 20px" },
    margin: "auto",
    left: { xs: "0%", md: "5%" },
    right: { xs: "0%", md: "10%" },
    display: "flex",
    textAlign: "center",
    overflowX: "auto",
  },

  tabsList: {
    display: "flex",
    flexDirection: "row",
    gap: 1.8,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    margin: 0,
    listStyle: "none",
    // border: "2px solid black",
    width: "100%",
  },

  listItem: {
    // border: "2px solid blue",
    cursor: "pointer",
    transition: "2s ease all",
    boxSizing: "border-box",
    "&:hover": {
      "& hr": {
        border: "1px solid #000",
        width: "100%",
      },
    },
  },

  flightImage: {
    width: { xs: "60px", lg: "75px" },
    height: { xs: "40px", lg: "45px" },
  },

  flightText: {
    color: "#08ADFF",
    font: { xs: "600 13px Poppins", lg: "600 15px Poppins" },
    textAlign: "center",
    width: "90px",
    height: "40px",
    // border: "1px solid red",
  },

  activeDivider: {
    border: "1px solid #08ADFF",
    width: "100%",
  },

  inactiveDivider: {
    border: 0,
  },

  stack: {
    width: "100%",
    display: "flex",
  },

  formContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: { xs: "space-between", lg: "flex-start" },
    alignItems: "center",
    gap: { xs: 0, sm: 3 },
    // width: "100%",
    flexGrow: 1,
    border: "2px solid red",
  },

  radioContainer: {
    background: "#EAF5FF",
    borderRadius: "20px",
    display: "flex",
    alignitems: "center",
    cursor: "pointer",
    gap: 1,
    px: 1,
    "& label, input": {
      color: "#000",
      font: { xs: "600 11px Poppins", sm: "600 15px Poppins" },
      cursor: "pointer",
    },
  },

  bookInterDomesText: {
    color: "#000",
    font: { xs: "200 13px Poppins", sm: "200 15px Poppins" },
  },

  fiveFunctionalitiesContainer: {
    border: "1px solid #E7E7E7",
    borderRadius: "12px",
    width: "100%",
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    // overflowX: {xs:"auto", lg: "hidden"},
    mt: 3,
  },

  functionalityContainer: {
    padding: "20px 15px",
    // minHeight: "100px",
    borderRight: "1px solid #E7E7E7",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    width: { xs: "100%", lg: "35%", xl: "55%" },
    gap: 2,
    cursor: "pointer",
    position: "relative",
    "&:hover": {
      background: "#E9F4FE",
    },
  },

  fromText: {
    color: "#000",
    font: "200 14px Poppins",
  },

  cityNametext: {
    color: "#000",
    font: "700 26px Poppins",
  },

  spanEl: {
    color: "#000",
    font: "200 22px Poppins",
  },

  airpotNameText: {
    color: "#000",
    font: "200 14px Poppins",
  },

  optionsContainer: {
    position: "absolute",
    borderRadius: "12px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    top: "60px",
    left: "0px",
    height: "0px",
    overflowY: { xs: "auto" },
    zIndex: 23,
    background: "#fff",
    transition: "1s linear all",
    opacity: 0,
    // display: "none",
    visibility: "hidden",
    width: "330px",
  },

  activeOptionsContainer: {
    position: "absolute",
    borderRadius: "12px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    top: "60px",
    left: "0px",
    height: "400px",
    width: "330px",
    overflowY: "auto",
    zIndex: 1,
    background: "#fff",
    transition: "1s linear all",
    opacity: 1,
  },

  closeIconBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    my: 0,
    mt: 2,
    width: "100%",
    pr: 2,
    cursor: "pointer",
  },

  closeIcon: {},

  optionsUnorderdList: {
    listStyle: "none",
    width: "100%",
    p: 0,
    m: 0,
    py: "15px",
    display: "flex",
    flexDirection: "column",
    // gap: 2,
    height: "inherit",
    // overflowY: "auto",
    boxSizing: "border-box",
  },

  airportOptionListItem: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    // gap: 0.6,
    px: 0.5,
    py: 2,
    boxSizing: "border-box",
    borderBottom: "1px solid #C1C1C1",
    "&:last-child": {
      borderBottom: 0,
    },
    "&:hover": {
      background: "#E9F4FE",
    },
  },

  imageContainer: {
    width: "10%",
  },

  flightImg: {
    width: "25px",
    height: "20px",
  },

  cityCountryname: {
    color: "#000",
    font: "200 14px Poppins",
  },

  airportName: {
    color: "#B4B4B4",
    font: "200 13px Poppins",
  },

  code: {
    color: "#B4B4B4",
    font: "700 15px Poppins",
    width: "13%",
  },
};

export default homePageStyles;
