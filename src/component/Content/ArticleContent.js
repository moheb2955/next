"use client"

import React, {useEffect,useState} from 'react';
import axios from "axios";
import { useRouter } from 'next/router';
// import {Link, useLocation, useParams, useSearchParams} from 'react-router-dom';
import { useSearchParams, useParams } from 'next/navigation'

let hostUrl=process.env.REACT_APP_DATABASE_URL;

function ArticleContent(){
    const [content,setContent]=useState('')
    // const location = useLocation();
    const [contentTitle,setContentTitle]=useState('');
    const [contentImage,setContentImage]=useState('');
    const [contentBody,setContentBody]=useState('');
    const [contentPublishDate,setContentPublishDate]=useState('');
    const [contentContentType,setContentContentType]=useState('');

    // const { language }=useParams();
    const [loading,setLoading]=useState(true);
    const [loading2,setLoading2]=useState(true);
    const[randomArticles,setRandomArticle]=useState()

    const params = useParams()

    const [contentId,setContentId]=useState(location.pathname.split('/')[location.pathname.split('/').length-1])
    const num2 = useSearchParams().get({ m: language});

    let language5;


    if(location.pathname.split('/').length==2){
        language5='en';
    }
    else{
        language5=(location.pathname.split('/')[2]);
    }
    const [language2, setLanguage] = useState(language5);

    useEffect(
        ()=>{
            axios.post(hostUrl + `/content/pages/${language2}/1`).then((response)=>{
                    setRandomArticle(response.data.filter_data);
                    console.log(response.data.filter_data)
                }
            )
        }
        ,[contentId])
    useEffect(()=>{
        axios.post(hostUrl+`/Content/${num2}/${contentId}`).then((res)=>{
            setContentImage(res.data.filter_data[0].Bodyimage);
            setContentTitle(res.data.filter_data[0].title);
            setContentBody(res.data.filter_data[0].body);
            setContentPublishDate(res.data.filter_data[0].PublishDate.split('T')[0]);
            setContentContentType(res.data.filter_data[0].contentType);
        })
    },[contentId])

    useEffect(()=>{
        axios.get(`https://content.wincent.studio/wp-json/wp/v2/posts?_embed`).then((res)=>{
            setContent(res.data[0].content.rendered)
        })
    },[])

return(
    <>
        <main className='xl-width-1390'>
            <div className={loading ? '':'xl-display-none m-display-none s-display-none'}>
                        <div dangerouslySetInnerHTML={{__html: content}}></div>
                </div>
            <div className={loading ? 'xl-display-none m-display-none s-display-none':'xl-display-flex xl-justifyContent-between xl-position-relative m-display-flex m-justifyContent-between m-position-relative '}>

                <div className={loading2 ? 'xl-width60 m-width60':'xl-display-none m-display-none s-display-none'}>
                    <div className='xl-height-100vh xl-display-flex xl-justifyContent-center xl-alignItems-center xl-zIndex-4  m-height-100vh m-display-flex m-justifyContent-center m-alignItems-center m-zIndex-4 s-width100 s-height-100vh s-display-flex s-justifyContent-center s-alignItems-center s-zIndex-4'>
                        <div className='xl-width-600 xl-height-400 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width-600 m-height-400 m-display-flex m-justifyContent-center m-alignItems-center s-width-600 s-height-400 s-display-flex s-justifyContent-center s-alignItems-center'>
                            <div className='xl-width-50 xl-height-50 xl-borderR50 m-width-50 m-height-50 m-borderR50 s-width-40 s-height-40 s-borderR50 dot1'></div>
                        </div>
                    </div>
                </div>
                <div className={loading2 ? 'xl-display-none' : 'xl-width60 xl-display-flex xl-justifyContent-center xl-marginR-15 xl-marginB-15 xl-marginT-35 xl-flexWrap-wrap m-width60 s-marginB-15 s-borderBottom-white'}>
                    <div className='xl-width100 xl-height-60 xl-display-flex xl-justifyContent-start xl-flexWrap-wrap xl-alignContent-evenly xl-flexWrap-wrap xl-marginT-10 m-width100 m-height-60 m-display-flex m-justifyContent-start m-flexWrap-wrap m-alignContent-evenly m-flexWrap-wrap m-marginT-10 s-width100 s-height-40  s-display-flex s-justifyContent-start s-flexWrap-wrap s-alignContent-evenly s-flexWrap-wrap s-borderTopBottom-white s-marginT-10 '>

                        <div className='xl-width100 xl-height100 xl-display-flex xl-alignItems-center xl-fontSize-26 m-width100 m-color-white m-borderBottom-white m-fontSize-20 m-marginL-40 s-width100 s-color-white s-marginL-40'>{contentContentType}</div>
                    </div>
                    <div className='xl-width90 xl-marginT-15 xl-marginB-20 m-width100 s-width100'>
                        <img src={'https://dbms.wincent.studio/upload'+contentImage} className='xl-width100 m-width100 s-width100' onLoad={()=>{
                            setLoading(false);
                            setLoading2(false)
                        }}/>
                    </div>
                    <div className='xl-width100 xl-display-flex xl-justifyContent-start xl-flexWrap-wrap xl-marginT-10 m-width100 m-display-flex m-justifyContent-center m-flexWrap-wrap m-marginT-10 s-width100 s-display-flex s-justifyContent-center s-flexWrap-wrap s-marginT-10 s-marginB-10'>
                        <div className='xl-width80 xl-marginL-40 xl-marginT-30 xl-marginB-5 xl-display-flex xl-justifyContent-center m-width90 m-marginT-15 m-marginB-5 m-display-flex m-justifyContent-center s-width90 s-marginT-15 s-marginB-5 s-display-flex s-justifyContent-center'>
                            <h2 className=' xl-fontSize-32 m-color-white m-fontSize-32 s-color-white s-fontSize-22'>{contentTitle}</h2>
                        </div>
                        <div className='xl-width90 xl-marginL-40 xl-overflow-hidden xl-marginT-15 xl-marginB-40 m-width70 m-overflow-hidden m-marginT-15 m-marginB-40 s-width70 s-overflow-hidden s-marginT-15 s-marginB-40'>
                            <p className='xl-marginT-15 xl-fontSize  m-marginT-15 m-fontSize-14 m-color-white s-marginT-15 s-fontSize-12 s-color-white'>{contentBody}</p>
                        </div>
                        <div className='xl-width100 xl-fontSize-14 xl-marginR-15 xl-marginT-35 xl-marginB-20 xl-display-flex xl-justifyContent-end m-width80 m-color-silver m-fontSize-14 m-marginR-15 m-marginT-35 m-marginB-20 m-display-flex m-justifyContent-end s-width80 s-color-silver s-fontSize-10 s-marginR-15 s-marginT-35 s-marginB-20 s-display-flex s-justifyContent-end'>{contentPublishDate}</div>
                    </div>
                </div>
                <div className='xl-width30 xl-height-100vh xl-marginL-20 xl-marginB-15 xl-overflow-hidden xl-marginT-35 xl-position-sticky xl-top-150 m-width30 m-height-100vh m-marginL-20 m-marginB-15 m-overflow-hidden m-marginT-35 m-position-sticky m-top-150 s-display-none'>
                    {randomArticles ? <div className='xl-width100 xl-height100 m-width100 m-height100'>
                        {randomArticles.length > 0 && (
                            <ul className='xl-width100 xl-paddingT-20 xl-paddingB-20 xl-height100 xl-display-flex xl-flexWrap-wrap xl-justifyContent-center xl-alignContent-start xl-overflow-auto m-width100 m-paddingT-20 m-paddingB-20 m-height100 m-display-flex m-flexWrap-wrap m-justifyContent-center m-alignContent-start m-overflow-auto'>
                                {randomArticles.map((randomArticle,index)=>{
                                    return <li key={index} className='xl-width90 xl-borderR-15 xl-bg-test xl-marginT-10 xl-display-flex xl-alignContent-between xl-justifyContent-end xl-flexWrap-wrap m-width90 m-borderBottom-white m-display-flex m-alignContent-between m-justifyContent-end m-flexWrap-wrap'>
                                        <div className='xl-width100 xl-display-flex xl-justifyContent-between xl-alignItems-center m-width100 m-display-flex m-justifyContent-between'>
                                            <div className='xl-width-90 xl-height-90 xl-marginL-5 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-borderR-10 xl-overflow-hidden m-width-90 m-height-90 m-marginL-5 m-display-flex m-justifyContent-center m-alignItems-center m-borderR-10 m-overflow-hidden'>
                                                <img className='xl-width100 xl-borderR-10' src={'https://dbms.wincent.studio/upload'+randomArticle.Titleimage}/>
                                            </div>
                                            <Link className='xl-width80 xl-color-silver xl-marginT-10 xl-marginB-10 xl-fontSize-14 xl-paddingL-10 xl-paddingR-10 m-width80 m-color-white m-marginT-10 m-marginB-10 m-fontSize-14 m-paddingL-10 m-paddingR-10' onClick={()=>{
                                                setContentId(randomArticle.contentId);
                                                setLoading2(true);
                                            }} to={`/News/${language2}/NewsContent/${randomArticle.contentId}`} >
                                                {randomArticle.title}
                                            </Link>
                                        </div>
                                        <span className=' xl-fontSize-10 xl-color-silver xl-marginB-5 xl-marginR-10 m-color-white m-fontSize-10 m-marginB-5 m-marginR-5'>{randomArticle.PublishDate.split('T')[0]}</span>
                                    </li>
                                })}
                            </ul>
                        )}
                    </div> : <div></div>}
                    <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-alignItems-center'>
                        <div className='xl-width-200 xl-height-200 xl-borderR50 xl-border-red2'></div>
                    </div>
                </div>
            </div>
        </main>

    </>
)}

export default ArticleContent;
