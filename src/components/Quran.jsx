import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {Chip} from "@nextui-org/react";
import './component_css/Quran.css'

const Quran = () => {
    const [surah , setSurah] = useState([]);
    let x = 1 ;
    useEffect(()=>{
            axios.get(`https://api.alquran.cloud/v1/quran/quran-uthmani`)
            .then(quran => {
                setSurah(quran.data.data.surahs);
        })
    },[x])
    console.log(surah);
  return (
    <div className='quran' dir='rtl'>
        {surah.map((surah)=>{
            return(
                <Link className='text-center' key={surah.number} to={`/quran/${surah.number}`}>
                    <Chip color="danger">{surah.name}</Chip>                
                </Link>
            )
        })}
    </div>
  )
}

export default Quran