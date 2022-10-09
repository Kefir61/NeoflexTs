import React, { useEffect } from 'react'
import MenuItem from '../components/MenuItem'
import { useDispatch, useSelector } from 'react-redux';
import { MenuItemType, selectMenu, fetchMenu } from '../redux/slices/menuSlice';
import Skeleton from '../components/Skeleton'
function Home() {
     const dispatch = useDispatch();
     const { items, status } = useSelector(selectMenu)
     const getMenu = async () => {
          //@ts-ignore
          dispatch(fetchMenu())
     }
     useEffect(() => {
          getMenu()
     }, [])
     const headPhons = items.filter((obj: MenuItemType) => obj.type == 'headPhons')
     const wirelessHeadphons = items.filter((obj: MenuItemType) => obj.type == 'wirelessHeadphons')
     return (
          <main className="main">
               <h2 className="main__index--title">Наушники</h2>
               <div className="main__goods">
                    {(status === "LOADING")
                         ? [...new Array(6)].map((_, index) => <Skeleton key={index}></Skeleton>)
                         : headPhons.map((obj: MenuItemType) => <MenuItem key={obj.id} {...obj} />)}
               </div>
               <h2 className="main__index--title">Беспроводные наушники</h2>
               <div className="main__goods">
                    {(status === "LOADING")
                         ? [...new Array(3)].map((_, index) => <Skeleton key={index}></Skeleton>)
                         : wirelessHeadphons.map((obj: MenuItemType) => <MenuItem key={obj.id} {...obj} />)}
               </div>
          </main>
     )
}

export default Home