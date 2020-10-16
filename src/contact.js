import React, {useState} from 'react';
import axios from 'axios'


const GOOGLE_FORM_NAME_ID = 'entry.2005620554';
const GOOGLE_FORM_EMAIL_ID = 'entry.1045781291';
const GOOGLE_FORM_MESSAGE_ID = 'entry.839337160';
//const CORS_PROXY = 'https://cors-escape.herokuapp.com/';
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdYx70gGMnV3MPidXHiRHiKrnEONmlOFGc0dyk76Hzt6Q3waw/formResponse';

function ContactForm(){
    const [dataForm, setdataForm] = useState({
        name: '',
        email: '',
        message: '',
        sending: false,
        sent: false,
        msgError: false
    });

    const sendMessage = () =>{
        const formData = new FormData()
        formData.append(GOOGLE_FORM_NAME_ID, dataForm.name)
        formData.append(GOOGLE_FORM_EMAIL_ID,dataForm.email)
        formData.append(GOOGLE_FORM_MESSAGE_ID, dataForm.message)

        axios.post(GOOGLE_FORM_ACTION,formData)
        //axios.post(CORS_PROXY + GOOGLE_FORM_ACTION, formData)
        .then(() =>{
            setdataForm({
                ...dataForm,
                sent: true,
                sending: false,
                name: '',
                email: '',
                message: '',
            });
        }).catch((error) => {
                setdataForm({
                    ...dataForm,
                    sent: true,
                    sending: false,
                    name: '',
                    email: '',
                    message: '',
                });
                setTimeout(() => {
                    setdataForm({
                        name: '',
                        email: '',
                        message: '',
                        sending: false,
                        sent: false,
                        msgError: false
                    });
                }, 5000);
        })
    }

    function handleSubmit(e){
        e.preventDefault();

        setdataForm({
            ...dataForm,
            sending: true
        });

        sendMessage();
    }
    
    function handleInputChanges(e){
        setdataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        });
    }

    return(
        <form onSubmit={handleSubmit}>
            <p>{/*dataForm.msgError && 'Failed to send. Email me at harorykz@gmail.com. Thank you'*/}</p>
            <p>{(dataForm.sent || dataForm.msgError) && 'Received your msg succefully. Will get back to you asap'}</p>
            <input type="text" placeholder="Your Name" name="name" value={dataForm.name} onChange={handleInputChanges} required/><br/>
            <input type="email" placeholder="Your email" name="email" value={dataForm.email} onChange={handleInputChanges} required /><br/>
            <textarea cols='25' rows='10' placeholder="Tell me something" name="message" value={dataForm.message} onChange={handleInputChanges} required /><br/>
            <button type="submit" value="submit">Submit</button>
            <p>{dataForm.sending && 'Sending...'}</p>
        </form>
    );
}
function Contact(props){
    return(
        <div className='contact' id="contact">
            <h4><span className="h4line"></span>&nbsp;&nbsp;Get in Touch</h4>
            <ContactForm/><hr/>

        </div>
    );
}

export default Contact;