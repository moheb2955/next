import React, {useEffect, useState} from 'react';
import UpcomingMatchesList from "../Lists/UpcomingMatchesList";
import LastResultList from "../Lists/LastResult";
import ScheduleList from "../Lists/ScheduleList";
import {Link, useLocation} from "react-router-dom";
import axios from "axios";
import TeamList from "../Lists/TeamList";
let hostUrl=process.env.REACT_APP_DATABASE_URL;
function LeagueInternationalCard({leagueName1,leagueLogo,leagueCountry,leagueCountryLogo}) {

    return (
        <>
            <div className='xl-width100 xl-height100 xl-bg-test xl-borderR-15 xl-position-relative'>
                <div className='xl-width100 xl-position-relative'>
                    <div className='xl-width-50 xl-height-50 xl-overflow-hidden xl-borderR50 xl-position-absolute xl-top--5 xl-right--10 xl-bg-test2 xl-display-flex xl-justifyContent-center xl-alignItems-center'>
                        <img src={leagueCountryLogo} className='xl-height100'/>
                    </div>
                </div>
                <div className='xl-width100 xl-display-flex xl-justifyContent-center'>
                    <div className='xl-width-150 xl-height-150 xl-borderR50 xl-display-flex xl-alignItems-end xl-justifyContent-center xl-overflow-hidden xl-marginT-35 xl-marginB-15 xl-position-relative'>
                        <img className='xl-width100 xl-position-absolute xl-top--5' src={leagueLogo}/>
                    </div>
                </div>
                <div className='xl-width100 xl-display-flex xl-justifyContent-center'>
                    <button className='xl-paddingB-5 xl-paddingT-5 xl-paddingR-20 xl-paddingL-20 xl-borderR-10 xl-bg-test2 xl-color-white xl-bold xl-fontSize-20 xl-pointer'>Follow</button>
                </div>
                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-color-gray xl-fontSize-20 xl-marginT-15 xl-marginB-10'>{leagueName1}</div>
                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap'>
                    {leagueCountry? <><div className='xl-width45 xl-display-flex xl-color-black xl-justifyContent-end xl-marginT-5 xl-marginB-5'>Country<span className='xl-color-red1 xl-fontSize-18'> : </span></div>
                        <div className='xl-width45 xl-display-flex xl-color-gray xl-justifyContent-start xl-marginT-5 xl-marginB-5'>{leagueCountry}</div></>:<></>}
                    <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-color-gray xl-fontSize-20 xl-marginT-35 xl-marginB-10'>
                        <div className='xl-width-40 xl-height-40 xl-borderR-10 xl-display-flex xl-alignItems-center xl-justifyContent-center'>
                            <img className='xl-width100' src='/static/media/Twitter-Logo.f0167521be975131b3dd.png'/>
                        </div>
                        <div className='xl-width-40 xl-height-40 xl-borderR-10 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-marginL-10'>
                            <img className='xl-width100' src='https://db.wincent.studio/LogoDB/static/instagram.png'/>
                        </div>
                        <div className='xl-width-40 xl-height-40 xl-borderR-10 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-marginL-10'>
                            <img className='xl-width100' src='https://db.wincent.studio/LogoDB/static/facebook.png'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

let name;
let flag2=false;
function LeagueFamilyTable({standing, standingTeams}) {
    const location = useLocation();

    const [language2, setLanguage] = useState(location.pathname.split('/')[2]);
    const [array1, setArray1] = useState([]);
    const [array2, setArray2] = useState([]);
    const [array3, setArray3] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchPromises = standing.map(async (team, index) => {
                const teamId = team.teamId;
                setArray2((prevArray2) => [...prevArray2, hostUrl + '/LogoDB/TeamLogo/' + teamId + '.webp']);
                setArray3((prevArray3) => [...prevArray3, teamId]);
                try {
                    const response = await axios.post(hostUrl + '/Team/DisplayTeam/' + teamId);
                    const teamName = response.data.result[0].name;

                    // Use the index to ensure names are placed in the correct order
                    setArray1((prevArray1) => {
                        const updatedArray = [...prevArray1];
                        updatedArray[index] = teamName;
                        return updatedArray;
                    });
                } catch (error) {
                    console.error('Error fetching team name:', error);
                }
            });

            // Wait for all fetchPromises to complete before setting the state
            await Promise.all(fetchPromises);
        };

        fetchData();
    }, [standing]);

    let row = 1;
    let row2 = 0;
    let row3 = 0;
    let row4 = 0;
    let color1;
    let color2;
    let color3;
    let color4;
    let color5;
    let color6;
    let icon1;
    let icon2;
    let icon3;
    let icon4;
    let icon5;
    let icon6;

    return (
        <div className='xl-width100 xl-height100 m-width100 m-height100 s-width100 s-height100'>

            <div
                className='xl-width100 xl-height-40 xl-position-relative m-width100 m-height-70 m-position-relative s-width100 s-height-70 s-position-relative'>
                <div
                    className='xl-width100 xl-height-40 xl-marginT-10 xl-borderBottom-white xl-display-flex xl-justifyContent-between xl-position-fixed xl-zIndex-2 xl-top-0 m-width100 m-height-50 m-marginT-10 m-borderBottom-white m-display-flex m-justifyContent-between m-position-fixed m-zIndex-2 m-top-0 s-width100 s-height-50 s-marginT-10 s-borderBottom-white s-display-flex s-justifyContent-between s-position-fixed s-zIndex-2 s-top-0'>
                    <div
                        className='xl-width100 xl-height100 xl-display-flex xl-justifyContent-end m-width100 m-height100 m-display-flex m-justifyContent-end s-width100 s-height100 s-display-flex s-justifyContent-end'>
                        <div
                            className='xl-width60 xl-height100 xl-display-flex xl-justifyContent-evenly m-width60 m-height100 m-display-flex m-justifyContent-evenly s-width60 s-height100 s-display-flex s-justifyContent-evenly'>
                            <div
                                className='xl-width-30 xl-color-black xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-fontSize-12 s-display-none'>r
                            </div>
                            <div
                                className='xl-width-30 xl-color-black xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-fontSize-12 s-display-none'>tC
                            </div>
                            <div
                                className='xl-width-30 xl-color-black xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-fontSize-12 s-display-none'>wC
                            </div>
                            <div
                                className='xl-width-30 xl-color-black xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-fontSize-12 s-display-none'>dC
                            </div>
                            <div
                                className='xl-width-30 xl-color-black xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-fontSize-12 s-display-none'>lC
                            </div>
                            <div
                                className='xl-width-30 xl-color-black xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-fontSize-12 s-display-none'>gS
                            </div>
                            <div
                                className='xl-width-30 xl-color-black xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-fontSize-12 s-display-none'>lS
                            </div>
                            <div
                                className='xl-width-30 xl-color-black xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-fontSize-12 s-display-none'>gD
                            </div>
                            <div
                                className='xl-width-30 xl-color-black xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-fontSize-12 s-display-none'>tAS
                            </div>
                            <div
                                className='xl-width-30 xl-color-black xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-fontSize-12 s-display-none'>i
                            </div>
                            <div
                                className='xl-marginL-10 xl-width32 xl-color-black xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-evenly m-marginL-10 m-width32 m-height100 m-display-flex m-alignItems-center m-justifyContent-evenly m-fontSize-12 s-marginL-10 s-width50 s-height100 s-display-flex s-alignItems-center s-justifyContent-evenly s-fontSize-12'>
                                <div className='xl-color-black'>recent six games</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className='xl-width100 xl-height88 xl-marginT-15 xl-overflow-auto m-width100 m-height90 m-borderTop-white m-marginT-10 m-overflow-auto s-width100 s-height90 s-marginT-10 s-overflow-auto'>
                {standing.length > 0 && (
                    <ul className='xl-width100 xl-display-flex xl-flexWrap-wrap m-width100 m-display-flex m-flexWrap-wrap s-width100 s-display-flex s-flexWrap-wrap'>
                        {
                            standing.map((user, index) => {
                                if (user) {
                                    if (user.recentFirstResult == 0) {
                                        color1 = 'xl-width-25 xl-height-25 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test7 m-width-15 m-height-15 m-borderR50 m-bg-test7 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-bg-test7 s-justifyContent-center s-display-flex s-alignItems-center';
                                        icon1 =
                                            <i className="bi bi-check-lg xl-color-gray xl-fontSize-18 m-color-white s-color-white"></i>;
                                    } else if (user.recentFirstResult == 1) {
                                        color1 = 'xl-width-25 xl-height-25 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test8 m-width-15 m-height-15 m-borderR50 m-bg-test8 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-bg-test8 s-justifyContent-center s-display-flex s-alignItems-center';
                                        icon1 =
                                            <i className="bi bi-dash xl-color-gray xl-fontSize-18 m-color-white s-color-white"></i>;
                                    } else {
                                        color1 = 'xl-width-25 xl-height-25 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test6 m-width-15 m-height-15 m-borderR50 m-bg-test6 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-bg-test6 s-justifyContent-center s-display-flex s-alignItems-center';
                                        icon1 =
                                            <i className="bi bi-x xl-color-gray xl-fontSize-18 m-color-white s-color-white"></i>;
                                    }
                                    if (user.recentSecondResult == 0) {
                                        color2 = 'xl-width-25 xl-height-25 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test7 m-width-15 m-height-15 m-borderR50 m-bg-test7 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-bg-test7 s-justifyContent-center s-display-flex s-alignItems-center';
                                        icon2 =
                                            <i className="bi bi-check-lg xl-color-gray xl-fontSize-18 m-color-white s-color-white"></i>;
                                    } else if (user.recentSecondResult == 1) {
                                        color2 = 'xl-width-25 xl-height-25 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test8 m-width-15 m-height-15 m-borderR50 m-bg-test8 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-bg-test8 s-justifyContent-center s-display-flex s-alignItems-center';
                                        icon2 =
                                            <i className="bi bi-dash xl-color-gray xl-fontSize-18 m-color-white s-color-white"></i>;
                                    } else {
                                        color2 = 'xl-width-25 xl-height-25 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test6 m-width-15 m-height-15 m-borderR50 m-bg-test6 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-bg-test6 s-justifyContent-center s-display-flex s-alignItems-center';
                                        icon2 =
                                            <i className="bi bi-x xl-color-gray xl-fontSize-18 m-color-white s-color-white"></i>;
                                    }
                                    if (user.recentThirdResult == 0) {
                                        color3 = 'xl-width-25 xl-height-25 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test7 m-width-15 m-height-15 m-borderR50 m-bg-test7 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-bg-test7 s-justifyContent-center s-display-flex s-alignItems-center';
                                        icon3 =
                                            <i className="bi bi-check-lg xl-color-gray xl-fontSize-18 m-color-white s-color-white"></i>;
                                    } else if (user.recentThirdResult == 1) {
                                        color3 = 'xl-width-25 xl-height-25 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test8 m-width-15 m-height-15 m-borderR50 m-bg-test8 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-bg-test8 s-justifyContent-center s-display-flex s-alignItems-center';
                                        icon3 =
                                            <i className="bi bi-dash xl-color-gray xl-fontSize-18 m-color-white s-color-white"></i>;
                                    } else {
                                        color3 = 'xl-width-25 xl-height-25 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test6 m-width-15 m-height-15 m-borderR50 m-bg-test6 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-bg-test6 s-justifyContent-center s-display-flex s-alignItems-center';
                                        icon3 =
                                            <i className="bi bi-x xl-color-gray xl-fontSize-18 m-color-white s-color-white"></i>;
                                    }
                                    if (user.recentFourthResult == 0) {
                                        color4 = 'xl-width-25 xl-height-25 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test7 m-width-15 m-height-15 m-borderR50 m-bg-test7 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-bg-test7 s-justifyContent-center s-display-flex s-alignItems-center';
                                        icon4 =
                                            <i className="bi bi-check-lg xl-color-gray xl-fontSize-18 m-color-white s-color-white"></i>;
                                    } else if (user.recentFourthResult == 1) {
                                        color4 = 'xl-width-25 xl-height-25 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test8 m-width-15 m-height-15 m-borderR50 m-bg-test8 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-bg-test8 s-justifyContent-center s-display-flex s-alignItems-center';
                                        icon4 =
                                            <i className="bi bi-dash xl-color-gray xl-fontSize-18 m-color-white s-color-white"></i>;
                                    } else {
                                        color4 = 'xl-width-25 xl-height-25 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test6 m-width-15 m-height-15 m-borderR50 m-bg-test6 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-bg-test6 s-justifyContent-center s-display-flex s-alignItems-center';
                                        icon4 =
                                            <i className="bi bi-x xl-color-gray xl-fontSize-18 m-color-white s-color-white"></i>;
                                    }
                                    if (user.recentFifthResult == 0) {
                                        color5 = 'xl-width-25 xl-height-25 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test7 m-width-15 m-height-15 m-borderR50 m-bg-test7 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-bg-test7 s-justifyContent-center s-display-flex s-alignItems-center';
                                        icon5 =
                                            <i className="bi bi-check-lg xl-color-gray xl-fontSize-18 m-color-white s-color-white"></i>;
                                    } else if (user.recentFifthResult == 1) {
                                        color5 = 'xl-width-25 xl-height-25 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test8 m-width-15 m-height-15 m-borderR50 m-bg-test8 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-bg-test8 s-justifyContent-center s-display-flex s-alignItems-center';
                                        icon5 =
                                            <i className="bi bi-dash xl-color-gray xl-fontSize-18 m-color-white s-color-white"></i>;
                                    } else {
                                        color5 = 'xl-width-25 xl-height-25 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test6 m-width-15 m-height-15 m-borderR50 m-bg-test6 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-bg-test6 s-justifyContent-center s-display-flex s-alignItems-center';
                                        icon5 =
                                            <i className="bi bi-x xl-color-gray xl-fontSize-18 m-color-white s-color-white"></i>;
                                    }
                                    if (user.recentSixthResult == 0) {
                                        color6 = 'xl-width-25 xl-height-25 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test7 m-width-15 m-height-15 m-borderR50 m-bg-test7 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-bg-test7 s-justifyContent-center s-display-flex s-alignItems-center';
                                        icon6 =
                                            <i className="bi bi-check-lg xl-color-gray xl-fontSize-18 m-color-white s-color-white"></i>;
                                    } else if (user.recentSixthResult == 1) {
                                        color6 = 'xl-width-25 xl-height-25 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test8 m-width-15 m-height-15 m-borderR50 m-bg-test8 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-bg-test8 s-justifyContent-center s-display-flex s-alignItems-center';
                                        icon6 =
                                            <i className="bi bi-dash xl-color-gray xl-fontSize-18 m-color-white s-color-white"></i>;
                                    } else {
                                        color6 = 'xl-width-25 xl-height-25 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test6 m-width-15 m-height-15 m-borderR50 m-bg-test6 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-bg-test6 s-justifyContent-center s-display-flex s-alignItems-center';
                                        icon6 =
                                            <i className="bi bi-x xl-color-gray xl-fontSize-18 m-color-white s-color-white"></i>;
                                    }

                                    return <li key={index}
                                               className='xl-width100 xl-height-50 xl-marginB-10 xl-display-flex xl-justifyContent-between m-width100 m-height-50 m-marginB-10 m-display-flex m-justifyContent-between s-width100 s-height-50 s-marginB-10 s-display-flex s-justifyContent-between'>
                                        <Link
                                            className='xl-width100 xl-height-50 xl-marginB-10 xl-display-flex xl-justifyContent-between m-width100 m-height-50 m-marginB-10 m-display-flex m-justifyContent-between s-width100 s-height-50 s-marginB-10 s-display-flex s-justifyContent-between'
                                            to={'/Teams/' + language2 + '/' + array3[row4++]}>
                                            <div
                                                className='xl-width40 xl-height100 xl-display-flex xl-justifyContent-start xl-alignItems-center m-width40 m-height100 m-display-flex m-justifyContent-start m-alignItems-center s-width40 s-height100 s-display-flex s-justifyContent-start s-alignItems-center'>
                                                <div
                                                    className='xl-width-40 xl-text-center xl-color-gray xl-fontSize-20 m-width-40 m-text-center m-color-white m-fontSize-20 s-width-40 s-text-center s-color-white '>{row++}</div>
                                                <div
                                                    className='xl-width-50 xl-height100 xl-marginL-5 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width-50 m-height100 m-marginL-5 m-display-flex m-alignItems-center m-justifyContent-center s-width-40 s-height-40 s-marginL-5 s-display-flex s-alignItems-center s-justifyContent-center'>
                                                    <img className='xl-height90 m-height90 s-height90'
                                                         src={array2[row3++]}></img>
                                                </div>
                                                <div
                                                    className='xl-width-250 xl-height100 xl-marginL-10 xl-display-flex xl-alignItems-center xl-color-gray m-width-250 m-height100 m-marginL-10 m-display-flex m-alignItems-center m-color-white m-fontSize-12 s-width-250 s-height100 s-marginL-10 s-display-flex s-alignItems-center s-color-white s-fontSize-12'>{array1[row2++]}</div>
                                            </div>
                                            <div
                                                className='xl-width60 xl-height100 xl-display-flex xl-justifyContent-evenly m-width60 m-height100 m-display-flex m-justifyContent-evenly s-width60 s-height100 s-display-flex s-justifyContent-evenly'>
                                                <div
                                                    className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-gray m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white m-fontSize-12 m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white s-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white s-fontSize-10 s-display-none'>{user.red}</div>
                                                <div
                                                    className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-gray m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white s-fontSize-10 s-display-none'>{user.totalCount}</div>
                                                <div
                                                    className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-gray m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white s-fontSize-10 s-display-none'>{user.winCount}</div>
                                                <div
                                                    className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-gray m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white s-fontSize-10 s-display-none'>{user.drawCount}</div>
                                                <div
                                                    className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-gray m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white s-fontSize-10 s-display-none'>{user.loseCount}</div>
                                                <div
                                                    className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-gray m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white s-fontSize-10 s-display-none'>{user.getScore}</div>
                                                <div
                                                    className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-gray m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white s-fontSize-10 s-display-none'>{user.loseScore}</div>
                                                <div
                                                    className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-gray m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white s-fontSize-10 s-display-none'>{user.goalDifference}</div>
                                                <div
                                                    className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-gray m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white s-fontSize-10 s-display-none'>{user.totalAddScore}</div>
                                                <div
                                                    className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-gray m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white s-fontSize-10 s-display-none'>{user.integral}</div>
                                                <div
                                                    className='xl-marginL-10 xl-width32 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-evenly m-marginL-10 m-width32 m-height100 m-display-flex m-alignItems-center m-justifyContent-evenly s-marginL-10 s-width50 s-height100 s-display-flex s-alignItems-center s-justifyContent-evenly'>
                                                    <div className={color1}>{icon1}</div>
                                                    <div className={color2}>{icon2}</div>
                                                    <div className={color3}>{icon3}</div>
                                                    <div className={color4}>{icon4}</div>
                                                    <div className={color5}>{icon5}</div>
                                                    <div className={color6}>{icon6}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                }

                            })
                        }

                    </ul>
                )}
            </div>
        </div>
    )

}

