import React, {useEffect} from 'react';
import { useState } from 'react';
import axios from "axios";
let flag2=false;
function ScheduleList() {


    const [selectedStyle, setSelectedStyle] = useState({});
    const activeItem = (id) => {
        setSelectedStyle(prvState => ({
            selectedStyle,
            [id]: !prvState[id]
        }))
    }

    const [schedule,setSchedule]=useState([]);
    useEffect(()=>{
        axios.post('https://db.wincent.studio/Schedule/188').then((response)=> {
            setSchedule(response.data.filter_data[0].data);
        })
    },[])

  return (
      <>
          <div className='xl-width100 xl-height100 xl-overflow-auto xl-boxShadow3 m-width100 m-height100 m-overflow-auto s-display-none'>
              {schedule.length > 0 && (
                  <ul className='xl-width100 xl-display-flex xl-flexWrap-wrap m-width100 m-display-flex m-flexWrap-wrap s-width100 s-display-flex s-flexWrap-wrap' >
                      {schedule.map((user,index) => (
                          <li key={index}  className='xl-width100 xl-marginT-10  xl-borderR-15 m-width100 m-marginT-10 m-border-black2 m-bg-test4'>
                              <div className='xl-width100 xl-height-50 xl-display-flex xl-justifyContent-between m-width100 m-height-50 m-display-flex m-justifyContent-between' onClick={()=>{
                                  console.log(schedule[index].matchId)
                              }}>
                                  <div className='xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-center m-height100 m-display-flex m-justifyContent-center m-alignItems-center s-height100 s-display-flex s-justifyContent-center s-alignItems-center'>
                                      <div className='xl-display-flex xl-alignItems-center xl-justifyContent-center xl-paddingT-5 xl-paddingB-5 xl-paddingL-10 xl-paddingR-10 xl-fontSize-18 xs-color-black m-display-flex m-alignItems-center m-justifyContent-center m-paddingT-5 m-paddingB-5 m-paddingL-10 m-paddingR-10 m-fontSize-13 s-color-black s-display-flex s-alignItems-center s-justifyContent-center s-paddingT-5 s-paddingB-5 s-paddingL-10 s-paddingR-10 s-fontSize-13 s-color-black'>{schedule[index].location}</div>
                                  </div>
                                  <div className='xl-width70 xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width55 m-height100 m-display-flex m-justifyContent-center m-alignItems-center s-width55 s-height100 s-display-flex s-justifyContent-center s-alignItems-center'>
                                      <div className='xl-width45 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-end m-width45 m-height100 m-display-flex m-alignItems-center m-justifyContent-center s-width45 s-height100 s-display-flex s-alignItems-center s-justifyContent-center'>
                                          <div className='xl-fontSize-12 xs-color-black xl-marginL-10 m-fontSize-10 s-color-black m-marginL-10 s-fontSize-10 s-color-black s-marginL-10 xl-marginR-15'>{schedule[index].homeName}</div>
                                          <div className='xl-width-40 xl-height-40 xl-borderR50 m-width-30 m-height-30 m-borderR50 m-border-black2 s-width-30 s-height-30 s-borderR50 s-border-black2 s-bg-test3' title='club logo'>
                                              <img className='xl-height100 m-height100 s-height100' src={'https://db.wincent.studio/LogoDB/TeamLogo/'+schedule[index].homeId+'.png'}/>
                                          </div>
                                      </div>
                                      <div className='xl-width10 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width10 m-height100 m-display-flex m-alignItems-center m-justifyContent-center' >
                                          <div className='xl-width-40 xl-height-40 xl-display-flex xl-justifyContent-center xl-alignItems-center xs-color-black xl-fontSize-20 m-width-30 m-height-30 m-display-flex m-justifyContent-center m-alignItems-center s-color-black m-fontSize-20 s-width-30 s-height-30 s-borderR50 s-border-black2 s-bg-test3'>
                                              vs
                                          </div>
                                      </div>
                                      <div className='xl-width45 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-start m-width45 m-height100 m-display-flex m-alignItems-center m-justifyContent-center s-width45 s-height100 s-display-flex s-alignItems-center s-justifyContent-center'>
                                          <div className='xl-width-40 xl-height-40 xl-borderR50 m-width-30 m-height-30 m-borderR50 m-border-black2 s-width-30 s-height-30 s-borderR50 s-border-black2 s-bg-test3' title='club logo'>
                                              <img className='xl-height100 m-height100 s-height100' src={'https://db.wincent.studio/LogoDB/TeamLogo/'+schedule[index].awayId+'.png'}/>
                                          </div>
                                          <div className='xl-fontSize-12 xl-color-black xl-marginL-15 xl-marginR-10 m-fontSize-10 s-color-black m-marginR-10 s-fontSize-10 s-color-black s-marginR-10 '>{schedule[index].awayName}</div>

                                      </div>
                                  </div>
                              </div>
                          </li>
                      ))}
                  </ul>
              )}
          </div>
    </>
  )
}
export default ScheduleList;



