function App() {
  return (
    <div className="bg-[#0f172a] text-white">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#0f172a] flex justify-between items-center px-10 py-6 shadow-lg">

        <h1 className="text-3xl font-bold">
          Ramesh
        </h1>

        <ul className="flex gap-8 text-lg">

          <li>
            <a href="#home" className="hover:text-blue-400">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </li>

        </ul>

      </nav>

      {/* Home Section */}
<section
  id="home"
  className="min-h-screen bg-[#0f172a] text-white flex items-center justify-between px-10 md:px-20"
>

  {/* Left Side */}
  <div className="max-w-2xl">

    <h1 className="text-7xl font-bold mb-6">
      Hi, I'm Ramesh!
    </h1>

    <p className="text-gray-300 text-xl mb-8 leading-8">
      React Developer | Python Enthusiast | Problem Solver |
      Tech Explorer | Software Developer
    </p>

  </div>

  {/* Right Side Image */}
  <div className="hidden md:block mr-10">
    
    <div className="w-[420px] h-[420px] rounded-full p-1 
      shadow-[0_0_60px_rgba(59,130,246,0.5)]">

      <img
        src="/profile.jpg"
        alt="profile"
        className="w-full h-full object-cover rounded-full border-4 border-[#0f172a]"
      />

    </div>

  </div>

</section>

      <section
  id="about"
  className="min-h-screen bg-[#171d32] text-white flex items-center px-10 md:px-20"
>

  <div className="grid md:grid-cols-2 gap-16 items-center w-full">

    {/* LEFT SIDE HEADING */}
    <div>
      <h2 className="text-6xl font-bold">
        About Me
      </h2>

      <p className="text-gray-400 mt-4 text-lg">
        Get to know more about me
      </p>
    </div>

    {/* RIGHT SIDE CONTENT */}
    <div className="space-y-10">

      {/* ABOUT YOU */}
      <div>
        <h3 className="text-2xl font-semibold mb-3 text-blue-400">
          Who I Am
        </h3>

        <p className="text-gray-300 leading-8">
          I am a software developer focused on building efficient, responsive, and user-friendly applications. I enjoy solving real-world problems through code and have experience working with frontend technologies as well as programming languages like C, C++, and Python. I am continuously learning and expanding my skills in full-stack and AI development.
        </p>
      </div>

      {/* SKILLS */}
      <div>
        <h3 className="text-2xl font-semibold mb-3 text-blue-400">
          Skills
        </h3>

        <div className="flex flex-wrap gap-3">
          <span className="bg-[#0f172a] px-4 py-2 rounded-xl">Python</span>
          <span className="bg-[#0f172a] px-4 py-2 rounded-xl">C++</span>
          <span className="bg-[#0f172a] px-4 py-2 rounded-xl">React</span>
          <span className="bg-[#0f172a] px-4 py-2 rounded-xl">Tailwind</span>
          <span className="bg-[#0f172a] px-4 py-2 rounded-xl">C</span>
        </div>
      </div>

      {/* INTERESTS */}
      <div>
        <h3 className="text-2xl font-semibold mb-3 text-blue-400">
          Interests
        </h3>

        <p className="text-gray-300 leading-8">
          My interests include software development, web application design, and building real-world projects. I am also passionate about artificial intelligence, problem-solving, and continuously learning new technologies to improve my development skills.
        </p>
      </div>

    </div>

  </div>

</section>
      {/* Projects Section */}
<section
  id="projects"
  className="min-h-screen bg-[#0f172a] px-10 py-24"
>

  <h2 className="text-5xl font-bold text-center mb-20 text-white">
    Projects
  </h2>

  <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

    {/* AI Chatbot */}
    <div className="bg-[#171d32] p-8 rounded-3xl shadow-xl hover:scale-105 transition duration-300">

      <h3 className="text-3xl font-bold mb-5">
        AI Chatbot
      </h3>

      <p className="text-gray-300 mb-6 leading-7">
        Intelligent chatbot project capable of answering
        user queries using AI-based responses.
      </p>

      <div className="flex gap-3 flex-wrap mb-6">

        <span className="bg-blue-500 px-3 py-1 rounded-lg text-sm">
          Python
        </span>

        <span className="bg-blue-500 px-3 py-1 rounded-lg text-sm">
          Groq + Streamlit
        </span>

      </div>

      <a
        href="https://github.com/25A31A05IG/CHATBOT-AI"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-black px-5 py-2 rounded-xl hover:bg-gray-300 transition"
      >
        View GitHub
      </a>

    </div>

    {/* GPA Calculator */}
    <div className="bg-[#171d32] p-8 rounded-3xl shadow-xl hover:scale-105 transition duration-300">

      <h3 className="text-3xl font-bold mb-5">
        Student GPA Calculator
      </h3>

      <p className="text-gray-300 mb-6 leading-7">
        GPA calculation system developed in C language
        for managing student grades efficiently.
      </p>

      <div className="flex gap-3 flex-wrap mb-6">

        <span className="bg-blue-500 px-3 py-1 rounded-lg text-sm">
          C 
        </span>

      </div>

      <a
        href="https://github.com/25A31A05IG/Student-GPA-Calculator-project-1"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-black px-5 py-2 rounded-xl hover:bg-gray-300 transition"
      >
        View GitHub
      </a>

    </div>

    {/* Banking Interest System */}
    <div className="bg-[#171d32] p-8 rounded-3xl shadow-xl hover:scale-105 transition duration-300">

      <h3 className="text-3xl font-bold mb-5">
        Banking Interest System
      </h3>

      <p className="text-gray-300 mb-6 leading-7">
        Banking application developed in C++ to calculate
        simple and compound interest values.
      </p>

      <div className="flex gap-3 flex-wrap mb-6">

        <span className="bg-blue-500 px-3 py-1 rounded-lg text-sm">
          C++
        </span>

      </div>

      <a
        href="https://github.com/25A31A05IG/Banking-Intrest-Cpp-project-2"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-black px-5 py-2 rounded-xl hover:bg-gray-300 transition"
      >
        View GitHub
      </a>

    </div>

  </div>

</section>
{/* Contact Section */}
<section
  id="contact"
  className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center px-10 py-20"
>

  <h2 className="text-5xl font-bold mb-6">
    Contact Me
  </h2>

  <p className="text-gray-400 text-lg mb-12 text-center max-w-2xl">
    Feel free to reach out for collaborations, internships, or project discussions.
  </p>

  {/* Main Contact Links */}
  <div className="flex flex-col gap-5 w-full max-w-md">

    <a
      href="mailto:rameshnetheti2008@gmail.com"
      className="bg-blue-500 px-6 py-4 rounded-xl text-center hover:bg-blue-600 transition"
    >
      📧 Email Me
    </a>

    <a
      href="https://github.com/25A31A05IG"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#171d32] px-6 py-4 rounded-xl text-center hover:bg-[#1f2542] transition"
    >
      🐙 GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/25a31a05ig?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#171d32] px-6 py-4 rounded-xl text-center hover:bg-[#1f2542] transition"
    >
      🔗 LinkedIn
    </a>

  </div>

  {/* Coding Profiles */}
  <div className="mt-12 w-full max-w-md">

    <h3 className="text-2xl font-semibold mb-6 text-center">
      Coding Profiles
    </h3>

    <div className="flex flex-col gap-4">

      <a
        href="https://leetcode.com/u/25A31A05IG/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#171d32] px-6 py-4 rounded-xl text-center hover:bg-[#1f2542] transition"
      >
        🧠 LeetCode
      </a>

      <a
        href="https://www.hackerrank.com/profile/25A31A05IG"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#171d32] px-6 py-4 rounded-xl text-center hover:bg-[#1f2542] transition"
      >
        💻 HackerRank
      </a>

      <a
        href="https://www.codechef.com/users/ramesh_netheti"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#171d32] px-6 py-4 rounded-xl text-center hover:bg-[#1f2542] transition"
      >
        ⚡ Code Chef
      </a>

    </div>

  </div>

</section>

    </div>
  )
}

export default App
