
import React  from 'react';
import { useEffect, useState } from 'react';
import {Link, useLocation} from "react-router-dom";
import axios from "axios";

let hostUrl=process.env.REACT_APP_DATABASE_URL;

function TeamInternationalCard({teamName,teamStart,teamArea,teamLogo,teamCountry,leagueName,teamCountryLogo}){
    return(
        <>
            <div className='xl-width100 xl-height-500 xl-bg-test xl-borderR-15 xl-position-relative'>

                <div className='xl-width100 xl-position-relative'>
                    <div className='xl-width-50 xl-height-50 xl-overflow-hidden xl-borderR50 xl-position-absolute xl-top--5 xl-right--10 xl-bg-test2 xl-display-flex xl-justifyContent-center xl-alignItems-center'>
                        <img src={teamCountryLogo} className='xl-height100'/>
                    </div>
                </div>
                <div className='xl-width100 xl-display-flex xl-justifyContent-center'>
                    <div className='xl-width-150 xl-height-150 xl-borderR50 xl-display-flex xl-alignItems-end xl-justifyContent-center xl-overflow-hidden xl-marginT-35 xl-marginB-15 xl-position-relative'>
                        <img className='xl-width100 xl-position-absolute xl-top--5' src={hostUrl+teamLogo}/>
                    </div>
                </div>
                <div className='xl-width100 xl-display-flex xl-justifyContent-center'>
                    <button className='xl-paddingB-5 xl-paddingT-5 xl-paddingR-20 xl-paddingL-20 xl-borderR-10 xl-bg-test2 xl-color-white xl-bold xl-fontSize-20 xl-pointer'>Follow</button>
                </div>
                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-color-gray xl-fontSize-20 xl-marginT-15 xl-marginB-10'>{teamName}</div>
                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap'>
                    {teamCountry? <><div className='xl-width45 xl-display-flex xl-color-black xl-justifyContent-end xl-marginT-5 xl-marginB-5'>Country<span className='xl-color-red1 xl-fontSize-18'> : </span></div>
                        <div className='xl-width45 xl-display-flex xl-color-gray xl-justifyContent-start xl-marginT-5 xl-marginB-5'>{teamCountry}</div></>:<></>}
                    {teamArea? <><div className='xl-width45 xl-display-flex xl-color-black xl-justifyContent-end xl-marginT-5 xl-marginB-5'>Area<span className='xl-color-red1 xl-fontSize-18'> : </span></div>
                        <div className='xl-width45 xl-display-flex xl-color-gray xl-justifyContent-start xl-marginT-5 xl-marginB-5'>{teamArea}</div></>:<></>}
                    {leagueName? <><div className='xl-width45 xl-display-flex xl-color-black xl-justifyContent-end xl-marginT-5 xl-marginB-5'>League<span className='xl-color-red1 xl-fontSize-18'> : </span></div>
                        <div className='xl-width45 xl-display-flex xl-color-gray xl-justifyContent-start xl-marginT-5 xl-marginB-5'>{leagueName}</div></>:<></>}
                    {teamStart? <><div className='xl-width45 xl-display-flex xl-color-black xl-justifyContent-end xl-marginT-5 xl-marginB-5'>Since<span className='xl-color-red1 xl-fontSize-18'> : </span></div>
                        <div className='xl-width45 xl-display-flex xl-color-gray xl-justifyContent-start xl-marginT-5 xl-marginB-5'>{teamStart}</div></>:<></>}

                </div>

            </div>
        </>
    )
}

