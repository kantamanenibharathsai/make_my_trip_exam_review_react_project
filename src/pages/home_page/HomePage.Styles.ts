const homePageStyles = {
  mainContainer: {
    height: "auto",
    width: "100%",
  },

  topContainer: {
    backgroundImage:
      "url('https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg3.jpg')",
    backgroundSize: "cover",
    minHeight: { xs: "100vh", lg: "auto" },
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    pb: { lg: "60px" },
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
  },

  cardContainerTwo: {
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    background: "#fff",
    borderRadius: "14px",
    position: "absolute",
    top: "-50px",
    height: { xs: "110px", lg: "130px" },
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
    width: "100%",
  },

  listItem: {
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
    justifyContent: { xs: "space-between", md: "flex-start" },
    alignItems: "center",
    gap: { xs: 0, sm: 3 },
    flexGrow: 1,
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
    mt: 3,
  },

  functionalityContainer: {
    padding: "20px 15px",
    borderRight: { xs: 0, lg: "1px solid #E7E7E7" },
    borderBottom: { xs: "1px solid #e7e7e7", lg: 0 },
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
    visibility: "hidden",
    width: { xs: "295px", sm: "330px" },
  },

  activeOptionsContainer: {
    position: "absolute",
    borderRadius: "12px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    top: "60px",
    left: "0px",
    height: "400px",
    width: { xs: "295px", sm: "330px" },
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
    height: "inherit",
    boxSizing: "border-box",
  },

  airportOptionListItem: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    px: 0.5,
    py: 2,
    boxSizing: "border-box",
    borderBottom: "1px solid #e7e7e7",
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

  travellersCardContainer: {
    height: { xs: "550px", lg: "380px" },
    width: "auto",
    right: { lg: 0 },
    left: { xs: 0, lg: "auto" },
    position: "absolute",
    boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
    px: { xs: 1, sm: 2, md: 5 },
    py: { xs: 2, sm: 3, md: 4 },
    zIndex: 2,
    top: "60px",
    background: "#fff",
    borderRadius: "16px",
    transition: "1s ease all",
    opacity: 1,
  },

  inactiveTravellersCardContainer: {
    height: "0",
    width: "auto",
    right: { lg: 0 },
    left: { xs: 0, lg: "auto" },
    position: "absolute",
    boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
    px: { xs: 1, sm: 2, md: 5 },
    py: { xs: 2, sm: 3, md: 4 },
    zIndex: 2,
    top: "60px",
    background: "#fff",
    borderRadius: "16px",
    opacity: 0,
    transition: "1s ease all",
    display: "none",
  },

  travellersCardContainerChild: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },

  contentBtnscOntainer: {
    display: "flex",
    flexDirection: "column",
    gap: 0.6,
  },

  name: {
    color: "#000",
    font: "700 12px Poppins",
  },

  onTheDay: {
    color: "#B4B4B4",
    font: "700 12px Poppins",
  },

  btnsCard: {
    background: "#fff",
    height: "39px",
    borderRadius: "12px",
    boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
    display: "flex",
    alignItems: "center",
    width: "max-content",
  },

  numBtn: {
    cursor: "pointer",
    border: "none",
    outline: "none",
    background: "#fff",
    color: "#000",
    font: "700 13px Poppins",
    height: "inherit",
    display: "flex",
    alignItems: "center",
    width: { xs: "32px", sm: "35px" },
    textAlign: "center",
    justifyContent: "center",
    borderRadius: "4px",
    "&:hover": {
      background: "#008CFF",
      color: "white",
      borderRadius: "4px",
    },
  },

  economyBtns: {
    display: "flex",
    alignItems: "center",
    height: { xs: "auto", sm: "38px" },
    background: "#fff",
    borderRadius: "12px",
    boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
    width: "max-content",
    flexDirection: { xs: "column", sm: "row" },
    gap: { xs: 0, sm: 0 },
  },

  economyBtn: {
    width: "auto",
    py: { xs: 2, sm: 0 },
    px: 1,
    fontSize: "11px",
  },

  applyBtn: {
    borderRadius: "30px",
    height: "37px",
    px: 4,
    background: "#34c9eb",
    color: "#fff",
    font: "700 13px Poppins",
    textTransform: "capitalize",
    alignSelf: "flex-end",
    "&:hover": {
      borderRadius: "30px",
      height: "37px",
      px: 4,
      background: "#34c9eb",
      color: "#fff",
      font: "700 13px Poppins",
      textTransform: "capitalize",
    },
  },

  searchBtnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mb: { xs: 2, lg: 0 },
  },
};

export default homePageStyles;
