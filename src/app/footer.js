"use client"

import React, {useState} from 'react';
// import {Link, useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";
import translations from "../languages.json";
import twitter from "../Images/Logo/Twitter-Logo.png";

function Footer() {
    const location = useLocation();
    // const [language2, setLanguage2] = useState(location.pathname.split('/')[2]);

    let language5;
    if(location.pathname.split('/').length>2){
        if(location.pathname.split('/')[2].length==2){
            language5=(location.pathname.split('/')[2]);
        }
        else{
            language5='en';
        }
    }
    else if(location.pathname.split('/').length==2){
        language5='en';
    }
    else{
        if(location.pathname.split('/')[2].length===2){
            language5=(location.pathname.split('/')[2]);
        }
        else{
            language5='en';
        }
    }

    const [language2,setLanguage2] = useState(language5);
    const about = translations[language2]['about'];
    const docs = translations[language2]['docs'];
    const services = translations[language2]['services'];
    const contact = translations[language2]['contact'];
    const copyRight = translations[language2]['copyRight'];
    return(
      <>
          <footer className='xl-width100 xl-display-flex xl-justifyContent-center xl-position-relative xl-marginT-35 m-width100 m-marginLR-auto m-display-flex m-justifyContent-center m-bg-test2 m-borderTopBottom-white s-width100 s-marginLR-auto s-display-flex s-justifyContent-center s-bg-test5 s-borderTopBottom-white'>
              <div className='xl-width100 xl-bg-test2 m-width100 s-width100'>
                  <div className='xl-width100 xl-height-45 xl-display-flex xl-justifyContent-center m-width100 m-height-50 m-display-flex m-justifyContent-center s-width100 s-height-50 s-display-flex s-justifyContent-center'>
                      <div className='xl-width-1200 xl-height-45 xl-display-flex xl-justifyContent-center m-width100 m-height-30 m-display-flex m-justifyContent-center s-width100 s-height-30 s-display-flex s-justifyContent-center'>
                          <div className='xl-width24 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap m-width24 m-display-flex m-justifyContent-center m-flexWrap-wrap s-width24 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                              <Link className='xl-width100 xl-height-30 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-fontSize-20 xl-color-white xl-bold m-width100 m-height-40 m-display-flex m-justifyContent-center m-alignItems-center m-fontSize-20 m-color-white m-bold s-width100 s-height-40 s-display-flex s-justifyContent-center s-alignItems-center s-color-white s-bold s-fontSize-13'>{about}</Link>
                          </div>
                          <div className='xl-width24 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap m-width24 m-display-flex m-justifyContent-center m-flexWrap-wrap s-width24 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                              <Link className='xl-width100 xl-height-30 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-fontSize-20 xl-color-white xl-bold m-width100 m-height-40 m-display-flex m-justifyContent-center m-alignItems-center m-fontSize-20 m-color-white m-bold s-width100 s-height-40 s-display-flex s-justifyContent-center s-alignItems-center s-color-white s-bold s-fontSize-13'>{docs}</Link>
                          </div>
                          <div className='xl-width24 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap m-width24 m-display-flex m-justifyContent-center m-flexWrap-wrap s-width24 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                              <Link className='xl-width100 xl-height-30 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-fontSize-20 xl-color-white xl-bold m-width100 m-height-40 m-display-flex m-justifyContent-center m-alignItems-center m-fontSize-20 m-color-white m-bold s-width100 s-height-40 s-display-flex s-justifyContent-center s-alignItems-center s-color-white s-bold s-fontSize-13'>{services}</Link>
                          </div>
                          <div className='xl-width24 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap m-width24 m-display-flex m-justifyContent-center m-flexWrap-wrap s-width24 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                              <Link className='xl-width100 xl-height-30 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-fontSize-20 xl-color-white xl-bold m-width100 m-height-40 m-display-flex m-justifyContent-center m-alignItems-center m-fontSize-20 m-color-white m-bold s-width100 s-height-40 s-display-flex s-justifyContent-center s-alignItems-center s-color-white s-bold s-fontSize-13'>{contact}</Link>
                          </div>
                      </div>
              </div>
                  <div className='xl-width100 xl-height-60 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width100 m-height-50 m-display-flex m-justifyContent-center m-alignItems-center s-width100 s-height-40 s-display-flex s-justifyContent-center s-alignItems-center'>
                      <div className='xl-width60 xl-display-flex xl-justifyContent-center m-width60 m-display-flex m-justifyContent-center s-width60 s-display-flex s-justifyContent-center'>
                          <div className='xl-height-30 xl-fontSize-14 xl-display-flex xl-marginR-20 xl-justifyContent-center xl-color-white xl-marginT-10 m-width60 m-height-30 m-fontSize-14 m-display-flex m-justifyContent-center m-color-white m-marginT-10 s-width90 s-fontSize-10 s-display-flex s-justifyContent-center s-color-white s-marginT-10 s-marginB-10'>{copyRight} .</div>
                          <a href='https://www.facebook.com/profile.php?id=100088925497632' className='xl-width-30 xl-marginL-20 xl-height-30 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflow-hidden xl-pointer m-width-30 m-height-30 m-borderR50 m-display-flex m-justifyContent-center m-alignItems-center m-overflow-hidden m-pointer s-width-25 s-height-25 s-borderR50 s-display-flex xl-justifyContent-center s-alignItems-center s-overflow-hidden s-pointer'>
                              <img className='xl-width100 xl-height100 m-width100 m-height100 s-width100 s-height100' src='https://db.wincent.studio/LogoDB/static/facebook.png'/>
                          </a>
                          <a href='https://instagram.com/wincenttkn2022?igshid=ZDdkNTZiNTM=' className='xl-width-30 xl-height-30 xl-marginL-20 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflow-hidden xl-pointer m-width-30 m-height-30 m-marginL-20 m-borderR50 m-display-flex m-justifyContent-center m-alignItems-center m-overflow-hidden m-pointer s-width-25 s-height-25 s-marginL-20 s-borderR50 s-display-flex xl-justifyContent-center s-alignItems-center s-overflow-hidden s-pointer'>
                              <img className='xl-width100 xl-height100 m-width100 m-height100 s-width100 s-height100' src='https://db.wincent.studio/LogoDB/static/instagram.png'/>
                          </a>
                          <a href='https://twitter.com/wincenttkn?s=09' className='xl-width-30 xl-height-30 xl-marginL-20 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflow-hidden xl-pointer m-width-30 m-height-30 m-marginL-20 m-borderR50 m-display-flex m-justifyContent-center m-alignItems-center m-overflow-hidden m-pointer s-width-25 s-height-25 s-marginL-20 s-borderR50 s-display-flex xl-justifyContent-center s-alignItems-center s-overflow-hidden s-pointer'>
                              <img className='xl-width100 xl-height100 m-width100 m-height100 s-width100 s-height100' src={twitter}/>
                          </a>
                      </div>
                  </div>
              </div>
          </footer>
      </>
  );
}

export default Footer;