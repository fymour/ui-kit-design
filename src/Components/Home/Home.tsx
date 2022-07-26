import Menu from "../Menu/Menu"
import './Home.css'
import Pages from "Components/Pages/Pages"

export default function Home() {
  return (
    <div>
        <div className="menu-description">
        <Menu/>
        <Pages/>
        </div>
    </div>
  )
}
