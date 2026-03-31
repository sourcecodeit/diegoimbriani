export default function Header() {
  return (
    <header className="mb-24">
      <h1
        className="text-5xl md:text-7xl font-bold mb-2 text-gray-900"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        Diego Imbriani
      </h1>
      <p className="text-xl md:text-2xl font-bold text-gray-500 mb-6">
        Senior Full Stack Developer
      </p>
      <div className="h-1 w-16 bg-gradient-to-r from-gray-900 to-gray-400 mb-6"></div>
      <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
        I build things, break things, and occasionally write about it.
      </p>
    </header>
  );
}
