import { useState } from "react";
import success from './images/success.png'

function ContactUs() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [orderNo, setOrderNo] = useState("");
    const [message, setMessage] = useState("");
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "firstName") {
            setFirstName(value);
        } else if (name === "lastName") {
            setLastName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "orderNo") {
            setOrderNo(value);
        } else if (name === "message") {
            setMessage(value);
        }
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setFirstName("");
        setLastName("");
        setEmail("");
        setOrderNo("");
        setMessage("");
        document.getElementById('my_modal_5').showModal()
    };

    return (
        <section className="py-14" style={{backgroundImage: 'url(https://images.ctfassets.net/usf1vwtuqyxm/3lu0Dl0UBv94U80X9m3L9d/69ca6bfa71f140358297ec1ff90d3f7f/minalima-exercise-books-spread-magic-of-minalima.png?w=914&q=70&fm=webp)'}}>
            <div className="flex items-center mb-8">
                <div className="border w-full h-[1px]"></div>
                <h3 className="text-white text-3xl lg:text-5xl font-bold text-nowrap mx-8">Contact Us</h3>
                <div className="border w-full h-[1px]"></div>
            </div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box text-center flex flex-col items-center py-8">
                <img src={success} alt=""/>
                <h3 className="text-[#27AE60] text-3xl mt-3 mb-5">Message sent successfully</h3>
                <h3 className="text-2xl">We will be in a touch with you very soon</h3>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn rounded-full px-8 bg-[#27ae5fc5] hover:bg-[#27AE60]">Continue</button>
                    </form>
                </div>
            </div>
            </dialog>
            <div className="flex justify-center items-center">
                <form className="w-fit bg-transparent bg-gray-300 p-8" onSubmit={handleSubmit}>
                    <div className="lg:flex gap-5">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">First Name</span>
                            </div>
                            <input type="text" name="firstName" value={firstName} onChange={handleChange} placeholder="First Name" className="input input-bordered w-full max-w-xs" required />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Last Name</span>
                            </div>
                            <input type="text" name="lastName" value={lastName} onChange={handleChange} placeholder="Last Name" className="input input-bordered w-full max-w-xs" required />
                        </label>
                    </div>
                    <div className="lg:flex gap-5">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input type="email" name="email" value={email} onChange={handleChange} placeholder="Your Email" className="input input-bordered w-full max-w-xs" required />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Order No.</span>
                            </div>
                            <input type="number" name="orderNo" value={orderNo} onChange={handleChange} placeholder="Your Order No." className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Message</span>
                        </div>
                        <textarea name="message" value={message} onChange={handleChange} className="textarea textarea-bordered h-24" placeholder="Your Message" required></textarea>
                    </label>
                    <input className="btn hover:bg-gray-400 w-full mt-5" type="submit" value="Submit" />
                </form>
            </div>
        </section>
    );
}

export default ContactUs;
