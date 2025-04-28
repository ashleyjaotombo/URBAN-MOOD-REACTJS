import './Contact.css';

function ContactDiv(){
    return (
        <div className="contact-page">
            <h1>Contactez-nous</h1>
            <form className="contact-form">
                <input type="text" placeholder="Votre nom" required />
                <input type="email" placeholder="Votre email" required />
                <textarea placeholder="Votre message" rows="5" required />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default ContactDiv;