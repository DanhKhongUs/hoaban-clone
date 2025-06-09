import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function FeedbackForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Phản hồi gửi:", form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 border border-gray-500 p-6 rounded-lg bg-white shadow-sm"
    >
      <div className="w-full">
        <label className="block font-medium mb-1">Nhận xét của bạn *</label>

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="p-3 rounded w-full text-gray-900 bg-white outline-none border border-gray-300"
          required
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Tên *</label>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded w-full text-gray-900 bg-white outline-none border border-gray-300"
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Email *</label>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="p-3 rounded w-full text-gray-900 bg-white outline-none border border-gray-300"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-3 px-6 mt-4 rounded hover:bg-blue-600 transition duration-300 self-start"
      >
        GỬI ĐI
      </button>
    </form>
  );
}
