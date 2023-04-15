import React,{FC, SelectHTMLAttributes} from 'react'
import { State } from '../../Redux/store'
import { ConnectedProps, connect } from 'react-redux'
import { selectedTag, tagSelector } from '../../Redux/selector/quote'

type P ={} & ReduxProps & SelectHTMLAttributes<HTMLSelectElement>

const Selector:FC<P>=({tags , onChange , tag})=>{
    
  return <div>
    <select value={tag} className='rounded-md shadow-md px-2 py-1 ' onChange={onChange}>
      {
        tags.map((tagObj)=>{
          return <option  key={tagObj._id} value={tagObj.slug} >{tagObj.name}</option>
        })
      } 
    </select>
  </div>
}

const  mapStateToProps = (state:State)=>({ tags : tagSelector(state)  , tag:selectedTag(state)})

const connector = connect(mapStateToProps);
type ReduxProps = ConnectedProps<typeof connector>

export default connector(Selector);