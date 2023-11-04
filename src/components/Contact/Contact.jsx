import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <>
            <section class="contact">
                <div class="contact-top">
                    <div class="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.9633698339308!2d28.929441087738052!3d41.04793012296828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab1d021adf417%3A0xba3a3fdfdbb5f5d!2sEy%C3%BCp%20Sultan%20Camii!5e0!3m2!1str!2str!4v1665091191675!5m2!1str!2str"
                            width="100%" height="500" allowFullScreen="" loading="lazy"
                            style={{border: 0}}
                            referrerPolicy="no-referrer-when-downgrade" title='/'></iframe>
                    </div>
                </div>
                <div class="contact-bottom">
                    <div class="container">
                        <div class="contact-titles">
                            <h4>Contact with us</h4>
                            <h2>Get In Touch</h2>
                            <p>In hac habitasse platea dictumst. Pellentesque viverra sem nec orci lacinia, in bibendum urna
                                mollis. Quisque nunc lacus, varius vel leo a, pretium lobortis metus. Vivamus consectetur
                                consequat justo.</p>
                        </div>
                        <div class="contact-elements">
                            <form class="contact-form">
                                <div class="">
                                    <label>
                                        Your Name
                                        <span>*</span>
                                    </label>
                                    <input type="text" required />
                                </div>
                                <div class="">
                                    <label>
                                        Your email
                                        <span>*</span>
                                    </label>
                                    <input type="text" required />
                                </div>
                                <div class="">
                                    <label>
                                        Subject
                                        <span>*</span>
                                    </label>
                                    <input type="text" required />
                                </div>
                                <div class="">
                                    <label>
                                        Your message
                                        <span>*</span>
                                    </label>
                                    <textarea id="author" name="author" type="text" value="" size="30" required=""></textarea>
                                </div>
                                <button class="btn btn-sm form-button">Send Message</button>
                            </form>
                            <div class="contact-info">
                                <div class="contact-info-item">
                                    <div class="contact-info-texts">
                                        <strong> Clotya Store</strong>
                                        <p class="contact-street">
                                            Clotya Store
                                            Germany — 785 15h Street, Office 478/B Green Mall Berlin, De 81566</p>
                                        <a href="tel:Phone: +1 1234 567 88">Phone: +1 1234 567 88</a>
                                        <a href="mailto:Email: contact@example.com">Email: contact@example.com</a>
                                    </div>
                                </div>
                                <div class="contact-info-item">
                                    <div class="contact-info-texts">
                                        <strong> Opening Hours</strong>
                                        <p class="contact-date">
                                            Monday - Friday : 9am - 5pm</p>
                                        <p>Weekend Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact