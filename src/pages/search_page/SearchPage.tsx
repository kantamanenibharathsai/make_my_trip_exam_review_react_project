import { Box, Divider, Stack, Typography } from "@mui/material"
import searchPageStyles from "./SearchPage.Styles"
import airIndiaImg from "../../assets/search_images/airIndia.png"



const SearchPage = () => {
    const flightDetailsString = localStorage.getItem("flight-details");
    const flightDetails = flightDetailsString ? JSON.parse(flightDetailsString) : null;


    return (
        <Box sx={searchPageStyles.searchPageContainer}>
            <Box sx={searchPageStyles.searchPageChildContainer}>
                <Typography sx={searchPageStyles.heading}>Flights From {flightDetails?.fromAirportName} to {flightDetails?.toAirportName}</Typography>
                <Box sx={searchPageStyles.listContainer}>
                    <Box sx={searchPageStyles.listItemCard}>
                        <Box sx={searchPageStyles.topContainer}>
                            <Stack direction={"row"} alignItems={"center"}  justifyContent={{ xs: "space-between", lg: "flex-start" }} gap={1}>
                                <Stack direction={"row"} alignItems={"center"} gap={1}>
                                    <Box component={"img"} src={airIndiaImg} sx={searchPageStyles.flightLogo} alt="air-india-logo" />
                                    <Stack direction={"column"} alignItems={"flex-start"} justifyContent={"center"} gap={0.6}>
                                        <Typography sx={searchPageStyles.flightName}>Indigo</Typography>
                                        <Typography sx={searchPageStyles.flightCode}>6E 6318, 6E 5252</Typography>
                                    </Stack>
                                </Stack>

                                <Stack display={{ xs: "flex", lg: "none" }} direction={"column"} gap={1} alignItems={"center"}>
                                    <Typography sx={searchPageStyles.timing}>Rs 6,058</Typography>
                                    <Typography sx={searchPageStyles.cityName}>per adult</Typography>
                                </Stack>
                            </Stack>
                            <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} gap={3.5}>
                                <Stack direction={"column"} gap={0.9}>
                                    <Typography sx={searchPageStyles.timing}>16 : 15</Typography>
                                    <Typography sx={searchPageStyles.cityName}>{flightDetails?.fromAirportName}</Typography>
                                </Stack>
                                <Stack direction={"column"} gap={0.9} alignItems={"center"}>
                                    <Typography sx={searchPageStyles.flightCode}>05h 50m</Typography>
                                    <Divider sx={searchPageStyles.divider} />
                                    <Typography sx={searchPageStyles.nonStop}>Non Stop</Typography>
                                </Stack>
                                <Stack direction={"column"} gap={0.9}>
                                    <Typography sx={searchPageStyles.timing}>8 : 15</Typography>
                                    <Typography sx={searchPageStyles.cityName}>{flightDetails?.toAirportName}</Typography>
                                </Stack>
                            </Stack>
                            <Stack display={{ xs: "none", lg: "flex" }} direction={"column"} gap={1} alignItems={"center"}>
                                <Typography sx={searchPageStyles.timing}>Rs 6,058</Typography>
                                <Typography sx={searchPageStyles.cityName}>per adult</Typography>
                            </Stack>
                        </Box>
                        <Box sx={searchPageStyles.bottomContainer}>
                            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} gap={{lg: 5}}>
                            <Stack direction={"column"} gap={0.9}>
                                <Typography sx={searchPageStyles.timing}>Departure Date</Typography>
                                <Typography sx={searchPageStyles.cityName}>{flightDetails?.departureDate}</Typography>
                            </Stack>

                            <Stack direction={"column"} gap={0.9}>
                                <Typography sx={searchPageStyles.timing}>Return Date</Typography>
                                <Typography sx={searchPageStyles.cityName}>{flightDetails?.returnDate}</Typography>
                            </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}


export default SearchPage