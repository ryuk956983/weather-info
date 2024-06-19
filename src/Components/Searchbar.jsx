import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import {Link } from 'react-router-dom'

const Searchbar = ({setlatitude , setlongitude,setcurrentLocation}) => {

const [showLocation , setshowLocation] = useState("hidden");
const [searchVal , setsearchVal] = useState("");

const getLocation =()=>{
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(locationSuccess , locationError);
    
  }
}


const locationSuccess = (success)=>{
  setlatitude(success.coords.latitude);
  setlongitude(success.coords.longitude);
  setcurrentLocation("Current Location");
  setshowLocation("hidden");
}

const locationError =(error)=>{
  console.log(error)


}

const stateArray = [
  {
    name: "Andhra Pradesh",
    capital: "Amaravati",
    latitude: 16.5748,
    longitude: 80.3684,
  },
   {
    name: "Arunachal Pradesh",
    capital: "Itanagar",
    latitude: 27.0844,
    longitude: 93.6053,
  },
{
    name: "Assam",
    capital: "Dispur",
    latitude: 26.1445,
    longitude: 91.7362,
  },
  {
    name: "Bihar",
    capital: "Patna",
    latitude: 25.5941,
    longitude: 85.1376,
  },
 {
    name: "Chhattisgarh",
    capital: "Raipur",
    latitude: 21.2514,
    longitude: 81.6296,
  },
  {
    name: "Goa",
    capital: "Panaji",
    latitude: 15.4909,
    longitude: 73.8278,
  },
   {
    name: "Gujarat",
    capital: "Gandhinagar",
    latitude: 23.2156,
    longitude: 72.6369,
  },
   {
    name: "Haryana",
    capital: "Chandigarh",
    latitude: 30.7333,
    longitude: 76.7794,
  },
   {
    name: "Himachal Pradesh",
    capital: "Shimla",
    latitude: 31.1048,
    longitude: 77.1734,
  },
  {
    name: "Jharkhand",
    capital: "Ranchi",
    latitude: 23.3441,
    longitude: 85.3096,
  },
   
   {
    name: "Kerala",
    capital: "Thiruvananthapuram",
    latitude: 8.5241,
    longitude: 76.9366,
  },
   {
    name: "Madhya Pradesh",
    capital: "Bhopal",
    latitude: 23.2599,
    longitude: 77.4126,
  },
   
  {
    name: "Manipur",
    capital: "Imphal",
    latitude: 24.817,
    longitude: 93.9368,
  },
  {
    name: "Maharashtra",
    capital: "Mumbai",
    latitude: 19.076,
    longitude: 72.8777,
  },
  {
    name: "Meghalaya",
    capital: "Shillong",
    latitude: 25.5788,
    longitude: 91.8933,
  },
   {
    name: "Mizoram",
    capital: "Aizawl",
    latitude: 23.1645,
    longitude: 92.9376,
  },
   {
    name: "Nagaland",
    capital: "Kohima",
    latitude: 25.6751,
    longitude: 94.1086,
  },
   {
    name: "Odisha",
    capital: "Bhubaneswar",
    latitude: 20.2961,
    longitude: 85.8245,
  },
   {
    name: "Punjab",
    capital: "Chandigarh",
    latitude: 30.7333,
    longitude: 76.7794,
  },
{
    name: "Rajasthan",
    capital: "Jaipur",
    latitude: 26.9124,
    longitude: 75.7873,
  },
  {
    name: "Sikkim",
    capital: "Gangtok",
    latitude: 27.3314,
    longitude: 88.6138,
  },
   {
    name: "Tamil Nadu",
    capital: "Chennai",
    latitude: 13.0827,
    longitude: 80.2707,
  },
 {
    name: "Telangana",
    capital: "Hyderabad",
    latitude: 17.385,
    longitude: 78.4867,
  },
 {
    name: "Tripura",
    capital: "Agartala",
    latitude: 23.8315,
    longitude: 91.2868,
  },
  {
    name: "Uttar Pradesh",
    capital: "Lucknow",
    latitude: 26.8467,
    longitude: 80.9462,
  },
{
    name: "Uttarakhand",
    capital: "Dehradun",
    latitude: 30.3165,
    longitude: 78.0322,
  },
  {
    name: "West Bengal",
    capital: "Kolkata",
    latitude: 22.5726,
    longitude: 88.3639,
  },
  {
    name: "Karnataka",
    capital: "Bengaluru",
    latitude: 12.9716,
    longitude: 77.5946,
  },

];

const stateArray2 =[
  {
    name: "Dadra & Nagar Haveli",
    capital: "Daman",
    latitude: 20.3974,
    longitude: 72.8328,
  },
  
  {
    name: "J&K",
    capital: "Srinagar",
    latitude: 34.0837,
    longitude: 74.7973,
  },
  {
    name: "Ladakh",
    capital: "Leh",
    latitude: 34.1526,
    longitude: 77.577,
  },
  {
    name: "Chandigarh",
    capital: "Chandigarh",
    latitude: 30.7333,
    longitude: 76.7794,
  },
  {
    name: "Delhi",
    capital: "New Delhi",
    latitude: 28.6139,
    longitude: 77.209,
  },
  {
    name: "Puducherry",
    capital: "Puducherry",
    latitude: 11.9416,
    longitude: 79.8083,
  },
  {
    name: "Lakshadweep",
    capital: "Kavaratti",
    latitude: 10.5667,
    longitude: 72.6369,
  },
  
  {
    name: "A & N Islands",
    capital: "Port Blair",
    latitude: 11.6234,
    longitude: 92.7265,
  },
  
  
  
]

const [showList , setshowList]  = useState(false);
 
const combinedArray =[...stateArray,...stateArray2]

const changecoordsSearch =(el)=>{
  setlatitude(el.latitude);
  setlongitude(el.longitude);
  setcurrentLocation(el.capital);
  setsearchVal("");
  setshowList(false);
}


  return (
    <div className={`w-full bg-greyBlue rounded-xl h-fit flex p-2 gap-2 relative ${showList && "rounded-b-none"}`} >
     <div className='w-[82%] '>
     <input type="text" onChange={(e)=>{setsearchVal(e.target.value)}} onClick={()=>{setshowList(!showList)}} value={searchVal} className='inputSearch w-full p-2 bg-transparent text-white outline-none lowercase' placeholder='Search'  />
     <div className={`absolute bg-greyBlue w-full z-10 mt-2 rounded-xl left-0 rounded-t-none ${!showList && "hidden" } max-h-[90vh] overflow-auto`}>
     
     <ul className='overflow-auto h-full'>
       {
        combinedArray.filter( val =>  ((val.name.toLowerCase().includes(searchVal)) || (val.capital.toLowerCase().includes(searchVal)))).map((el,ind)=>(
         <Link to="/" onClick={()=>{changecoordsSearch(el)}} key={ind}><li className='text-xl p-3' key={ind}>{el.capital}<span className='text-textGrey'> / {el.name}</span></li> </Link>
        ))
      }
      </ul>
     </div>
     </div>
     <div className={` bg-backBlue rounded-xl  md:px-4  px-2 cursor-pointer md:rounded-full`} onClick={getLocation}><Link to={"/"} className='flex gap-2 items-center h-full'><FaLocationDot /><span  className='md:hidden'>Current location</span></Link></div>
     
    </div>
  )
}

export default Searchbar