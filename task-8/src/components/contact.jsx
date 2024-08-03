function Contact() {
  return (
    <div className="flex flex-col items-center mb-20 gap-10 px-4">
      <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex flex-col md:flex-row w-full md:w-2/5 gap-5">
          <input
            type="text"
            placeholder="Full Name*"
            className="input input-bordered px-4 py-3 rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Last Name*"
            className="input input-bordered px-4 py-3 rounded-lg w-full"
          />
        </div>
        <div className="w-full md:w-2/5">
          <input
            type="email"
            placeholder="Email*"
            className="input input-bordered px-4 py-3 rounded-lg w-full"
          />
        </div>
        <div className="w-full md:w-2/5">
          <textarea
            placeholder="Message"
            className="textarea textarea-bordered px-4 py-3 rounded-lg h-64 w-full"
          ></textarea>
        </div>
        <div className="w-full md:w-2/5">
          <button className="btn btn-ghost border border-gray-600 w-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
