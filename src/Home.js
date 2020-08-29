import React from 'react';
import './Home.css';
import Product from './Product';

function Home(){
    return(
        <div className="home">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
            alt=""/>
            <div className="home_row">
            <Product 
            id={1} 
            title="Quantitative Aptitude for Competitive Examinations Paperback – 21 February 2017" 
            price={120.2} 
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51p6BRUjG5L._SX391_BO1,204,203,200_.jpg" 
            />
            <Product 
            id={2} 
            title="Bosch 12 Place Settings Dishwasher (SMS66GW01I, White)" 
            price={1500} 
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71sDAeFafVL._SL1500_.jpg" 
            />
            </div>
            <div className="home_row">
            <Product 
            id={3} 
            title="HP Pavilion x360 core i7 10th Gen 14 inch FHD Touchscreen Laptop with Alexa Built-in (16GB/1TB SSD/Windows 10/MS Office 2019/Finger Print Reader/Natural Silver/1.61kg), 14-dw0071tu" 
            price={98226} 
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61EQwsTKioL._SX679_.jpg" 
            />
            <Product 
            id={4} 
            title="Vivo V17 (Glacier Ice, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers" 
            price={20000} 
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71iWvC-Sk1L._SL1180_.jpg" 
            />
            <Product 
            id={5} 
            title="Ripped Up Nutrition Protein Cookies Choco-Chip (Pack of 2) - 300gm" 
            price={869} 
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71eTdPzJLRL._SL1080_.jpg" 
            />

            </div>
            <div className="home_row">
            <Product 
            id={6} 
            title="Insleep Orthopaedic Memory Foam Mattress in a Box - 78X60X5, Queen, Grey and White" 
            price={9300} 
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71J0lur%2BXML._SL1200_.jpg" 
            />
            </div>
        

        </div>
    )


}
export default Home;