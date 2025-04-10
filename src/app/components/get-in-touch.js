import React from 'react';

const GetInTouch = () => {
    return (
        <div className="contact-form bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
            <form>
                <div className="grid grid-cols-1 gap-6">
                    <div>
                        <label className="form-label">Your Name</label>
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Name"
                            required
                        />
                    </div>

                    <div>
                        <label className="form-label">Your Email</label>
                        <input
                            type="email"
                            className="form-input"
                            placeholder="Email"
                            required
                        />
                    </div>

                    <div>
                        <label className="form-label">Subject</label>
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Subject"
                            required
                        />
                    </div>

                    <div>
                        <label className="form-label">Your Message</label>
                        <textarea
                            className="form-input"
                            placeholder="Message"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn bg-blue-600 hover:bg-blue-700 text-white rounded-md mt-6"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default GetInTouch; 