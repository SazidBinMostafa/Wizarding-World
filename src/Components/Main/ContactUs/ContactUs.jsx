function ContactUs() {
    return <>
        <div className="flex items-center mb-8">
            <div className="border w-full h-[1px]"></div>
            <h3 className="text-3xl lg:text-5xl font-bold text-nowrap">Contact Us</h3>
            <div className="border w-full h-[1px]"></div>
        </div>

        <div className="flex justify-center items-center">
            <form className="w-fit">
                <div className="lg:flex gap-5">
                    <label className="form-control  w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">First Name</span>
                        </div>
                        <input type="text" placeholder="First Name" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control  w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Last Name</span>
                        </div>
                        <input type="text" placeholder="Last Name" className="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <div className="lg:flex gap-5">
                    <label className="form-control  w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control  w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Order No.</span>
                        </div>
                        <input type="number" placeholder="Your Order No." className="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Message</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Your Message"></textarea>
                </label>
                <input className="btn w-full mt-5" type="button" value="Submit" />
            </form>
        </div>
    </>
}

export default ContactUs;