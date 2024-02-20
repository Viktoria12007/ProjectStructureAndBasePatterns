import './styles.css';
import {Logo} from "./ui/Logo";
import {UserAvatar} from "./ui/UserAvatar";
import {Restaurants} from "./pages/Restaurants";

function App() {
  return (
    <>
      <header>
        <div className="header__container">
            <Logo width={16} height={16} fill={'#000000'} />
            <UserAvatar url={'./avatar.png'} />
        </div>
      </header>
      <main className="container">
        <Restaurants />
      </main>
      <footer>
        <p>Privacy Policy</p>
        <p className="corporation">2022 Eats</p>
        <p>Terms Of Service</p>
      </footer>
    </>
  )
}

export default App
