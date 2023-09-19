import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import seperator from '../Images/Ayah.svg.png'
import './component_css/Surah.css'
const Surah = () => {
    const surah = useParams()
    const [ayat , setAyat] = useState([])
    const [name , setName] = useState("")

    useEffect(()=>{
        axios.get(`http://api.alquran.cloud/v1/surah/${surah.surahId}/editions/quran-uthmani,en.asad,en.pickthall`)
        .then(data => {
            setAyat(data.data.data[0].ayahs);
            setName(data.data.data[0].name);
        });
    },[surah.surahId])
    console.log(name)
  return (
    <div className="surah">
        <h2 className="text-center">{name}</h2>
        <p dir="rtl">
            {ayat.map((ayah)=>{
                  return(
                    <span key={ayah.number}>
                        {ayah.text}
                        <span className="ayah_number">
                            <img src={seperator} alt={ayah.number}/>
                            <span>{ayah.numberInSurah}</span>
                        </span>
                    </span>
                  )
            })}
        </p>
    </div>
  )
}

export default Surah