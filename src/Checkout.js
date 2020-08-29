import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
function Checkout(){
    const[{ basket }]= useStateValue();

    return(
        <div className="checkout">
            <div className="checkout_left">
            <img classNAme="checkout_ads" src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt=""/>
        
        {basket?.length === 0 ?(
            <div>
                <h2 className="checkout_title">Your Shopping Basket is Empty </h2>
            </div>

        ) : (
            <div>
                <h2 className="checkout_title">Your Shopping Basket</h2>
            {basket.map(item=>(
                  <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  />
            ))}
            
            </div>
        )}
        </div>
        {basket.length>0 && (
            <div className="checkout_right">
                <Subtotal/>
                </div>

        )}
        </div>

    );
}
export default Checkout;