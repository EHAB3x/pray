import React, { useEffect, useState } from 'react'
import {Snippet} from "@nextui-org/react";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import './component_css/RandomAyah.css'
import axios from 'axios';

const RandomAyah = () => {
    const [text , setText]= useState(0);
    const [juz , setJuz]= useState(0);
    const [name , setName]= useState("");
    const [place , setPlace]= useState("");
    const [page , setPage]= useState(0);
    var ayah = Math.floor(Math.random() * 6236) + 1 
    useEffect(()=>{
        axios.get(`https://api.alquran.cloud/v1/ayah/${ayah}`)
        .then(data => {
          setText(data.data.data.text)
          setJuz(data.data.data.juz);
          setName(data.data.data.surah.name);
          setPlace(data.data.data.surah.revelationType);
          setPage(data.data.data.page)
        })
    },[])
  return (
    <div className="random-ayah flex flex-wrap gap-4">
      <Snippet className='ayah' variant="solid" color="danger" dir='rtl'>{text}</Snippet>
      <div className="details">
      <Popover  color='danger' placement="top">
        <PopoverTrigger>
            <Button color="danger" className="capitalize">
              الجزء
            </Button>
        </PopoverTrigger>
        <PopoverContent>
          {juz}
        </PopoverContent>
        </Popover>

        <Popover  color='danger' placement="top">
        <PopoverTrigger>
            <Button color="danger" className="capitalize">
              الاسم
            </Button>
        </PopoverTrigger>
        <PopoverContent>
          {name}
        </PopoverContent>
        </Popover>

        <Popover  color='danger' placement="top">
        <PopoverTrigger>
            <Button color="danger" className="capitalize">
              مكان النزول
            </Button>
        </PopoverTrigger>
        <PopoverContent>
          {place}
        </PopoverContent>
        </Popover>

        <Popover  color='danger' placement="top">
        <PopoverTrigger>
            <Button color="danger" className="capitalize">
              الصفحة
            </Button>
        </PopoverTrigger>
        <PopoverContent>
          {page}
        </PopoverContent>
        </Popover>
      </div>
    </div> 
  )
}

export default RandomAyah