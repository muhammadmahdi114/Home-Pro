import React from 'react';
import NavBar from '../NavBar/navBar';
import Footer from "../Footer/footer";


export default function Baselayout({ children, HeroRef, AboutRef, ServicesRef, BlogRef, ContactRef, active,setActive}) {

  return (
    <div className='min-w-screen min-h-screen flex flex-col overflow-x-hidden'>
      <NavBar active={active} setActive={setActive} HeroRef={HeroRef} AboutRef={AboutRef}  ServicesRef={ServicesRef}  BlogRef={BlogRef}  ContactRef={ContactRef}/>
      {children}
      <Footer />
    </div>
  );
}
