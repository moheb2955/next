"use client"

import React, {useCallback, useContext, useRef} from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import translations from "../languages.json";
import { AuthContext } from '../context/AuthContext';
import logo from "../Images/Logo/red(1).png";

let flag2=false;

let hostUrl=process.env.REACT_APP_DATABASE_URL;
const style = {
    padding: '10px',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'space-between',
};

export const useScrollLock = () => {
    const lockScroll = useCallback(() => {
        const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollBarCompensation}px`;
    }, [])

    const unlockScroll = useCallback(() => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = ''
    }, [])

    return {
        lockScroll,
        unlockScroll
    };
}


function Navigation() {
    const { user, logout } = useContext(AuthContext);
    
    const [quickViewProductId, setQuickViewProductId] = useState(0);
    const[flag,setFlag]=useState(false);
    const[leaguesData,setLeaguesData]=useState(false);
    const[teamsData,setTeamsData]=useState(false);
    const[playersData,setPlayersData]=useState(false);
    const[newsData,setNewsData]=useState(false);
    const [searchValue,setSearchValue]=useState(null);
    const { lockScroll, unlockScroll } = useScrollLock();

    function searchInDB(e){
        setSearchValue(e.target.value)
        if(e.target.value.length>3){
            axios.post('http://10.3.3.126:3300/search/bar?query='+e.target.value).then((res)=>{
                console.log(res.data)
                setFlag(true);
                setLeaguesData(res.data.leagues);
                setTeamsData(res.data.teams);
                setPlayersData(res.data.players);
                setNewsData(res.data.news);
            })
        }
        else{
            setFlag(false);
            setLeaguesData(null);
            setTeamsData(null);
            setPlayersData(null);
            setNewsData(null);
        }
    }

    const displayQuickView = (productId) => {
        lockScroll();
        setQuickViewProductId(productId);
    }

    const hideQuickView = () => {
        unlockScroll();
        setQuickViewProductId(0);
    }
    const useOutsideClick = (callback) => {
        const ref = useRef();

        useEffect(() => {
            const handleClick = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    callback();
                }
            };

            document.addEventListener('click', handleClick, true);

            return () => {
            document.removeEventListener('click', handleClick, true);
            };
        }, [ref]);

        return ref;
    };


    const location = useLocation();
    const { state } = location;
    const [flag1,setFlag1]=useState(false);
    let last_loc;
    const { language }=useParams();
    const { NewsPageNumber }=useParams();
    const[SearchParams2,setSearchParams2]=useSearchParams({ m: language});
    let num2=SearchParams2.get('m');
    const[SearchParams3,setSearchParams3]=useSearchParams({ o: NewsPageNumber});
    let num3=SearchParams3.get('o');
    // if(location.pathname==="/"){
    //     setLanguage('en')
    // }
    // else{
    //     setLanguage(location.pathname.split('/')[2])
    // }
    const [languagesBox,setLanguagesBox]=useState(false);
    let languagePhoto='https://db.wincent.studio/LogoDB/static/english.png';
    let language5;
    let location1;
    let location2;
    if(location.pathname.split('/').length>2){
        if(location.pathname.split('/')[2].length==2){
            language5=(location.pathname.split('/')[2]);
            location1=(location.pathname.split('/')[1]);
        }
        else{
            language5='en';
            location1='Home';
        }
    }
    else if(location.pathname.split('/').length==2){
        language5='en';
        location1='home'
    }
   else{
        if(location.pathname.split('/')[2].length===2){
            language5=(location.pathname.split('/')[2]);
            location1=(location.pathname.split('/')[1]);
        }
        else{
            language5='en';
            location1='Home';
        }
    }

   if(location.pathname.split('/'+location.pathname.split('/')[2]).length>1){
       if(location.pathname.split('/')[2].length==2) {
           location2 = location.pathname.split('/' + location.pathname.split('/')[2])[1]
       }
       else{
           location2='';
       }
   }
   else{
       location2='';
   }


    const navigate=useNavigate();
    const[openCloseMenu,setOpenCloseMenu]=useState('s-display-none');
    const[smallSearchBar,setSmallSearchBar]=useState('s-display-none');
    const home = translations[language5]['home'];
    const news = translations[language5]['news'];
    const transfer = translations[language5]['transfer'];
    const leagues = translations[language5]['leagues'];
    const teams = translations[language5]['teams'];
    const players = translations[language5]['players'];
    const search = translations[language5]['search'];
    const login = translations[language5]['login'];
    const register = translations[language5]['register'];
    const yourProfile = translations[language5]['yourProfile'];
    const logOut = translations[language5]['logOut'];
    const [siteLanguage,setSiteLanguage]=useState('');



    if(language5=="fr"){
    languagePhoto='https://db.wincent.studio/LogoDB/NationalLogo/5.png';
    }
    else if(language5=="zh"){
        languagePhoto='https://db.wincent.studio/LogoDB/NationalLogo/45.png';
    }
    else if(language5=="es"){
        languagePhoto='https://db.wincent.studio/LogoDB/NationalLogo/3.png';
    }
    else if(language5=="ru"){
        languagePhoto='https://db.wincent.studio/LogoDB/NationalLogo/18.png';
    }
    else if(language5=="de"){
        languagePhoto='https://db.wincent.studio/LogoDB/NationalLogo/4.png';
    }
    else if(language5=="ar"){
        languagePhoto='https://db.wincent.studio/LogoDB/NationalLogo/57.png';
    }
    else if(language5=="hi"){
        languagePhoto='https://db.wincent.studio/LogoDB/NationalLogo/101.png';
    }
    else if(language5=="tr"){
        languagePhoto='https://db.wincent.studio/LogoDB/NationalLogo/32.png';
    }
    else if(language5=="he"){
        languagePhoto='https://db.wincent.studio/LogoDB/NationalLogo/44.png';
    }
    else{
        languagePhoto='https://db.wincent.studio/LogoDB/static/english.png';
    }
    const[languageIcon,setLanguageIcon]=useState(languagePhoto);
    const[loginBox,setLoginBox]=useState(false);
    const handleClickOutside = () => {
        setLanguagesBox(false);
        setLoginBox(false);
    };

    const ref = useOutsideClick(handleClickOutside);

    const handleClick = () => {
        setLanguagesBox(true);
    };

    const handleClick2 = () => {
        setLoginBox(true);
    };
    return (
        <>
            <nav className='xl-position-sticky xl-bg-test2 xl-zIndex-3 xl-top-0 xl-marginLR-auto xl-display-flex xl-flexWrap-wrap xl-justifyContent-between xl-alignItems-center m-width100 m-position-sticky m-top-0 m-zIndex-3 m-marginT-5 m-marginLR-auto m-display-flex m-flexWrap-wrap m-justifyContent-center m-alignItems-center m-position-relative s-display-none'>
                <div className='xl-height-80 xl-display-flex xl-alignItems-center'>
                    <Link to={'/Home/'+language5} className='xl-height-80 xl-borderR-15 xl-marginL-10 xl-marginR-15 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflow-hidden'>
                        <img className='xl-height100 xl-marginL-5 logo' src={logo}/>
                    </Link>
                    <div className='xl-height100 xl-display-flex xl-alignItems-center xl-marginL-10'>
                        <Link className='xl-color-white m-color-white xl-fontSize-18 navItems' to={'/Home/'+language5}>{home}</Link>
                        <Link className='xl-color-white xl-marginL-20 xl-fontSize-18 m-color-white navItems' to={'/News/'+language5+'/1'}>{news}</Link>
                        <Link className='xl-color-white xl-marginL-20 xl-fontSize-18 m-color-white navItems' to={'/Transfer/'+language5+'/1'}>{transfer}</Link>
                        <Link className='xl-color-white xl-marginL-20 xl-fontSize-18 m-color-white navItems' to={'/Leagues/'+language5+'/1134'}>{leagues}</Link>
                        <Link className='xl-color-white xl-marginL-20 xl-fontSize-18 m-color-white navItems' to={'/Teams/'+language5+'/26'}>{teams}</Link>
                        <Link className='xl-color-white xl-marginL-20 xl-fontSize-18 m-color-white navItems' to={'/Players/'+language5+'/80902'}>{players}</Link>
                        <Link className='xl-color-white xl-marginL-20 xl-fontSize-18 m-color-white navItems' to={'/Users/'+language5}>Users</Link>
                        {user? <Link className='xl-color-white xl-marginL-20 xl-fontSize-18 m-color-white navItems' to={'/UserProfile/'+language5}>{yourProfile}</Link>
                            : <div className='xl-display-none m-display-none'></div>}
                    </div>
                </div>
                <div className='xl-width-550 xl-height-80 xl-display-flex xl-justifyContent-evenly xl-alignItems-center'>
                    <button className='xl-paddingB-10 xl-paddingT-10 xl-paddingL-10 xl-paddingR-10 xl-borderR-15 xl-bg-test15 xl-marginR-15 xl-color-black xl-pointer xl-bold'>Wincent VIP</button>
                    <div className='xl-width-250 xl-height-50 xl-overflow-hidden xl-borderR-10 xl-display-flex xl-marginL-15'>
                        <input type='text' value={searchValue} placeholder={search} className='xl-bg-test xl-width100 xl-paddingR-10 xl-paddingL-10 xl-paddingT-10 xl-paddingB-10 xl-fontSize-12 xl-color-black' onChange={searchInDB}/>
                        <div className='xl-bg-test xl-paddingR-10 xl-paddingL-10 xl-paddingT-10 xl-paddingB-10'><i className='bi bi-search xl-color-black xl-fontSize-20'></i></div>
                    </div>
                    <div className='xl-width-40 xl-height-40 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-end xl-overflow-hidden xl-pointer xl-bg-test'>
                        {user? <img className='xl-height90 m-height90' alt={user ? user.data.fullName : ''} src={user ? user.data.photo :'https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Download-Image.png'} ref={ref} onClick={handleClick2}/> : <img className='xl-height90 m-height90' src='https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Download-Image.png' ref={ref} onClick={handleClick2}/>}
                    </div>
                    <div className='xl-width-40 xl-height-40 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-pointer'>
                        <img className='xl-width100' src={languageIcon} alt='lan' ref={ref} onClick={handleClick}/>
                        <div className={loginBox && !user ? 'xl-width-180 xl-height-200 xl-bg-test xl-top-47 xl-border-red2 xl-right-10 xl-borderR-10 xl-marginT-35 xl-zIndex-100 xl-position-absolut m-width-180 m-height-200 m-bg-test9 m-top-20 m-marginT-30 m-zIndex-4 m-position-absolut m-border-white1': 'xl-display-none m-display-none s-display-none'} ref={ref}>
                            <div className='xl-width100 xl-display-flex xl-marginB-40 xl-marginT-15 xl-justifyContent-center m-width100 m-display-flex m-marginB-40 m-marginT-15 m-justifyContent-center' >

                            </div>
                            <div className="xl-width100 xl-display-flex xl-justifyContent-center m-width100 m-display-flex m-justifyContent-center">
                                <Link to={'/Register/'+language5} className='xl-width90 xl-display-flex xl-borderR-10 xl-bg-test2 xl-marginT-5 xl-justifyContent-center xl-color-black xl-paddingT-5 xl-paddingB-5 m-width90 m-display-flex m-border-white1 m-borderR-10 m-marginT-5 m-justifyContent-center m-color-black m-paddingT-5 m-paddingB-5'>
                                    {register}
                                </Link>
                            </div>
                            <div className="xl-width100 xl-display-flex xl-justifyContent-center m-width100 m-display-flex m-justifyContent-center" onClick={()=>{
                                setLoginBox(false)
                            }}>
                                <Link to={'/Login/'+language5} className='xl-width90 xl-display-flex xl-borderR-10 xl-bg-test2 xl-marginT-10 xl-justifyContent-center xl-color-black xl-paddingT-5 xl-paddingB-5 m-width90 m-display-flex m-border-white1 m-borderR-10 m-marginT-10 m-justifyContent-center m-color-black m-paddingT-5 m-paddingB-5'>
                                    {login}
                                </Link>
                            </div>
                        </div>
                        <div className={loginBox && user ? 'xl-width-180 xl-height-200 xl-bg-test xl-right-10 xl-borderR-10 xl-top-47 xl-border-red2 xl-marginT-35 xl-zIndex-100 xl-position-absolut m-width-180 m-height-200 m-bg-test9 m-top-20 m-marginT-30 m-zIndex-4 m-position-absolut m-border-white1': 'xl-display-none m-display-none s-display-none'} ref={ref}>
                            <div className='xl-width100 xl-display-flex xl-flexWrap-wrap xl-marginB-40 xl-marginT-15 xl-justifyContent-center m-width100 m-display-flex m-flexWrap-wrap m-marginB-40 m-marginT-15 m-justifyContent-center' >
                                <div className='xl-width-50 xl-height-50 xl-borderR-10 xl-display-flex xl-justifyContent-center xl-alignItems-end xl-overflow-hidden m-width-50 m-height-50 m-borderR-10 m-border-white1 m-display-flex m-justifyContent-center m-alignItems-end m-overflow-hidden'>
                                    <img className='xl-height90 m-height90' src={user ? user.data.photo :'https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Download-Image.png'}/>
                                </div>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-color-silver xl-marginT-10 m-width100 m-display-flex m-justifyContent-center m-color-black'>{user ? user.data.fullName : ''}</div>
                            </div>

                            <div className="xl-width100 xl-display-flex xl-justifyContent-center m-width100 m-display-flex m-justifyContent-center" onClick={()=>{
                                setLoginBox(false)
                            }}>
                                <div className='xl-width90 xl-display-flex xl-borderR-10 xl-bg-test2 xl-marginT-10 xl-justifyContent-center xl-color-black xl-paddingT-5 xl-paddingB-5 m-width90 m-display-flex m-border-white1 m-borderR-10 m-marginT-10 m-justifyContent-center m-color-black m-paddingT-5 m-paddingB-5' onClick={logout
                                }>
                                    {logOut}
                                </div>
                            </div>
                        </div>
                        <div className={languagesBox ? 'xl-width-180 xl-height-230 xl-bg-test xl-top-47 xl-border-red2 xl-borderR-10 xl-right-10 xl-marginT-35 xl-zIndex-100 xl-position-absolut m-width-180 m-height-230 m-bg-test9 m-top-20 m-marginT-30 m-zIndex-4 m-position-absolut m-border-white1' : 'xl-display-none m-display-none s-display-none'} ref={ref} onClick={handleClick}>
                            <ul className='xl-width100 xl-display-flex xl-justifyContent-evenly xl-flexWrap-wrap m-width100 m-display-flex m-justifyContent-evenly m-flexWrap-wrap'>
                                <li className='xl-width50 xl-marginT-5 xl-height-40 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width50 m-marginT-5 m-height-40 m-display-flex m-alignItems-center' onClick={()=>{
                                    setSiteLanguage('fr');
                                    setLanguagesBox(false);
                                    window.location.reload(false);
                                }}>
                                    <Link to={`${location1}/fr${location2}`}>
                                        <div className='xl-width-30 xl-height-30 xl-overflow-hidden xl-borderR50 xl-display-flex xl-justifyContent-center m-width-25 m-marginL-10 m-height-25 m-overflow-hidden m-borderR50 m-display-flex m-justifyContent-center m-boxShadow3'>
                                            <img className='xl-height100 m-height100' src='https://db.wincent.studio/LogoDB/NationalLogo/5.png'/>
                                        </div>
                                        <div className='xl-text-center xl-fontSize-12 xl-color-white m-marginL-10 m-fontSize-10'>FR</div>
                                    </Link>

                                </li>
                                <li className='xl-width50 xl-marginT-5 xl-height-40 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width50 m-marginT-5 m-height-40 m-display-flex m-alignItems-center' onClick={()=>{
                                    setLanguagesBox(false);
                                    setSiteLanguage('zh');
                                    window.location.reload(false);
                                }}>
                                    <Link to={`${location1}/zh${location2}`}>
                                        <div className='xl-width-30 xl-height-30 xl-overflow-hidden xl-borderR50 xl-display-flex xl-justifyContent-center m-width-25 m-marginL-10 m-height-25 m-overflow-hidden m-borderR50 m-display-flex m-justifyContent-center m-boxShadow3'>
                                            <img className='xl-height100 m-height100' src='https://db.wincent.studio/LogoDB/NationalLogo/45.png'/>
                                        </div>
                                        <div className='xl-text-center xl-fontSize-12 xl-color-white m-marginL-10 m-fontSize-10'>ZH</div>
                                    </Link>
                                </li>
                                <li className='xl-width50 xl-marginT-5 xl-height-40 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width50 m-marginT-5 m-height-40 m-display-flex m-alignItems-center' onClick={()=>{
                                    setSiteLanguage('es');
                                    setLanguagesBox(false);
                                    window.location.reload(false);
                                }}>
                                    <Link to={`${location1}/es${location2}`}>
                                        <div className='xl-width-30 xl-height-30 xl-overflow-hidden xl-borderR50 xl-display-flex xl-justifyContent-center m-width-25 m-marginL-10 m-height-25 m-overflow-hidden m-borderR50 m-display-flex m-justifyContent-center m-boxShadow3'>
                                            <img className='xl-height100 m-height100' src='https://db.wincent.studio/LogoDB/NationalLogo/3.png'/>
                                        </div>
                                        <div className='xl-text-center xl-fontSize-12 xl-color-white m-marginL-10 m-fontSize-10'>ES</div>
                                    </Link>
                                </li>
                                <li className='xl-width50 xl-marginT-5 xl-height-40 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width50 m-marginT-5 m-height-40 m-display-flex m-alignItems-center' onClick={()=>{
                                    setLanguagesBox(false);
                                    setLanguageIcon('https://db.wincent.studio/LogoDB/NationalLogo/18.png');
                                    setSiteLanguage('ru');
                                    window.location.reload(false);
                                }}>
                                    <Link to={`${location1}/ru${location2}`}>
                                        <div className='xl-width-30 xl-height-30 xl-overflow-hidden xl-borderR50 xl-display-flex xl-justifyContent-center m-boxShadow3 m-width-25 m-marginL-10 m-height-25 m-overflow-hidden m-borderR50 m-display-flex m-justifyContent-center m-boxShadow3'>
                                            <img className='xl-height100 m-height100' src='https://db.wincent.studio/LogoDB/NationalLogo/18.png'/>
                                        </div>
                                        <div className='xl-text-center xl-fontSize-12 xl-color-white m-marginL-10 m-fontSize-10'>RU</div>
                                    </Link>
                                </li>
                                <li className='xl-width50 xl-marginT-5 xl-height-40 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width50 m-marginT-5 m-height-40 m-display-flex m-alignItems-center' onClick={()=>{
                                    setLanguagesBox(false);
                                    setSiteLanguage('de');
                                    window.location.reload(false);
                                }}>
                                    <Link to={`${location1}/de${location2}`}>
                                        <div className='xl-width-30 xl-height-30 xl-overflow-hidden xl-borderR50 xl-display-flex xl-justifyContent-center m-width-25 m-marginL-10 m-height-25 m-overflow-hidden m-borderR50 m-display-flex m-justifyContent-center m-boxShadow3'>
                                            <img className='xl-height100 m-height100' src='https://db.wincent.studio/LogoDB/NationalLogo/4.png'/>
                                        </div>
                                        <div className='xl-text-center xl-fontSize-12 xl-color-white m-marginL-10 m-fontSize-10'>DE</div>
                                    </Link>
                                </li>
                                <li className='xl-width50 xl-marginT-5 xl-height-40 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width50 m-marginT-5 m-height-40 m-display-flex m-alignItems-center' onClick={()=>{
                                    setLanguagesBox(false);
                                    setSiteLanguage('ar');
                                    window.location.reload(false);
                                }}>
                                    <Link to={`${location1}/ar${location2}`}>
                                        <div className='xl-width-30 xl-height-30 xl-overflow-hidden xl-borderR50 xl-display-flex xl-justifyContent-center m-width-25 m-marginL-10 m-height-25 m-overflow-hidden m-borderR50 m-display-flex m-justifyContent-center m-boxShadow3'>
                                            <img className='xl-height100 m-height100' src='https://db.wincent.studio/LogoDB/NationalLogo/57.png'/>
                                        </div>
                                        <div className='xl-text-center xl-fontSize-12 xl-color-white m-marginL-10 m-fontSize-10' >AR</div>
                                    </Link>
                                </li>
                                <li className='xl-width50 xl-marginT-5 xl-height-40 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width50 m-marginT-5 m-height-40 m-display-flex m-alignItems-center' onClick={()=>{
                                    setLanguagesBox(false);
                                    setSiteLanguage('hi');
                                    window.location.reload(false);
                                }}>
                                    <Link to={`${location1}/hi${location2}`}>
                                        <div className='xl-width-30 xl-height-30 xl-overflow-hidden xl-borderR50 xl-display-flex xl-justifyContent-center m-width-25 m-marginL-10 m-height-25 m-overflow-hidden m-borderR50 m-display-flex m-justifyContent-center m-boxShadow3'>
                                            <img className='xl-height100 m-height100' src='https://db.wincent.studio/LogoDB/NationalLogo/101.png'/>
                                        </div>
                                        <div className='xl-text-center xl-fontSize-12 xl-color-white m-marginL-10 m-fontSize-10'>HI</div>
                                    </Link>
                                </li>
                                <li className='xl-width50 xl-marginT-5 xl-height-40 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width50 m-marginT-5 m-height-40 m-display-flex m-alignItems-center' onClick={()=>{
                                    setLanguagesBox(false);
                                    setSiteLanguage('tr');
                                    window.location.reload(false);
                                }}>
                                    <Link to={`${location1}/tr${location2}`}>
                                        <div className='xl-width-30 xl-height-30 xl-overflow-hidden xl-borderR50 xl-display-flex xl-justifyContent-center m-width-25 m-marginL-10 m-height-25 m-overflow-hidden m-borderR50 m-display-flex m-justifyContent-center m-boxShadow3'>
                                            <img className='xl-height100 m-height100' src='https://db.wincent.studio/LogoDB/NationalLogo/32.png'/>
                                        </div>
                                        <div className='xl-text-center xl-fontSize-12 xl-color-white m-marginL-10 m-fontSize-10'>TR</div>
                                    </Link>
                                </li>
                                <li className='xl-width50 xl-marginT-5 xl-height-40 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width50 m-marginT-5 m-height-40 m-display-flex m-alignItems-center' onClick={()=>{
                                    setLanguagesBox(false);
                                    setSiteLanguage('he');
                                    window.location.reload(false);
                                }}>
                                    <Link to={`${location1}/he${location2}`}>
                                        <div className='xl-width-30 xl-height-30 xl-overflow-hidden xl-borderR50 xl-display-flex xl-justifyContent-center m-width-25 m-marginL-10 m-height-25 m-overflow-hidden m-borderR50 m-display-flex m-justifyContent-center m-boxShadow3'>
                                            <img className='xl-height100 m-height100' src='https://db.wincent.studio/LogoDB/NationalLogo/44.png'/>
                                        </div>
                                        <div className='xl-text-center xl-fontSize-12 xl-color-white m-marginL-10 m-fontSize-10'>HE</div>
                                    </Link>
                                </li>
                                <li className='xl-width50 xl-marginT-5 xl-height-40 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width50 m-marginT-5 m-height-40 m-display-flex m-alignItems-center' onClick={()=>{
                                    setLanguagesBox(false);
                                    setSiteLanguage('en');
                                    window.location.reload(false);
                                }}>
                                    <Link to={`${location1}/en${location2}`}>
                                        <div className='xl-width-30 xl-height-30 xl-overflow-hidden xl-borderR50 xl-display-flex xl-justifyContent-center m-width-25 m-marginL-10 m-height-25 m-overflow-hidden m-borderR50 m-display-flex m-justifyContent-center m-boxShadow3'>
                                            <img className='xl-height100 m-height100' src='https://db.wincent.studio/LogoDB/static/english.png'/>
                                        </div>
                                        <div className='xl-text-center xl-fontSize-12 xl-color-white m-marginL-10 m-fontSize-10'>EN</div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className='xl-display-none m-display-none s-width100 s-height-60 s-bg-test5 s-marginT-10 s-position-sticky s-top--5 s-zIndex-4'>
                <div className='s-width100 s-height100 s-display-flex s-justifyContent-between s-zIndex-4'>
                    <div className='s-width30 s-height100 s-display-flex s-alignItems-center s-justifyContent-start'>
                        <div className='s-width-30 s-height-30 s-marginL-10 s-display-flex s-alignItems-center s-justifyContent-center'>
                            <div ref={ref} onClick={handleClick2}><i className="bi bi-person-circle s-color-white s-fontSize-26"></i></div>
                        </div>
                        <div className='s-width-30 s-height-30 s-marginL-10 s-display-flex s-alignItems-center s-justifyContent-center'>
                            <i class="bi bi-search s-color-white s-fontSize-26" onClick={()=>{
                                smallSearchBar==['s-display-none'] ? setSmallSearchBar('s-display-flex s-justifyContent-center s-alignItems-center s-bg-test3 s-width100 s-height-45') : setSmallSearchBar('s-display-none')
                            }
                                }></i>
                        </div>
                    </div>
                    <div className='s-width30 s-height100 s-display-flex s-justifyContent-center s-alignItems-center'>
                        <Link to={'/Home/'+language5} className='s-height-50 s-pointer'>
                            <img className='s-height100' src='https://db.wincent.studio/LogoDB/static/index.png'/>
                        </Link>
                    </div>
                    <div className='s-width30 s-height100 s-display-flex s-alignItems-center s-justifyContent-end'>
                        <div className='s-width-30 s-height-30 s-borderR50 s-overflow-hidden s-display-flex s-justifyContent-center
                        s-marginR-10'>
                            <img className='s-height100 s-pointer' src={languageIcon} alt='lan' ref={ref} onClick={handleClick}/>
                            <div className={languagesBox ? 's-width-180 s-height-230 s-bg-test9 s-top-20 s-marginT-40 s-right-10 s-zIndex-2 s-position-absolut' : 's-display-none'}>
                                <ul className='s-display-flex s-justifyContent-evenly s-flexWrap-wrap'>
                                    <li className='s-width50 s-marginT-5 s-height-40 s-display-flex s-alignItems-center' onClick={()=>{
                                        setSiteLanguage('fr');
                                        if(flag2==false){
                                            setLanguagesBox(true);
                                            flag2=true;
                                        }
                                        else{
                                            setLanguagesBox(false);
                                            flag2=false;
                                        }
                                        window.location.reload(false);
                                    }}>
                                        <Link to={`${location1}/fr${location2}`}>
                                            <div className='s-width-25 s-marginL-10 s-height-25 s-overflow-hidden s-borderR50 s-display-flex s-justifyContent-center s-boxShadow3'>
                                                <img className='xl-height100 m-height100' src='https://db.wincent.studio/LogoDB/NationalLogo/5.png'/>
                                            </div>
                                            <div className='s-marginL-10 s-fontSize-10'>French</div>
                                        </Link>
                                    </li>
                                    <li className='s-width50 s-marginT-5 s-height-40 s-display-flex s-alignItems-center' onClick={()=>{
                                        if(flag2==false){
                                            setLanguagesBox(true);
                                            flag2=true;
                                        }
                                        else{
                                            setLanguagesBox(false);
                                            flag2=false;
                                        }
                                        setSiteLanguage('zh');
                                        window.location.reload(false);
                                    }}>
                                        <Link to={`${location1}/zh${location2}`}>
                                            <div className='s-width-25 s-marginL-10 s-height-25 s-overflow-hidden s-borderR50 s-display-flex s-justifyContent-center s-boxShadow3'>
                                                <img className='xl-height100 m-height100' src='https://db.wincent.studio/LogoDB/NationalLogo/45.png'/>
                                            </div>
                                            <div className='s-marginL-10 s-fontSize-10'>Chinese</div>
                                        </Link>

                                    </li>
                                    <li className='s-width50 s-marginT-5 s-height-40 s-display-flex s-alignItems-center' onClick={()=>{
                                        setSiteLanguage('es');
                                        if(flag2==false){
                                            setLanguagesBox(true);
                                            flag2=true;
                                        }
                                        else{
                                            setLanguagesBox(false);
                                            flag2=false;
                                        }
                                        window.location.reload(false);
                                    }}>
                                        <Link to={`${location1}/es${location2}`}>
                                            <div className='s-width-25 s-marginL-10 s-height-25 s-overflow-hidden s-borderR50 s-display-flex s-justifyContent-center s-boxShadow3'>
                                                <img className='xl-height100 m-height100' src='https://db.wincent.studio/LogoDB/NationalLogo/3.png'/>
                                            </div>
                                            <div className='s-marginL-10 s-fontSize-10'>Spanish</div>
                                        </Link>
                                    </li>
                                    <li className='s-width50 s-marginT-5 s-height-40 s-display-flex s-alignItems-center' onClick={()=>{
                                        if(flag2==false){
                                            setLanguagesBox(true);
                                            flag2=true;
                                        }
                                        else{
                                            setLanguagesBox(false);
                                            flag2=false;
                                        }

                                        setLanguageIcon('https://db.wincent.studio/LogoDB/NationalLogo/18.png');
                                        setSiteLanguage('ru');
                                        window.location.reload(false);
                                    }}>
                                        <Link to={`${location1}/ru${location2}`}>
                                            <div className='s-width-25 s-marginL-10 s-height-25 s-overflow-hidden s-borderR50 s-display-flex s-justifyContent-center s-boxShadow3'>
                                                <img className='xl-height100 m-height100' src='https://db.wincent.studio/LogoDB/NationalLogo/18.png'/>
                                            </div>
                                            <div className='s-marginL-10 s-fontSize-10'>Russian</div>
                                        </Link>
                                    </li>
                                    <li className='s-width50 s-marginT-5 s-height-40 s-display-flex s-alignItems-center' onClick={()=>{
                                        if(flag2==false){
                                            setLanguagesBox(true);
                                            flag2=true;
                                        }
                                        else{
                                            setLanguagesBox(false);
                                            flag2=false;
                                        }
                                        setSiteLanguage('de');
                                        window.location.reload(false);
                                    }}>
                                        <Link to={`${location1}/de${location2}`}>
                                            <div className='s-width-25 s-marginL-10 s-height-25 s-overflow-hidden s-borderR50 s-display-flex s-justifyContent-center s-boxShadow3'>
                                                <img className='xl-height100 m-height100' src='https://db.wincent.studio/LogoDB/NationalLogo/4.png'/>
                                            </div>
                                            <div className='s-marginL-10 s-fontSize-10'>German</div>
                                        </Link>
                                    </li>
                                    <li className='s-width50 s-marginT-5 s-height-40 s-display-flex s-alignItems-center' onClick={()=>{
                                        if(flag2==false){
                                            setLanguagesBox(true);
                                            flag2=true;
                                        }
                                        else{
                                            setLanguagesBox(false);
                                            flag2=false;
                                        }

                                        setSiteLanguage('ar');
                                        window.location.reload(false);
                                    }}>
                                        <Link to={`${location1}/ar${location2}`}>
                                            <div className='s-width-25 s-marginL-10 s-height-25 s-overflow-hidden s-borderR50 s-display-flex s-justifyContent-center s-boxShadow3'>
                                                <img className='xl-height100 m-height100' src='https://db.wincent.studio/LogoDB/NationalLogo/57.png'/>
                                            </div>
                                            <div className='s-marginL-10 s-fontSize-10' >Arabic</div>
                                        </Link>
                                    </li>
                                    <li className='s-width50 s-marginT-5 s-height-40 s-display-flex s-alignItems-center' onClick={()=>{
                                        if(flag2==false){
                                            setLanguagesBox(true);
                                            flag2=true;
                                        }
                                        else{
                                            setLanguagesBox(false);
                                            flag2=false;
                                        }
                                        setSiteLanguage('hi');
                                        window.location.reload(false);
                                    }}>
                                        <Link to={`${location1}/hi${location2}`}>
                                            <div className='s-width-25 s-marginL-10 s-height-25 s-overflow-hidden s-borderR50 s-display-flex s-justifyContent-center s-boxShadow3'>
                                                <img className='xl-height100 m-height100' src='https://db.wincent.studio/LogoDB/NationalLogo/101.png'/>
                                            </div>
                                            <div className='s-marginL-10 s-fontSize-10'>Hindi</div>
                                        </Link>
                                    </li>
                                    <li className='s-width50 s-marginT-5 s-height-40 s-display-flex s-alignItems-center' onClick={()=>{
                                        if(flag2==false){
                                            setLanguagesBox(true);
                                            flag2=true;
                                        }
                                        else{
                                            setLanguagesBox(false);
                                            flag2=false;
                                        }
                                        setSiteLanguage('tr');
                                        window.location.reload(false);
                                    }}>
                                        <Link to={`${location1}/tr${location2}`}>
                                            <div className='s-width-25 s-marginL-10 s-height-25 s-overflow-hidden s-borderR50 s-display-flex s-justifyContent-center s-boxShadow3'>
                                                <img className='xl-height100 m-height100' src='https://db.wincent.studio/LogoDB/NationalLogo/32.png'/>
                                            </div>
                                            <div className='s-marginL-10 s-fontSize-10'>Turkish</div>
                                        </Link>
                                    </li>
                                    <li className='s-width50 s-marginT-5 s-height-40 s-display-flex s-alignItems-center' onClick={()=>{
                                        if(flag2==false){
                                            setLanguagesBox(true);
                                            flag2=true;
                                        }
                                        else{
                                            setLanguagesBox(false);
                                            flag2=false;
                                        }
                                        setSiteLanguage('he');
                                        window.location.reload(false);
                                    }}>
                                        <Link to={`${location1}/he${location2}`}>
                                            <div className='s-width-25 s-marginL-10 s-height-25 s-overflow-hidden s-borderR50 s-display-flex s-justifyContent-center s-boxShadow3'>
                                                <img className='xl-height100 m-height100' src='https://db.wincent.studio/LogoDB/NationalLogo/44.png'/>
                                            </div>
                                            <div className='s-marginL-10 s-fontSize-10'>Hebrew</div>
                                        </Link>
                                    </li>
                                    <li className='s-width50 s-marginT-5 s-height-40 s-display-flex s-alignItems-center' onClick={()=>{
                                        if(flag2==false){
                                            setLanguagesBox(true);
                                            flag2=true;
                                        }
                                        else{
                                            setLanguagesBox(false);
                                            flag2=false;
                                        }
                                        setLanguageIcon('https://db.wincent.studio/LogoDB/static/english.png');
                                        setSiteLanguage('en');
                                        window.location.reload(false);
                                    }}>
                                        <Link to={`${location1}/en${location2}`}>
                                            <div className='s-width-25 s-marginL-10 s-height-25 s-overflow-hidden s-borderR50 s-display-flex s-justifyContent-center s-boxShadow3'>
                                                <img className='xl-height100 m-height100' src='https://db.wincent.studio/LogoDB/static/english.png'/>
                                            </div>
                                            <div className='s-marginL-10 s-fontSize-10'>English</div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={loginBox ? 's-width-180 s-left-10 s-height-200 s-bg-test9 s-top-20 s-marginT-40 s-zIndex-4 s-position-absolut': 'xl-display-none m-display-none s-display-none'} ref={ref}>
                            <div className='s-width100 s-display-flex s-marginB-40 s-marginT-15 s-justifyContent-center'>
                                <div className='s-width-40 s-height-40 s-borderR-10 s-display-flex s-justifyContent-center s-alignItems-end s-overflow-hidden'>
                                    <img className='s-height90' src={user ? user.data.photo :'https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Download-Image.png'}/>
                                </div>
                            </div>
                            <div className="s-width100 s-display-flex s-justifyContent-center">
                                <Link to={'/Register/'+language5} className='s-width90 s-display-flex s-borderR-10 s-marginT-5 s-justifyContent-center s-color-black s-paddingT-5 s-paddingB-5 s-fontSize-12'>
                                    {register}
                                </Link>
                            </div>
                            <div className="s-width100 s-display-flex s-justifyContent-center" onClick={()=>{
                                setLoginBox(false)
                            }}>
                                <Link to={'/Login/'+language5} className='s-width90 s-display-flex s-borderR-10 s-marginT-10 s-justifyContent-center s-color-black s-paddingT-5 s-paddingB-5 s-fontSize-12'>
                                    {login}
                                </Link>
                            </div>
                        </div>
                        <div className='s-width-30 s-height-30 s-marginR-10 s-display-flex s-alignItems-center s-justifyContent-center s-pointer'>
                            <i class="bi bi-three-dots s-fontSize-24 s-color-white" onClick={()=>{
                                lockScroll()
                                if(!flag1){
                                    setOpenCloseMenu('s-width100 s-height-100vh s-position-fixed s-zIndex-2 s-top--5 s-bg-test5 s-display-flex s-justifyContent-end s-overflow-hidden');
                                    setFlag1(true)
                                }
                                else{
                                    setFlag1(false);
                                    setOpenCloseMenu('s-display-none');
                                }
                            }}></i>
                        </div>
                    </div>
                </div>
                <div className={smallSearchBar}><input type='text' className='s-width80 s-paddingB-5 s-paddingT-5 s-paddingR-40 s-paddingL-10'/></div>
                <div className={openCloseMenu}>
                    <ul className='s-width90 s-bg-test5 s-overflow-auto'>
                        <li className='s-width100 s-marginB-10 s-marginT-35 s-display-flex s-justifyContent-end s-alignItems-center'>
                            <div className='s-width-25 s-height-25 s-marginR-15 s-pointer s-display-flex s-justifyContent-center s-alignItems-center' onClick={()=>{
                                if(flag1){
                                    setFlag1(false);
                                    setOpenCloseMenu('s-display-none');
                                }
                                unlockScroll();
                            }}>
                                <i className="bi bi-x-square s-fontSize-24"></i>
                            </div>
                        </li>
                        <li className='s-width100 s-marginB-10 s-marginT-35 s-display-flex s-justifyContent-center s-alignItems-center s-borderBottom-black'><Link className=' s-display-flex s-justifyContent-center s-alignItems-center s-width100 s-marginB-10' onClick={()=>{
                            setLanguagesBox(false);
                                if(flag1){
                                    setFlag1(false);
                                    setOpenCloseMenu('s-display-none');
                                }
                        }} to={'/Home/'+language5}>{home}</Link></li>
                        <li className='s-width100 s-marginB-10 s-marginT-10 s-display-flex s-justifyContent-center s-alignItems-center s-borderBottom-black'><Link className=' s-display-flex s-justifyContent-center s-alignItems-center s-width100 s-marginB-10' onClick={()=>{
                            setLanguagesBox(false);
                                if(flag1){
                                    setFlag1(false);
                                    setOpenCloseMenu('s-display-none');
                                }
                        }} to={'/News/'+language5+'/1'}>{news}</Link></li>
                        <li className='s-width100 s-marginB-10 s-marginT-10 s-display-flex s-justifyContent-center s-alignItems-center s-borderBottom-black'><Link className=' s-display-flex s-justifyContent-center s-alignItems-center s-width100 s-marginB-10' onClick={()=>{
                            setLanguagesBox(false);
                                if(flag1){
                                    setFlag1(false);
                                    setOpenCloseMenu('s-display-none');
                                }
                        }} to={'/Transfer/'+language5+'/1'}>{transfer}</Link></li>
                        <li className='s-width100 s-marginB-10 s-marginT-10 s-display-flex s-justifyContent-center s-alignItems-center s-borderBottom-black'><Link className=' s-display-flex s-justifyContent-center s-alignItems-center s-width100 s-marginB-10' onClick={()=>{
                            setLanguagesBox(false);
                                if(flag1){
                                    setFlag1(false);
                                    setOpenCloseMenu('s-display-none');
                                }
                        }} to={'/Leagues/'+language5+'/1134'}>{leagues}</Link></li>
                        <li className='s-width100 s-marginB-10 s-marginT-10 s-display-flex s-justifyContent-center s-alignItems-center s-borderBottom-black'><Link className=' s-display-flex s-justifyContent-center s-alignItems-center s-width100 s-marginB-10' onClick={()=>{
                            setLanguagesBox(false);
                                if(flag1){
                                    setFlag1(false);
                                    setOpenCloseMenu('s-display-none');
                                }
                        }} to={'/Teams/'+language5+'/26'}>{teams}</Link></li>
                        <li className='s-width100 s-marginB-10 s-marginT-10 s-display-flex s-justifyContent-center s-alignItems-center s-borderBottom-black'><Link className=' s-display-flex s-justifyContent-center s-alignItems-center s-width100 s-marginB-10' onClick={()=>{
                            setLanguagesBox(false);
                                if(flag1){
                                    setFlag1(false);
                                    setOpenCloseMenu('s-display-none');
                                }
                        }} to={'/Players/'+language5+'/80902'}>{players}</Link></li>
                    </ul>
                </div>
            </nav>
            {flag?
                <div className='xl-width100 xl-position-sticky xl-top-82 xl-zIndex-100'>
                    <div className='xl-position-absolute xl-border-red2 xl-right-20 xl-zIndex-100 xl-width-450 xl-height-400 xl-bg-test xl-borderR-15 xl-overflow-auto'>
                        {leaguesData.length>0 ? <div>
                            <h3 className='xl-color-white xl-paddingL-15 xl-paddingT-15 xl-paddingB-15 xl-fontSize-24 xl-bg-test2'>{leagues}</h3>
                            {leaguesData.length> 0 && (
                                <ul className='xl-width100'>
                                    {leaguesData.map((league,index)=>(

                                        <li key={index} onClick={()=>{
                                            setFlag(false);
                                            window.location.reload(false);
                                            // setSearchValue(null);
                                        }} className='xl-width100 xl-height-40 xl-marginT-5 xl-marginB-5'>
                                            <Link to={`/Leagues/${language5}/${league.leagueId}`} className='xl-width100 xl-height100 xl-display-flex xl-alignItems-center '>
                                                <div className='xl-width-30 xl-height-30 xl-borderR50 xl-overflow-hidden xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test14 xl-marginL-20'>
                                                    <img className='xl-width100' src={hostUrl+league.logo}/>
                                                </div>
                                                <div className='xl-fontSize-18 xl-color-white xl-marginL-20'>{league.name}</div>
                                            </Link>
                                            </li>
                                    ))
                                    }
                                </ul>
                            )}
                            </div>
                            :<></>}
                        {teamsData.length>0 ? <div>
                            <h3 className='xl-color-white xl-paddingL-15 xl-paddingT-15 xl-paddingB-15 xl-fontSize-24 xl-bg-test2'>{teams}</h3>
                            {teamsData.length> 0 && (
                                <ul className='xl-width100'>
                                    {teamsData.map((team,index)=>(
                                        <li key={index} onClick={()=>{
                                            setFlag(false);
                                            window.location.reload(false);
                                            // setSearchValue(null);
                                        }} className='xl-width100 xl-height-40 xl-marginT-5 xl-marginB-5'>
                                            <Link to={`/Teams/${language5}/${team.teamId}`} className='xl-width100 xl-height100 xl-display-flex xl-alignItems-center '>
                                                <div className='xl-width-30 xl-height-30 xl-borderR50 xl-overflow-hidden xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test14 xl-marginL-20'>
                                                    <img className='xl-width100' src={hostUrl+team.logo}/>
                                                </div>
                                                <div className='xl-fontSize-18 xl-color-white xl-marginL-20'>{team.name}</div></Link></li>
                                        ))
                                    }
                                </ul>
                            )}
                        </div>:<></>}
                        {playersData.length>0 ? <div>
                            <h3 className='xl-color-white xl-paddingL-15 xl-paddingT-15 xl-paddingB-15 xl-fontSize-24 xl-bg-test2'>{players}</h3>
                            {playersData.length> 0 && (
                                <ul className='xl-width100'>
                                    {playersData.map((player,index)=>(
                                        <li key={index} onClick={()=>{
                                            setFlag(false);
                                            window.location.reload(false);
                                        }} className='xl-width100 xl-height-40 xl-marginT-5 xl-marginB-5'><Link to={`/Players/${language5}/${player.playerId}`} className='xl-width100 xl-height100 xl-display-flex xl-alignItems-center '>
                                            <div className='xl-width-30 xl-height-30 xl-borderR50 xl-overflow-hidden xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test14 xl-marginL-20'>
                                                <img className='xl-width100' src={hostUrl+player.photo}/>
                                            </div>
                                            <div className='xl-fontSize-18 xl-color-white xl-marginL-20'>{player.name}</div></Link></li>
                                    ))
                                    }
                                </ul>
                            )}
                        </div>:<></>}
                    </div>
                </div>
            :<></>}
     </>
    );
}

export default Navigation;
