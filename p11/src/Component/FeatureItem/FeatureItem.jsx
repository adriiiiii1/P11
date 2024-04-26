import React from "react";
import Item from "../Item/Item.jsx";
import './FeatureItem.css';
import Iconchat from '../../assets/img/icon-chat.webp'
import Iconmoney from '../../assets/img/icon-money.webp'
import Iconsecurity from '../../assets/img/icon-security.webp'

function FeatureItem() {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <Item 
              icon={Iconchat} 
              title="You are our #1 priority" 
              description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."/>
            <Item 
              icon={Iconmoney} 
              title="More savings means higher rates" 
              description="The more you save with us, the higher your interest rate will be!"/>
            <Item 
              icon={Iconsecurity} 
              title="Security you can trust" 
              description="We use top of the line encryption to make sure your data and money is always safe."/>
        </section> 
    )
}
export default FeatureItem