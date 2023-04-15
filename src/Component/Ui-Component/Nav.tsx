import React,{FC} from 'react'
import { Link } from 'react-router-dom';
type P ={}
const Nav:FC<P>=()=>{
  return <div className='flex justify-between px-10 py-4 font-bold text-white'>
    <Link to="/">Home</Link>

    <Link to="/Bookmark">Bookmarks</Link>
  </div>
}
export default Nav;