import { useState } from "react";

function ContactUs() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [orderNo, setOrderNo] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "firstName":
                setFirstName(value);
                break;
            case "lastName":
                setLastName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "orderNo":
                setOrderNo(value);
                break;
            case "message":
                setMessage(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server)
        // For demonstration, let's just clear the form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setOrderNo("");
        setMessage("");
        document.getElementById('my_modal_5').showModal()
    };

    return (
        <>
            <div className="flex items-center mb-8">
                <div className="border w-full h-[1px]"></div>
                <h3 className="text-3xl lg:text-5xl font-bold text-nowrap mx-8">Contact Us</h3>
                <div className="border w-full h-[1px]"></div>
            </div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box text-center flex flex-col items-center py-8">
                <img src="images/success.png" alt=""/>
                <h3 className="text-[#27AE60] text-3xl mt-3 mb-5">SUCCESS</h3>
                <h3 className="text-2xl">You have successfully sent the message</h3>
                <h3 className="text-2xl">We will be in a touch with you very soon</h3>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn rounded-full px-8 bg-[#27ae5fc5] hover:bg-[#27AE60]">Continue</button>
                    </form>
                </div>
            </div>
            </dialog>
            <div className="flex justify-center items-center">
                <form className="w-fit" onSubmit={handleSubmit}>
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
                    <input className="btn w-full mt-5" type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}

export default ContactUs;
