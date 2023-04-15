import React,{FC} from 'react'
type P ={}
const Nav:FC<P>=()=>{
  return <div className='flex justify-between px-10 py-4 font-bold text-white'>
    <h1>Home</h1>

    <h1>Bookmarks</h1>
  </div>
}
export default Nav;