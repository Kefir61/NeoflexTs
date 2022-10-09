import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { CartItemType, selectCart } from '../redux/slices/cartSlice'
function Cart() {
     const { items, totalPrice } = useSelector(selectCart)
     return (
          <main className="main">
               <h2 className="main__cart--title">Корзина</h2>
               <div className="main__cart">
                    <div className="main__cart--goods goods">
                         {
                              items.map((item: CartItemType) => <CartItem key={item.id} {...item} />)
                         }
                    </div>
                    <div className="goods-cart__pay">
                         <div className="pay--cart__sum">
                              <span>ИТОГО</span>
                              <span>₽ {totalPrice}</span>
                         </div>
                         <button className="pay--cart__button">Перейти к оформлению</button>
                    </div>
               </div>
          </main>
     )
}

export default Cart