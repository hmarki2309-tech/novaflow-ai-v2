export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center text-gray-400 md:flex-row">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Nova<span className="text-blue-500">Flow</span>
          </h2>

          <p className="mt-2 text-sm">
            Premium AI Websites & Digital Solutions
          </p>
        </div>

        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Services</a>
          <a href="#" className="hover:text-white">Portfolio</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>

        <p className="text-sm">
          © 2026 NovaFlow AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
