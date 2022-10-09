import React from 'react'
import { MenuItemType } from '../redux/slices/menuSlice'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/slices/cartSlice'
import img1 from "../assets/cardImg/1.jpg"
import img2 from "../assets/cardImg/2.jpg"
import img3 from "../assets/cardImg/3.jpg"
import img4 from "../assets/cardImg/4.jpg"
import img5 from "../assets/cardImg/5.jpg"
import img6 from "../assets/cardImg/6.jpg"
import img7 from "../assets/cardImg/7.jpg"
import img8 from "../assets/cardImg/8.jpg"
import img9 from "../assets/cardImg/9.jpg"


export const arrImgItem = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

const MenuItem: React.FC<MenuItemType> = ({ id, title, oldPrice, rate, price }) => {
     const dispatch = useDispatch()
     const onClickAdd = () => {
          const newItem = {
               id,
               title,
               price,
               count: 0,
          }
          dispatch(addProduct(newItem))
     }

     return (
          <div className="main__goods--card card">
               <div className="card-img"><img src={arrImgItem[id]} alt=""></img></div>
               <div className="card-content">
                    <h4 className="card-content__title">{title}</h4>
                    <div className="card-content__price">
                         <span>{price} ₽</span>
                         {oldPrice ? <span className="old--price">{oldPrice}</span> : ""}
                    </div>
                    <div className="card-content__rating">{rate}</div>
                    <div className="card-content__buy">
                         <button onClick={onClickAdd}>Купить</button>
                    </div>
               </div>
          </div>
     )
}

export default MenuItem