import React, {useEffect, useRef, useState} from "react";

import axios from "axios";
import image1 from '../Images/Banners/Banner1.png';
import image2 from '../Images/Banners/Banner2.png';
import image3 from '../Images/Banners/Banner3.png';
import image4 from '../Images/Banners/Banner4.png';
import image5 from '../Images/Banners/Banner5.png';

let counter=0;
function SlideShow(){
    const [bannerCounter,setBannerCounter]=useState(counter);
    let bannerArray=[image1, image2,image3,image4,image5];

    // window.addEventListener('load', handleResize)
    const[flag1,setFlag1]=useState(true);
    const[flag2,setFlag2]=useState(false);
    const[flag3,setFlag3]=useState(false);
    const[flag4,setFlag4]=useState(false);
    const[flag5,setFlag5]=useState(false);

    useEffect(()=>{
        if(counter==0){
            setFlag1(true);
            setFlag2(false);
            setFlag3(false);
            setFlag4(false);
            setFlag5(false);
        }
        else if(counter==1){
            setFlag1(false);
            setFlag2(true);
            setFlag3(false);
            setFlag4(false);
            setFlag5(false);
        }
        else if(counter==2){
            setFlag1(false);
            setFlag2(false);
            setFlag3(true);
            setFlag4(false);
            setFlag5(false);
        }
        else if(counter==3){
            setFlag1(false);
            setFlag2(false);
            setFlag3(false);
            setFlag4(true);
            setFlag5(false);
        }
        else{
            setFlag1(false);
            setFlag2(false);
            setFlag3(false);
            setFlag4(false);
            setFlag5(true);
        }
    },[counter])
    return(
        <>
                <div className='xl-position-relative xl-width100 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflow-hidden'>
                    <img className='xl-width100 bannerAnimate  xl-zIndex--2' src={bannerArray[bannerCounter]}/>
                    <div className='xl-position-absolute xl-width100 xl-height-60
                xl-display-flex xl-justifyContent-between xl-position-absolute'>
                        <button className='xl-paddingR-15 xl-paddingT-10 xl-paddingL-15 xl-paddingB-10 xl-pointer xl-bg-blur1 xl-borderR-15 xl-color-black xl-display-flex xl-justifyContent-center xl-alignItems-center xl-marginL-10' onClick={()=>{
                            if(counter>0){
                                counter--;
                            }
                            else{
                                counter=bannerArray.length-1;
                            }
                            setBannerCounter(counter);
                        }}><i className="bi bi-caret-left-fill xl-fontSize-26"></i></button>
                        <button className='xl-paddingR-15 xl-paddingT-10 xl-paddingL-15 xl-paddingB-10 xl-pointer xl-bg-blur1 xl-borderR-15 xl-color-black xl-display-flex xl-justifyContent-center xl-alignItems-center xl-marginR-10' onClick={()=>{
                            if(counter<bannerArray.length-1){
                                counter++;
                            }
                            else{
                                counter=0;
                            }
                            setBannerCounter(counter);
                        }}><i className="bi bi-caret-right-fill xl-fontSize-26"></i></button>
                    </div>
                    <div className='xl-position-absolute xl-width100 xl-height-100 xl-bottom-10
                xl-display-flex xl-justifyContent-center xl-alignItems-center xl-position-absolute'>
                        <div className='xl-width-300 xl-display-flex xl-justifyContent-evenly'>
                            <button className={flag1 ? 'xl-width-30 xl-height-30 xl-borderR50 xl-bg-blur1 xl-pointer' : 'xl-width-30 xl-height-30 xl-borderR50 xl-bg-blur2 xl-pointer'} onClick={()=>{
                                counter=0;
                                setBannerCounter(counter);
                            }}></button>
                            <button className={flag2 ? 'xl-width-30 xl-height-30 xl-borderR50 xl-bg-blur1 xl-pointer' : 'xl-width-30 xl-height-30 xl-borderR50 xl-bg-blur2 xl-pointer'} onClick={()=>{
                                counter=1;
                                setBannerCounter(counter);
                            }}></button>
                            <button className={flag3 ? 'xl-width-30 xl-height-30 xl-borderR50 xl-bg-blur1 xl-pointer' : 'xl-width-30 xl-height-30 xl-borderR50 xl-bg-blur2 xl-pointer'} onClick={()=>{
                                counter=2;
                                setBannerCounter(counter);
                            }}></button>
                            <button className={flag4 ? 'xl-width-30 xl-height-30 xl-borderR50 xl-bg-blur1 xl-pointer' : 'xl-width-30 xl-height-30 xl-borderR50 xl-bg-blur2 xl-pointer'} onClick={()=>{
                                counter=3;
                                setBannerCounter(counter);
                            }}></button>
                            <button className={flag5 ? 'xl-width-30 xl-height-30 xl-borderR50 xl-bg-blur1 xl-pointer' : 'xl-width-30 xl-height-30 xl-borderR50 xl-bg-blur2 xl-pointer'} onClick={()=>{
                                counter=4;
                                setBannerCounter(counter);
                            }}></button>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default SlideShow;