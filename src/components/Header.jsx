import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import './component_css/Header.css'
import { useEffect, useState } from "react";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from './Icons/MoonIcon'
import {SunIcon} from "./Icons/SunIcon";

export default function Header() {
  const [main , setMain] = useState("")
  useEffect(()=>{
    let main = document.querySelector(".main");
    setMain(main);
  },[])
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">SALATAK</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
        <Switch 
         defaultSelected
          size="lg"
           color="success"
            startContent={<SunIcon />}
             endContent={<MoonIcon />}
              onChange={()=> main.classList.toggle('dark')}>
        </Switch>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}