let playerImgSrc;
let flag=true;
let flag2=true;
function TeamFamilyTable({players}){
    const location = useLocation();
    const [language2, setLanguage] = useState(location.pathname.split('/')[2]);
    const [imgErr,setImgErr]=useState(false);
    const handleImageError = (e) => {
        e.target.onerror = null;
        e.target.src = 'https://cdn-icons-png.flaticon.com/512/5524/5524669.png';
    };
    return(
        <>

            {players ? <div className='xl-width100 xl-bg-test xl-borderR-15 xl-overflow-hidden xl-height-450 xl-position-relative m-width100 m-height-660 m-overflow-hidden s-width100 s-height-660 s-overflow-hidden'>

                <div className='xl-width100 xl-height-45 xl-bg-test m-width100 m-height-40 m-bg-test s-width100 s-height-40 s-bg-test'>
                    <ul className='xl-height100 xl-display-flex xl-justifyContent-evenly xl-alignItems-center m-display-flex m-justifyContent-evenly m-alignItems-center s-display-flex s-justifyContent-evenly s-alignItems-center'>
                        <li className='xl-width10 m-width20 s-width15'></li>
                        <li className='xl-width20 xl-fontSize-20 xl-text-center xl-color-black m-width20 m-fontSize-12 m-text-center m-color-white s-width15 s-fontSize-10 s-text-center s-color-white'>Name</li>
                        <li className='xl-width20 xl-fontSize-20 xl-text-center xl-color-black m-width20 m-fontSize-12 m-text-center m-color-white s-width15 s-fontSize-10 s-text-center s-color-white'>Position</li>
                        <li className='xl-width20 xl-fontSize-20 xl-text-center xl-color-black m-width20 m-fontSize-12 m-text-center m-color-white s-width15 s-fontSize-10 s-text-center s-color-white'>National</li>
                        <li className='xl-width20 xl-fontSize-20 xl-text-center xl-color-black m-width20 m-fontSize-12 m-text-center m-color-white s-width15 s-fontSize-10 s-text-center s-color-white'>Contract date</li>
                    </ul>
                </div>
               <div
                  className='xl-width100 xl-height-400 xl-overflow-hidden xl-marginLR-auto xl-overflow-auto xl-marginT-5 m-width100 m-marginLR-auto m-height-550 m-borderTopBottom-white m-overflow-auto m-marginT-5 s-width100 s-marginLR-auto s-height-550 s-marginT-5 s-overflow-auto'>
                  {players.length > 0 && (
                      <ul className='xl-width100 xl-overflow-auto m-width100 m-overflow-auto s-width100 s-overflow-auto'>
                          {[...players].sort((a, b) =>
                              a.name > b.name ? 1 : -1,).map((player, index) => {
                              if (players) {
                                  console.log(player.name)
                                  if (player.photo === "") {
                                      playerImgSrc = 'https://cdn-icons-png.flaticon.com/512/5524/5524669.png';
                                  } else {
                                      playerImgSrc = hostUrl + player.photo;
                                  }
                                  return <li key={index}
                                             className='xl-width100 xl-height-70 xl-marginB-5 xl-display-flex xl-justifyContent-evenly xl-alignItems-center m-width100 m-height-60 m-marginB-5 m-display-flex m-justifyContent-evenly m-alignItems-center s-width100 s-height-60 s-marginB-5 s-display-flex s-justifyContent-evenly s-alignItems-center'>
                                      <Link
                                          className='xl-width100 xl-height-70 xl-marginB-5 xl-display-flex xl-justifyContent-evenly xl-alignItems-center m-width100 m-height-60 m-marginB-5 m-display-flex m-justifyContent-evenly m-alignItems-center s-width100 s-height-60 s-marginB-5 s-display-flex s-justifyContent-evenly s-alignItems-center'
                                          to={'/Players/' + language2 + '/' + player.playerId}>
                                          <div
                                              className='xl-width10 xl-height100 m-width20 s-width20 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width10 m-height100 m-width20 s-width20 m-display-flex m-alignItems-center m-justifyContent-center s-width10 s-height100 m-width20 s-width15 s-display-flex s-alignItems-center s-justifyContent-center'>
                                              <div
                                                  className='xl-width-60 xl-height-60 xl-borderR50 xl-bg-test xl-display-flex xl-alignItems-center xl-justifyContent-center xl-overflow-hidden xl-boxShadow3 m-width-50 m-height-50 m-borderR50 m-bg-test m-display-flex m-alignItems-center m-justifyContent-center m-overflow-hidden m-border-black2 s-width-50 s-height-50 s-borderR50 s-bg-test s-display-flex s-alignItems-center s-justifyContent-center s-overflow-hidden s-border-black2'>
                                                  <img className='xl-width100 m-width90 s-width90' src={playerImgSrc}
                                                       onError={handleImageError}
                                                  />
                                              </div>
                                          </div>
                                          <div
                                              className='xl-width20 xl-height100 xl-fontSize-14 xl-display-flex xl-color-black xl-justifyContent-evenly xl-alignItems-center xl-text-center m-width20 m-display-flex m-justifyContent-center m-alignItems-center m-color-white m-fontSize-12 s-width15 s-fontSize-10 s-display-flex s-justifyContent-center s-alignItems-center s-color-white'>{player.name}</div>
                                          <div
                                              className='xl-width20 xl-height100 xl-fontSize-14 xl-display-flex xl-color-black xl-justifyContent-evenly xl-alignItems-center xl-text-center m-width20 m-display-flex m-justifyContent-center m-alignItems-center m-color-white m-fontSize-12 s-width15 s-fontSize-10 s-display-flex s-justifyContent-center s-alignItems-center s-color-white'>{player.position}</div>
                                          <div
                                              className='xl-width20 xl-height100 xl-fontSize-14 xl-display-flex xl-color-black xl-justifyContent-evenly xl-alignItems-center xl-text-center m-width20 m-display-flex m-justifyContent-center m-alignItems-center m-color-white m-fontSize-12 s-width15 s-fontSize-10 s-display-flex s-justifyContent-center s-alignItems-center s-color-white'>{player.country}</div>
                                          <div
                                              className='xl-width20 xl-height100 xl-fontSize-14 xl-display-flex xl-color-black xl-justifyContent-evenly xl-alignItems-center xl-text-center m-width20 m-display-flex m-justifyContent-center m-alignItems-center m-color-white m-fontSize-12 s-width15 s-fontSize-10 s-display-flex s-justifyContent-center s-alignItems-center s-color-white'>{player.contractEndDate}</div>
                                      </Link>
                                  </li>
                              } else {
                                  return <div>not found</div>
                              }
                          })
                          }
                      </ul>
                  )}
              </div>
          </div>: <div className='xl-width100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-height-700 xl-borderR-15 xl-fontSize-70 xl-color-silver xl-bg-blur1'> Coming soon !</div>}
        </>
    )
}


