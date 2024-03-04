import { Link } from 'react-router-dom'
import Chin from './Chin'
import Logo from '/logo.svg'
const Header = () => {
  return (
    <>
      <Chin />
      <div className="bg-oxford-blue py-6 px-10">
        <div className=" mx-auto flex justify-between">
          <span className="text-3xl text-white font-bold">
            <Link to="/">
              <img src={Logo} className="w-[115px]" alt="Vite logo" />
            </Link>
          </span>
          <ul className="flex gap-5 text-white uppercase text-sm items-center tracking-widest font-normal  justify-center">
            <Link to="/">
              <li className="">search</li>
            </Link>
            <Link to="/">
              <li className="">properties</li>
            </Link>
            <Link to="/">
              <li className="">agents</li>
            </Link>
            <Link to="/">
              <li className="">stories</li>
            </Link>
            <Link to="/">
              <li className="border-satin-sheen-gold border px-5 py-3">sell with us</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
