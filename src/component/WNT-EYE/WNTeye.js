"use client"

import React, {useEffect, useState} from 'react';
import L from 'leaflet';
import '../../CSS/leaflet.css';
import WNTeye from '../../Images/WNTEye.png';
import axios from "axios";
// import {useLocation} from "react-router-dom";

const LeafletMap = ({loading}) => {
    const [mapData,setMapData]=useState(null);
    const [mapData2,setMapData2]=useState(null);
    const[flag,setFlag]=useState(false);
    const location=useLocation();
    console.log(location.pathname)
    const [lng,setLng]=useState(0);
    const [lat,setLat]=useState(0);
    let path=location.pathname.split('/');
    console.log(path)
    useEffect(()=>{
        if(path[1].toLowerCase()==='teams'){
            axios.post('http://10.3.3.126:3200/Team/DisplayTeam/coordination/'+path[path.length-1]).then((res)=>{
                setLng(res.data.result[0].lng);
                setLat(res.data.result[0].lat);

            }).catch((err)=>{
                console.log(err)
            })

        }
        else{
            setLat(36.579209);
            setLng(51.728130);
        }
    },[])
    useEffect(()=>{
        axios.get('http://10.3.3.126:3000/countries1.js').then((res)=>{
            setMapData(res.data.replace('var basemap =', '').trim());
        })
    },[mapData2])

    useEffect(()=>{
        setMapData2(JSON.parse(mapData))
        setFlag(true);
    },[mapData]);
    useEffect(() => {
        if (!loading && flag && mapData2 && lat && lng) {
            console.log(lat)
            const map = L.map('map', {
                center: [45,1],
                zoom: 2,
                zoomControl: false,
                attributionControl: false
            });
            map.dragging.disable();
            map.touchZoom.disable();
            map.doubleClickZoom.disable();
            map.scrollWheelZoom.disable();
            map.boxZoom.disable();
            map.keyboard.disable();
            const latlng = L.latLng(lat, lng);
            L.marker(latlng).addTo(map);
            function polystyle() {
                return {
                    weight: 1,
                    fill: true,
                    color: '#000',
                    stroke: false,
                    strokeColor: '#990100',
                    strokeOpacity: 1,
                    strokeWeight: 1,
                };
            }
            new L.GeoJSON(mapData2, { style: polystyle }).addTo(map);
            console.log(mapData2);
        }
    }, [loading, flag, mapData2,lat,lng]);
    return (
    <>
        <div  id="leafletmap" className='xl-position-relative xl-display-flex xl-justifyContent-center xl-alignItems-center xl-borderR-15 xl-overflow-hidden xl-bg-test2'>
            <div style={{width: '100%', height: '700px' , zIndex:1 ,borderRadius:'15px',overflow:'hidden',backgroundColor:'#cccccc'}} id="map" onClick={() => {
                console.log(mapData2);
            }}>
           </div>
            <div className='xl-position-absolute xl-width75 xl-height-50 xl-top-0 xl-zIndex-4 xl-display-flex xl-justifyContent-end xl-alignItems-center'>
                <img className='xl-width-200 xl-marginR-15' src={WNTeye}/>
            </div>
        </div>
    </>
    );
};

export default LeafletMap;