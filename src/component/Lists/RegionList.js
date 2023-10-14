import React  from 'react';
import {useEffect,useState} from 'react';
import axios from "axios";

let countryId='';
let hostUrl=process.env.REACT_APP_DATABASE_URL;

function RegionList({setLeagues ,setTeams,setPlayers,setCoach}) {
  const [selectedStyle, setSelectedStyle] = useState({});
  const activeItem = (id) => {
    setSelectedStyle(prvState => ({
      selectedStyle,
      [id]: !prvState[id]
    }))
  }
  const [countries, setcountries] = useState([]);
  const baseURL = process.env.REACT_APP_DATABASE_URL+"/Country/DisplayCountry";
  useEffect(() => {
    axios.post(`${baseURL}`).then((response) => {
      setcountries(response.data.filter_data);
    });
  }, []);
  return (
    <div className='xl-width100 xl-height100 xl-overflow-auto m-width100 m-height100 m-overflow-auto s-width100 s-height100 s-overflow-auto'>
      {countries.length > 0 && (
        <ul className='xl-width100 xl-display-flex xl-flexWrap-wrap m-width100 m-display-flex m-flexWrap-wrap s-width100 s-display-flex s-flexWrap-wrap'>
          {[...countries].sort((a, b) =>
              a.country > b.country ? 1 : -1,).map((country,index) => (
              <li onClick={()=>{
                activeItem(index);
                setTeams('');
                setPlayers('');
                setCoach('');
                countryId=country.countryId;
              let baseURL2 = process.env.REACT_APP_DATABASE_URL+`/League/DisplayLeague/FilterByCountry/${countryId}`;
                axios.post(baseURL2).then((response) => {
                  let data=response.data.result;
                    setLeagues(data);
                }).catch(()=>{
                  setLeagues([])
                  console.log('this country has no leagues')
                });
              }} key={index}  style={{
                backgroundColor: selectedStyle[`${index}`]
                    ? "gray"
                    : "initial"
              }} className='xl-width100 xl-marginT-10 xl-border-black2 m-width100 m-marginT-10 m-border-black2 s-width100 s-marginT-10 s-border-black2'>
                  <div className='xl-width100 xl-height-50 xl-display-flex xl-justifyContent-start xl-alignItems-center xl-pointer m-width100 m-height-50 m-display-flex m-justifyContent-start m-alignItems-center m-pointer s-width100 s-height-70 s-display-flex s-justifyContent-start s-alignItems-center s-pointer'>
                    <div className='xl-width90 xl-height100 xl-display-flex xl-justifyContent-start xl-alignItems-center m-width90 m-height100 m-display-flex m-justifyContent-start m-alignItems-center s-width100 s-height100 s-display-flex s-justifyContent-start s-alignItems-center s-flexWrap-wrap'>
                      <div className=' xl-height-40 xl-marginL-15 xl-borderR50 xl-overflow-hidden xl-display-flex xl-justifyContent-center xl-alignItems-center m-height-30 m-marginL-15 m-borderR50 m-overflow-hidden m-display-flex m-justifyContent-center m-alignItems-center s-height-30 s-marginL-15 s-borderR50 s-overflow-hidden s-display-flex s-justifyContent-center s-alignItems-center s-width100'>
                        <img className='xl-height100 m-height100 s-height100 s-borderR50' src={hostUrl+country.logo}/>
                      </div>
                    <div className='xl-width85 xl-marginL-15 xl-color-white xl-text-center m-width85 m-marginL-15 m-color-white m-text-center m-fontSize-12 s-width100 s-L-15 s-color-white s-text-center s-fontSize-14'>{country.country}</div>
                    </div>
                  </div>
              </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default RegionList;