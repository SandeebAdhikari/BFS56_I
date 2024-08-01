function contact() {
  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <div className="flex flex-col items-start gap-1">
          <label className="text-lg ">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className="rounded-lg border border-gray-300 p-2 w-full "
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label className="text-lg">Email</label>
          <input
            type="email"
            placeholder="Search"
            className="form-input px-4 py-3 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default contact;
