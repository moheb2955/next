import React from 'react';
import { useState } from 'react';
import axios from "axios";
let flag2=false;
function LiveMatchesList() {
  const [data,setData]=useState([]);
  const [name,setName]=useState([]);

  const [selectedStyle, setSelectedStyle] = useState({});
  const activeItem = (id) => {
    setSelectedStyle(prvState => ({
      selectedStyle,
      [id]: !prvState[id]
    }))
  }

  let array1=[];
  let array2=[];

if(flag2==true) {
  for (let i = 0; i < name.length; i++) {
    array1.push(name[i].name);
    array2.push(name[i].logo);

  }}
  let row3=0;
  let row2=0;
  let row4=0;
  let row5=0;
  return (
      <>
    <div className='xl-width100 xl-height100 xl-overflow-auto m-width100 m-height100 m-overflow-auto s-display-none'>
      {data.length-1 > 0 && (
        <ul className='xl-width100 xl-display-flex xl-flexWrap-wrap m-width100 m-display-flex m-flexWrap-wrap s-width100 s-display-flex s-flexWrap-wrap'>
          {data.map((user,index) => (
              <li key={index}  style={{
                backgroundColor: selectedStyle[`${index}`]
                    ? "gray"
                    : "initial"
              }} onClick={()=>{activeItem(index)}} className='xl-width100 xl-marginT-15 xl-bg-test4 m-width100 m-marginT-15 m-bg-test4'>
              <div className='xl-width100 xl-height-60 xl-display-flex xl-justifyContent-between m-width100 m-height-60 m-display-flex m-justifyContent-between'>
                <div className='xl-width-200 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-evenly m-width-100 m-height100 m-display-flex m-alignItems-center m-justifyContent-evenly s-width-100 s-height100 s-display-flex s-alignItems-center s-justifyContent-evenly'>
                  <button className='xl-paddingT-5 xl-paddingB-5 xl-paddingL-15 xl-paddingR-15 xl-paddingL-10 xl-borderR-15 xl-pointer xl-border-black2 m-paddingT-5 m-paddingB-5  m-paddingR-5 m-paddingL-5 m-borderR-10 m-pointer m-border-black2 m-fontSize-10 s-paddingT-5 s-paddingB-5  s-paddingR-5 s-paddingL-5 s-borderR-10 s-pointer s-border-black2 s-fontSize-10'>news</button>
                  <button className='xl-paddingT-5 xl-paddingB-5 xl-paddingL-15 xl-paddingR-15 xl-paddingL-10 xl-borderR-15 xl-pointer xl-border-black2 m-paddingT-5 m-paddingB-5 m-paddingL-10 m-paddingR-10 m-paddingL-5 m-borderR-10 m-pointer m-border-black2 m-fontSize-10 s-paddingT-5 s-paddingB-5 s-paddingL-10 s-paddingR-10 s-paddingL-5 s-borderR-10 s-pointer s-border-black2 s-fontSize-10'>media</button>
                </div>
                <div className='xl-width-750 xl-height100 xl-display-flex xl-justifyContent-between m-width-400 m-height100 m-display-flex m-justifyContent-between s-width-400 s-height100 s-display-flex s-justifyContent-between'>
                  <div className='xl-width-300 xl-height100 xl-display-flex xl-justifyContent-between xl-alignItems-center m-width-300 m-height100 m-display-flex m-justifyContent-between m-alignItems-center s-width-300 s-height100 s-display-flex s-justifyContent-between s-alignItems-center'>
                    <div className='xl-width-40 xl-height-40 xl-borderR50 xl-bg-test3 xl-border-black2 xl-overflow-hidden m-width-30 m-height-30 m-borderR50 m-bg-test3 m-border-black2 m-overflow-hidden s-width-30 s-height-30 s-borderR50 s-bg-test3 s-border-black2 s-overflow-hidden'>
                      <img className='xl-height100 m-height100 s-height100' src={array2[row2++]}/>
                    </div>
                    <div className='xl-bold xl-color-white xl-fontSize-18 xl-text-center m-bold m-color-white m-fontSize-10 m-text-center s-bold s-color-white s-fontSize-10'>{array1[row3++]}</div>
                    <div className='xl-bold xl-color-white xl-fontSize-20 m-bold m-color-white m-fontSize-13 s-color-white s-fontSize-13'>2</div>
                  </div>
                  <div className='xl-width-100 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-bold xl-fontSize-24 xl-color-white xl-marginL-10 xl-marginR-10 m-width-100 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-bold  m-color-white m-marginL-10 m-marginR-10 s-width-100 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-bold s-fontSize-18 s-color-white'>{Math.trunc(Math.random()*79)+10} : {Math.trunc(Math.random()*49+10)}</div>
                  <div className='xl-width-300 xl-height100 xl-display-flex xl-justifyContent-between xl-alignItems-center m-width-300 m-height100 m-display-flex m-justifyContent-between m-alignItems-center s-width-300 s-height100 s-display-flex s-justifyContent-between s-alignItems-center'>
                    <div className='xl-bold xl-color-white xl-fontSize-20 m-bold m-color-white m-fontSize-13 s-bold s-color-white s-fontSize-13'>0</div>
                    <div className='xl-color-white xl-fontSize-18 xl-text-center m-color-white m-fontSize-10 m-text-center s-color-white s-fontSize-10'>{array1[row3]}</div>
                    <div className='xl-width-40 xl-height-40 xl-borderR50 xl-overflow-hidden xl-bg-test3 xl-border-black2 m-width-30 m-height-30 m-borderR50 m-overflow-hidden m-bg-test3 m-border-black2 s-width-30 s-height-30 s-borderR50 s-overflow-hidden s-bg-test3 s-border-black2'>
                      <img className='xl-height100 m-height100 s-height100' src={array2[row2]}/>
                    </div>
                  </div>
                </div>
                <div className='xl-width-100 xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width-100 m-height100 m-display-flex m-justifyContent-center m-alignItems-center s-width-100 s-height100 s-display-flex s-justifyContent-center s-alignItems-center'>
                  <div className='xl-width50 xl-height-40 xl-borderR50 xl-bg-test3 xl-border-black2 m-width50 m-height-40 m-borderR50 m-bg-test3 m-border-black2 s-width50 s-height-40 s-borderR50 s-bg-test3 s-border-black2'>
                    <img />
                  </div>
                </div>
              </div>
              <div className='xl-width100 xl-height-60 xl-display-flex xl-justifyContent-center xl-border-black2 xl-bg-test4 m-width100 m-height-60 m-display-flex m-justifyContent-center m-border-black2 m-bg-test4 s-width100 s-height-60 s-display-flex s-justifyContent-center s-border-black2 s-bg-test4'>
                <div className='xl-width70 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white xl-bold m-width70 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white m-bold s-width70 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white s-bold'>live match report</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>

        <div className='xl-display-none m-display-none s-width100 s-height100 s-overflow-auto '>

          {data.length > 0 && (
              <ul className='s-width100 s-display-flex s-flexWrap-wrap'>

                {data.map((user,index) => (
                    <li key={index}  style={{
                      backgroundColor: selectedStyle[`${index}`]
                          ? "gray"
                          : "initial"
                    }} onClick={()=>{activeItem(index)}} className='s-width100 s-marginT-10 s-border-black2'>
                      <div className='s-width100 s-height-50 s-display-flex s-justifyContent-center'>
                        <div className='s-width-70 s-display-flex s-justifyContent-center s-flexWrap-wrap s-marginT-10'>
                          <div className='s-width-30 s-height-30 s-borderR50 s-bg-test3 s-overflow-hidden s-display-flex s-alignItems-center s-justifyContent-center s-overflow-hidden'>
                            <img className='s-height90' src={array2[row4++]}/>
                          </div>
                          <div className='s-width100 s-display-flex s-justifyContent-center s-fontSize-10 s-color-white s-text-center'>{array1[row5++]}</div>
                        </div>
                        <div className='s-width-25 s-color-white s-fontSize-12 s-marginT-15'>12</div>
                        <div className='s-width-80 s-display-flex s-justifyContent-center s-flexWrap-wrap s-marginT-10 s-marginR-15 s-marginL-15'>
                          <div className='s-width100 s-display-flex s-justifyContent-center s-fontSize-18 s-color-white'>{Math.trunc(Math.random()*79+10)} : {Math.trunc(Math.random()*49+10)}</div>
                        </div>
                        <div className='s-width-25 s-color-white s-fontSize-12 s-marginT-15'>12</div>
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
                      <div className='s-width100 s-height-40 s-display-flex s-justifyContent-center s-alignItems-center s-text-center s-color-white s-fontSize-10 s-custom-border10'>live match report</div>
                    </li>
                ))}
              </ul>
          )}
        </div>
      </>
  )
}
export default LiveMatchesList;