import React from 'react';
import Footer from "../../components/footer/footer";
import ContactsHome from "./contactsHome/ContactsHome";

function Contacts (props) {
    return (
        <div>
            <ContactsHome/>
            <Footer/>
        </div>
    );
}

export default Contacts;