function LeagueNews(){
    const [newsStyle,setNewsStyle]=useState('xl-width200 xl-height100 xl-position-absolute xl-left-0 xl-top-0 xl-display-flex xl-alignItems-center xl-transition-500')
    return(<>
        <div className='xl-width100 xl-height100 xl-position-absolute xl-display-flex xl-justifyContent-between xl-alignItems-center'>
            <button className='xl-position-absolute xl-zIndex-2 xl-paddingB-5 xl-paddingT-5 xl-paddingL-10 xl-paddingR-10 xl-borderR-10 xl-bg-test2 xl-pointer xl-left-20' onClick={()=>{setNewsStyle('xl-width200 xl-height100 xl-position-absolute xl-left-0 xl-top-0 xl-display-flex xl-alignItems-center xl-transition-500')}}><i className='bi bi-caret-left-fill xl-color-silver'></i></button>
            <button className='xl-position-absolute xl-zIndex-2 xl-paddingB-5 xl-paddingT-5 xl-paddingL-10 xl-paddingR-10 xl-borderR-10 xl-bg-test2 xl-pointer xl-right-20' onClick={()=>{setNewsStyle('xl-width200 xl-height100 xl-position-absolute xl-left--100 xl-top-0 xl-display-flex xl-alignItems-center xl-transition-500')}}><i className='bi bi-caret-right-fill xl-color-silver'></i></button>
        </div>
        <div className={newsStyle}>
            <div className='xl-width50 xl-height100 xl-display-flex xl-justifyContent-evenly'>
                <div className='xl-width19 xl-bg-test17 xl-height100 xl-display-flex xl-flexWrap-wrap xl-justifyContent-center xl-alignContent-between xl-overflow-hidden xl-borderR-10'>
                    <img className='xl-width100' src='https://tcf.admeen.org/category/500/1/400x400/1-on-1-soccer.jpg'/>
                    <div className='xl-width90 xl-height-150'>
                        <h3 className='xl-color-silver xl-text-center'>Introducing the 2023 Ballon d'Or nominees: A Showcase of Football Excellence</h3>
                    </div>
                    <div className='xl-width90 xl-display-flex xl-justifyContent-end'>
                        <span className='xl-color-white xl-fontSize-10 xl-marginB-10'>2023-05-15</span>
                    </div>
                </div>
                <div className='xl-width19 xl-bg-test17 xl-height100 xl-display-flex xl-flexWrap-wrap xl-justifyContent-center xl-alignContent-between xl-overflow-hidden xl-borderR-10'>
                    <img className='xl-width100' src='https://tcf.admeen.org/category/500/1/400x400/1-on-1-soccer.jpg'/>
                    <div className='xl-width90 xl-height-150'>
                        <h3 className='xl-color-silver xl-text-center'>Introducing the 2023 Ballon d'Or nominees: A Showcase of Football Excellence</h3>
                    </div>
                    <div className='xl-width90 xl-display-flex xl-justifyContent-end'>
                        <span className='xl-color-white xl-fontSize-10 xl-marginB-10'>2023-05-15</span>
                    </div>
                </div>
                <div className='xl-width19 xl-bg-test17 xl-height100 xl-display-flex xl-flexWrap-wrap xl-justifyContent-center xl-alignContent-between xl-overflow-hidden xl-borderR-10'>
                    <img className='xl-width100' src='https://tcf.admeen.org/category/500/1/400x400/1-on-1-soccer.jpg'/>
                    <div className='xl-width90 xl-height-150'>
                        <h3 className='xl-color-silver xl-text-center'>Introducing the 2023 Ballon d'Or nominees: A Showcase of Football Excellence</h3>
                    </div>
                    <div className='xl-width90 xl-display-flex xl-justifyContent-end'>
                        <span className='xl-color-white xl-fontSize-10 xl-marginB-10'>2023-05-15</span>
                    </div>
                </div>
                <div className='xl-width19 xl-bg-test17 xl-height100 xl-display-flex xl-flexWrap-wrap xl-justifyContent-center xl-alignContent-between xl-overflow-hidden xl-borderR-10'>
                    <img className='xl-width100' src='https://tcf.admeen.org/category/500/1/400x400/1-on-1-soccer.jpg'/>
                    <div className='xl-width90 xl-height-150'>
                        <h3 className='xl-color-silver xl-text-center'>Introducing the 2023 Ballon d'Or nominees: A Showcase of Football Excellence</h3>
                    </div>
                    <div className='xl-width90 xl-display-flex xl-justifyContent-end'>
                        <span className='xl-color-white xl-fontSize-10 xl-marginB-10'>2023-05-15</span>
                    </div>
                </div>
                <div className='xl-width19 xl-bg-test17 xl-height100 xl-display-flex xl-flexWrap-wrap xl-justifyContent-center xl-alignContent-between xl-overflow-hidden xl-borderR-10'>
                    <img className='xl-width100' src='https://tcf.admeen.org/category/500/1/400x400/1-on-1-soccer.jpg'/>
                    <div className='xl-width90 xl-height-150'>
                        <h3 className='xl-color-silver xl-text-center'>Introducing the 2023 Ballon d'Or nominees: A Showcase of Football Excellence</h3>
                    </div>
                    <div className='xl-width90 xl-display-flex xl-justifyContent-end'>
                        <span className='xl-color-white xl-fontSize-10 xl-marginB-10'>2023-05-15</span>
                    </div>
                </div>
            </div>
                <div className='xl-width50 xl-height100 xl-display-flex xl-justifyContent-evenly'>
                    <div className='xl-width19 xl-bg-test17 xl-height100 xl-display-flex xl-flexWrap-wrap xl-justifyContent-center xl-alignContent-between xl-overflow-hidden xl-borderR-10'>
                        <img className='xl-width100' src='https://tcf.admeen.org/category/500/1/400x400/1-on-1-soccer.jpg'/>
                        <div className='xl-width90 xl-height-150'>
                            <h3 className='xl-color-silver xl-text-center'>Introducing the 2023 Ballon d'Or nominees: A Showcase of Football Excellence</h3>
                        </div>
                        <div className='xl-width90 xl-display-flex xl-justifyContent-end'>
                            <span className='xl-color-white xl-fontSize-10 xl-marginB-10'>2023-05-15</span>
                        </div>
                    </div>
                    <div className='xl-width19 xl-bg-test17 xl-height100 xl-display-flex xl-flexWrap-wrap xl-justifyContent-center xl-alignContent-between xl-overflow-hidden xl-borderR-10'>
                        <img className='xl-width100' src='https://tcf.admeen.org/category/500/1/400x400/1-on-1-soccer.jpg'/>
                        <div className='xl-width90 xl-height-150'>
                            <h3 className='xl-color-silver xl-text-center'>Introducing the 2023 Ballon d'Or nominees: A Showcase of Football Excellence</h3>
                        </div>
                        <div className='xl-width90 xl-display-flex xl-justifyContent-end'>
                            <span className='xl-color-white xl-fontSize-10 xl-marginB-10'>2023-05-15</span>
                        </div>
                    </div>
                    <div className='xl-width19 xl-bg-test17 xl-height100 xl-display-flex xl-flexWrap-wrap xl-justifyContent-center xl-alignContent-between xl-overflow-hidden xl-borderR-10'>
                        <img className='xl-width100' src='https://tcf.admeen.org/category/500/1/400x400/1-on-1-soccer.jpg'/>
                        <div className='xl-width90 xl-height-150'>
                            <h3 className='xl-color-silver xl-text-center'>Introducing the 2023 Ballon d'Or nominees: A Showcase of Football Excellence</h3>
                        </div>
                        <div className='xl-width90 xl-display-flex xl-justifyContent-end'>
                            <span className='xl-color-white xl-fontSize-10 xl-marginB-10'>2023-05-15</span>
                        </div>
                    </div>
                    <div className='xl-width19 xl-bg-test17 xl-height100 xl-display-flex xl-flexWrap-wrap xl-justifyContent-center xl-alignContent-between xl-overflow-hidden xl-borderR-10'>
                        <img className='xl-width100' src='https://tcf.admeen.org/category/500/1/400x400/1-on-1-soccer.jpg'/>
                        <div className='xl-width90 xl-height-150'>
                            <h3 className='xl-color-silver xl-text-center'>Introducing the 2023 Ballon d'Or nominees: A Showcase of Football Excellence</h3>
                        </div>
                        <div className='xl-width90 xl-display-flex xl-justifyContent-end'>
                            <span className='xl-color-white xl-fontSize-10 xl-marginB-10'>2023-05-15</span>
                        </div>
                    </div>
                    <div className='xl-width19 xl-bg-test17 xl-height100 xl-display-flex xl-flexWrap-wrap xl-justifyContent-center xl-alignContent-between xl-overflow-hidden xl-borderR-10'>
                        <img className='xl-width100' src='https://tcf.admeen.org/category/500/1/400x400/1-on-1-soccer.jpg'/>
                        <div className='xl-width90 xl-height-150'>
                            <h3 className='xl-color-silver xl-text-center'>Introducing the 2023 Ballon d'Or nominees: A Showcase of Football Excellence</h3>
                        </div>
                        <div className='xl-width90 xl-display-flex xl-justifyContent-end'>
                            <span className='xl-color-white xl-fontSize-10 xl-marginB-10'>2023-05-15</span>
                        </div>
                    </div>
                </div>
            </div>

    </>)
}
let teamImgSrc;
function LeagueTeams({teams}){
    return(<>

        <h2 className='xl-left--5 xl-top--20 xl-fontSize-40 xl-height-60 xl-zIndex-2 xl-bold xl-color-black xl-borderBottom-white xl-display-flex xl-alignItems-center xl-justifyContent-center'>Teams</h2>
        {teams ? <div className='xl-width100 xl-overflow-hidden xl-height-450 xl-position-relative m-width100 m-height-660 m-overflow-hidden s-width100 s-height-660 s-overflow-hidden'>

            <div
                className='xl-width100 xl-marginT-10 xl-height-420 xl-overflow-hidden xl-marginLR-auto xl-overflow-auto m-width100 m-marginLR-auto m-height-550 m-borderTopBottom-white m-overflow-auto m-marginT-5 s-width100 s-marginLR-auto s-height-550 s-marginT-5 s-overflow-auto'>
                {teams.length > 0 && (
                    <ul className='xl-width100 xl-overflow-auto m-width100 m-overflow-auto s-width100 s-overflow-auto'>
                        {[...teams].sort((a, b) =>
                            a.name > b.name ? 1 : -1,).map((team, index) => {
                            if (teams) {

                                if (team.logo === "") {
                                    teamImgSrc = 'https://cdn-icons-png.flaticon.com/512/5524/5524669.png';
                                } else {
                                    teamImgSrc = hostUrl + team.logo;
                                }
                                return <li key={index}
                                           className='xl-width100 xl-height-80 xl-marginB-5 xl-display-flex xl-justifyContent-evenly xl-alignItems-center m-width100 m-height-60 m-marginB-5 m-display-flex m-justifyContent-evenly m-alignItems-center s-width100 s-height-60 s-marginB-5 s-display-flex s-justifyContent-evenly s-alignItems-center'>
                                    <Link
                                        className='xl-width100 xl-height-80 xl-marginB-5 xl-display-flex xl-justifyContent-between xl-alignItems-center m-width100 m-height-60 m-marginB-5 m-display-flex m-justifyContent-evenly m-alignItems-center s-width100 s-height-60 s-marginB-5 s-display-flex s-justifyContent-evenly s-alignItems-center'
                                        to={'/Teams/en/' + team.teamId}>
                                        <div
                                            className='xl-width20 xl-height100 m-width20 s-width20 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width10 m-height100 m-width20 s-width20 m-display-flex m-alignItems-center m-justifyContent-center s-width10 s-height100 m-width20 s-width15 s-display-flex s-alignItems-center s-justifyContent-center'>
                                            <div
                                                className='xl-width-60 xl-height-60 xl-borderR50 xl-bg-test xl-display-flex xl-alignItems-center xl-justifyContent-center xl-overflow-hidden xl-boxShadow3 m-width-50 m-height-50 m-borderR50 m-bg-test m-display-flex m-alignItems-center m-justifyContent-center m-overflow-hidden m-border-black2 s-width-50 s-height-50 s-borderR50 s-bg-test s-display-flex s-alignItems-center s-justifyContent-center s-overflow-hidden s-border-black2'>
                                                <img className='xl-width90 m-width90 s-width90' src={teamImgSrc}
                                                     // onError={handleImageError}
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className='xl-width30 xl-height100 xl-fontSize-20 xl-display-flex xl-color-gray xl-justifyContent-evenly xl-alignItems-center xl-text-center'>{team.name}</div>
                                        <div
                                            className='xl-width30 xl-height100 xl-fontSize-20 xl-display-flex xl-color-gray xl-justifyContent-evenly xl-alignItems-center xl-text-center'>{team.foundingDate}</div>
                                    </Link>
                                </li>
                            } else {
                                return <div>not found</div>
                            }
                        })
                        }
                    </ul>
                )}
            </div>
        </div>: <div className='xl-width100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-height-440 xl-borderR-15 xl-fontSize-70 xl-color-black xl-bg-blur1'> Coming soon !</div>}   </>)
}

