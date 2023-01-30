import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import cart from '../assets/images/cart.png'
import '../assets/styles/animation.css'
import Cart from '../components/Cart/Cart'

const Main = () => {
    const [cartOpen, setCartOpen] = useState(false)
    const cartData = 3
    return (
        <section className='mx-auto max-w-[1200px]'>
            {/* Cart Menu */}
            {
                !cartOpen &&
                <div className='fixed right-4 top-[20%] cursor-pointer flex flex-col items-center' onClick={() => setCartOpen(!cartOpen)}>
                    <img className='h-16 animation' src={cart} alt="cart" />
                    <p>{cartData} Items</p>
                </div>
            }
            <div className='transition duration-300'>
                <Cart setCartOpen={setCartOpen} cartOpen={cartOpen} />
            </div>

            <Navbar />

            <div className='mt-20'>
                <Outlet />
            </div>
        </section>
    )
}

export default Main