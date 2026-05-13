import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center">

      <h1 className="text-6xl font-bold mb-6">
        Hi, I'm Vijay
      </h1>

      <p className="text-gray-300 text-xl mb-8">
        React Developer & AI Enthusiast
      </p>

      <Link
        to="/about"
        className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition"
      >
        About Me
      </Link>

    </div>
  )
}

export default Home