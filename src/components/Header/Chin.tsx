import { Link } from 'react-router-dom'

const Chin = () => {
  return (
    <div className="bg-[#001731] text-white py-3 px-10 justify-end flex space-x-7 font-thin text-sm">
      <Link to="/sign-in">Join/ Log In</Link>
      <div>Preferences</div> {/*  TODO  turn this into a real button */}
    </div>
  )
}

export default Chin
