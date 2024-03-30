import { Box, Divider, Stack, Typography } from "@mui/material"
import homePageStyles from "./HomePage.Styles"
import { Airport, airportsList, tabsList, days, months } from "../../utils/typescript/HomePageData"
import { useState } from "react"
import flightImg from "../../assets/home_images/flightImage.png"
import CloseIcon from '@mui/icons-material/Close';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "../../App.css"

interface IState {
    activeTabItemId: number,
    activeRadioBtn: string,
    isFromAirportsShown: boolean,
    isToAirportsShown: boolean,
    selectedFromAirport: Airport,
    selectedToAirport: Airport
}

const initialAirportDetails = {
    airportId: "1",
    airportName: "Indira Gandhi International Airport",
    airportCity: "New Delhi",
    airportCountry: "India",
    airportCode: "DEL",
}


const Home = () => {
    const [activeTabItemId, setActiveTabItemId] = useState<IState["activeTabItemId"]>(1);
    const [activeRadioBtn, setActiveRadioBtn] = useState<IState["activeRadioBtn"]>("one-way");
    const [isFromAirportsShown, setIsFromAirportsShown] = useState<IState["isFromAirportsShown"]>(false);
    const [isToAirportsShown, setIsToAirportsShown] = useState<IState["isToAirportsShown"]>(false);
    const [selectedFromAirport, setSelectedFromAirport] = useState<IState["selectedFromAirport"]>(initialAirportDetails);
    const [selectedToAirport, setSelectedToAirport] = useState<IState["selectedToAirport"]>(initialAirportDetails);
    const [selectedDepartDate, setSelectedDepartDate] = useState(new Date());
    const [selectedReturnDate, setSelectedReturnDate] = useState(new Date());


    const tabListHandler = (tabId: number) => {
        setActiveTabItemId(tabId)
    }

    const radioBtnsEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setActiveRadioBtn(event.target.value)
    }

    const handleDepartDateChange = (date: Date): void => {
        setSelectedDepartDate(date);
    };

    const handleReturnDateChange = (date: Date): void => {
        setSelectedReturnDate(date);
    };


    const fromAirportsEventHandler = () => {
        setIsFromAirportsShown(isShown => !isShown)
        setIsToAirportsShown(false)
    }

    const toAirportsEventHandler = () => {
        setIsToAirportsShown(isShown => !isShown)
        setIsFromAirportsShown(false)
    }

    const eachFromAirportEventHandler = (airportObj: Airport) => {
        setSelectedFromAirport(airportObj)
        setIsFromAirportsShown(true)
    }

    const eachToAirportEventHandler = (airportObj: Airport) => {
        setSelectedToAirport(airportObj)
        setIsToAirportsShown(true)
    }

    const closeIconToAirportEventHandler = () => {
        setIsToAirportsShown(true)
    }

    const closeIconFromAirportEventHandler = () => {
        setIsFromAirportsShown(true)
    }

    return (
        <Box sx={homePageStyles.mainContainer}>
            <Box sx={homePageStyles.topContainer}>
                <Box sx={homePageStyles.navContainer}>
                    <Box sx={homePageStyles.navChildContainer}>
                        <Box component="img" alt="make-my-trip-logo" sx={homePageStyles.makeMytripLogo} src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png" />
                    </Box>
                </Box>
                <Box sx={homePageStyles.cardContainerOne}>
                    <Box sx={homePageStyles.cardContainerTwo}>
                        <Box component={"ul"} sx={homePageStyles.tabsList}>
                            {tabsList.map(eachTabItem => (
                                <Stack onClick={() => tabListHandler(eachTabItem.tabId)} key={eachTabItem.tabId} direction={"column"} gap={1} alignItems={"center"} component="li" sx={homePageStyles.listItem}>
                                    <Box component={"img"} alt="flight-image" src={eachTabItem.tabImageUrl} sx={homePageStyles.flightImage} />
                                    <Typography sx={homePageStyles.flightText}>{eachTabItem.tabName}</Typography>
                                    {eachTabItem.tabId === activeTabItemId && (<Divider sx={homePageStyles.activeDivider} />)}
                                    {eachTabItem.tabId !== activeTabItemId && (<Divider sx={homePageStyles.inactiveDivider} />)}
                                </Stack>))}
                        </Box>
                    </Box>
                    <Stack direction={{ xs: "column", md: "row" }} alignItems={"center"} justifyContent={"space-between"} sx={homePageStyles.stack}>
                        <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 1.5, md: "0" }} alignItems={"center"} justifyContent={"space-between"} sx={homePageStyles.stack}>
                            <Box component={"form"} sx={homePageStyles.formContainer}>
                                <Box sx={{ ...homePageStyles.radioContainer, background: activeRadioBtn === "one-way" ? "#EAF5FF" : "#fff" }}>
                                    <Box onChange={radioBtnsEventHandler} id="one-way" name="trip" component={"input"} type="radio" checked={"one-way" === activeRadioBtn} value="one-way" />
                                    <Box htmlFor="one-way" component={"label"}>One Way</Box>
                                </Box>

                                <Box sx={{ ...homePageStyles.radioContainer, background: activeRadioBtn === "round-trip" ? "#EAF5FF" : "#fff" }}>
                                    <Box onChange={radioBtnsEventHandler} id="round-trip" name="trip" component={"input"} type="radio" checked={"round-trip" === activeRadioBtn} value="round-trip" />
                                    <Box htmlFor="round-trip" component={"label"}>Round Trip</Box>
                                </Box>

                                <Box sx={{ ...homePageStyles.radioContainer, background: activeRadioBtn === "multi-city" ? "#EAF5FF" : "#fff" }}>
                                    <Box onChange={radioBtnsEventHandler} id="multi-city" name="trip" component={"input"} type="radio" checked={"multi-city" === activeRadioBtn} value="multi-city" />
                                    <Box htmlFor="multi-city" component={"label"}>Multi City</Box>
                                </Box>
                            </Box>
                            <Typography sx={homePageStyles.bookInterDomesText}>Book International and Domestic Flights</Typography>
                        </Stack>

                    </Stack>
                    <Box sx={homePageStyles.fiveFunctionalitiesContainer}>
                        <Box sx={homePageStyles.functionalityContainer} onClick={fromAirportsEventHandler}>
                            <Typography sx={homePageStyles.fromText}>From</Typography>
                            <Box>
                                <Typography sx={homePageStyles.cityNametext}>{selectedFromAirport.airportCity}</Typography>
                                <Typography sx={homePageStyles.airpotNameText}>{selectedFromAirport.airportCode}, {selectedFromAirport.airportName}, {selectedFromAirport.airportCountry}</Typography>
                            </Box>
                            <Box sx={isFromAirportsShown ? homePageStyles.activeOptionsContainer : homePageStyles.optionsContainer}>
                                <Box sx={homePageStyles.closeIconBtn} onClick={closeIconFromAirportEventHandler}>
                                    <CloseIcon sx={homePageStyles.closeIcon} />
                                </Box>
                                <Box component="ul" sx={homePageStyles.optionsUnorderdList}>
                                    {airportsList.map(eachAirport => (
                                        <Box component="li" key={eachAirport.airportId} sx={{ ...homePageStyles.airportOptionListItem, background: eachAirport.airportId === selectedFromAirport.airportId ? "#E9F4FE" : "#fff" }} onClick={() => eachFromAirportEventHandler(eachAirport)}>
                                            <Box sx={homePageStyles.imageContainer}>
                                                <Box component={"img"} src={flightImg} alt="flight-image" sx={homePageStyles.flightImg} />
                                            </Box>
                                            <Stack direction={"column"} gap={1.2} flexGrow={1}>
                                                <Typography sx={homePageStyles.cityCountryname}>{eachAirport.airportCity}, {eachAirport.airportCountry}</Typography>
                                                <Typography sx={homePageStyles.airportName}>{eachAirport.airportName}</Typography>
                                            </Stack>
                                            <Typography sx={homePageStyles.code}>{eachAirport.airportCode}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>

                        </Box>



                        <Box sx={homePageStyles.functionalityContainer} onClick={toAirportsEventHandler}>
                            <Typography sx={homePageStyles.fromText}>To</Typography>
                            <Box>
                                <Typography sx={homePageStyles.cityNametext}>{selectedToAirport.airportCity}</Typography>
                                <Typography sx={homePageStyles.airpotNameText}>{selectedToAirport.airportCode}, {selectedToAirport.airportName}, India</Typography>
                            </Box>




                            <Box sx={isToAirportsShown ? homePageStyles.activeOptionsContainer : homePageStyles.optionsContainer}>
                                <Box sx={homePageStyles.closeIconBtn} onClick={closeIconToAirportEventHandler}>
                                    <CloseIcon sx={homePageStyles.closeIcon} />
                                </Box>
                                <Box component="ul" sx={homePageStyles.optionsUnorderdList}>
                                    {airportsList.map(eachAirport => (
                                        <Box component="li" key={eachAirport.airportId} sx={{ ...homePageStyles.airportOptionListItem, background: eachAirport.airportId === selectedToAirport.airportId ? "#E9F4FE" : "#fff" }} onClick={() => eachToAirportEventHandler(eachAirport)}>
                                            <Box sx={homePageStyles.imageContainer}>
                                                <Box component={"img"} src={flightImg} alt="flight-image" sx={homePageStyles.flightImg} />
                                            </Box>
                                            <Stack direction={"column"} gap={1.2} flexGrow={1}>
                                                <Typography sx={homePageStyles.cityCountryname}>{eachAirport.airportCity}, {eachAirport.airportCountry}</Typography>
                                                <Typography sx={homePageStyles.airportName}>{eachAirport.airportName}</Typography>
                                            </Stack>
                                            <Typography sx={homePageStyles.code}>{eachAirport.airportCode}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>

                        </Box>



                        <Box sx={homePageStyles.functionalityContainer}>
                            <Stack direction={"row"} alignItems={"center"} gap={1}>
                                <Typography sx={homePageStyles.fromText}>Departure</Typography>
                                <KeyboardArrowDownIcon onClick={() => document.getElementById("datePickerOne")?.click()} />
                            </Stack>
                            <Box>
                                <Typography sx={homePageStyles.cityNametext}>{selectedDepartDate?.getDate()} <Box component="span" sx={homePageStyles.spanEl}>{months[selectedDepartDate?.getMonth()]}'
                                    {selectedDepartDate?.getFullYear().toString().slice(2)}</Box></Typography>
                                <Typography sx={homePageStyles.airpotNameText}>{days[selectedDepartDate?.getDay()]}</Typography>
                            </Box>

                            <DatePicker
                                selected={selectedDepartDate}
                                onChange={handleDepartDateChange}
                                dateFormat="dd/MM/yy"
                                id="datePickerOne"
                            />
                        </Box>



                        <Box sx={homePageStyles.functionalityContainer}>
                            <Stack direction={"row"} alignItems={"center"} gap={1}>
                                <Typography sx={homePageStyles.fromText}>Return</Typography>
                                <KeyboardArrowDownIcon onClick={() => document.getElementById("datePickerTwo")?.click()} />
                            </Stack>
                            <Box>
                                <Typography sx={homePageStyles.cityNametext}>{selectedReturnDate?.getDate()} <Box component="span" sx={homePageStyles.spanEl}>{months[selectedReturnDate?.getMonth()]}'
                                    {selectedReturnDate?.getFullYear().toString().slice(2)}</Box></Typography>
                                <Typography sx={homePageStyles.airpotNameText}>{days[selectedReturnDate?.getDay()]}</Typography>
                            </Box>
                            <DatePicker
                                selected={selectedReturnDate}
                                onChange={handleReturnDateChange}
                                dateFormat="dd/MM/yy"
                                id="datePickerTwo"
                            />
                        </Box>



                        <Box sx={homePageStyles.functionalityContainer}>
                            <Typography sx={homePageStyles.fromText}>Travellers & Class</Typography>
                            <Box>
                                <Typography sx={homePageStyles.cityNametext}>7 <Box component="span" sx={homePageStyles.spanEl}>Travellers</Box></Typography>
                                <Typography sx={homePageStyles.airpotNameText}>Economy/Premium Economy</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}


export default Home