function TeamProfile({teamName1,teamStart,teamArea,teamLogo,teamCountry,leagueName,venue,players,teamCountryLogo}) {

    const[flag,setFlag]=useState(false);
    const[teamsData,setTeamsData]=useState(false);
    const [searchValue,setSearchValue]=useState(null);
    function searchInDB(e){
        setSearchValue(e.target.value)
        if(e.target.value.length>1){
            axios.post('http://10.3.3.126:3300/search/bar?query='+e.target.value).then((res)=>{
                console.log(res.data);
                setFlag(true);
                setTeamsData(res.data.teams);
            });
        }
        else{
            setFlag(false);
            setTeamsData(null);
        }
    }

  return(
      <>
          <div className='xl-width100 xl-display-flex xl-bg-test xl-borderR-15 xl-overflow-hidden'>
              <input value={searchValue} onChange={searchInDB} type='text' placeholder='Search' className='xl-bg-transparent xl-width100 xl-paddingR-40 xl-paddingL-40 xl-paddingT-10 xl-paddingB-10 xl-fontSize-30 xl-color-black'/>
              <button className='xl-bg-test xl-paddingR-20 xl-paddingL-20 xl-paddingT-10 xl-paddingB-10'><i className='bi bi-search xl-color-black xl-fontSize-34'></i></button>
          </div>
          {flag?
              <div className='xl-width100 xl-position-relative'>
                  <div className=' xl-width100 xl-height-600 xl-bg-test xl-borderR-15 xl-overflow-auto xl-marginT-10 xl-position-absolute xl-zIndex-100'>
                      {teamsData.length>0 ? <div>
                          <h3 className='xl-color-white xl-paddingL-15 xl-paddingT-15 xl-paddingB-15 xl-fontSize-32 xl-bg-test2'>Results</h3>
                          {teamsData.length> 0 && (
                              <ul className='xl-width100'>
                                  {teamsData.map((team,index)=>(
                                      <li key={index} onClick={()=>{
                                          setFlag(false);
                                          window.location.reload(false);
                                      }} className='xl-width100 xl-height-90 xl-marginT-5 xl-marginB-5'><Link to={`/Teams/en/${team.teamId}`} className='xl-width100 xl-height100 xl-display-flex xl-alignItems-center '>
                                          <div className='xl-width-70 xl-height-70 xl-borderR50 xl-overflow-hidden xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test14 xl-marginL-20 xl-marginR-15'>
                                              <img className='xl-width100' src={hostUrl+team.logo}/>
                                          </div>
                                          <div className='xl-fontSize-24 xl-color-white xl-marginL-20'>{team.name}</div></Link></li>
                                  ))
                                  }
                              </ul>
                          )}
                      </div>:<></>}
                  </div>
              </div>
              :<></>}
          <div className='xl-width100 xl-display-flex xl-justifyContent-between xl-marginT-35'>
              <div className='xl-width30 xl-display-flex xl-flexWrap-wrap xl-justifyContent-center m-width100 m-display-flex m-flexWrap-wrap m-justifyContent-center s-width100 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                  <div className='xl-width100 xl-height-500 xl-borderR-15 xl-bg-test m-width100 m-height-300 m-borderTopBottom-white s-width100 s-height-300 s-marginT-15 s-borderTopBottom-white'>
                      <TeamInternationalCard teamCountryLogo={teamCountryLogo} teamName={teamName1} teamStart={teamStart} teamArea={teamArea} teamLogo={teamLogo} teamCountry={teamCountry} leagueName={leagueName}/>
                  </div>
              </div>
              <div className='xl-width62 xl-display-flex xl-borderR-15 xl-justifyContent-center m-width100 m-display-flex m-justifyContent-center s-width100 s-marginT-15 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                  <div className='xl-width100 m-width100 s-width100'>
                      <div className='xl-width100 xl-height-500 xl-borderR-15 xl-bg-test xl-position-relative m-width100 m-marginB-10 s-width100'>
                          <h2 className='xl-height-50 xl-display-flex xl-alignItems-start xl-fontSize-38 xl-display-flex xl-width100 xl-justifyContent-center xl-zIndex-2 xl-bold xl-borderBottom-white'>Players list</h2>
                          <TeamFamilyTable players={players}/>
                      </div>
                  </div>
              </div>
          </div>

      </>
  )
    }
export default TeamProfile;