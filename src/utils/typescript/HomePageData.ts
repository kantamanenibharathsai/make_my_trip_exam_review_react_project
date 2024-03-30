import flightImg from "../../assets/home_images/flightImage.png";
import hotelsImg from "../../assets/home_images/hotels.png";
import homestaysVillasImg from "../../assets/home_images/homestaysVillas.png";
import holidaypackagesImg from "../../assets/home_images/holidayPackages.png";
import trainsImg from "../../assets/home_images/trains.png";
import busesImg from "../../assets/home_images/buses.png";
import cabsImg from "../../assets/home_images/cabs.png";
import forexcardCurrencyImg from "../../assets/home_images/forexcardCurrency.png";
import travelInsurancetImg from "../../assets/home_images/travelInsurance.png";

export interface TabListItem {
  tabId: number;
  tabName: string;
  tabImageUrl: string;
}

export interface Airport {
  airportId: string;
  airportName: string;
  airportCity: string;
  airportCountry: string;
  airportCode: string;
}

export const tabsList: TabListItem[] = [
  {
    tabId: 1,
    tabName: "Flights",
    tabImageUrl: flightImg,
  },

  {
    tabId: 2,
    tabName: "Hotels",
    tabImageUrl: hotelsImg,
  },

  {
    tabId: 3,
    tabName: "Homestays & Villas",
    tabImageUrl: homestaysVillasImg,
  },

  {
    tabId: 4,
    tabName: "Holiday Packages",
    tabImageUrl: holidaypackagesImg,
  },

  {
    tabId: 5,
    tabName: "Trains",
    tabImageUrl: trainsImg,
  },

  {
    tabId: 6,
    tabName: "Buses",
    tabImageUrl: busesImg,
  },

  {
    tabId: 7,
    tabName: "Cabs",
    tabImageUrl: cabsImg,
  },

  {
    tabId: 8,
    tabName: "Forex Card & Currency",
    tabImageUrl: forexcardCurrencyImg,
  },

  {
    tabId: 9,
    tabName: "Travel Insurance",
    tabImageUrl: travelInsurancetImg,
  },
];

