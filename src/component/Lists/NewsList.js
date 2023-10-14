import React, {useEffect, useState} from "react";
// import {Link, useLocation} from "react-router-dom";
import axios from "axios";
import translations from "../../languages.json";
let counter=0;

function NewsList({newses,setNewsCounter,newsFlag}){
    let flag=false;
    const [contentNumber,setContentNumber]=useState(5);
    const location = useLocation();
    let language5;
    if(location.pathname.split('/').length==2){
        language5='en';
    }
    else{
        language5=(location.pathname.split('/')[2]);
    }
    console.log(newses)
    const [language2, setLanguage] = useState(language5);
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);
    if(newses.length>=1){
        flag=true;
    }
    return(
        <>
            <div className='xl-width-1390 xl-marginT-35 xl-marginB-40 xl-display-flex xl-justifyContent-center'>
                {newses.length > 0 && (
                <div className='xl-width99 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap'>
                    {newses.map((news,index)=> {
                         return <Link to={`/News/${language2}/NewsContent/${news.contentId}`}
                            className='xl-width30 xl-height-540 xl-bg-test16 xl-borderR-15 xl-marginL-10 xl-marginR-10 xl-marginB-10 xl-marginT-10 xl-display-flex xl-flexWrap-wrap xl-alignContent-between xl-overflow-hidden hover-scale'>
                             <img className='xl-width100' src={'https://dbms.wincent.studio/upload'+news.Titleimage}/>
                             <h3 className='xl-paddingL-10 xl-paddingR-10 xl-paddingT-5 xl-paddingB-5 '>{news.title}</h3>
                             <div className='xl-width100 xl-display-flex xl-justifyContent-end'><span className=' xl-fontSize-10 xl-marginB-10 xl-marginR-10'>{news.PublishDate.split('T')[0]}</span></div>
                         </Link>
                    })}
                </div>
                    )}
            </div>
        </>
    )
}

export default NewsList;