import React, {useContext, useRef, useState} from 'react';
import Cropper from 'react-easy-crop';
import { getCroppedImage, compressImage, getBase64Image } from './imageUtils';
import {AuthContext} from "../AuthContext";
import axios from "axios";
function ImageCropperBox({flag,setFlag,setFlag2}){
    const { user,setUser } = useContext(AuthContext);
    const inputRef = useRef();
    const [selectedImage, setSelectedImage] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    let profilePhoto;
    const [finalImage,setFinalImage]=useState(null)
    if(user.data.gender==='Male'){
        profilePhoto='https://https://www.svgrepo.com/show/394266/male.svg'
    }
    else if(user.data.gender==='Female'){
        profilePhoto='https://https://www.svgrepo.com/show/81228/female-with-ponytails.svg'
    }
    else{
        profilePhoto='https://www.svgrepo.com/show/324673/gender-female-woman-avatar.svg'
    }
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
        setFlag(false);
        // setFlag2(true);
    };
//https://www.svgrepo.com/show/81228/female-with-ponytails.svg //female
//https://www.svgrepo.com/show/500303/user-identity.svg //other
//https://www.svgrepo.com/show/394266/male.svg //male
    const onChooseImg = () => {
        inputRef.current.click();
    };

    const onRemoveImg = () => {
        setFinalImage(null);
        setSelectedImage(null);
        setFlag(false)
    };

    const handleCropComplete = async (_, croppedAreaPixels) => {
        try {
            const croppedImageBlob = await getCroppedImage(selectedImage, croppedAreaPixels);
            const compressedImageBlob = await compressImage(croppedImageBlob, 25 * 1024);
            const base64Image = await getBase64Image(compressedImageBlob);
            setFinalImage(base64Image);
        } catch (error) {
            console.error('Error processing image:', error);
        }
    };
    const url="http://10.3.3.129:3300/user/photo";

    function handleDone() {
        setFlag(true);
        let myHeaders = new Headers();
        myHeaders.append("x-access-token", user.data.token);
        myHeaders.append("username", user.data.username);
        myHeaders.append("Content-Type", "application/json");
        let raw = JSON.stringify({
            "photo": finalImage,

        });
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch(url, requestOptions)
            .then(response => {
                // window.location.reload();
                console.log(response)
                response.text();
                setUser(null)
                axios.post("http://10.3.3.129:3300/user/testuser").then((res)=>{
                    console.log(res.data.data)
                    setUser(res.data)
                })

            })
            .catch(error => console.log('error', error)).finally(()=>{
        })
    }




    const handleCancel = () => {
        setSelectedImage(null)
    };

    return (
            <div className='xl-width100 xl-height100 xl-position-relative xl-display-flex xl-flexWrap-wrap xl-justifyContent-start xl-display-flex xl-marginB-15 m-width100 m-height100 m-position-relative m-display-flex m-flexWrap-wrap m-justifyContent-start m-display-flex m-marginB-15 s-width100 s-height100 s-position-relative s-display-flex s-flexWrap-wrap s-justifyContent-start s-display-flex s-marginB-15'>
                {!selectedImage && !flag && (
                    <>
                        <input
                            type="file"
                            accept="image/*"
                            ref={inputRef}
                            onChange={handleImageUpload}
                            style={{ display: "none" }}
                        />
                        <div className="xl-paddingL-15 xl-paddingR-15 xl-paddingT-5 xl-paddingB-5 xl-borderR-10 xl-border-white1 xl-position-absolute xl-bottom-10 xl-bg-test12 xl-right-10 xl-fontSize-14 xl-pointer xl-color-white xl-marginT-5 m-paddingL-15 m-paddingR-15 m-paddingT-5 m-paddingB-5 m-borderR-10 m-border-white1 m-position-absolute m-bottom-10 m-bg-test12 m-right-10 m-fontSize-14 m-pointer m-color-white m-marginT-5 s-paddingL-15 s-paddingR-15 s-paddingT-5 s-paddingB-5 s-borderR-10 s-border-white1 s-position-absolute s-bottom-10 s-bg-test12 s-right-10 s-fontSize-14 s-pointer s-color-white s-marginT-5" onClick={onChooseImg}>
                            +
                        </div>
                    </>
                )}
                {selectedImage && flag && (
                    <>
                        <div className="xl-paddingL-15 xl-paddingR-15 xl-paddingT-5 xl-paddingB-5 xl-borderR-10 xl-border-white1 xl-position-absolute xl-bottom-10 xl-bg-test12 xl-right-10 xl-fontSize-14 xl-pointer xl-color-white xl-marginT-5 m-paddingL-15 m-paddingR-15 m-paddingT-5 m-paddingB-5 m-borderR-10 m-border-white1 m-position-absolute m-bottom-10 m-bg-test12 m-right-10 m-fontSize-14 m-pointer m-color-white m-marginT-5 s-paddingL-15 s-paddingR-15 s-paddingT-5 s-paddingB-5 s-borderR-10 s-border-white1 s-position-absolute s-bottom-10 s-bg-test12 s-right-10 s-fontSize-14 s-pointer s-color-white s-marginT-5" onClick={onRemoveImg}>
                            -
                        </div>
                    </>
                )}
                {selectedImage && !flag && (
                    <>
                        <div className="xl-width100 xl-height100 xl-display-flex xl-flexWrap-wrap m-justifyContent-center m-width100 m-height100 m-display-flex m-flexWrap-wrap m-justifyContent-center s-width100 s-height100 s-display-flex s-flexWrap-wrap s-justifyContent-center">
                            <div className="xl-width100 xl-height100 xl-display-flex xl-justifyContent-center xl-overflow-hidden m-width100 m-height100 m-display-flex m-justifyContent-center m-overflow-hidden s-width100 s-height100 s-display-flex s-justifyContent-center s-overflow-hidden"><Cropper
                                image={selectedImage}
                                crop={crop}
                                zoom={zoom}
                                aspect={1}
                                onCropChange={setCrop}
                                onCropComplete={handleCropComplete}
                                onZoomChange={setZoom}
                                style={{
                                    containerStyle: {
                                    width: "100%",
                                    height:"100%",
                                    backgroundColor: "transparent",
                                    },
                                }}
                            /></div>
                        </div>
                        <div className='xl-width100 xl-height-40 xl-position-absolute xl-zIndex-4 xl-bottom-10 xl-display-flex xl-justifyContent-center m-width100 m-height-40 m-position-absolute m-zIndex-4 m-bottom-10 m-display-flex m-justifyContent-center s-width100 s-height-40 s-position-absolute s-zIndex-4 s-bottom-10 s-display-flex s-justifyContent-center'>
                            <div className='xl-width90 xl-height100 xl-display-flex xl-justifyContent-between m-width90 m-height100 m-display-flex m-justifyContent-between s-width90 s-height100 s-display-flex s-justifyContent-between'>
                                <button onClick={handleCancel} className='xl-paddingL-15 xl-paddingR-15 xl-paddingT-5 xl-paddingB-5 xl-borderR-10 xl-border-white1 xl-bg-test5 xl-fontSize-14 xl-pointer xl-color-white xl-marginT-5 m-paddingL-15 m-paddingR-15 m-paddingT-5 m-paddingB-5 m-borderR-10 m-border-white1 m-bg-test5 m-fontSize-12 m-pointer m-color-white m-marginT-5 s-paddingL-15 s-paddingR-15 s-paddingT-5 s-paddingB-5 s-borderR-10 s-border-white1 s-bg-test5 s-fontSize-14 s-pointer s-color-white s-marginT-5'>Cancel</button>
                                <button onClick={handleDone} className='xl-paddingL-15 xl-paddingR-15 xl-paddingT-5 xl-paddingB-5 xl-borderR-10 xl-border-white1 xl-bg-test5 xl-fontSize-14 xl-pointer xl-color-white xl-marginT-5 m-paddingL-15 m-paddingR-15 m-paddingT-5 m-paddingB-5 m-borderR-10 m-border-white1 m-bg-test5 m-fontSize-12 m-pointer m-color-white m-marginT-5 s-paddingL-15 s-paddingR-15 s-paddingT-5 s-paddingB-5 s-borderR-10 s-border-white1 s-bg-test5 s-fontSize-14 s-pointer s-color-white s-marginT-5'>Done</button>
                            </div>
                        </div>
                    </>
                )}
                <div className='xl-width100 xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-end m-width100 m-height100 m-display-flex m-justifyContent-center m-alignItems-end s-width100 s-height100 s-display-flex s-justifyContent-center s-alignItems-end'>
                    {flag ? <img className='xl-width100 xl-height100 m-width100 m-height100 s-width100 s-height100' src={user.data.photo} alt="Cropped Image"/> : <img className='xl-height90 m-height90 s-height90' src={user.data.photo} alt="Cropped Image"/> }
                </div>

            </div>
    );
};

export default ImageCropperBox;
