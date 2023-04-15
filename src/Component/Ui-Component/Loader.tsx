import React,{FC} from 'react'
import { BiLoader } from 'react-icons/bi'

type P ={}
const Loader:FC<P>=()=>{
  return <div className='text-center p-20 rounded-md shadow-md  bg-red-400 text-white'>
    <BiLoader  className='animate-spin' size={35} />
  </div>
}
export default Loader;