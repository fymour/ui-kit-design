import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import './Home.css'
import Pages from "Components/Pages/Pages";

export default function Home() {
  return (
    <div>
        <Header/>
        <div className="menu-description">
        <Menu/>
        <Pages/>
        </div>
    </div>
  )
}
