export default function Logo() {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-600 shadow-[0_0_25px_rgba(59,130,246,0.35)]">

        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 18V6L19 18V6"
            stroke="white"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

      </div>

      <div>

        <h2 className="text-xl font-bold tracking-wide text-white">
          Nova<span className="text-blue-400">Flow</span>
        </h2>

        <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
          AI STUDIO
        </p>

      </div>

    </div>
  );
}
