"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("✅ Message sent successfully! We'll contact you within 24 hours.");

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setSuccess("");
        }, 5000);
      } else {
        setError(data.message || "❌ Something went wrong.");
      }
    } catch {
      setError("❌ Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
  id="contact"
  className="bg-[#050505] py-24"
>
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border border-gray-800 bg-[#0c0c0c] p-10 shadow-2xl">
          <h2 className="text-center text-4xl font-bold text-white">
            Let's build something amazing
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
            Tell us about your project and we'll get back to you within 24
            hours.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              disabled={loading}
              className="w-full rounded-xl border border-gray-700 bg-black px-5 py-4 text-white outline-none transition-all duration-300 focus:border-blue-500 disabled:opacity-60"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              disabled={loading}
              className="w-full rounded-xl border border-gray-700 bg-black px-5 py-4 text-white outline-none transition-all duration-300 focus:border-blue-500 disabled:opacity-60"
            />

            <input
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={(e) =>
                setForm({ ...form, subject: e.target.value })
              }
              disabled={loading}
              className="w-full rounded-xl border border-gray-700 bg-black px-5 py-4 text-white outline-none transition-all duration-300 focus:border-blue-500 disabled:opacity-60"
            />

            <textarea
              rows={6}
              placeholder="Tell us about your project..."
              required
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              disabled={loading}
              className="w-full rounded-xl border border-gray-700 bg-black px-5 py-4 text-white outline-none transition-all duration-300 focus:border-blue-500 disabled:opacity-60"
            />

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:opacity-60"
            >
              {loading && (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              )}

              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <div className="rounded-xl border border-green-500/40 bg-green-500/10 p-4 text-center text-green-400">
                {success}
              </div>
            )}

            {error && (
              <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-center text-red-400">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
