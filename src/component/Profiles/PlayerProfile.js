
import React  from 'react';
import {useEffect,useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import footballPitch from './football-pitch.png';
import footballPitch2 from '../../Images/Football Pitch/football-pitch2.png';
import playerPicto from './wincent-player.png';
let hostUrl=process.env.REACT_APP_DATABASE_URL;
function PlayerInternationalCard({playerName, playerCitizenship, playerPhoto, playerNumber,playerBirthday,playerTeamName,playerContractEnd, playerFeet,playerHeight,playerWeight,age,playerPosition,position,playerTeamLogo}){
    return(
        <>
            <div className='xl-width100 xl-height-780 xl-bg-test xl-borderR-15 xl-position-relative'>
                <div className='xl-width100 xl-position-relative'>
                    <div className='xl-width-50 xl-height-50 xl-overflow-hidden xl-borderR50 xl-position-absolute xl-top--5 xl-right--10 xl-bg-test2 xl-display-flex xl-justifyContent-center xl-alignItems-center'>
                        <img src={playerTeamLogo} className='xl-width100'/>
                    </div>
                </div>
                <div className='xl-width100 xl-display-flex xl-justifyContent-center'>
                    <div className='xl-width-150 xl-height-150 xl-borderR50 xl-display-flex xl-alignItems-end xl-justifyContent-center xl-overflow-hidden xl-marginT-35 xl-marginB-15 xl-position-relative'>
                        <img className='xl-width100 xl-position-absolute xl-top--5' src={playerPhoto}/>
                    </div>
                </div>
                <div className='xl-width100 xl-display-flex xl-justifyContent-center'>
                    <button className='xl-paddingB-5 xl-paddingT-5 xl-paddingR-20 xl-paddingL-20 xl-borderR-10 xl-bg-test2 xl-color-white xl-bold xl-fontSize-20 xl-pointer'>Follow</button>
                </div>
                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-color-gray xl-fontSize-20 xl-marginT-15 xl-marginB-10'>{playerName}</div>
                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap'>
                    {playerCitizenship? <><div className='xl-width45 xl-display-flex xl-color-black xl-justifyContent-end xl-marginT-5 xl-marginB-5'>Country<span className='xl-color-red1 xl-fontSize-18'> : </span></div>
                        <div className='xl-width45 xl-display-flex xl-color-gray xl-justifyContent-start xl-marginT-5 xl-marginB-5'>{playerCitizenship}</div></>:<></>}
                    {playerTeamName? <><div className='xl-width45 xl-display-flex xl-color-black xl-justifyContent-end xl-marginT-5 xl-marginB-5'>Team<span className='xl-color-red1 xl-fontSize-18'> : </span></div>
                        <div className='xl-width45 xl-display-flex xl-color-gray xl-justifyContent-start xl-marginT-5 xl-marginB-5'>{playerTeamName}</div></>:<></>}
                    {playerBirthday? <><div className='xl-width45 xl-display-flex xl-color-black xl-justifyContent-end xl-marginT-5 xl-marginB-5'>Birthdate<span className='xl-color-red1 xl-fontSize-18'> : </span></div>
                        <div className='xl-width45 xl-display-flex xl-color-gray xl-justifyContent-start xl-marginT-5 xl-marginB-5'>{playerBirthday}</div></>:<></>}
                    {age? <><div className='xl-width45 xl-display-flex xl-color-black xl-justifyContent-end xl-marginT-5 xl-marginB-5'>Age<span className='xl-color-red1 xl-fontSize-18'> : </span></div>
                        <div className='xl-width45 xl-display-flex xl-color-gray xl-justifyContent-start xl-marginT-5 xl-marginB-5'>{age}</div></>:<></>}
                    {playerNumber? <><div className='xl-width45 xl-display-flex xl-color-black xl-justifyContent-end xl-marginT-5 xl-marginB-5'>Number<span className='xl-color-red1 xl-fontSize-18'> : </span></div>
                        <div className='xl-width45 xl-display-flex xl-color-gray xl-justifyContent-start xl-marginT-5 xl-marginB-5'>{playerNumber}</div></>:<></>}
                    {playerPosition? <><div className='xl-width45 xl-display-flex xl-color-black xl-justifyContent-end xl-marginT-5 xl-marginB-5'>Role<span className='xl-color-red1 xl-fontSize-18'> : </span></div>
                        <div className='xl-width45 xl-display-flex xl-color-gray xl-justifyContent-start xl-marginT-5 xl-marginB-5'>{playerPosition}</div></>:<></>}
                    {playerFeet? <><div className='xl-width45 xl-display-flex xl-color-black xl-justifyContent-end xl-marginT-5 xl-marginB-5'>Feet<span className='xl-color-red1 xl-fontSize-18'> : </span></div>
                        <div className='xl-width45 xl-display-flex xl-color-gray xl-justifyContent-start xl-marginT-5 xl-marginB-5'>{playerFeet}</div></>:<></>}
                    {playerHeight? <><div className='xl-width45 xl-display-flex xl-color-black xl-justifyContent-end xl-marginT-5 xl-marginB-5'>Height<span className='xl-color-red1 xl-fontSize-18'> : </span></div>
                        <div className='xl-width45 xl-display-flex xl-color-gray xl-justifyContent-start xl-marginT-5 xl-marginB-5'>{playerHeight}</div></>:<></>}
                    {playerWeight? <><div className='xl-width45 xl-display-flex xl-color-black xl-justifyContent-end xl-marginT-5 xl-marginB-5'>Weight<span className='xl-color-red1 xl-fontSize-18'> : </span></div>
                        <div className='xl-width45 xl-display-flex xl-color-gray xl-justifyContent-start xl-marginT-5 xl-marginB-5'>{playerWeight}</div></>:<></>}
                    {playerContractEnd? <><div className='xl-width45 xl-display-flex xl-color-black xl-justifyContent-end xl-marginT-5 xl-marginB-5'>Contract End Date<span className='xl-color-red1 xl-fontSize-18'> : </span></div>
                        <div className='xl-width45 xl-display-flex xl-color-gray xl-justifyContent-start xl-marginT-5 xl-marginB-5'>{playerContractEnd}</div></>:<></>}

                </div>
                <div className='xl-width100 xl-display-flex xl-justifyContent-center'><div className='xl-width40 xl-marginT-10 xl-position-relative'>
                    <img className='xl-width100 xl-borderR-10' src={footballPitch2}/>
                    <div></div>
                    <img className='xl-width-20 xl-position-absolute' src={playerPhoto} style={position}/>
                </div></div>
            </div>
        </>
    )
}
function PlayerPosts(){
    const [like,setLike]=useState(false);
    let postsArray=['https://phantom-marca.unidadeditorial.es/9382bb791fe40c3491a5cf094c75ac4d/resize/828/f/jpg/assets/multimedia/imagenes/2023/08/18/16923637748111.jpg','https://img.olympicchannel.com/images/image/private/t_s_pog_staticContent_hero_sm_2x/f_auto/primary/oyzha7fcewxzknyasluc','https://images.indianexpress.com/2023/08/Neymar-1.jpg','https://images.daznservices.com/di/library/DAZN_News/f0/9/neymar-brazilseptember-2022_1m7p6t8ukrpl9115jfdbpchg5p.jpg?t=-1513907756&quality=60&w=1280&h=720','https://www.sportsnet.ca/wp-content/uploads/2021/04/Neymar.jpg','https://img.asmedia.epimg.net/resizer/jogXNIlX3Xun_hsAagGrD_1QaCc=/1472x828/filters:focal(330x53:340x63)/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/MFUZVZEDYZFKTCPFJ72O6A6MJM.jpg','https://talksport.com/wp-content/uploads/sites/5/2023/08/saudi-football-club-al-hilal-838953674.jpg'];
    const [selectedPost,setSelectedPost]=useState('');
    let userProfile=['https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg','https://image.winudf.com/v2/image1/bmV0LndsbHBwci5naXJsc19wcm9maWxlX3BpY3R1cmVzX3NjcmVlbl8wXzE2NjgxMzc2MTRfMDg0/screen-0.webp?fakeurl=1&type=.webp','https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp','https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg','https://images.squarespace-cdn.com/content/v1/5e6ece70bd2f8a6de8472818/714f685e-d0ba-40f9-8bb2-38722c1fd29c/Tiny+Avatar.png','https://wallpaperaccess.com/full/2213424.jpg']
    const [flag,setFlag]=useState(false)
    return(
        <>
            <div className='xl-width100 xl-height-780 xl-marginT-30 xl-bg-test xl-bg-test xl-borderR-15 xl-overflow-hidden xl-position-relative'>
                <div className='xl-width100 xl-height-70 xl-bg-test xl-display-flex xl-justifyContent-evenly'>
                    <div className='xl-width32'>
                        <div className='xl-width100 xl-height50 xl-fontSize-18 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-color-black'>Posts</div>
                        <div className='xl-width100 xl-height50 xl-fontSize-18 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-color-black'>7</div>
                    </div>
                    <div className='xl-width32'>
                        <div className='xl-width100 xl-height50 xl-fontSize-18 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-color-black'>Followers</div>
                        <div className='xl-width100 xl-height50 xl-fontSize-18 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-color-black'>3.5M</div>
                    </div>
                    <div className='xl-width32'>
                        <div className='xl-width100 xl-height50 xl-fontSize-18 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-color-black'>Followings</div>
                        <div className='xl-width100 xl-height50 xl-fontSize-18 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-color-black'>20</div>
                    </div>
                </div>
                {postsArray.length> 0 && (
                    <ul className='xl-width100 xl-height88 xl-display-flex xl-justifyContent-start xl-flexWrap-wrap xl-overflow-auto'>
                        {postsArray.map((post,index)=>(
                            <li key={index}  className='xl-width32 xl-marginR-5 xl-height-250 xl-marginT-5 xl-pointer'>
                                <div className='xl-width100 xl-borderR-10 xl-height100 xl-overflow-hidden xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test14 xl-marginL-10 post-hover'>
                                    <img className='xl-height100' src={post} onClick={()=>{
                                        setSelectedPost(post);
                                        console.log(post);
                                        setFlag(true);
                                    }}/>
                                </div></li>
                        ))
                        }
                    </ul>
                )}
                {flag && selectedPost ? <div className='xl-width100 xl-height100 xl-position-absolute xl-bg-test xl-zIndex-2 xl-top-0 xl-left-0 xl-display-flex xl-justifyContent-center xl-alignItems-center'>
                    <div className='xl-width50 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-overflow-hidden xl-position-relative'>
                        <div className='xl-width100 xl-height-60 xl-position-absolute xl-top-10'>
                            <div className='xl-width-100 xl-height-60 xl-display-flex xl-alignItems-center xl-marginL-20'>
                                <i className="bi bi-backspace xl-fontSize-32 xl-color-silver xl-custom-textShadow xl-pointer" onClick={()=>{setFlag(false);
                                    setSelectedPost(false);}}></i>
                            </div>
                        </div>
                        <img src={selectedPost} className='xl-width99'/>
                    </div>
                    <div className='xl-width50 xl-height100 xl-overflow-hidden'>
                        <div className='xl-width99 xl-height-310 xl-marginT-10 xl-overflow-hidden xl-display-flex xl-justifyContent-center xl-flexWrap-wrap'>
                            <p className='xl-width90 xl-height80 xl-overflow-auto xl-color-black xl-marginT-15'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, perspiciatis? Harum hic magnam quidem unde nulla dolorem, ullam illum maiores. Reprehenderit, tempora! Sint in eum ullam maiores asperiores, similique beatae esse commodi ad dicta ratione. Corrupti minima beatae, molestias sequi, impedit optio illo et sed atque inventore error. Eos est magnam cupiditate officia veritatis! Repudiandae nulla voluptatibus saepe deleniti sit! Eos repellendus nemo placeat debitis obcaecati nobis ut natus officia ad aperiam, odio aliquam similique, explicabo veniam cum unde dignissimos voluptate a tenetur voluptas facere enim. Mollitia laboriosam pariatur, necessitatibus eveniet quos amet dolores eligendi soluta consequuntur officia, nemo non facilis adipisci. Voluptatibus rerum libero ullam facilis, quaerat perferendis aut dolor perspiciatis iste explicabo consequatur voluptates natus ipsum ab distinctio saepe animi, odio non quia optio repellendus blanditiis fuga tempora? Pariatur impedit laudantium placeat modi, dolorum facilis accusamus, dignissimos sequi non incidunt eveniet delectus, repellendus iure? Officiis corrupti, enim quo repellat cumque deserunt aliquam assumenda ea? Recusandae dignissimos dolorem aliquid repellat quia distinctio exercitationem placeat aspernatur rerum officia animi molestias nesciunt corporis itaque earum facere, alias obcaecati dolore vero. Voluptate adipisci recusandae numquam accusamus cumque qui distinctio earum, nam nobis ratione. Ipsam fugit quia corrupti quos? Adipisci in suscipit totam tenetur iusto cum. Itaque beatae dolor tempora sint veritatis architecto neque. Consequatur soluta eum cum voluptas nihil beatae quia quo debitis quasi aspernatur molestias possimus quaerat, iusto nostrum quae aut dolor corporis aliquid distinctio enim voluptates ab ullam, amet expedita. Pariatur odio sit fugit ex ullam iste necessitatibus aut quidem?
                            </p>
                            <div className='xl-width90 xl-height-30 xl-display-flex xl-alignItems-center'>
                                <p className='xl-color-gray xl-fontSize-12'>2023-02-17</p>
                            </div>
                        </div>
                        <div className='xl-width99 xl-height-60 xl-bg-test'>
                            <div className='xl-width70 xl-height100 xl-display-flex xl-justifyContent-evenly'>
                                <div className='xl-width32 xl-height100'>
                                    <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-5'>{like ? <i className="bi bi-heart-fill xl-color-red1 xl-fontSize-24 xl-pointer" onClick={()=>{like ? setLike(false) : setLike(true)}}></i>
                                        : <i className="bi bi-heart xl-color-black xl-fontSize-24 xl-pointer" onClick={()=>{like ? setLike(false) : setLike(true)}}></i>}</div>
                                    <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginB-5 xl-fontSize-14 xl-color-black'>10k</div>
                                </div>
                                <div className='xl-width32 xl-height100'>
                                    <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-5'><i className="bi bi-chat xl-color-black xl-fontSize-24"></i></div>
                                    <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginB-5 xl-fontSize-14 xl-color-black'>751</div>
                                </div>
                                <div className='xl-width32 xl-height100'>
                                    <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginT-5'><i className="bi bi-share xl-color-black xl-fontSize-24"></i></div>
                                    <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-marginB-5 xl-fontSize-14 xl-color-black'>106</div>
                                </div>
                            </div>
                        </div>
                        <div className='xl-width100 xl-height-310 xl-overflow-hidden'>
                            <ul className='xl-width100 xl-height100 xl-overflow-auto xl-marginT-10 '>
                                <li className='xl-width100 xl-height-70 xl-display-flex xl-marginT-5 xl-marginB-5 '>
                                    <div className='xl-width-60 xl-height-60 xl-marginL-10 xl-marginR-5 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflow-hidden xl-bg-test8'>
                                        <img className='xl-width100' src={userProfile[0]}/>
                                    </div>
                                    <div className='xl-width-380 xl-height100'>
                                        <div className='xl-marginL-5 xl-marginT-5 xl-color-black'>Username</div>
                                        <div className='xl-marginL-10 xl-fontSize-12 xl-color-black'>Comment</div>
                                    </div>
                                </li>
                                <li className='xl-width100 xl-height-70 xl-display-flex xl-marginT-5 xl-marginB-5 '>
                                    <div className='xl-width-60 xl-height-60 xl-marginL-10 xl-marginR-5 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflow-hidden xl-bg-test8'>
                                        <img className='xl-width100' src={userProfile[1]}/>
                                    </div>
                                    <div className='xl-width-380 xl-height100'>
                                        <div className='xl-marginL-5 xl-marginT-5 xl-color-black'>Username</div>
                                        <div className='xl-marginL-10 xl-fontSize-12 xl-color-black'>Comment</div>
                                    </div>
                                </li>
                                <li className='xl-width100 xl-height-70 xl-display-flex xl-marginT-5 xl-marginB-5 '>
                                    <div className='xl-width-60 xl-height-60 xl-marginL-10 xl-marginR-5 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflow-hidden xl-bg-test8'>
                                        <img className='xl-width100' src={userProfile[2]}/>
                                    </div>
                                    <div className='xl-width-380 xl-height100'>
                                        <div className='xl-marginL-5 xl-marginT-5 xl-color-black'>Username</div>
                                        <div className='xl-marginL-10 xl-fontSize-12 xl-color-black'>Comment</div>
                                    </div>
                                </li>
                                <li className='xl-width100 xl-height-70 xl-display-flex xl-marginT-5 xl-marginB-5 '>
                                    <div className='xl-width-60 xl-height-60 xl-marginL-10 xl-marginR-5 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflow-hidden xl-bg-test8'>
                                        <img className='xl-width100' src={userProfile[3]}/>
                                    </div>
                                    <div className='xl-width-380 xl-height100'>
                                        <div className='xl-marginL-5 xl-marginT-5 xl-color-black'>Username</div>
                                        <div className='xl-marginL-10 xl-fontSize-12 xl-color-black'>Comment</div>
                                    </div>
                                </li>
                                <li className='xl-width100 xl-height-70 xl-display-flex xl-marginT-5 xl-marginB-5 '>
                                    <div className='xl-width-60 xl-height-60 xl-marginL-10 xl-marginR-5 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflow-hidden xl-bg-test8'>
                                        <img className='xl-width100' src={userProfile[4]}/>
                                    </div>
                                    <div className='xl-width-380 xl-height100'>
                                        <div className='xl-marginL-5 xl-marginT-5 xl-color-black'>Username</div>
                                        <div className='xl-marginL-10 xl-fontSize-12 xl-color-black'>Comment</div>
                                    </div>
                                </li>
                                <li className='xl-width100 xl-height-70 xl-display-flex xl-marginT-5 xl-marginB-5 '>
                                    <div className='xl-width-60 xl-height-60 xl-marginL-10 xl-marginR-5 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflow-hidden xl-bg-test8'>
                                        <img className='xl-width100' src={userProfile[5]}/>
                                    </div>
                                    <div className='xl-width-380 xl-height100'>
                                        <div className='xl-marginL-5 xl-marginT-5 xl-color-black'>Username</div>
                                        <div className='xl-marginL-10 xl-fontSize-12 xl-color-black'>Comment</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> : <></>}
            </div>
        </>
    )
}

