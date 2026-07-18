import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Logo />

        <nav className="hidden gap-8 text-sm text-gray-300 md:flex">
          <a href="#home" className="transition hover:text-blue-400">
            Home
          </a>

          <a href="#services" className="transition hover:text-blue-400">
            Services
          </a>

          <a href="#portfolio" className="transition hover:text-blue-400">
            Portfolio
          </a>

          <a href="#pricing" className="transition hover:text-blue-400">
            Pricing
          </a>

          <a href="#contact" className="transition hover:text-blue-400">
            Contact
          </a>
        </nav>

        <a href="#contact">
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-500">
            Get Started
          </button>
        </a>

      </div>
    </header>
  );
}
