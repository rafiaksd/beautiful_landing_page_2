import logo1 from "../assets/logos/amazon.png"
import logo2 from "../assets/logos/dribble.png"
import logo3 from "../assets/logos/hubspot.png"
import logo4 from "../assets/logos/notion.png"
import logo5 from "../assets/logos/netflix.png"
import logo6 from "../assets/logos/zoom.png"

const LogoCaraousel = () => {
  return (
     <>
          <div className="pt-24 overflow-hidden ">
               <div className="flex justify-between items-center gap-8 animate-marquee">
                    <img src={logo1} alt="Amazon" className="h-12" />
                    <img src={logo2} alt="Dribbble" className="h-12" />
                    <img src={logo3} alt="HubSpot" className="h-12" />
                    <img src={logo4} alt="Notion" className="h-12" />
                    <img src={logo5} alt="Netflix" className="h-12" />
                    <img src={logo6} alt="Zoom" className="h-12" />
               </div>
          </div>
     </>
  )
}

export default LogoCaraousel