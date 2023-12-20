import React from 'react'
import Header from './Header';
import Footer from './Footer';
const Layout=(porps)=>{
return(
    <div>
    <Header/>
      <body>  
        {porps.children}
      </body>
    <Footer/>
    </div>
)
}

export default Layout;