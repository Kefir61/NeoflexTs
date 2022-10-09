import like from '../assets/icons/likes.svg'
import cart from '../assets/icons/cart.svg'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/slices/cartSlice';
function Header() {
     const { totalCount } = useSelector(selectCart)
     return (
          <header className="header">
               <NavLink className="logo" to='/'>QPICK</NavLink>
               <div className="header__icons">
                    <a href="">
                         <img src={like} alt=""></img>
                         <div className="header__icons--count">0</div>
                    </a>
                    <NavLink to='/cart'>
                         <img src={cart} alt=""></img>
                         {totalCount > 0 ? <div className="header__icons--count">{totalCount}</div> : ''}
                    </NavLink>
               </div>
          </header>
     )
}

export default Header