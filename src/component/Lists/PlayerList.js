import React  from 'react';
import {useState} from 'react';
let hostUrl=process.env.REACT_APP_DATABASE_URL;
function PlayerList(players) {
const [imgErr,setImgErr]=useState(false)
    let playerImgSrc;
    return (
        <div className='xl-width100 xl-height100 xl-overflow-hidden xl-borderTop-white m-width100 m-height100 m-overflow-hidden s-width100 s-height100 s-overflow-hidden'>
            {players.players.length > 0 && (
                <ul className='xl-width100 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap m-width100 m-display-flex m-flexWrap-wrap s-width100 s-display-flex s-flexWrap-wrap'>
                    {[...players.players].sort((a, b) =>
                        a.name > b.name ? 1 : -1,).map((player,index) =>{
                        if(players){
                            if(player.photo==="" || imgErr){
                                playerImgSrc='https://cdn-icons-png.flaticon.com/512/5524/5524669.png';
                            }
                            else{
                                playerImgSrc=hostUrl+player.photo;
                            }
                            return <li key={index}
                            className='xl-width95 xl-pointer m-width100 m-marginT-10 m-border-black2 m-pointer s-width100 s-marginT-10 s-border-black2 s-pointer'>
                                <div className='xl-width100 xl-height-80 xl-display-flex xl-justifyContent-between m-width100 m-height-70 m-display-flex m-justifyContent-between m-bg-test4 s-width100 s-height-80 s-display-flex s-justifyContent-between s-bg-test4 s-flexWrap-wrap'>
                                    <div className='xl-width15 xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width20 m-height100 m-display-flex m-justifyContent-center m-alignItems-center s-width100 s-height50 s-display-flex s-justifyContent-center s-alignItems-center s-flexWrap-wrap'>
                                        <div className='xl-width-50 xl-height-50 xl-borderR-15 xl-overflow-hidden xl-display-flex xl-justifyContent-center xl-alignContent-center m-width-40 m-height-40 m-border-black2 m-bg-test3 m-borderR50 m-overflow-hidden m-display-flex m-justifyContent-center m-alignContent-center s-width100 s-height-30 s-overflow-hidden s-display-flex s-justifyContent-center s-alignContent-center'>
                                            <img className='xl-height100 m-height100 s-height100' src={playerImgSrc} onError={()=>{
                                            setImgErr(true)}
                                            }/>
                                        </div>
                                    </div>
                                    <div className='xl-width85 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-start m-width80 m-height100 m-display-flex m-alignItems-center m-justifyContent-start s-width100 s-height50 s-display-flex s-flexWrap-wrap s-alignItems-center s-justifyContent-start'>
                                        <div className='xl-width40 xl-color-white m-width50 m-color-white m-fontSize-12 s-width100 s-color-white s-fontSize-14 s-text-center'>{player.name}</div>
                                        <div className='xl-width-25 xl-height-25 xl-borderR-10 xl-overflow-hidden m-width-25 m-height-25 m-border-black2 m-bg-test3 m-borderR50 m-overflow-hidden s-display-none'>
                                            <img className='xl-height100 m-height100 s-height100' src={hostUrl+player.teamLogo}/>
                                        </div>
                                        <div className='xl-width20 xl-fontSize-13 xl-marginL-10 xl-color-white m-width20 m-fontSize-10 m-marginL-10 m-color-white s-display-none'>{player.teamName}</div>
                                    </div>
                                </div>
                            </li>
                        }
                    })
                    }
                </ul>
            )}
        </div>
    )
}
export default PlayerList;



