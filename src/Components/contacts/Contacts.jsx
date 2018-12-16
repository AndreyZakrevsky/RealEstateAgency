import React from 'react';
import './contacts.scss';
import Map from './map/GoogleMapComponent';


const Contacts = ()=>(
    <div className="contacts">
       <div className="contact_contant">
            <div className="contact_contant_form">
               <form action="#" className="contact_form">
                    <input className="input_contact" type="text" id="f_name" name="f_name" placeholder="Full name"/>
                    <input className="input_contact" type="email" id="email" name="email" placeholder="Email"/>
                    <input className="input_contact" type="text" id="email" name="email" placeholder="Phone"/>
                    <textarea className="message_contact" name="message" id="message" name="message" placeholder="Message"></textarea>
                    <input className="input_contact" type="submit" value="Send" />
               </form>
            </div>
       </div>
       <div className="contact_contant_map">
          <Map/>
           <div className="contact_contant_map_data">
               <div className="map_data_item">
                    <p>LSE Houghton Street London WC2A 2AE UK</p>
               </div>
               <div className="map_data_item">
                    <p>zak111revsky@gmail.com</p>
               </div>
               <div className="map_data_item">
                    <p>+38(096)2090490</p>
               </div>
           </div>
       </div>
    </div>
);

export default Contacts;