import { CalendarDaysIcon, PencilSquareIcon, BellAlertIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Calendario de Eventos',
    description: 'Consulta eventos próximos y añade los tuyos fácilmente.',
    icon: CalendarDaysIcon,
  },
  {
    title: 'Registro de Participantes',
    description: 'Administra inscripciones y listas de asistencia de forma eficiente.',
    icon: PencilSquareIcon,
  },
  {
    title: 'Notificaciones en Tiempo Real',
    description: 'Recibe alertas instantáneas sobre cambios importantes y actualizaciones.',
    icon: BellAlertIcon,
  },
];

export default function Features() {
  return (
    // Mantenemos la base oscura y estructura full-width
    <section className="relative w-full bg-gray-900 text-white overflow-hidden py-20 sm:py-28">

      {/* Elementos Decorativos con tonos Púrpura/Violeta */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Cambiamos los azules por púrpuras/violetas */}
        <div className="absolute -top-32 -left-16 w-80 h-80 bg-purple-500 rounded-full opacity-15 blur-3xl"></div> {/* Antes azul */}
        <div className="absolute top-1/3 right-10 w-48 h-48 bg-violet-400 rounded-full opacity-10 blur-2xl"></div> {/* Antes índigo */}
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-800 rounded-full opacity-20 blur-3xl"></div> {/* Antes azul oscuro */}
        {/* Mantenemos el patrón de puntos */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_25px_25px,_white_2%,_transparent_0%)] bg-[length:100px_100px]"></div>
      </div>

      {/* Contenedor Principal del Contenido */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado Centrado */}
        <div className="max-w-2xl mx-auto text-center">
           <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
             ¿Qué Ofrecemos?
           </h2>
           <p className="text-lg leading-8 text-gray-400">
             Descubre las herramientas clave que nuestra plataforma pone a tu disposición.
           </p>
        </div>

        {/* Grid de Características */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              // Mantenemos el estilo de tarjeta semi-transparente
              className="flex flex-col items-start p-6 bg-gray-800 bg-opacity-70 rounded-xl backdrop-blur-sm shadow-lg transition-transform duration-300 hover:scale-[1.03]"
            >
              {/* Contenedor del Icono con el nuevo color de acento Púrpura */}
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-600 text-white mb-5 shadow-md"> {/* Antes bg-blue-600 */}
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>

              {/* Contenido de Texto (colores neutros se mantienen) */}
              <h3 className="text-xl font-semibold leading-7 text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-base leading-7 text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}