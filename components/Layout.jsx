import React from 'react'
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';


const Layout = ({children})=>{
    return (
        <div className='layout'>
            <Head>
                <title>The Good Store</title>
            </Head>
            <header>
                <Navbar/>
            </header>
            <main className='main-container'>
                {children}
                <footer>
                    <Footer/>
                </footer>
            </main>
           </div>
    )
}
export default Layout