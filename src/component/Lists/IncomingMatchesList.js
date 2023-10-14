import React from 'react';
import DemoModal from "../DemoModal";
import { useEffect, useState } from 'react';
let flag2=false;
function IncomingMatchesList() {

    const [selectedStyle, setSelectedStyle] = useState({});
    const activeItem = (id) => {
        setSelectedStyle(prvState => ({
            selectedStyle,
            [id]: !prvState[id]
        }))
    }

    const [data,setData]=useState([]);
    const [name,setName]=useState([]);
    const [leagueLogo,setLeagueLogo]=useState([]);

    let array1=[]
    let array2=[]
    const getData=()=>{
      fetch('188.json').then(function(response){
        return response.json()
      }).then(function(myJson) {
        setData(myJson.data.totalStandings);
        setName(myJson.data.teamInfos);
        setLeagueLogo(myJson.data.leagueInfo.logo)
        flag2=true
      })}
    if(flag2==true) {
      for (let i = 0; i < name.length; i++) {
        array1.push(name[i].name);
        array2.push(name[i].logo);
      }
    }

    let row3=0;
    let row2=0;
    let row4=0;
    let row5=0;
    useEffect(()=>{
      getData()
    },[])
  return (
    <>
    <div className='xl-width100 xl-height100 xl-overflow-auto m-width100 m-height100 m-overflow-auto s-display-none'>
      {data.length > 0 && (
        <ul className='xl-width100 xl-display-flex xl-flexWrap-wrap m-width100 m-display-flex m-flexWrap-wrap s-width100 s-display-flex s-flexWrap-wrap'>
          {data.map((user,index) => (
            <li key={index}  style={{
                backgroundColor: selectedStyle[`${index}`]
                    ? "gray"
                    : "initial"
            }} onClick={()=>{activeItem(index)}} className='xl-width100 xl-marginT-10 xl-border-black2 xl-bg-test4 m-width100 m-marginT-10 m-border-black2 m-bg-test4'>
              <div className='xl-width100 xl-height-50 xl-display-flex xl-justifyContent-between m-width100 m-height-50 m-display-flex m-justifyContent-between '>
                <div className='xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-center m-height100 m-display-flex m-justifyContent-center m-alignItems-center s-height100 s-display-flex s-justifyContent-center s-alignItems-center'>
                  <div className='xl-display-flex xl-alignItems-center xl-justifyContent-center xl-paddingT-5 xl-paddingB-5 xl-paddingL-10 xl-paddingR-10 xl-fontSize-18 xl-color-white m-display-flex m-alignItems-center m-justifyContent-center m-paddingT-5 m-paddingB-5 m-paddingL-10 m-paddingR-10 m-fontSize-13 m-color-white s-display-flex s-alignItems-center s-justifyContent-center s-paddingT-5 s-paddingB-5 s-paddingL-10 s-paddingR-10 s-fontSize-13 s-color-white'>sunday 17/1/2021_18:30</div>
                </div>
                <div className='xl-width55 xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width55 m-height100 m-display-flex m-justifyContent-center m-alignItems-center s-width55 s-height100 s-display-flex s-justifyContent-center s-alignItems-center'>
                  <div className='xl-width45 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width45 m-height100 m-display-flex m-alignItems-center m-justifyContent-center s-width45 s-height100 s-display-flex s-alignItems-center s-justifyContent-center'>
                    <div className='xl-width-40 xl-height-40 xl-borderR50 xl-border-black2 xl-bg-test3 m-width-30 m-height-30 m-borderR50 m-border-black2 m-bg-test3 s-width-30 s-height-30 s-borderR50 s-border-black2 s-bg-test3' title='club logo'>
                      <img className='xl-height100 m-height100 s-height100' src={array2[row2++]}/>
                    </div>
                    <div className='xl-fontSize-18 xl-color-white xl-marginL-10 m-fontSize-10 m-color-white m-marginL-10 s-fontSize-10 s-color-white s-marginL-10'>{array1[row3++]}</div>
                  </div>
                  <div className='xl-width10 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width10 m-height100 m-display-flex m-alignItems-center m-justifyContent-center' >
                    <div className='xl-width-40 xl-height-40 xl-borderR50 xl-border-black2 xl-bg-test3 m-width-30 m-height-30 m-borderR50 m-border-black2 m-bg-test3 s-width-30 s-height-30 s-borderR50 s-border-black2 s-bg-test3' title='league logo'>
                        <img className='xl-height100 m-height100 s-height100' src={leagueLogo}/>
                    </div>
                  </div>
                  <div className='xl-width45 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width45 m-height100 m-display-flex m-alignItems-center m-justifyContent-center s-width45 s-height100 s-display-flex s-alignItems-center s-justifyContent-center'>
                    <div className='xl-fontSize-18 xl-color-white xl-marginR-10 m-fontSize-10 m-color-white m-marginR-10 s-fontSize-10 s-color-white s-marginR-10'>{array1[row3]}</div>
                    <div className='xl-width-40 xl-height-40 xl-borderR50 xl-border-black2 xl-bg-test3 m-width-30 m-height-30 m-borderR50 m-border-black2 m-bg-test3 s-width-30 s-height-30 s-borderR50 s-border-black2 s-bg-test3' title='club logo'>
                      <img className='xl-height100 m-height100 s-height100' src={array2[row2]}/>
                    </div>
                  </div>
                </div>
                <div className='xl-width20 xl-height100 xl-display-flex xl-justifyContent-evenly xl-alignItems-center m-width20 m-height100 m-display-flex m-justifyContent-evenly m-alignItems-center s-width20 s-height100 s-display-flex s-justifyContent-evenly s-alignItems-center'>
                  <button className='xl-borderR-15 xl-paddingT-5 xl-paddingB-5 xl-paddingR-10 xl-paddingL-10 xl-bold xl-pointer m-borderR-15 m-paddingT-5 m-paddingB-5 m-paddingR-10 m-paddingL-10 m-pointer m-fontSize-10 s-borderR-15 s-paddingT-5 s-paddingB-5 s-paddingR-10 s-paddingL-10 s-pointer s-fontSize-10'>news</button>
                  <button className='xl-borderR50 xl-paddingT-5 xl-paddingB-5 xl-paddingR-10 xl-paddingL-10 xl-bold xl-pointer m-borderR50 m-paddingT-5 m-paddingB-5 m-paddingR-5 m-paddingL-5 m-pointer m-fontSize-10  s-borderR50 s-paddingT-5 s-paddingB-5 s-paddingR-5 s-paddingL-5 s-pointer s-fontSize-10'>media</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
        <DemoModal/>
    </div>


    <div className='xl-display-none m-display-none s-width100 s-height100 s-overflow-auto'>
        {data.length > 0 && (
            <ul className='s-width100 s-display-flex s-flexWrap-wrap'>
                {data.map((user,index) => (
                    <li key={index}  style={{
                        backgroundColor: selectedStyle[`${index}`]
                            ? "gray"
                            : "initial"
                    }} className='s-width100 s-marginT-10 s-border-black2' onClick={()=>{activeItem(index)}}>
                        <div className='s-width100 s-height-30 s-display-flex s-justifyContent-evenly s-alignItems-center s-text-center s-fontSize-12 s-color-white'>
                            sunday 17/1/2021_18:30
                        </div>
                        <div className='s-width100 s-height-50 s-display-flex s-justifyContent-evenly'>
                            <div className='s-width-70 s-display-flex s-justifyContent-center s-flexWrap-wrap s-marginT-10'>
                                <div className='s-width-30 s-height-30 s-borderR50 s-bg-test3 s-overflow-hidden s-display-flex s-alignItems-center s-justifyContent-center s-overflow-hidden'>
                                    <img className='s-height90' src={array2[row4++]}/>
                                </div>
                                <div className='s-width100 s-display-flex s-justifyContent-center s-fontSize-10 s-color-white s-text-center'>{array1[row5++]}</div>
                            </div>
                            <div className='s-width-80 s-display-flex s-justifyContent-center s-flexWrap-wrap s-marginT-10 s-marginR-15 s-marginL-15'>
                                <div className='s-width-40 s-height-40 s-borderR50 s-bg-test3 s-overflow-hidden s-display-flex s-alignItems-center s-justifyContent-center s-overflow-hidden'>
                                    <img className='s-height90' src={leagueLogo}/>
                                </div>
                                <div className='s-width100 s-display-flex s-justifyContent-center s-fontSize-10 s-color-white'></div>
                            </div>
                            <div className='s-width-70 s-display-flex s-justifyContent-center s-flexWrap-wrap s-marginT-10'>
                                <div className='s-width-30 s-height-30 s-borderR50 s-bg-test3 s-overflow-hidden s-display-flex s-alignItems-center s-justifyContent-center s-overflow-hidden'>
                                    <img className='s-height90' src={array2[row4]}/>
                                </div>
                                <div className='s-width100 s-display-flex s-justifyContent-center s-fontSize-10 s-color-white s-text-center'>{array1[row5]}</div>
                            </div>
                        </div>
                        <div className='s-width100 s-display-flex s-justifyContent-center s-marginT-30'>
                            <button className='s-marginB-10 s-bg-test3 s-borderR-10 s-fontSize-10 s-color-black s-paddingL-10 s-paddingB-5 s-paddingR-10 s-paddingT-5 s-marginR-10'>new</button>
                            <button className='s-marginB-10 s-bg-test3 s-borderR-10 s-fontSize-10 s-color-black s-paddingL-10 s-paddingB-5 s-paddingR-10 s-paddingT-5 s-marginL-10'>media</button>
                        </div>
                    </li>
                ))}
            </ul>
        )}
    </div>
    </>
  )
}
export default IncomingMatchesList;



