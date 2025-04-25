import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPinIcon, CalendarDaysIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function ExploreEvents() {
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: 'Maratón Santo Domingo',
      date: '2025-05-20',
      location: 'Parque Mirador Sur',
      description: 'Participa en el maratón más importante del Caribe con corredores de todo el mundo. Este evento anual atrae a miles de participantes y espectadores. Las categorías incluyen maratón completo, media maratón y carrera de 10K. Premios en efectivo para los primeros lugares en cada categoría.',
      fullDescription: 'El Maratón Santo Domingo es el evento de running más prestigioso del Caribe, celebrado anualmente desde 1987. La ruta recorre los principales puntos turísticos de la ciudad, ofreciendo a los corredores una experiencia única. El evento cuenta con estaciones de hidratación cada 3km, asistencia médica y puntos de entretenimiento musical. Los participantes recibirán kit de corredor con camiseta técnica, número de competencia y chip de tiempo. La premiación incluye trofeos y premios en efectivo de hasta RD$500,000 para los ganadores absolutos.',
      category: 'running',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: 'RD$1,500 - RD$3,000',
      organizer: 'Asociación Dominicana de Maratones',
      website: 'www.maratonsantodomingo.com',
      contact: 'info@maratonsantodomingo.com',
      requirements: 'Certificado médico vigente, mayor de 18 años para maratón completo'
    },
    {
      id: 2,
      title: 'Torneo Nacional de Baloncesto',
      date: '2025-06-10',
      location: 'Centro Olímpico Juan Pablo Duarte',
      description: 'Disfruta del talento nacional en este evento de alto nivel competitivo. Equipos de todas las provincias competirán durante 2 semanas. Evento familiar con comida, música y actividades para niños.',
      fullDescription: 'El Torneo Nacional de Baloncesto reúne a los mejores equipos de todas las regiones del país en un emocionante formato de eliminatorias. Durante dos semanas, los espectadores podrán disfrutar de hasta tres juegos diarios en diferentes categorías (sub-20, libre y veteranos). El evento incluye zona de comida con gastronomía local, área infantil con animadores, y presentaciones de artistas urbanos durante los intermedios. Los juegos serán transmitidos en vivo por el canal deportivo nacional. Los scouts de ligas internacionales asistirán para identificar talento emergente.',
      category: 'basketball',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2090&q=80',
      price: 'RD$300 - RD$800 por juego',
      organizer: 'Federación Dominicana de Baloncesto',
      website: 'www.fedombal.org',
      contact: 'torneo@fedombal.org',
      requirements: 'Entrada general, niños menores de 5 años gratis'
    },
    {
      id: 3,
      title: 'Competencia de Crossfit RD',
      date: '2025-07-05',
      location: 'Zona Colonial',
      description: 'Atletas de todo el país se enfrentan en un evento lleno de fuerza, resistencia y adrenalina. Pruebas diseñadas para desafiar hasta a los más preparados.',
      fullDescription: 'La Competencia Nacional de Crossfit es el evento más exigente del calendario fitness nacional. Durante tres días consecutivos, los atletas competirán en pruebas que incluyen levantamiento olímpico, ejercicios gimnásticos y pruebas de resistencia metabólica. El formato incluye categorías individuales (masculino/femenino) y por equipos. Habrá zona de espectadores con pantalla gigante, food trucks saludables y área de recuperación con masajistas. Los ganadores recibirán becas para entrenar en centros de alto rendimiento internacionales y patrocinios de marcas deportivas.',
      category: 'crossfit',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: 'RD$2,000 (atletas) - RD$500 (espectadores)',
      organizer: 'Crossfit República Dominicana',
      website: 'www.crossfitrd.com',
      contact: 'competicion@crossfitrd.com',
      requirements: 'Certificación Level 1 para competir, registro previo obligatorio'
    },
    {
      id: 4,
      title: 'Triatlón de Punta Cana',
      date: '2025-08-15',
      location: 'Playa Blanca, Punta Cana',
      description: 'Nada, pedalea y corre en uno de los paisajes más hermosos del Caribe. Distancias olímpica y sprint disponibles para todos los niveles.',
      fullDescription: 'El Triatlón Internacional de Punta Cana combina deporte y turismo en un escenario paradisíaco. El evento comienza con 1.5km de nado en las cristalinas aguas de Playa Blanca, seguido de 40km de ciclismo por la costa este y finaliza con 10km de carrera por senderos naturales. Los participantes pueden elegir entre la distancia olímpica o la versión sprint (750m-20km-5km). Incluye expo deportiva, charlas técnicas y cena de bienvenida. Los ganadores recibirán paquetes vacacionales en complejos turísticos de lujo. El evento es puntuable para el ranking ITU.',
      category: 'triathlon',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: 'RD$4,500 - RD$6,000',
      organizer: 'Triatlón Caribe',
      website: 'www.triatlonpunta.com',
      contact: 'info@triatlonpunta.com',
      requirements: 'Equipo de ciclismo propio, seguro médico deportivo'
    },
    {
      id: 5,
      title: 'Carrera de Obstáculos Spartan Race',
      date: '2025-09-20',
      location: 'Jarabacoa',
      description: 'Demuestra tu fuerza y resistencia en esta emocionante carrera de obstáculos. Distancias de 5km, 10km y 21km disponibles.',
      fullDescription: 'La Spartan Race llega a República Dominicana con su formato clásico de obstáculos en medio de los impresionantes paisajes montañosos de Jarabacoa. Los participantes enfrentarán más de 20 obstáculos que incluyen muros de escalada, arrastre de peso, lanzamiento de lanza y pruebas de carga. El evento ofrece tres distancias: Sprint (5km, 20 obstáculos), Super (10km, 25 obstáculos) y Beast (21km, 30 obstáculos). Incluye festival Spartan con música en vivo, zona de comidas y área de recuperación. Todos los finalistas recibirán medalla, camiseta conmemorativa y acceso a fotos oficiales.',
      category: 'obstacle',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: 'RD$3,200 - RD$5,500',
      organizer: 'Spartan Race Caribe',
      website: 'www.spartan.com/do',
      contact: 'rd@spartan.com',
      requirements: 'Formulario de responsabilidad firmado, equipo recomendado: guantes deportivos'
    },
    {
      id: 6,
      title: 'Campeonato de Natación Infantil',
      date: '2025-10-10',
      location: 'Piscina Olímpica Nacional',
      description: 'Apoya a los jóvenes nadadores en su camino hacia la excelencia. Categorías desde 6 hasta 17 años.',
      fullDescription: 'El Campeonato Nacional Infantil de Natación reúne a las promesas dominicanas de este deporte acuático. Durante cuatro días de competencia, los jóvenes atletas competirán en las modalidades de estilo libre, espalda, pecho y mariposa, en distancias desde 25m hasta 200m según categoría de edad. El evento sirve como selectivo para los equipos nacionales juveniles. Incluye clínicas técnicas con nadadores olímpicos, evaluación de biomecánica subacuática y charlas sobre nutrición deportiva. Los mejores tiempos serán considerados para récords nacionales por edades.',
      category: 'swimming',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: 'RD$200 (espectadores) - GRATIS (participantes registrados)',
      organizer: 'Federación Dominicana de Natación',
      website: 'www.fedonatacion.org',
      contact: 'infantil@fedonatacion.org',
      requirements: 'Certificado de nacimiento, registro mediante club afiliado'
    }
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'running':
        return <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
      case 'basketball':
        return <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>;
      case 'crossfit':
        return <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>;
      case 'triathlon':
        return <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>;
      case 'obstacle':
        return <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>;
      case 'swimming':
        return <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>;
      default:
        return <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>;
    }
  };

  const handleViewDetails = (eventId) => {
    navigate(`/eventos/${eventId}`);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500 rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-60 h-60 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-sky-800 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-3">
            Explora Eventos Deportivos
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Descubre los próximos eventos deportivos en República Dominicana y planifica tu participación.
          </p>
        </div>

        {/* Event cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`bg-gray-800 bg-opacity-70 rounded-2xl shadow-md overflow-hidden flex flex-col backdrop-blur-sm transition-all duration-300 ${
                hoveredEvent === index ? 'scale-105 shadow-xl' : ''
              }`}
              onMouseEnter={() => setHoveredEvent(index)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              {/* Event image */}
              <div 
                className="h-48 bg-gray-700 relative overflow-hidden"
                style={{
                  backgroundImage: `url(${event.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-40"></div>
                <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 text-xs font-medium rounded-full">
                  {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                </div>
              </div>

              {/* Event details */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <div className="flex items-center text-sm text-blue-300 font-semibold mb-2">
                    <CalendarDaysIcon className="w-4 h-4 mr-1" />
                    {formatDate(event.date)}
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3">{event.title}</h2>

                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <MapPinIcon className="w-4 h-4 mr-1" />
                    {event.location}
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-5">
                    {event.description.length > 100
                      ? `${event.description.slice(0, 100)}...`
                      : event.description}
                  </p>
                </div>

                {/* View more button */}
                <button
                  onClick={() => handleViewDetails(event.id)}
                  className="w-full bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  Ver más detalles
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="mt-12 text-center">
          <button className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            Ver todos los eventos
          </button>
        </div>
      </div>
    </div>
  );
}