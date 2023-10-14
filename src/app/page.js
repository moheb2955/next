"use client"

import '../CSS/wnt.css';
import React, {useEffect, useRef, useState} from 'react';
import NewsList from "../component/Lists/NewsList";
import translations from "../languages.json";
import axios from "axios";
// import {Link, Navigate, useLocation} from "react-router-dom";
import SlideShow from "./SlideShow";
import ScheduleList from "../component/Lists/ScheduleList.js";
import LeafletMap from "../component/WNT-EYE/WNTeye";
import promiseIMG from '../Images/Promise.png'

let hostUrl=process.env.REACT_APP_DATABASE_URL;
let flag1=true;
let flag2=true;
let flag3=true;
let flag4=true;
let counter=0;
export default function Home() {
  const [loading,setLoading]=useState(true);
  const[newsPageCounter,setNewsPageCounter]=useState(counter);
  const [newsFlag,setNewsFlag]=useState(false);
  const[newsCounter,setNewsCounter]=useState(counter);
  const [newses, setNewses] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [coach, setCoach] = useState([]);
  const location = useLocation();

  let language5;
  if(location.pathname.split('/').length==2){
      language5='en';
  }
  else{
      language5=(location.pathname.split('/')[2]);
  }
  const [language2,setLanguage2] = useState(language5);

      useEffect(() => {
          axios.post(hostUrl + `/content/pages/${language2}/2`).then((res) => {
              setNewses(res.data.filter_data);
              setLoading(false);
          })
      }, [newsPageCounter])

  const topLeagues = translations[language2]['topLeagues'];
  const topTeams = translations[language2]['topTeams'];
  const topPlayers = translations[language2]['topPlayers'];
  const topCoaches = translations[language2]['topCoaches'];
  const lastNews = translations[language2]['lastNews'];
  const lastTransfer = translations[language2]['lastTransfer'];
  const liveMatches = translations[language2]['liveMatches'];
  const lastResults = translations[language2]['lastResults'];
  const elRef = useRef();

  useEffect(()=>{
      axios.post(hostUrl+'/content/Count').then((res)=>{
          setNewsPageCounter(Math.ceil((res.data.count)/5))
      })
      axios.post(hostUrl+"/League/DisplayLeague/FilterByCountry/4").then((response)=>{
              setLeagues(response.data.result);
              flag1=false;
          }
      )
      axios.post(hostUrl+"/Team/DisplayTeam/FilterByLeague/188").then((response)=>{
              setTeams(response.data.result);
              flag2=false;
          }
      )
      axios.post(hostUrl+"/Player/DisplayPlayer/FilterByTeam/88").then((response)=>{
              setPlayers(response.data.result);
              flag3=false;
          }
      )
      axios.post(hostUrl+"/Player/DisplayPlayer/FilterByTeam/26").then((response)=>{
          setCoach(response.data.result);
              flag4=false;
          }
      )
  },[]);

return <div className="">
        <>
          <div className={loading ? '':'xl-display-none m-display-none s-display-none'}>
              <div className='xl-width100 xl-height-100vh xl-display-flex xl-justifyContent-center xl-alignItems-center xl-zIndex-4 m-width100 m-height-100vh m-display-flex m-justifyContent-center m-alignItems-center m-zIndex-4 s-width100 s-height-100vh s-display-flex s-justifyContent-center s-alignItems-center s-zIndex-4'>
                  <div className='xl-width-600 xl-height-400 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width-600 m-height-400 m-display-flex m-justifyContent-center m-alignItems-center s-width-600 s-height-400 s-display-flex s-justifyContent-center s-alignItems-center'>
                      <div className='xl-width-50 xl-height-50 xl-borderR50 m-width-50 m-height-50 m-borderR50 s-width-40 s-height-40 s-borderR50 dot1'></div>
                  </div>
              </div>
          </div>
          <div className={loading ? 'xl-display-none m-display-none s-display-none':''}>
              <SlideShow/>
          <main>
              <h1 className='xl-width100 xl-fontSize-70 xl-text-center xl-marginT-35 xl-bold'>{lastNews}</h1>
              <div className='xl-width100 xl-display-flex xl-justifyContent-center'>
                  <NewsList newses={newses} setNewsCounter={setNewsCounter} newsFlag={newsFlag}/>
              </div>

              <div className='xl-width-1390 xl-display-flex xl-justifyContent-evenly xl-marginT-15 xl-marginB-15 xl-flexWrap-wrap'>
                  <div className='xl-width100 xl-borderR-15 xl-overflow-hidden'>
                      <LeafletMap loading={loading}/>
                  </div>
                  <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginB-10'>
                      <h1 className='xl-height-50 xl-display-flex xl-alignItems-center'>Match Schedules</h1>
                  </div>
                  <div className='xl-width100 xl-boxShadow3 xl-height-500 xl-overflow-hidden xl-borderR-15'>
                      <ScheduleList/>
                  </div>
              </div>
              <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test2 xl-marginB-40 xl-marginT-30'>
                  <img className='xl-width100' src={promiseIMG}/>
              </div>
          </main>
          </div>
      </>
</div>
}
