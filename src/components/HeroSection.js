const HeroSection = ({ id }) => (
    <section id={id} className="relative h-screen flex items-center justify-center bg-gradient-primary text-white p-8 rounded-b-[50px] shadow-2xl overflow-hidden">
      {/* Gradient Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
  
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-4 animate-fade-in-up">
          Hello, I'm <span className="text-yellow-300">Suresh Banoth</span>
        </h1>
        <p className="text-xl md:text-3xl mb-10 animate-fade-in-up delay-200">
          An <span className="font-bold">Accomplished Java Backend Developer</span> building scalable, event-driven microservices.
        </p>
        <button
          onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-indigo-700 px-8 py-4 rounded-full text-lg font-bold shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-indigo-100 animate-fade-in-up delay-400"
        >
          Explore My Work
        </button>
      </div>
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bg-white opacity-10 rounded-full animate-pulse-slow" style={{ width: '250px', height: '250px', top: '10%', left: '5%', transform: 'translate(-50%, -50%)' }}></div>
        <div className="absolute bg-white opacity-10 rounded-full animate-pulse-slow delay-500" style={{ width: '180px', height: '180px', bottom: '10%', right: '5%', transform: 'translate(50%, 50%)' }}></div>
        <div className="absolute bg-white opacity-10 rounded-full animate-pulse-slow delay-200" style={{ width: '100px', height: '100px', top: '25%', right: '10%' }}></div>
        <div className="absolute bg-white opacity-10 rounded-full animate-pulse-slow delay-700" style={{ width: '300px', height: '300px', bottom: '0%', left: '20%', transform: 'translate(-50%, 50%)' }}></div>
      </div>
    </section>
  );
  export default HeroSection