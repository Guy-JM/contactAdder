import React from "react";
import ContactCard from "./ContactCard";



const ContactList = (props) =>{
    console.log(props);

    const deleteContactHandler = (id) =>{
        props.getContactId(id);
    }
    const contacts = [{
        id: "1",
        name: "dipesh",
        email: "dipesh@gmail.com"
    }]
    const renderContactList = contacts.map((contact) =>{
        return(
            <ContactCard contact ={contact} clickHander ={deleteContactHandler} key ={contact.id}></ContactCard>
        );
    })
    return(
        <div className='ui celled list'>
            {renderContactList}
        </div>
    );
}

export default ContactList;