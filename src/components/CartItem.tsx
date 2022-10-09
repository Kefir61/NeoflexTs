import React from 'react'
import button1 from '../assets/icons/minus.svg'
import button2 from '../assets/icons/pluse.svg'
import del from '../assets/icons/delete.svg'
import { useDispatch } from 'react-redux'
import { addProduct, CartItemType, minusProduct, removeProduct } from '../redux/slices/cartSlice'
import { arrImgItem } from './MenuItem'

const CartItem: React.FC<CartItemType> = ({ id, count, title, price }) => {
     const dispatch = useDispatch();

     const onClickPluse = () => {
          dispatch(addProduct({
               id,
               title: '',
               price: 0,
               count: 0
          }))
     }
     const onClickMinus = () => {
          dispatch(minusProduct(id))
     }
     const onClickRemove = () => {
          dispatch(removeProduct(id))
     }
     return (
          <div className="goods-cart__item item">
               <div className="item--cart__foundation">
                    <div className="cart--img"><img src={arrImgItem[id]} alt=""></img></div>
                    <div className="cart--count__buttons">
                         <button onClick={onClickMinus}><img src={button1} alt=""></img></button>
                         <span>{count}</span>
                         <button onClick={onClickPluse}><img src={button2} alt=""></img></button>
                    </div>
               </div>
               <div className="item--cart__info info">
                    <div className="info--cart__name">{title}</div>
                    <div className="info--cart__price">{price} ₽</div>
               </div>
               <button onClick={onClickRemove} className="item--cart__delete"><img src={del} alt=""></img></button>
               <div className="item--cart__price">{count * price} ₽</div>
          </div>
     )
}

export default CartItem