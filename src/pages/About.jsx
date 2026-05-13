import { Link } from "react-router-dom"

function About() {
  return (
    <div className="min-h-screen bg-[#171d32] text-white flex flex-col items-center justify-center">

      <h1 className="text-5xl font-bold mb-6">
        About Me
      </h1>

      <p className="text-gray-300 text-xl mb-8 max-w-2xl text-center">
        I build modern web applications using React.js
        and AI-powered technologies.
      </p>

      <Link
        to="/"
        className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition"
      >
        Back to Home
      </Link>

    </div>
  )
}

export default About