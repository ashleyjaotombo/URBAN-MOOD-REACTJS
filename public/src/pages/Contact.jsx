import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactDiv from "../components/Contact/ContactDiv";

function Contact(){
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <ContactDiv/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}

export default Contact;