function LeagueSchedule({schedule}){
    console.log(schedule)
    return(
        <div className='xl-width100 xl-height100 xl-overflow-auto m-width100 m-height100 m-overflow-auto s-display-none'>
            {schedule.length > 0 && (
                <ul className='xl-width100 xl-display-flex xl-flexWrap-wrap m-width100 m-display-flex m-flexWrap-wrap s-width100 s-display-flex s-flexWrap-wrap' >
                    {schedule.map((user,index) => (
                        <li key={index}  className='xl-width100 xl-marginT-10  xl-borderR-15 m-width100 m-marginT-10 m-border-black2 m-bg-test4'>
                            <div className='xl-width100 xl-height-50 xl-display-flex xl-justifyContent-between m-width100 m-height-50 m-display-flex m-justifyContent-between' onClick={()=>{
                                console.log(schedule[index].matchId)
                            }}>
                                <div className='xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-center m-height100 m-display-flex m-justifyContent-center m-alignItems-center s-height100 s-display-flex s-justifyContent-center s-alignItems-center'>
                                </div>
                                <div className='xl-width100 xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width55 m-height100 m-display-flex m-justifyContent-center m-alignItems-center s-width55 s-height100 s-display-flex s-justifyContent-center s-alignItems-center'>
                                    <div className='xl-width45 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-end m-width45 m-height100 m-display-flex m-alignItems-center m-justifyContent-center s-width45 s-height100 s-display-flex s-alignItems-center s-justifyContent-center'>
                                        <div className='xl-fontSize-12 xs-color-black xl-marginL-10 m-fontSize-10 s-color-black m-marginL-10 s-fontSize-10 s-color-black s-marginL-10 xl-marginR-15'>{schedule[index].homeName}</div>
                                        <div className='xl-width-40 xl-height-40 xl-borderR50 m-width-30 m-height-30 m-borderR50 m-border-black2 s-width-30 s-height-30 s-borderR50 s-border-black2 s-bg-test3' title='club logo'>
                                            <img className='xl-height100 m-height100 s-height100' src={hostUrl+'/LogoDB/TeamLogo/'+schedule[index].homeId+'.webp'}/>
                                        </div>
                                    </div>
                                    <div className='xl-width10 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width10 m-height100 m-display-flex m-alignItems-center m-justifyContent-center' >
                                        <div className='xl-width-40 xl-height-40 xl-display-flex xl-justifyContent-center xl-alignItems-center xs-color-black xl-fontSize-20 m-width-30 m-height-30 m-display-flex m-justifyContent-center m-alignItems-center s-color-black m-fontSize-20 s-width-30 s-height-30 s-borderR50 s-border-black2 s-bg-test3'>
                                            vs
                                        </div>
                                    </div>
                                    <div className='xl-width45 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-start m-width45 m-height100 m-display-flex m-alignItems-center m-justifyContent-center s-width45 s-height100 s-display-flex s-alignItems-center s-justifyContent-center'>
                                        <div className='xl-width-40 xl-height-40 xl-borderR50 m-width-30 m-height-30 m-borderR50 m-border-black2 s-width-30 s-height-30 s-borderR50 s-border-black2 s-bg-test3' title='club logo'>
                                            <img className='xl-height100 m-height100 s-height100' src={hostUrl+'/LogoDB/TeamLogo/'+schedule[index].awayId+'.webp'}/>
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
        )

}

function LeagueTransfers(){
    return(
        <>
            <div className='xl-height-50 xl-width100 xl-borderBottom-white xl-display-flex xl-justifyContent-between xl-alignItems-center'>
                <div className='xl-width30 xl-display-flex xl-justifyContent-center xl-color-black xl-fontSize-24'>Player</div>
                <div className='xl-width40 xl-display-flex xl-justifyContent-between'>
                    <div className='xl-width40 xl-display-flex xl-justifyContent-center xl-color-black xl-fontSize-24'>From</div>
                    <div className='xl-width20 xl-display-flex xl-justifyContent-center xl-color-black xl-fontSize-24'>
                    </div>
                    <div className='xl-width40 xl-display-flex xl-justifyContent-center xl-color-black xl-fontSize-24'>To</div>
                </div>
                <div className='xl-width20 xl-display-flex xl-justifyContent-center xl-color-black xl-fontSize-24'>
                    Price
                </div>
            </div>
            <div className='xl-width100 xl-height88 xl-overflow-auto'>
                <ul className='xl-width100 xl-height100'>
                    <li className='xl-width100 xl-marginT-5 xl-marginB-5 xl-display-flex xl-justifyContent-between xl-alignItems-center'>
                        <div className='xl-width30'>
                            <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>
                                <div className='xl-width-50 xl-height-50 xl-borderR50 xl-boxShadow3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflowY-hidden'>
                                    <img className='xl-width100' src='https://cdn-icons-png.flaticon.com/512/1960/1960858.png'/>
                                </div>
                            </div>
                            <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>Player Name</div>
                        </div>
                        <div className='xl-width40 xl-display-flex xl-justifyContent-between'>
                            <div className='xl-width40 xl-color-black'>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>
                                    <div className='xl-width-40 xl-height-40 xl-borderR50 xl-boxShadow3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflowY-hidden'>
                                        <img className='xl-width100' src='https://marketplace.canva.com/EAFIdCv-0nM/1/0/1600w/canva-football-club-sports-badge-logo-k1redzEHtYE.jpg'/>
                                    </div>
                                </div>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>Team Name1</div>
                            </div>
                            <div className='xl-width20 xl-display-flex xl-justifyContent-center xl-color-black xl-display-flex xl-alignItems-center xl-justifyContent-center'>
                                    <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate1'>
                                        <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                    </div>
                                    <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate2'>
                                        <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                    </div>
                                    <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate3'>
                                        <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                    </div>
                                    <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate4'>
                                        <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                    </div>
                            </div>
                            <div className='xl-width40 xl-color-black'>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>
                                <div className='xl-width-40 xl-height-40 xl-borderR50 xl-boxShadow3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflowY-hidden'>
                                    <img className='xl-width100' src='https://img.freepik.com/free-vector/hand-drawn-flat-design-football-logo-template_23-2149373252.jpg?w=2000'/>
                                </div>
                            </div>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>Team Name2</div></div>
                        </div>
                        <h4 className='xl-width20 xl-display-flex xl-justifyContent-center xl-color-black xl-fontSize-24'>
                            100M$
                        </h4>
                    </li>
                    <li className='xl-width100 xl-marginT-5 xl-marginB-5 xl-display-flex xl-justifyContent-between xl-alignItems-center'>
                        <div className='xl-width30'>
                            <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>
                                <div className='xl-width-50 xl-height-50 xl-borderR50 xl-boxShadow3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflowY-hidden'>
                                    <img className='xl-width100' src='https://cdn-icons-png.flaticon.com/512/1960/1960858.png'/>
                                </div>
                            </div>
                            <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>Player Name</div>
                        </div>
                        <div className='xl-width40 xl-display-flex xl-justifyContent-between'>
                            <div className='xl-width40 xl-color-black'>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>
                                    <div className='xl-width-40 xl-height-40 xl-borderR50 xl-boxShadow3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflowY-hidden'>
                                        <img className='xl-width100' src='https://marketplace.canva.com/EAFIdCv-0nM/1/0/1600w/canva-football-club-sports-badge-logo-k1redzEHtYE.jpg'/>
                                    </div>
                                </div>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>Team Name1</div>
                            </div>
                            <div className='xl-width20 xl-display-flex xl-justifyContent-center xl-color-black xl-display-flex xl-alignItems-center xl-justifyContent-center'>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate1'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate2'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate3'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate4'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                            </div>
                            <div className='xl-width40 xl-color-black'>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>
                                    <div className='xl-width-40 xl-height-40 xl-borderR50 xl-boxShadow3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflowY-hidden'>
                                        <img className='xl-width100' src='https://img.freepik.com/free-vector/hand-drawn-flat-design-football-logo-template_23-2149373252.jpg?w=2000'/>
                                    </div>
                                </div>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>Team Name2</div></div>
                        </div>
                        <h4 className='xl-width20 xl-display-flex xl-justifyContent-center xl-color-black xl-fontSize-24'>
                            100M$
                        </h4>
                    </li>
                    <li className='xl-width100 xl-marginT-5 xl-marginB-5 xl-display-flex xl-justifyContent-between xl-alignItems-center'>
                        <div className='xl-width30'>
                            <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>
                                <div className='xl-width-50 xl-height-50 xl-borderR50 xl-boxShadow3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflowY-hidden'>
                                    <img className='xl-width100' src='https://cdn-icons-png.flaticon.com/512/1960/1960858.png'/>
                                </div>
                            </div>
                            <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>Player Name</div>
                        </div>
                        <div className='xl-width40 xl-display-flex xl-justifyContent-between'>
                            <div className='xl-width40 xl-color-black'>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>
                                    <div className='xl-width-40 xl-height-40 xl-borderR50 xl-boxShadow3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflowY-hidden'>
                                        <img className='xl-width100' src='https://marketplace.canva.com/EAFIdCv-0nM/1/0/1600w/canva-football-club-sports-badge-logo-k1redzEHtYE.jpg'/>
                                    </div>
                                </div>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>Team Name1</div>
                            </div>
                            <div className='xl-width20 xl-display-flex xl-justifyContent-center xl-color-black xl-display-flex xl-alignItems-center xl-justifyContent-center'>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate1'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate2'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate3'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate4'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                            </div>
                            <div className='xl-width40 xl-color-black'>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>
                                    <div className='xl-width-40 xl-height-40 xl-borderR50 xl-boxShadow3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflowY-hidden'>
                                        <img className='xl-width100' src='https://img.freepik.com/free-vector/hand-drawn-flat-design-football-logo-template_23-2149373252.jpg?w=2000'/>
                                    </div>
                                </div>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>Team Name2</div></div>
                        </div>
                        <h4 className='xl-width20 xl-display-flex xl-justifyContent-center xl-color-black xl-fontSize-24'>
                            100M$
                        </h4>
                    </li>
                    <li className='xl-width100 xl-marginT-5 xl-marginB-5 xl-display-flex xl-justifyContent-between xl-alignItems-center'>
                        <div className='xl-width30'>
                            <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>
                                <div className='xl-width-50 xl-height-50 xl-borderR50 xl-boxShadow3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflowY-hidden'>
                                    <img className='xl-width100' src='https://cdn-icons-png.flaticon.com/512/1960/1960858.png'/>
                                </div>
                            </div>
                            <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>Player Name</div>
                        </div>
                        <div className='xl-width40 xl-display-flex xl-justifyContent-between'>
                            <div className='xl-width40 xl-color-black'>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>
                                    <div className='xl-width-40 xl-height-40 xl-borderR50 xl-boxShadow3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflowY-hidden'>
                                        <img className='xl-width100' src='https://marketplace.canva.com/EAFIdCv-0nM/1/0/1600w/canva-football-club-sports-badge-logo-k1redzEHtYE.jpg'/>
                                    </div>
                                </div>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>Team Name1</div>
                            </div>
                            <div className='xl-width20 xl-display-flex xl-justifyContent-center xl-color-black xl-display-flex xl-alignItems-center xl-justifyContent-center'>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate1'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate2'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate3'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate4'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                            </div>
                            <div className='xl-width40 xl-color-black'>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>
                                    <div className='xl-width-40 xl-height-40 xl-borderR50 xl-boxShadow3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflowY-hidden'>
                                        <img className='xl-width100' src='https://img.freepik.com/free-vector/hand-drawn-flat-design-football-logo-template_23-2149373252.jpg?w=2000'/>
                                    </div>
                                </div>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>Team Name2</div></div>
                        </div>
                        <h4 className='xl-width20 xl-display-flex xl-justifyContent-center xl-color-black xl-fontSize-24'>
                            100M$
                        </h4>
                    </li>
                    <li className='xl-width100 xl-marginT-5 xl-marginB-5 xl-display-flex xl-justifyContent-between xl-alignItems-center'>
                        <div className='xl-width30'>
                            <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>
                                <div className='xl-width-50 xl-height-50 xl-borderR50 xl-boxShadow3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflowY-hidden'>
                                    <img className='xl-width100' src='https://cdn-icons-png.flaticon.com/512/1960/1960858.png'/>
                                </div>
                            </div>
                            <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>Player Name</div>
                        </div>
                        <div className='xl-width40 xl-display-flex xl-justifyContent-between'>
                            <div className='xl-width40 xl-color-black'>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>
                                    <div className='xl-width-40 xl-height-40 xl-borderR50 xl-boxShadow3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflowY-hidden'>
                                        <img className='xl-width100' src='https://marketplace.canva.com/EAFIdCv-0nM/1/0/1600w/canva-football-club-sports-badge-logo-k1redzEHtYE.jpg'/>
                                    </div>
                                </div>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>Team Name1</div>
                            </div>
                            <div className='xl-width20 xl-display-flex xl-justifyContent-center xl-color-black xl-display-flex xl-alignItems-center xl-justifyContent-center'>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate1'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate2'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate3'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate4'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                            </div>
                            <div className='xl-width40 xl-color-black'>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>
                                    <div className='xl-width-40 xl-height-40 xl-borderR50 xl-boxShadow3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflowY-hidden'>
                                        <img className='xl-width100' src='https://img.freepik.com/free-vector/hand-drawn-flat-design-football-logo-template_23-2149373252.jpg?w=2000'/>
                                    </div>
                                </div>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>Team Name2</div></div>
                        </div>
                        <h4 className='xl-width20 xl-display-flex xl-justifyContent-center xl-color-black xl-fontSize-24'>
                            100M$
                        </h4>
                    </li>
                    <li className='xl-width100 xl-marginT-5 xl-marginB-5 xl-display-flex xl-justifyContent-between xl-alignItems-center'>
                        <div className='xl-width30'>
                            <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>
                                <div className='xl-width-50 xl-height-50 xl-borderR50 xl-boxShadow3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflowY-hidden'>
                                    <img className='xl-width100' src='https://cdn-icons-png.flaticon.com/512/1960/1960858.png'/>
                                </div>
                            </div>
                            <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>Player Name</div>
                        </div>
                        <div className='xl-width40 xl-display-flex xl-justifyContent-between'>
                            <div className='xl-width40 xl-color-black'>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>
                                    <div className='xl-width-40 xl-height-40 xl-borderR50 xl-boxShadow3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflowY-hidden'>
                                        <img className='xl-width100' src='https://marketplace.canva.com/EAFIdCv-0nM/1/0/1600w/canva-football-club-sports-badge-logo-k1redzEHtYE.jpg'/>
                                    </div>
                                </div>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>Team Name1</div>
                            </div>
                            <div className='xl-width20 xl-display-flex xl-justifyContent-center xl-color-black xl-display-flex xl-alignItems-center xl-justifyContent-center'>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate1'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate2'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate3'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate4'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                            </div>
                            <div className='xl-width40 xl-color-black'>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>
                                    <div className='xl-width-40 xl-height-40 xl-borderR50 xl-boxShadow3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflowY-hidden'>
                                        <img className='xl-width100' src='https://img.freepik.com/free-vector/hand-drawn-flat-design-football-logo-template_23-2149373252.jpg?w=2000'/>
                                    </div>
                                </div>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>Team Name2</div></div>
                        </div>
                        <h4 className='xl-width20 xl-display-flex xl-justifyContent-center xl-color-black xl-fontSize-24'>
                            100M$
                        </h4>
                    </li>
                    <li className='xl-width100 xl-marginT-5 xl-marginB-5 xl-display-flex xl-justifyContent-between xl-alignItems-center'>
                        <div className='xl-width30'>
                            <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>
                                <div className='xl-width-50 xl-height-50 xl-borderR50 xl-boxShadow3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflowY-hidden'>
                                    <img className='xl-width100' src='https://cdn-icons-png.flaticon.com/512/1960/1960858.png'/>
                                </div>
                            </div>
                            <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>Player Name</div>
                        </div>
                        <div className='xl-width40 xl-display-flex xl-justifyContent-between'>
                            <div className='xl-width40 xl-color-black'>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>
                                    <div className='xl-width-40 xl-height-40 xl-borderR50 xl-boxShadow3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflowY-hidden'>
                                        <img className='xl-width100' src='https://marketplace.canva.com/EAFIdCv-0nM/1/0/1600w/canva-football-club-sports-badge-logo-k1redzEHtYE.jpg'/>
                                    </div>
                                </div>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>Team Name1</div>
                            </div>
                            <div className='xl-width20 xl-display-flex xl-justifyContent-center xl-color-black xl-display-flex xl-alignItems-center xl-justifyContent-center'>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate1'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate2'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate3'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate4'>
                                    <i className="bi bi-caret-right-fill xl-fontSize-20 xl-color-green"></i>
                                </div>
                            </div>
                            <div className='xl-width40 xl-color-black'>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>
                                    <div className='xl-width-40 xl-height-40 xl-borderR50 xl-boxShadow3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflowY-hidden'>
                                        <img className='xl-width100' src='https://img.freepik.com/free-vector/hand-drawn-flat-design-football-logo-template_23-2149373252.jpg?w=2000'/>
                                    </div>
                                </div>
                                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10'>Team Name2</div></div>
                        </div>
                        <h4 className='xl-width20 xl-display-flex xl-justifyContent-center xl-color-black xl-fontSize-24'>
                            100M$
                        </h4>
                    </li>
                </ul>
            </div>
        </>
    )
}

function LeagueProfile({leagueName1,leagueLogo,leagueCountry,standing,standingTeams,leagueCountryLogo,teams,schedule}) {
    const[flag,setFlag]=useState(false);
    const[leaguesData,setLeaguesData]=useState(false);
    const [searchValue,setSearchValue]=useState(null);
    function searchInDB(e){
        setSearchValue(e.target.value)
        if(e.target.value.length>3){
            axios.post('http://10.3.3.126:3200/search/bar?query='+e.target.value).then((res)=>{
                console.log(res.data);
                setFlag(true);
                setLeaguesData(res.data.leagues);
            });
        }
        else{
            setFlag(false);
            setLeaguesData(null);
        }
    }
    return (
        <>
            <div className='xl-width100 xl-marginT-15 xl-display-flex xl-bg-test xl-borderR-15 xl-overflow-hidden'>
                <input value={searchValue} onChange={searchInDB} type='text' placeholder='Search' className='xl-bg-transparent xl-width100 xl-paddingR-40 xl-paddingL-40 xl-paddingT-10 xl-paddingB-10 xl-fontSize-30 xl-color-black'/>
                <button className='xl-bg-test xl-paddingR-20 xl-paddingL-20 xl-paddingT-10 xl-paddingB-10'><i className='bi bi-search xl-color-black xl-fontSize-34'></i></button>
            </div>
            {flag?
                <div className='xl-width100 xl-position-relative'>
                    <div className=' xl-width100 xl-height-600 xl-bg-test17 xl-borderR-15 xl-overflow-auto xl-marginT-10 xl-position-absolute xl-zIndex-100'>
                        {leaguesData.length>0 ? <div>
                            {leaguesData.length> 0 && (
                                <ul className='xl-width100'>
                                    {leaguesData.map((league,index)=>(
                                        <li key={index} onClick={()=>{
                                            setFlag(false);
                                            window.location.reload(false);
                                        }} className='xl-width100 xl-height-90 xl-marginT-5 xl-marginB-5'><Link to={`/Leagues/en/${league.leagueId}`} className='xl-width100 xl-height100 xl-display-flex xl-alignItems-center '>
                                            <div className='xl-width-70 xl-height-70 xl-borderR50 xl-overflow-hidden xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test14 xl-marginL-20 xl-marginR-15'>
                                                <img className='xl-width100' src={hostUrl+league.logo}/>
                                            </div>
                                            <div className='xl-fontSize-24 xl-color-white xl-marginL-20'>{league.name}</div></Link></li>
                                    ))
                                    }
                                </ul>
                            )}
                        </div>:<></>}
                    </div>
                </div>
                :<></>}
            <div className='xl-width100 xl-display-flex xl-justifyContent-between'>
                <div className='xl-width30 xl-height-500 xl-marginT-35 xl-display-flex xl-justifyContent-between m-width100 m-height-200 m-marginT-10 m-display-flex m-justifyContent-between s-width100 s-display-flex s-justifyContent-between'>
                    <div className='xl-width100 xl-bg-test xl-borderR-15 m-width100 m-borderTopBottom-white m-marginT-5 s-width100 s-borderTopBottom-white s-marginT-5 s-height-350'>
                        <LeagueInternationalCard leagueName1={leagueName1} leagueLogo={leagueLogo} leagueCountry={leagueCountry} leagueCountryLogo={leagueCountryLogo}/>
                    </div>
                </div>
                <div className='xl-width62 xl-display-flex xl-justifyContent-between m-width100 m-display-flex m-justifyContent-between s-width100 s-display-flex s-justifyContent-between'>
                    <div className='xl-width100 m-width100 s-width100'>
                        <div className='xl-width100 xl-marginT-35 xl-display-flex xl-justifyContent-start xl-flexWrap-wrap m-width100 m-marginT-15 m-display-flex m-justifyContent-start m-flexWrap-wrap s-width100 s-marginT-15 s-display-flex s-justifyContent-start s-flexWrap-wrap'>
                            <div className='xl-width100 xl-height-500 xl-borderR-15 xl-bg-test12 m-width100 m-height-900 m-borderTopBottom-white m-bg-test12 m-marginT-5 s-width100 s-height-900 s-borderTopBottom-white s-bg-test12 s-marginT-5'>
                                <LeagueTeams teams={teams}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='xl-width100 xl-display-flex xl-justifyContent-between m-width100 m-display-flex m-justifyContent-between s-width100 s-display-flex s-justifyContent-between'>
                <div className='xl-width100 m-width100 s-width100'>
                    <div className='xl-width100 xl-marginT-35 xl-display-flex xl-justifyContent-start xl-flexWrap-wrap m-width100 m-marginT-15 m-display-flex m-justifyContent-start m-flexWrap-wrap s-width100 s-marginT-15 s-display-flex s-justifyContent-start s-flexWrap-wrap'>
                        <h2 className='xl-width100 xl-height-60 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-marginT-15 xl-fontSize-38'>Standings</h2>
                        <div className='xl-width100 xl-height-500 xl-borderR-15 xl-bg-test12'>
                            <LeagueFamilyTable standing={standing} standingTeams={standingTeams}/>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='xl-width100 xl-height-60 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-marginT-15 xl-fontSize-38'>Last News</h2>
            <div className='xl-width100 xl-display-flex xl-height-450 xl-position-relative xl-overflowX-hidden'>
                <LeagueNews/>
            </div>
                <div className='xl-width100 xl-borderR-15 xl-display-flex xl-justifyContent-between xl-flexWrap-wrap xl-marginT-35'>

                    <div className='xl-width64 xl-display-flex xl-justifyContent-start xl-flexWrap-wrap xl-overflow-hidden'>
                        <h2 className='xl-width100 xl-height-60 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-marginT-15 xl-fontSize-38'>Transfers</h2>
                        <div className='xl-width100 xl-height-490 xl-borderR-15 xl-bg-test'>
                            <LeagueTransfers/>
                        </div>
                    </div>
                    <div className='xl-width32 xl-display-flex xl-justifyContent-start xl-flexWrap-wrap xl-overflow-hidden'>
                        <h2 className='xl-width100 xl-height-60 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-marginT-15 xl-fontSize-38'>Schedule</h2>
                        <div className='xl-width100 xl-height-490 xl-borderR-15 xl-bg-test'>
                            <LeagueSchedule schedule={schedule}/>
                        </div>
                    </div>
                </div>


        </>
    )
}
export default LeagueProfile;