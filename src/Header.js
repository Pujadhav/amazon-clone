import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
function Header(){
    const[{ basket, user }]= useStateValue();
    
    const login=()=>{
        if(user){
            auth.signOut();
        }
    }
    return(
        <div>
        <nav className="header">
            <Link to="/">
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt=""/>
            </Link>
            <div className="header_input">
            <input className="header_searchinput"/>
            <SearchIcon className="header_searchicon"/>
            </div>
            <div className="header_nav">
                <Link to={!user && "/login"} className="header_link">
                    <div onClick={login} className="header_option">
    <span className="header_navbarlineone">Hello,{user?.email}</span>
    <span className="header_navbarlinetwo">{user?'Sign Out': 'Sign In'}</span>
                    </div>
                </Link>
                
                <Link to="/login" className="header_link">
                    <div className="header_option">
                    <span className="header_navbarlineone">Returns</span>
                    <span className="header_navbarlinetwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header_link">
                    <div className="header_option">
                    <span className="header_navbarlineone">Try</span>
                    <span className="header_navbarlinetwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header_link">
                    <div className="header_checkout">
                    <ShoppingBasket/>
    <span className="header_navbarlinetwo header_basketcount">{basket?.length}</span>
                    </div>
                </Link>
                

            </div>
          


            
        </nav>
        
        </div>
    )
}
export default Header;