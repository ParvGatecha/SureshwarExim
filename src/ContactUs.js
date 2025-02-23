export default function ContactUs() {
  return (
    <section
      className="contact-section container mx-auto py-12 px-6"
      id="contactus"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

      <div className="flex flex-col md:flex-row gap-5">
        {/* Form Section */}
        <div className="contact-container flex-grow">
          <form className="contact-form flex flex-col gap-4 bg-gray-100 p-6 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Name"
              required
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              required
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Message"
              rows="4"
              required
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button className="contact-btn m-2">
              <a href="#contactus" className="text-white">
                Send
              </a>
            </button>
          </form>
        </div>

        {/* Google Maps (Optional) */}
        {/* <div className="map-container flex-grow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7400.9561192465335!2d70.796294!3d21.954608!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDU3JzE2LjYiTiA3MMKwNDcnNTUuOSJF!5e0!3m2!1sen!2sin!4v1732254171752!5m2!1sen!2sin"
            height="450"
            className="w-full rounded-lg shadow-md"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div> */}
      </div>
    </section>
  );
}
