import {Tabs, Tab} from "@nextui-org/react";
import './component_css/Navigator.css'
import { Link } from "react-router-dom";
const Navigator = () => {
  return (
    <div className="flex w-full flex-col navigator">
        <Tabs aria-label="Options" color="danger" variant="bordered">
            <Tab
            key="photos"
            title={
                <Link  to={"/"} className="flex items-center space-x-2">
                    <span>Pray Times</span>
                </Link>
            }
            />
            <Tab
            key="music"
            title={
                <Link to={'/seb7a'} className="flex items-center space-x-2"> 
                    <span>Seb7a</span>
                </Link>
            }
            />
            <Tab
            key="videos"
            title={
                <Link to={'/quran'} className="flex items-center space-x-2">              
                    <span>Quran</span>
                </Link>
            }
            />
        </Tabs>
    </div> 
  )
}

export default Navigator;