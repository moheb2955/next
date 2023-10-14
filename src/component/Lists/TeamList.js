import React  from 'react';
import {useState} from 'react';
import {Link, useLocation} from "react-router-dom";
let hostUrl=process.env.REACT_APP_DATABASE_URL;
function TeamList({teams,setPlayers,setCoach}) {
  const [selectedStyle, setSelectedStyle] = useState({});
  const activeItem = (id) => {
    setSelectedStyle(prvState => ({
      selectedStyle,
      [id]: !prvState[id]
    }))
  }
  let teamImgSrc;
  const location = useLocation();
  let language5;
  if(location.pathname.split('/').length==2){
    language5='en';
  }
  else{
    language5=(location.pathname.split('/')[2]);
  }
  const [language2, setLanguage] = useState(language5);
  return (
        <div className='xl-width100 xl-height100 xl-overflow-hidden m-width100 m-height100 m-overflow-hidden s-width100 s-height100 s-overflow-hidden'>
      {teams.length > 0 && (
              <ul className='xl-width100 xl-marginT-10 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap m-width100 m-display-flex m-flexWrap-wrap m-width100 s-width100 s-display-flex s-flexWrap-wrap s-width100'>
                {[...teams].sort((a, b) =>
                    a.name > b.name ? 1 : -1,).map((team,index) =>{
                  if(team){
                    if(team.logo===""){
                      teamImgSrc='https://static.thenounproject.com/png/476524-200.png'
                    }
                    else{
                      teamImgSrc=hostUrl+team.logo;
                    }
                    if(teams==''){
                      setPlayers('');
                      setCoach('')
                    }
                    return <li key={index} className='xl-width95 xl-pointer m-width100 m-pointer s-width100 blur'>
                      <Link to={`/Teams/${language2}/${team.teamId}`} className='xl-width100 xl-height-80 xl-display-flex xl-justifyContent-between m-width100 m-height-70 m-display-flex m-justifyContent-between s-width100 s-height-70 s-display-flex s-justifyContent-between s-flexWrap-wrap'>
                        <div className='xl-width15 xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width20 m-height100 m-display-flex m-justifyContent-center m-alignItems-center s-width100 s-height50 s-display-flex s-justifyContent-center s-alignItems-center s-flexWrap-wrap'>
                          <div className='xl-width-50 xl-height-50 xl-borderR-15 xl-bg-test13 xl-overflow-hidden xl-display-flex xl-position-relative xl-justifyContent-center xl-alignContent-center m-width-40 m-height-40 m-borderR-10 m-overflow-hidden m-display-flex m-justifyContent-center m-alignContent-center s-width100 s-height-30 s-overflow-hidden s-display-flex s-justifyContent-center s-alignContent-center'>
                            <img className='xl-height100 m-height100 s-height100' src={teamImgSrc}/>
                          </div>
                        </div>
                        <div className='xl-width85 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-start m-width80 m-height100 m-display-flex m-alignItems-center m-justifyContent-start s-width100 s-height50 s-display-flex s-flexWrap-wrap s-alignItems-center s-justifyContent-start'>
                          <div className='xl-width40 xl-color-white m-width50 m-color-white m-fontSize-12 s-width100 s-color-white s-fontSize-14 s-text-center'>{team.name}</div>
                          <div className='xl-width-25 xl-height-25 xl-borderR-10 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflow-hidden m-width-25 m-display-flex m-justifyContent-center m-alignItems-center m-height-25 m-borderR-15 m-overflow-hidden s-display-none'>
                            <img className='xl-height100 m-height100 s-height100' src='https://db.wincent.studio/LogoDB/NationalLogo/4.png'/>
                          </div>
                          <div className='xl-width20 xl-fontSize-13 xl-marginL-10 xl-color-white m-width20 m-fontSize-10 m-marginL-10 m-color-white s-display-none'>{team.country}</div>
                        </div>
                      </Link>

                </li>
                  }
                })
                }
        </ul>
      )}
    </div>
  )
    }
export default TeamList;