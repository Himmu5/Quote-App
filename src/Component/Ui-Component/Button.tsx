import React,{ButtonHTMLAttributes, FC} from 'react'

type P ={
    children:string,
    mode:string,
    extraClass:string
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button:FC<P>=({children ,extraClass , mode , ...rest})=>{
    let buttonStyle = "";
    if(mode == 'Primary'){
        buttonStyle = " text-white bg-green-500 hover:bg-green-700 rounded-xl shadow-md "
    }

  return <button {...rest} className={' '+extraClass + buttonStyle}>{children}</button>
}

export default Button;