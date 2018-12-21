import React from 'react';
import './contacts.scss';
import Map from './map/GoogleMapComponent';



const Contacts = ()=>(
    <div className="contacts">
        <div className="contact_title">
          <h2 className="contact_title_text">Text Us</h2>
       </div>
       <div className="contact_contant">
            <div className="contact_contant_form">
               <form action="#" className="contact_form">
                    <input className="input_contact" type="text" id="f_name" name="f_name" placeholder="Full name"/>
                    <input className="input_contact" type="email" id="email" name="email" placeholder="Email"/>
                    <input className="input_contact" type="text" id="email" name="email" placeholder="Phone"/>
                    <textarea className="message_contact" name="message" id="message"  placeholder="Message"></textarea>
                    <input className="input_contact" type="submit" value="Send" />
               </form>
            </div>
       </div>
       <div className="contact_contant_map">
          <Map/>
           <div className="contact_contant_map_data">
               <div className="map_data_item">
                    <p> Vinnitsa SomeStreet 23a</p>
               </div>
               <div className="map_data_item">
                    <p>someemail@gmail.com</p>
               </div>
               <div className="map_data_item">
                    <p>+647822090490</p>
               </div>
           </div>
       </div>
    </div>
);

export default Contacts;