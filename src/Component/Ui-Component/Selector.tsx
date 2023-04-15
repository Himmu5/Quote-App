import React,{FC} from 'react'
import { State } from '../../Redux/store'
import { ConnectedProps, connect } from 'react-redux'
import { tagSelector } from '../../Redux/selector/quote'
type P ={} & ReduxProps
const Selector:FC<P>=({tags})=>{
    
  return <div>
    <select name="" id="" className='rounded-md shadow-md px-2 py-1 '>
      {
        tags.map((tagObj)=>{
          return <option  key={tagObj._id} value={tagObj.slug}>{tagObj.name}</option>
        })
      } 
    </select>
  </div>
}

const  mapStateToProps = (state:State)=>({ tags : tagSelector(state) })

const connector = connect(mapStateToProps);
type ReduxProps = ConnectedProps<typeof connector>

export default connector(Selector);