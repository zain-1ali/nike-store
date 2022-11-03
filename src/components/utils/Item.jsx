import React from 'react';
import {useDispatch} from 'react-redux';
import {setAddItemToCart} from '../../app/CartSlice';
import {AiOutlineStar} from 'react-icons/ai'
import {HiShoppingBag} from 'react-icons/hi'




const Item = ({id,color,shadow,title,text,img,btn,rating,price,ifExists}) => { 
  const dispatch =useDispatch();
   const onAddToCart=()=>{
    let items={id,color,shadow,title,img,price,text}
    dispatch(setAddItemToCart(items))
   }
    
  return (
    <>
      <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
          ifExists ? "justify-items-start" : "justify-items-center"
        } rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}>
      <div className={`grid items-center ${
            ifExists ? "justify-items-start" : "justify-items-center"
          }`}>
        <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">{title}</h1>
        <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">{text}</p>
        <div className="flex items-center justify-between w-28 my-2" >
            <div className="flex items-center bg-white/80  px-1 rounded blur-effect-theme"><h1 className="text-black text-sm font-medium">{price}</h1></div>
            <div className="flex items-center gap-1"><AiOutlineStar className='icon-style , text-slate-900'/><h1 className="md:text-sm font-normal text-slate-100">{rating}</h1></div>
        </div>
        <div className="flex items-center gap-3">
            <button type='button' className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200" onClick={onAddToCart}><HiShoppingBag className='icon-style , text-slate-900'/></button>
            <button type='button' className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black" onClick={onAddToCart}>{btn}</button>
        </div>
        
      </div>
      <div className={`flex items-center ${
            ifExists ? "absolute top-5 right-1" : "justify-center"
          }`}>
        <img src={img}  className={`transitions-theme hover:-rotate-12 ${
              ifExists
                ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
                : "h-36 w-64"
            }`}/>
      </div>
      </div>
    </>
  )
}

export default Item
