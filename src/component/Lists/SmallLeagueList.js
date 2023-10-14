import React  from 'react';
import {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

let teamId='';
let hostUrl=process.env.REACT_APP_DATABASE_URL;
function SmallLeagueList({leagues,setTeams,setLeagueId,setFlag2,setPlayers,setCoach}) {
  const [selectedStyle, setSelectedStyle] = useState({});
  const history = useNavigate();
  function handleClick() {
    history.push(Math.random());
  }
  const activeItem = (id) => {
    setSelectedStyle(prvState => ({
      selectedStyle,
      [id]: !prvState[id]
    }))
  }
  let leagueImgSrc;
  return (
    <div className='xl-width100 xl-height100 xl-overflow-auto xl-bg-test0 m-width100 m-height100 m-overflow-auto m-bg-test0 s-width100 s-height100 s-overflow-auto s-bg-test0' >
      {leagues.length > 0 && (
        <ul className='xl-width100 xl-display-flex xl-flexWrap-wrap m-width100 m-display-flex m-flexWrap-wrap s-width100 s-display-flex s-flexWrap-wrap'>
          {[...leagues].sort((a, b) =>
              a.name > b.name ? 1 : -1,).map((league,index) =>{
            if(league){
              if(league.logo===" "){
                leagueImgSrc='https://cdn-icons-png.flaticon.com/512/2629/2629318.png'
              }
              else{
                leagueImgSrc=hostUrl+league.logo;
              }
              return <li key={index} style={{
                backgroundColor: selectedStyle[`${index}`]
                    ? "gray"
                    : "initial"
              }} className='xl-width100 xl-marginT-15 xl-border-black2 xl-pointer xl-bg-test0 m-width100 m-marginT-15 m-border-black2 m-pointer m-bg-test0 s-width100 s-marginT-15 s-border-black2 s-pointer s-bg-test0'  onClick={()=>{
                activeItem(index);
                 teamId=league.leagueId;
                 setLeagueId(league.leagueId);
                setFlag2(true);
                setPlayers('');
                setCoach('');
                 let teamAddress = process.env.REACT_APP_DATABASE_URL+`/Team/DisplayTeam/FilterByLeague/${teamId}`;
                 axios.post(teamAddress).then((response) => {
                   if(response.data!=='not found'){
                  setTeams(response.data.result);}
                 else{
                     setTeams('')
                   }
                 }
                 )
              } }>
                     <div className='xl-width100 xl-height-50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-pointer m-width100 m-height-50 m-display-flex m-justifyContent-center m-alignItems-center m-pointer s-width100 s-height-70 s-display-flex s-justifyContent-center s-alignItems-center s-pointer'>
                      <div className='xl-width90 xl-height100 xl-display-flex xl-justifyContent-start xl-alignItems-center m-width90 m-height100 m-display-flex m-justifyContent-start m-alignItems-center s-width90 s-height100 s-display-flex s-justifyContent-center s-alignItems-center s-flexWrap-wrap'>
                        <div className='xl-width15 xl-height-35 xl-border-black2 xl-overflow-hidden xl-display-flex xl-justifyContent-center xl-alignItems-center m-width15 m-height-35 m-border-black2 m-overflow-hidden m-display-flex m-justifyContent-center m-alignItems-center s-width-30 s-height-35 s-border-black2 s-overflow-hidden s-display-flex s-justifyContent-center s-alignItems-center'>
                          <img className='xl-height100 m-height100 s-height100' src={leagueImgSrc}/>
                        </div>
                      <div className='xl-width85 xl-text-center xl-color-white xl-fontSize-12 m-width85 m-text-center m-color-white m-fontSize-12 s-width100 s-text-center s-color-white s-fontSize-12' >{league.name}</div>
                      </div>
                      </div>
                </li>
            }
          })
          }
        </ul>
      )}
    </div>
  )
}
export default SmallLeagueList;



