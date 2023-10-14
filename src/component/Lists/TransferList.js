import React, {useEffect, useState} from 'react';
import axios from "axios";
import transfer from "../Transfer";
let hostUrl=process.env.REACT_APP_DATABASE_URL;
function TransferList(){
    const[transferData,setTransferData]=useState('');
    useEffect(()=>{
        axios.post(hostUrl+`/transfer/pages/1`).then((res)=>{
            setTransferData(res.data.result);
        })
    },[])

    return(
        <>
        <div className='xl-width100 xl-height100 m-width100 m-height100 m-width100 m-height100'>
            {transferData.length > 0 && (
                <ul className='xl-width100 xl-height100 xl-display-flex xl-flexWrap-wrap xl-justifyContent-between xl-alignContent-start m-width100 m-height100 m-display-flex m-flexWrap-wrap m-justifyContent-evenly m-alignContent-start s-width100 s-height100 s-display-flex s-justifyContent-between s-alignContent-start s-flexWrap-wrap'>

                    {transferData.map((transfer,index)=>{
                    return <li key={index} className='xl-height45 xl-width19 xl-border-red2 xl-bg-test13 xl-borderR-10 xl-marginB-10 xl-display-flex xl-justifyContent-center xl-alignContent-start xl-flexWrap-wrap m-height50 m-width24 m-display-flex m-justifyContent-center m-alignContent-start m-flexWrap-wrap s-width45 s-display-flex s-justifyContent-center s-alignContent-start s-flexWrap-wrap hoverScale'>
                        <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-15 m-width100 m-display-flex m-justifyContent-center m-marginT-15 s-width100 s-display-flex s-justifyContent-center s-marginT-15'>
                            <div className='xl-width-40 xl-height-40 xl-bg-test xl-borderR-10 xl-display-flex xl-justifyContent-center xl-overflow-hidden m-width-40 m-height-40 m-bg-test m-borderR-10 m-display-flex m-justifyContent-center m-overflow-hidden s-width-35 s-height-35 s-bg-test s-borderR-10 s-display-flex s-justifyContent-center s-overflow-hidden'>
                                <img className='xl-height100 m-height100 s-height100'/>
                            </div>
                        </div>
                        <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-10 m-width100 m-display-flex m-justifyContent-center m-marginT-10 s-width100 s-display-flex s-justifyContent-center s-marginT-10'>
                            <div className='xl-marginT-5 xl-display-flex xl-justifyContent-center xl-overflow-hidden xl-fontSize-12 xl-color-black m-marginT-5 m-display-flex m-justifyContent-center m-overflow-hidden m-fontSize-12 m-color-white s-marginT-5 s-display-flex s-justifyContent-center s-overflow-hidden s-fontSize-10 s-color-white'>
                                {transfer.playerId}
                            </div>
                        </div>
                        <div className='xl-width90 xl-display-flex xl-justifyContent-evenly xl-marginT-15 m-width90 m-display-flex m-justifyContent-evenly m-marginT-15 s-width90 s-display-flex s-justifyContent-evenly s-marginT-15'>
                            <div className='xl-width-40 xl-height-40 xl-bg-test xl-borderR-10 xl-display-flex xl-justifyContent-center xl-overflow-hidden m-width-40 m-height-40 m-bg-test m-borderR-10 m-display-flex m-justifyContent-center m-overflow-hidden s-width-35 s-height-35 s-bg-test s-borderR-10 s-display-flex s-justifyContent-center s-overflow-hidden'>
                                <img className='xl-height100 m-height100 s-height100'/>
                            </div>
                            <div className='xl-width-60 xl-height-40 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflow-hidden m-width-70 m-height-40 m-display-flex m-justifyContent-center m-alignItems-center m-overflow-hidden s-width-60 s-height-40 s-display-flex s-justifyContent-center s-alignItems-center'>
                                <i className='bi bi-caret-right-fill xl-fontSize-20 xl-color-red xl-arrowAnimate1 m-color-red m-arrowAnimate1 s-fontSize-10 s-color-red s-arrowAnimate1'></i>
                                <i className='bi bi-caret-right-fill xl-fontSize-20 xl-color-red xl-arrowAnimate2 m-color-red m-arrowAnimate2 s-fontSize-10 s-color-red s-arrowAnimate2'></i>
                                <i className='bi bi-caret-right-fill xl-fontSize-20 xl-color-red xl-arrowAnimate3 m-color-red m-arrowAnimate3 s-fontSize-10 s-color-red s-arrowAnimate3'></i>
                            </div>
                            <div className='xl-width-40 xl-height-40 xl-bg-test xl-borderR-10 xl-display-flex xl-justifyContent-center xl-overflow-hidden m-width-40 m-height-40 m-bg-test m-borderR-10 m-display-flex m-justifyContent-center m-overflow-hidden s-width-35 s-height-35 s-bg-test s-borderR-10 s-display-flex s-justifyContent-center s-overflow-hidden'>
                                <img className='xl-height100 m-height100 s-height100'/>
                            </div>
                        </div>
                        <div className='xl-width90 xl-display-flex xl-justifyContent-evenly xl-marginT-10 m-width90 m-display-flex m-justifyContent-evenly m-marginT-10 s-width90 s-display-flex s-justifyContent-evenly s-marginT-10'>
                            <div className='xl-width50 xl-height-40 xl-display-flex xl-justifyContent-start xl-marginL-10 xl-alignItems-start xl-fontSize-10 xl-color-black m-width50 m-height-40 m-display-flex m-justifyContent-start m-marginL-10 m-alignItems-start m-fontSize-10 m-color-white m-text-center s-width50 s-height-40 s-display-flex s-justifyContent-start s-marginL-10 s-alignItems-start s-fontSize-10 s-color-white'>
                                {transfer.fromTeam}
                            </div>
                            <div className='xl-width50 xl-height-40 xl-display-flex xl-justifyContent-end xl-marginR-10 xl-alignItems-start xl-fontSize-10 xl-color-black m-width50 m-height-40 m-display-flex m-justifyContent-end m-marginR-10 m-alignItems-start m-fontSize-10 m-color-white m-text-center s-width50 s-height-40 s-display-flex s-justifyContent-end s-marginR-10 s-alignItems-start s-fontSize-10 s-color-white'>
                                {transfer.toTeam}
                            </div>
                        </div>
                        <div className='xl-width90 xl-display-flex xl-justifyContent-evenly m-width90 m-display-flex m-justifyContent-evenly s-width90 s-display-flex s-justifyContent-evenly'>
                            <div className='xl-width100 xl-height-40 xl-display-flex xl-justifyContent-center xl-fontSize-14 xl-color-black m-width100 m-height-40 m-display-flex m-justifyContent-center m-fontSize-14 m-color-white m-text-center s-width100 s-height-40 s-display-flex s-justifyContent-center s-fontSize-10 s-color-white s-text-center'>
                                Transfer type:{transfer.type}
                            </div>
                        </div>
                    </li>
                })}
                </ul>
            )}
        </div>
        </>
    )
}

export default TransferList;



