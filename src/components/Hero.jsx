import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full bg-gray-900 text-white overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-40 h-40 bg-blue-300 rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute -bottom-8 right-1/4 w-64 h-64 bg-blue-800 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_25px_25px,_white_2%,_transparent_0%)] bg-[length:100px_100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left mb-16 md:mb-0">
          <div className="flex items-center space-x-2">
              <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <span className="text-5xl font-bold tracking-tight">EventosRD</span>
            </div>
            <span className="inline-block px-4 py-1 rounded-full bg-blue-600 text-blue-100 text-sm font-medium mb-6 shadow-md">
              La Plataforma Deportiva #1 de la República Dominicana
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Vive la <span className="text-yellow-300">Pasión</span> de los Eventos Deportivos
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              Descubre, organiza y vive la emoción de los eventos deportivos en un solo lugar. Conecta con la comunidad deportiva local y crea experiencias inolvidables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
  to="/explorar"
  className="relative bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-200 transition duration-300 overflow-hidden group"
>
  <span className="relative z-10">Explorar Eventos</span>
  <span className="absolute inset-0 w-0 bg-yellow-300 opacity-30 group-hover:w-full transition-all duration-300"></span>
</Link>

              <button className="px-8 py-3 rounded-lg border border-white text-white font-semibold hover:bg-blue-600 transition duration-300">
                Crear Evento
              </button>
            </div>

            <div className="mt-10 flex items-center justify-center md:justify-start">
            <div className="flex -space-x-3">
  <img
    className="h-10 w-10 rounded-full ring-2 ring-white"
    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    alt="Usuario 1"
  />
  <img
    className="h-10 w-10 rounded-full ring-2 ring-white"
    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
    alt="Usuario 2"
  />
  <img
    className="h-10 w-10 rounded-full ring-2 ring-white"
    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    alt="Usuario 3"
  />
  <img
    className="h-10 w-10 rounded-full ring-2 ring-white"
    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    alt="Usuario 4"
  />
  <img
    className="h-10 w-10 rounded-full ring-2 ring-white"
    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
    alt="Usuario 5"
  />
</div>
              <div className="ml-4 text-sm">
                <span className="font-bold text-white">+5,000</span> personas ya se unieron
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className="md:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl p-2 bg-gradient-to-br from-blue-500 to-blue-700">
              <div className="relative rounded-xl aspect-video bg-blue-800 flex items-center justify-center">
                <svg className="w-24 h-24 text-blue-200 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 md:-right-10 bg-white p-3 rounded-xl shadow-xl transform rotate-6">
              <div className="flex items-center space-x-2">
                <div className="bg-red-500 w-6 h-6 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">⚽</span>
                </div>
                <span className="text-gray-800 font-semibold text-sm">Fútbol</span>
              </div>
            </div>
            <div className="absolute -bottom-4 left-6 bg-white p-3 rounded-xl shadow-xl transform -rotate-3">
              <div className="flex items-center space-x-2">
                <div className="bg-orange-500 w-6 h-6 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🏀</span>
                </div>
                <span className="text-gray-800 font-semibold text-sm">Baloncesto</span>
              </div>
            </div>
            <div className="absolute top-1/2 -left-4 md:-left-10 bg-white p-3 rounded-xl shadow-xl transform -rotate-6">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🏊</span>
                </div>
                <span className="text-gray-800 font-semibold text-sm">Natación</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-20 pb-10">
          {[
            { label: 'Eventos anuales', value: '1,200+' },
            { label: 'Deportes', value: '30+' },
            { label: 'Ciudades', value: '25+' },
            { label: 'Participantes', value: '15K+' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-800 bg-opacity-70 rounded-xl backdrop-blur-md shadow-md"
            >
              <div className="text-3xl font-extrabold text-white">{stat.value}</div>
              <div className="text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
