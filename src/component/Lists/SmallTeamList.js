import React  from 'react';
import {useEffect,useState} from 'react';
import axios from "axios";
let teamId='99';
let hostUrl=process.env.REACT_APP_DATABASE_URL;
function SmallTeamList({teams,setFlag2,setTeamId,setPlayers,setCoaches}) {
  const [selectedStyle, setSelectedStyle] = useState({});
  const activeItem = (id) => {
    setSelectedStyle(prvState => ({
      selectedStyle,
      [id]: !prvState[id]
    }))
  }
  let teamImgSrc;
  return (
     <div className='xl-width100 xl-height100 xl-overflow-auto xl-bg-test0 m-width100 m-height100 m-overflow-auto m-bg-test0 s-width100 s-height100 s-overflow-auto s-bg-test0'>
      {teams.length > 0 && (
        <ul className='xl-width100 xl-display-flex xl-flexWrap-wrap m-width100 m-display-flex m-flexWrap-wrap s-width100 s-display-flex s-flexWrap-wrap'>
          {[...teams].sort((a, b) =>
              a.name > b.name ? 1 : -1,).map((team,index) =>{
            if(team){
              if(team.logo===""){
                teamImgSrc='https://static.thenounproject.com/png/476524-200.png'
              }
              else{
                teamImgSrc=hostUrl+team.logo;
              }
              return <li key={index}  style={{
                backgroundColor: selectedStyle[`${index}`]
                    ? "gray"
                    : "initial"
              }} className='xl-width100 xl-marginT-15 xl-border-black2 xl-pointer xl-bg-test0 m-width100 m-marginT-15 m-border-black2 m-pointer m-bg-test0 s-width100 s-marginT-15 s-border-black2 s-pointer s-bg-test0' onClick={()=>{
                activeItem(index);
                setTeamId(team.teamId);
                teamId=team.teamId;
              setFlag2(true);

                let playerAddress = process.env.REACT_APP_DATABASE_URL+`/Player/DisplayPlayer/FilterByTeam/${teamId}`;
                axios.post(playerAddress).then((response) => {
                  if (response.data === 'not found') {
                    setPlayers('');
                    setCoaches('')
                  } else {
                    setPlayers(response.data.result.filter(item => item.position !== 'Coach'));
                    setCoaches(response.data.result.find(item => item.position === 'Coach'));
                  }}).catch(error=>{
                })
              }}>
                     <div className='xl-width100 xl-height-50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-pointer m-width100 m-height-50 m-display-flex m-justifyContent-center m-alignItems-center m-pointer s-width100 s-height-70 s-display-flex s-justifyContent-center s-alignItems-center s-pointer'>
                      <div className='xl-width90 xl-height100 xl-display-flex xl-justifyContent-start xl-alignItems-center m-width90 m-height100 m-display-flex m-justifyContent-start m-alignItems-center s-width90 s-height100 s-display-flex s-justifyContent-center s-alignItems-center s-flexWrap-wrap'>
                        <div className='xl-width15 xl-height-35 xl-border-black2 xl-overflow-hidden xl-display-flex xl-justifyContent-center xl-alignItems-center m-width15 m-height-35 m-border-black2 m-overflow-hidden m-display-flex m-justifyContent-center m-alignItems-center s-width-30 s-height-35 s-border-black2 s-overflow-hidden s-display-flex s-justifyContent-center s-alignItems-center'>
                          <img className='xl-height100 m-height100 s-height100' src={teamImgSrc}/>
                        </div>
                      <div className='xl-width85 xl-text-center xl-color-white xl-fontSize-12 m-width85 m-text-center m-color-white m-fontSize-12 s-width100 s-text-center s-color-white s-fontSize-12'>{team.name}</div>
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
export default SmallTeamList;