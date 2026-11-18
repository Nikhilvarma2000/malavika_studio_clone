import { useState } from "react"

function InquiryForm() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

  }

  const handleSubmit = (e) => {

    e.preventDefault()

    console.log(formData)

  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[30px]"
    >

      <div className="grid gap-6">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition"
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition"
        >

          <option value="">Select Service</option>

          <option>Wedding Photography</option>
          <option>Pre Wedding Shoot</option>
          <option>Customized Gifts</option>
          <option>Frames & Printing</option>

        </select>

        <textarea
          rows="5"
          name="message"
          placeholder="Write Your Message"
          value={formData.message}
          onChange={handleChange}
          className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition resize-none"
        ></textarea>

        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-300 text-black py-4 rounded-2xl font-bold text-lg transition duration-300"
        >
          Send Inquiry
        </button>

      </div>

    </form>
  )
}

export default InquiryForm