import React, { useContext,useState } from 'react';
import { AuthContext } from '../AuthContext';
import {useNavigate} from "react-router-dom";
import ImageCropperBox from "../Tools/ImageCropper";

const UserProfile = () => {
    const [flag,setFlag]=useState(false);
    const { user, logout } = useContext(AuthContext);
    const navigate=useNavigate();
    const [finalImage, setFinalImage] = useState("");
    let gender;
    if(user){
        if(user.data.gender==='Male'){
            gender='https://www.svgrepo.com/show/487547/male.svg'
        }
        else if(user.data.gender==='Female'){
            gender='https://www.svgrepo.com/show/483768/female.svg'
        }
        else{
            gender='https://www.svgrepo.com/show/324673/gender-female-woman-avatar.svg'
        }
    }
    return (
        <main>
            {user ? (
                <>
                    <div className='xl-width-1300 m-width100 s-width100'>
                        <div className='xl-width100 xl-height-300 xl-marginT-35 xl-display-flex xl-justifyContent-start xl-marginB-40 m-width100 m-height-250 m-marginT-35 m-display-flex m-justifyContent-start m-marginB-40 s-marginT-35 s-display-flex s-justifyContent-center s-flexWrap-wrap s-marginB-40'>
                            <div className='xl-width-300 xl-height100 xl-overflow-hidden xl-marginL-40 xl-borderR-10 xl-border-white1 m-width-250 m-height100 m-overflow-hidden m-marginL-40 m-borderR-10 m-border-white1 s-width-180 s-height-180 s-overflow-hidden s-borderR-10 s-border-white1'>
                                <ImageCropperBox flag={flag} setFlag={setFlag} finalImage={finalImage} setFinalImage={setFinalImage}/>
                            </div>
                            <div className='xl-width60 xl-height100 xl-marginL-40 xl-position-relative m-width50 m-height100 m-marginL-40 m-position-relative s-width100 s-height100 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                                <div className='xl-marginT-15 xl-width-50 xl-height-50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflow-hidden xl-borderR50 xl-position-absolute xl-right-10 m-marginT-15 m-width-40 m-height-40 m-display-flex m-justifyContent-center m-alignItems-center m-overflow-hidden m-borderR50 m-position-absolute m-right-10 s-marginT-15 s-width-40 s-height-40 s-display-flex s-justifyContent-center s-alignItems-center s-overflow-hidden s-borderR50'>
                                    <img className='xl-height100 m-height100 s-height100' src={'https://db.wincent.studio/LogoDB/NationalLogo/'+user.data.countryId+'.png'}/>
                                </div>
                                <div className='xl-marginT-15 xl-fontSize-40 xl-color-white m-marginT-15 m-fontSize-40 m-color-white s-width100 s-text-center s-marginT-15 s-fontSize-20 s-color-white text-capitalize'>{user.data.username}</div>
                                <div className='xl-marginT-15 xl-fontSize-26 xl-color-white m-marginT-15 m-fontSize-26 m-color-white s-width100 s-text-center s-marginT-15 s-color-white text-capitalize'>{user.data.fullName}</div>
                                <div className='xl-marginT-15 xl-fontSize-26 xl-color-white m-marginT-15 m-fontSize-26 m-color-white s-width100 s-text-center s-marginT-15 s-color-white'>{user.data.age} years old</div>
                                <div className='xl-marginT-15 xl-width-50 xl-height-50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflow-hidden xl-borderR50 m-marginT-15 m-width-50 m-height-50 m-display-flex m-justifyContent-center m-alignItems-center m-overflow-hidden m-borderR50 s-marginT-15 s-width-50 s-height-50 s-display-flex s-justifyContent-center s-alignItems-center s-overflow-hidden s-borderR50'><img className='xl-height100 m-height100 s-height100' src={gender}/></div>
                            </div>
                        </div>
                    </div>
                    <div className='xl-width100 xl-height-70 xl-bg-test2 xl-display-flex m-width100 m-height-70 m-bg-test2 m-display-flex s-width100 s-height-70 s-bg-test2 s-display-flex'>
                        <div className='xl-width32 m-width32 s-width32'>
                            <div className='xl-width100 xl-height50 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width100 m-height50 m-display-flex m-justifyContent-center m-alignItems-center s-width100 s-height50 s-display-flex s-justifyContent-center s-alignItems-center'>Posts</div>
                            <div className='xl-width100 xl-height50 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width100 m-height50 m-display-flex m-justifyContent-center m-alignItems-center s-width100 s-height50 s-display-flex s-justifyContent-center s-alignItems-center'>0</div>
                        </div>
                        <div className='xl-width32 m-width32 s-width32'>
                            <div className='xl-width100 xl-height50 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width100 m-height50 m-display-flex m-justifyContent-center m-alignItems-center s-width100 s-height50 s-display-flex s-justifyContent-center s-alignItems-center'>Following</div>
                            <div className='xl-width100 xl-height50 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width100 m-height50 m-display-flex m-justifyContent-center m-alignItems-center s-width100 s-height50 s-display-flex s-justifyContent-center s-alignItems-center'>0</div>
                        </div>
                        <div className='xl-width32 m-width32 s-width32'>
                            <div className='xl-width100 xl-height50 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width100 m-height50 m-display-flex m-justifyContent-center m-alignItems-center s-width100 s-height50 s-display-flex s-justifyContent-center s-alignItems-center'>Follower</div>
                            <div className='xl-width100 xl-height50 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width100 m-height50 m-display-flex m-justifyContent-center m-alignItems-center s-width100 s-height50 s-display-flex s-justifyContent-center s-alignItems-center'>0</div>
                        </div>
                    </div>
                    <div className='xl-width100 xl-height-600 xl-display-flex xl-flexWrap-wrap m-width100 m-height-600 m-display-flex m-flexWrap-wrap s-width100 s-height-400 s-display-flex s-flexWrap-wrap'></div>
                </>
            ) : (
                <p>Please log in</p>
            )}
        </main>
    );
};

export default UserProfile;