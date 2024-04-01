const searchPageStyles = {
    searchPageContainer: {
        height: "100vh",
        background: "#d3e9eb"
    },

    searchPageChildContainer: {
        width: {xs: "96%", sm: "90%", md: "75%", lg: "65%"},
        margin: "auto",
        height: "99vh",
        py: "50px",
    },

    heading : {
        font: "700 22px Poppins",
        color: "#fff",
        fontSize: {xs: "16px", sm: "19px", md: "23px"},
        mb: 4
    },

    listContainer: {
        listStyle: "none",
        p : 0,
        m : 0,
        display: "grid",
        gridTemplateColumns: {xs: "1fr", sm: "repeat(1, 1fr)", md: "repeat(1, 1fr)" },
        width: "100%",
        gap: {xs: 2}
    },

    listItemCard : {
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        padding: "20px 10px",
        display: "flex",
        flexDirection: "column",
        gap: 3.5,
        borderRadius: "16px"

    },

    topContainer: {
        display: "flex",
        flexDirection: {xs: "column", lg: "row"},
        gap: {xs: 3, lg: 5},
        alignItems: {xs: "strech", lg: "center"},
        justifyContent :"space-between",
    },

    flightLogo:{
        width: "40px",
        height: "40px",
        mixBlendMode: "multiply"
    },

    flightName:{
        font: "700 14px Poppins",
        color: "#000"
    },

    flightCode : {
        font: "700 12px Poppins",
        color: "#000"
    },

    timing: {
        font: "700 21px Poppins",
        color: "#000"
    },

    cityName: {
        font: "200 13px Poppins",
        color: "#000" 
    },

    divider: {
        border: "2px solid orange",
        width: "70px"
    },

    nonStop : {
        font: "700 11px Poppins",
        color: "#000" 
    },


    bottomContainer:{
        display: "flex",
        flexDirection: {xs: "column", lg: "row"},
        alignItems: {xs: "strech", lg: "center"},
        gap: 3
    }


}



export default searchPageStyles