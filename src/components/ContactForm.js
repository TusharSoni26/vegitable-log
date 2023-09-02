import "./ContactFormStyle.css"

function ContactForm(){
    return(
        <div className="form-container">
            <h1>Send a Message To Us</h1><br/><br/>
            <input placeholder="Name"/><br/>
            <input placeholder="Email"/><br/>
            <input placeholder="Subject"/><br/>
            <textarea placeholder="Message" rows="4"></textarea><br/>
            <button>Send Message</button>
        </div>
    );
}

export default ContactForm