function PlayerProfile({pictoPosition,playerName, playerBirthday, playerCitizenship, playerPhoto, playerNumber,playerTeamName,playerFeet,playerHeight,playerPosition,playerWeight,playerContractEnd,position,age,playerTeamLogo}) {
    const[flag,setFlag]=useState(false);
    const[playersData,setPlayersData]=useState(false);
    const [searchValue,setSearchValue]=useState(null);
    function searchInDB(e){
        setSearchValue(e.target.value)
        if(e.target.value.length>1){
            axios.post('http://10.3.3.129:3300/search/bar?query='+e.target.value).then((res)=>{
                console.log(res.data);
                setFlag(true);
                setPlayersData(res.data.players);
            });
        }
        else{
            setFlag(false);
            setPlayersData(null);
        }
    }
  return (
      <>
          <div className='xl-width100 xl-display-flex xl-bg-test xl-borderR-15 xl-overflow-hidden'>
              <input value={searchValue} onChange={searchInDB} type='text' placeholder='Search' className='xl-bg-transparent xl-width100 xl-paddingR-40 xl-paddingL-40 xl-paddingT-10 xl-paddingB-10 xl-fontSize-30 xl-color-black'/>
              <button className='xl-bg-test xl-paddingR-20 xl-paddingL-20 xl-paddingT-10 xl-paddingB-10'><i className='bi bi-search xl-color-black xl-fontSize-34'></i></button>
          </div>
          {flag?
              <div className='xl-width100 xl-position-relative'>
                  <div className=' xl-width100 xl-height-600 xl-bg-blur1 xl-borderR-15 xl-overflow-auto xl-marginT-10 xl-position-absolute xl-zIndex-100 xl-boxShadow3 '>
                      {playersData.length>0 ? <div>
                          <h3 className='xl-color-white xl-paddingL-15 xl-paddingT-15 xl-paddingB-15 xl-fontSize-32 xl-bg-test2'>Results</h3>
                          {playersData.length> 0 && (
                              <ul className='xl-width100'>
                                  {playersData.map((player,index)=>(
                                      <li key={index} onClick={()=>{
                                          setFlag(false);
                                          window.location.reload(false);
                                      }} className='xl-width100 xl-height-90 xl-marginT-5 xl-marginB-5'><Link to={`/Players/en/${player.playerId}`} className='xl-width100 xl-height100 xl-display-flex xl-alignItems-center '>
                                          <div className='xl-width-70 xl-height-70 xl-borderR50 xl-overflow-hidden xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test14 xl-marginL-20 xl-marginR-15'>
                                              <img className='xl-width100' src={hostUrl+player.photo}/>
                                          </div>
                                          <div className='xl-fontSize-24 xl-color-white xl-marginL-20'>{player.name}</div></Link></li>
                                  ))
                                  }
                              </ul>
                          )}
                      </div>:<></>}
                  </div>
              </div>
              :<></>}
        <div className='xl-width100 xl-display-flex xl-flexWrap-wrap xl-justifyContent-between m-width100 m-display-flex m-flexWrap-wrap m-justifyContent-between s-width100 s-display-flex s-flexWrap-wrap s-justifyContent-between'>
            <div className='xl-width32 xl-height-700 xl-marginT-30 xl-marginB-40 m-width100 s-width100'>
                <PlayerInternationalCard playerName={playerName} playerCitizenship={playerCitizenship} playerPhoto={playerPhoto} playerNumber={playerNumber} playerBirthday={playerBirthday} playerTeamName={playerTeamName} playerContractEnd={playerContractEnd} playerFeet={playerFeet} playerHeight={playerHeight} playerWeight={playerWeight} age={age} playerPosition={playerPosition} position={position} playerTeamLogo={playerTeamLogo}/>
            </div>
          <div className='xl-width64 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width100 m-display-flex m-alignItems-center m-justifyContent-center s-width100 s-borderTopBottom-white s-marginT-10 s-display-flex s-justifyContent-center s-alignItems-center'>
              <PlayerPosts/>
          </div>
        </div>
          <div className='xl-width100 xl-marginT-35 xl-position-relative xl-height-230'>
              <img className='xl-width100 xl-position-absolute xl-bottom-0' src={footballPitch}/>
              <img className='xl-width-40 xl-position-absolute' src={playerPicto} style={pictoPosition}/>
          </div>
          <div className='xl-width100 xl-marginT-35 xl-position-relative xl-height-230'>
              <img className='xl-width100 xl-position-absolute xl-bottom-0' src={footballPitch}/>
              <img className='xl-width-40 xl-position-absolute' src={playerPhoto} style={pictoPosition}/>
          </div>
          <div className='xl-width70 xl-marginT-35 xl-position-relative'>
              <img className='xl-width100' src={footballPitch2}/>
              <div></div>
              <img className='xl-width-60 xl-position-absolute' src={playerPhoto} style={position}/>
          </div>
      </>
  )
}
export default PlayerProfile;