export const airportsList: Airport[] = [
  {
    airportId: "1",
    airportName: "Indira Gandhi International Airport",
    airportCity: "New Delhi",
    airportCountry: "India",
    airportCode: "DEL",
  },
  {
    airportId: "2",
    airportName: "Chhatrapati Shivaji Maharaj International Airport",
    airportCity: "Mumbai",
    airportCountry: "India",
    airportCode: "BOM",
  },
  {
    airportId: "3",
    airportName: "Rajiv Gandhi International Airport",
    airportCity: "Hyderabad",
    airportCountry: "India",
    airportCode: "HYD",
  },
  {
    airportId: "4",
    airportName: "Chennai International Airport",
    airportCity: "Chennai",
    airportCountry: "India",
    airportCode: "MAA",
  },
  {
    airportId: "5",
    airportName: "Netaji Subhas Chandra Bose International Airport",
    airportCity: "Kolkata",
    airportCountry: "India",
    airportCode: "CCU",
  },
  {
    airportId: "6",
    airportName: "Kempegowda International Airport",
    airportCity: "Bengaluru",
    airportCountry: "India",
    airportCode: "BLR",
  },
  {
    airportId: "7",
    airportName: "Sardar Vallabhbhai Patel International Airport",
    airportCity: "Ahmedabad",
    airportCountry: "India",
    airportCode: "AMD",
  },
  {
    airportId: "8",
    airportName: "Pune Airport",
    airportCity: "Pune",
    airportCountry: "India",
    airportCode: "PNQ",
  },
  {
    airportId: "9",
    airportName: "Goa International Airport",
    airportCity: "Goa",
    airportCountry: "India",
    airportCode: "GOI",
  },
  {
    airportId: "10",
    airportName: "Rajkot Airport",
    airportCity: "Rajkot",
    airportCountry: "India",
    airportCode: "RAJ",
  },
  {
    airportId: "11",
    airportName: "Chaudhary Charan Singh International Airport",
    airportCity: "Lucknow",
    airportCountry: "India",
    airportCode: "LKO",
  },
  {
    airportId: "12",
    airportName: "Jaipur International Airport",
    airportCity: "Jaipur",
    airportCountry: "India",
    airportCode: "JAI",
  },
  {
    airportId: "13",
    airportName: "Sri Guru Ram Dass Jee International Airport",
    airportCity: "Amritsar",
    airportCountry: "India",
    airportCode: "ATQ",
  },
  {
    airportId: "14",
    airportName: "Cochin International Airport",
    airportCity: "Kochi",
    airportCountry: "India",
    airportCode: "COK",
  },
  {
    airportId: "15",
    airportName: "Birsa Munda Airport",
    airportCity: "Ranchi",
    airportCountry: "India",
    airportCode: "IXR",
  },
  {
    airportId: "16",
    airportName: "Guru Ram Das Jee International Airport",
    airportCity: "Amritsar",
    airportCountry: "India",
    airportCode: "ATQ",
  },
  {
    airportId: "17",
    airportName: "Biju Patnaik International Airport",
    airportCity: "Bhubaneswar",
    airportCountry: "India",
    airportCode: "BBI",
  },
  {
    airportId: "18",
    airportName: "Dr. Babasaheb Ambedkar International Airport",
    airportCity: "Nagpur",
    airportCountry: "India",
    airportCode: "NAG",
  },
  {
    airportId: "19",
    airportName: "Visakhapatnam International Airport",
    airportCity: "Visakhapatnam",
    airportCountry: "India",
    airportCode: "VTZ",
  },
  {
    airportId: "20",
    airportName: "Trivandrum International Airport",
    airportCity: "Thiruvananthapuram",
    airportCountry: "India",
    airportCode: "TRV",
  },
  {
    airportId: "21",
    airportName: "Lal Bahadur Shastri International Airport",
    airportCity: "Varanasi",
    airportCountry: "India",
    airportCode: "VNS",
  },
  {
    airportId: "22",
    airportName: "Coimbatore International Airport",
    airportCity: "Coimbatore",
    airportCountry: "India",
    airportCode: "CJB",
  },
  {
    airportId: "23",
    airportName: "Gaya Airport",
    airportCity: "Gaya",
    airportCountry: "India",
    airportCode: "GAY",
  },
  {
    airportId: "24",
    airportName: "Tiruchirappalli International Airport",
    airportCity: "Tiruchirappalli",
    airportCountry: "India",
    airportCode: "TRZ",
  },
  {
    airportId: "25",
    airportName: "Calicut International Airport",
    airportCity: "Kozhikode",
    airportCountry: "India",
    airportCode: "CCJ",
  },
  {
    airportId: "26",
    airportName: "Madurai Airport",
    airportCity: "Madurai",
    airportCountry: "India",
    airportCode: "IXM",
  },
  {
    airportId: "27",
    airportName: "Bagdogra Airport",
    airportCity: "Bagdogra",
    airportCountry: "India",
    airportCode: "IXB",
  },
  {
    airportId: "28",
    airportName: "Lokpriya Gopinath Bordoloi International Airport",
    airportCity: "Guwahati",
    airportCountry: "India",
    airportCode: "GAU",
  },
  {
    airportId: "29",
    airportName: "Rajiv Gandhi Water Aerodrome",
    airportCity: "Mumbai",
    airportCountry: "India",
    airportCode: "RJI",
  },
  {
    airportId: "30",
    airportName: "Jolly Grant Airport",
    airportCity: "Dehradun",
    airportCountry: "India",
    airportCode: "DED",
  },
  {
    airportId: "31",
    airportName: "Veer Savarkar International Airport",
    airportCity: "Port Blair",
    airportCountry: "India",
    airportCode: "IXZ",
  },
  {
    airportId: "32",
    airportName: "Raja Bhoj Airport",
    airportCity: "Bhopal",
    airportCountry: "India",
    airportCode: "BHO",
  },
  {
    airportId: "33",
    airportName: "Bhavnagar Airport",
    airportCity: "Bhavnagar",
    airportCountry: "India",
    airportCode: "BHU",
  },
  {
    airportId: "34",
    airportName: "Vijayawada Airport",
    airportCity: "Vijayawada",
    airportCountry: "India",
    airportCode: "VGA",
  },
  {
    airportId: "35",
    airportName: "Rajahmundry Airport",
    airportCity: "Rajahmundry",
    airportCountry: "India",
    airportCode: "RJA",
  },
  {
    airportId: "36",
    airportName: "Devi Ahilya Bai Holkar Airport",
    airportCity: "Indore",
    airportCountry: "India",
    airportCode: "IDR",
  },
  {
    airportId: "37",
    airportName: "Sri Sathya Sai Airport",
    airportCity: "Puttaparthi",
    airportCountry: "India",
    airportCode: "PUT",
  },
  {
    airportId: "38",
    airportName: "Tirupati Airport",
    airportCity: "Tirupati",
    airportCountry: "India",
    airportCode: "TIR",
  },
  {
    airportId: "39",
    airportName: "Belgaum Airport",
    airportCity: "Belgaum",
    airportCountry: "India",
    airportCode: "IXG",
  },
  {
    airportId: "40",
    airportName: "Shirdi Airport",
    airportCity: "Shirdi",
    airportCountry: "India",
    airportCode: "SAG",
  },
];

export const days: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const months: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
