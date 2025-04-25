import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  MapPinIcon, 
  CalendarDaysIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon, 
  GlobeAltIcon,
  EnvelopeIcon,
  ClipboardDocumentIcon,
  ShareIcon,
  HeartIcon,
  ClockIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

const EventDetails = () => {
  const { eventId } = useParams();
  const [showMore, setShowMore] = useState(false);
  const [liked, setLiked] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });
  
  // Lista completa de eventos con la estructura actualizada
  const events = [
    {
      id: 1,
      title: 'Maratón Santo Domingo',
      date: '2025-05-20',
      time: '06:00 AM',
      location: 'Parque Mirador Sur',
      description: 'Participa en el maratón más importante del Caribe con corredores de todo el mundo.',
      fullDescription: 'El Maratón Santo Domingo es el evento de running más prestigioso del Caribe. Reúne a atletas profesionales y aficionados de más de 20 países para recorrer las calles más emblemáticas de la capital dominicana. El recorrido incluye pasos por lugares históricos como la Zona Colonial, el Malecón, y finaliza en el Parque Mirador Sur. La carrera cuenta con categorías de 5K, 10K, 21K y maratón completo, permitiendo la participación de corredores de todos los niveles. La hidratación estará garantizada con estaciones cada 3 kilómetros y habrá asistencia médica a lo largo de todo el recorrido.',
      category: 'running',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: 'RD$1,500 - RD$3,000',
      organizer: 'Asociación Dominicana de Maratones',
      website: 'www.maratonsantodomingo.com',
      contact: 'info@maratonsantodomingo.com',
      requirements: 'Certificado médico vigente, mayor de 18 años para maratón completo',
      participants: 1240,
      distances: ['5K', '10K', '21K', '42K'],
      benefits: [
        'Kit de corredor oficial',
        'Medalla de finalista',
        'Chip de cronometraje',
        'Hidratación durante el recorrido',
        'Asistencia médica',
        'Fotografías oficiales'
      ]
    },
    {
      id: 2,
      title: 'Torneo Nacional de Baloncesto',
      date: '2025-06-10',
      time: '04:00 PM',
      location: 'Centro Olímpico Juan Pablo Duarte',
      description: 'Disfruta del talento nacional en este evento de alto nivel competitivo.',
      fullDescription: 'El Torneo Nacional de Baloncesto es el máximo evento de este deporte en el país, reuniendo a los mejores equipos de cada provincia en un emocionante formato de eliminatorias. Durante dos semanas, los espectadores podrán disfrutar de partidos de alta intensidad en tres categorías: Sub-20, Libre y Veteranos. El torneo contará con transmisión en vivo por televisión nacional y streaming, con comentaristas profesionales y análisis técnico. Se premiará al MVP del torneo, al mejor quinteto y al equipo con mejor afición. El evento incluirá actividades paralelas como clínicas de baloncesto para niños y exhibiciones de figuras históricas del deporte.',
      category: 'basketball',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2090&q=80',
      price: 'RD$300 - RD$800 por juego',
      organizer: 'Federación Dominicana de Baloncesto',
      website: 'www.fedombal.org',
      contact: 'torneo@fedombal.org',
      requirements: 'Entrada general, niños menores de 5 años gratis',
      participants: 32,
      divisions: ['Sub-20', 'Libre', 'Veteranos'],
      benefits: [
        'Transmisión en vivo de todos los partidos',
        'Actividades para niños',
        'Zona de comida',
        'Presentaciones artísticas',
        'Sorteos de merchandising oficial'
      ]
    },
    {
      id: 3,
      title: 'Competencia de Crossfit RD',
      date: '2025-07-05',
      time: '07:00 AM',
      location: 'Zona Colonial',
      description: 'Atletas de todo el país se enfrentan en un evento lleno de fuerza, resistencia y adrenalina.',
      fullDescription: 'La Competencia Nacional de Crossfit es el evento más exigente del calendario fitness dominicano, reuniendo a los atletas más preparados del país. Durante tres días consecutivos, los participantes demostrarán su fuerza, resistencia y técnica en pruebas diseñadas por entrenadores internacionales certificados. El formato incluye categorías individuales (masculino y femenino) y por equipos, con pruebas que combinan levantamiento olímpico, ejercicios gimnásticos y resistencia metabólica. El evento contará con zona VIP para espectadores, transmisión en pantallas gigantes y análisis en vivo por expertos en crossfit. Los ganadores recibirán premios en efectivo y patrocinios de marcas deportivas internacionales.',
      category: 'crossfit',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: 'RD$2,000 (atletas) - RD$500 (espectadores)',
      organizer: 'Crossfit República Dominicana',
      website: 'www.crossfitrd.com',
      contact: 'competicion@crossfitrd.com',
      requirements: 'Certificación Level 1 para competir, registro previo obligatorio',
      participants: 150,
      categories: ['Individual Masculino', 'Individual Femenino', 'Equipos'],
      benefits: [
        'Zona de recuperación con masajistas',
        'Food trucks saludables',
        'Clínicas técnicas',
        'Premios en efectivo',
        'Oportunidades de patrocinio'
      ]
    },
    {
      id: 4,
      title: 'Triatlón de Punta Cana',
      date: '2025-08-15',
      time: '06:30 AM',
      location: 'Playa Blanca, Punta Cana',
      description: 'Nada, pedalea y corre en uno de los paisajes más hermosos del Caribe.',
      fullDescription: 'El Triatlón Internacional de Punta Cana es un evento único que combina deporte de alto rendimiento con los espectaculares paisajes del este dominicano. Los participantes comenzarán con 1.5km de nado en las cristalinas aguas de Playa Blanca, seguido de 40km de ciclismo por la costa este y finalizarán con 10km de carrera por senderos naturales. El evento ofrece dos distancias (olímpica y sprint) para adaptarse a diferentes niveles de preparación. Los atletas contarán con asistencia técnica en todas las transiciones, hidratación especializada y seguimiento médico. Los ganadores absolutos recibirán paquetes vacacionales en complejos de lujo de la zona y puntos para el ranking internacional ITU.',
      category: 'triathlon',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: 'RD$4,500 - RD$6,000',
      organizer: 'Triatlón Caribe',
      website: 'www.triatlonpunta.com',
      contact: 'info@triatlonpunta.com',
      requirements: 'Equipo de ciclismo propio, seguro médico deportivo',
      participants: 350,
      distances: ['Sprint (750m-20km-5km)', 'Olímpico (1.5km-40km-10km)'],
      benefits: [
        'Chip de cronometraje profesional',
        'Expo deportiva previa',
        'Cena de bienvenida',
        'Masajes post-competencia',
        'Fotos oficiales del evento'
      ]
    },
    {
      id: 5,
      title: 'Carrera de Obstáculos Spartan Race',
      date: '2025-09-20',
      time: '07:00 AM',
      location: 'Jarabacoa',
      description: 'Demuestra tu fuerza y resistencia en esta emocionante carrera de obstáculos.',
      fullDescription: 'La Spartan Race llega a República Dominicana con su formato clásico de obstáculos en medio de los impresionantes paisajes montañosos de Jarabacoa. Los participantes enfrentarán más de 20 obstáculos diseñados para probar fuerza, resistencia y determinación, incluyendo muros de escalada, arrastre de peso, lanzamiento de lanza y pruebas de carga. El evento ofrece tres distancias: Sprint (5km, 20 obstáculos), Super (10km, 25 obstáculos) y Beast (21km, 30 obstáculos). Cada finalista recibirá su medalla característica y acceso al festival Spartan con música en vivo, zona de comidas y área de recuperación. Los mejores atletas clasificarán para el campeonato mundial en Estados Unidos.',
      category: 'obstacle',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: 'RD$3,200 - RD$5,500',
      organizer: 'Spartan Race Caribe',
      website: 'www.spartan.com/do',
      contact: 'rd@spartan.com',
      requirements: 'Formulario de responsabilidad firmado, equipo recomendado: guantes deportivos',
      participants: 500,
      raceTypes: ['Sprint', 'Super', 'Beast'],
      benefits: [
        'Medalla de finalista',
        'Camiseta conmemorativa',
        'Acceso al festival Spartan',
        'Fotos oficiales',
        'Posibilidad de clasificación al mundial'
      ]
    },
    {
      id: 6,
      title: 'Campeonato de Natación Infantil',
      date: '2025-10-10',
      time: '08:00 AM',
      location: 'Piscina Olímpica Nacional',
      description: 'Apoya a los jóvenes nadadores en su camino hacia la excelencia.',
      fullDescription: 'El Campeonato Nacional Infantil de Natación es el evento más importante del calendario acuático juvenil dominicano, reuniendo a las mayores promesas del país en categorías desde los 6 hasta los 17 años. Durante cuatro días de competencia, los jóvenes atletas demostrarán su técnica en las cuatro modalidades olímpicas (libre, espalda, pecho y mariposa) en distancias adaptadas a cada edad. El evento servirá como selectivo para los equipos nacionales que participarán en competencias internacionales. Incluirá clínicas técnicas con nadadores olímpicos, evaluación de biomecánica subacuática con tecnología de punta y charlas sobre nutrición deportiva especializada. Los récords establecidos serán reconocidos oficialmente por la federación nacional.',
      category: 'swimming',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: 'RD$200 (espectadores) - GRATIS (participantes registrados)',
      organizer: 'Federación Dominicana de Natación',
      website: 'www.fedonatacion.org',
      contact: 'infantil@fedonatacion.org',
      requirements: 'Certificado de nacimiento, registro mediante club afiliado',
      participants: 300,
      ageGroups: ['6-8 años', '9-11 años', '12-14 años', '15-17 años'],
      benefits: [
        'Certificado de participación',
        'Evaluación técnica profesional',
        'Posibilidad de selección nacional',
        'Clínicas con nadadores olímpicos',
        'Reconocimiento de récords'
      ]
    }
  ];

  const event = events.find(e => e.id === parseInt(eventId)) || events[0]; // Fallback al primer evento si no encuentra

  useEffect(() => {
    if (event) {
      const updateCountdown = () => {
        const eventDate = new Date(event.date);
        const now = new Date();
        const difference = eventDate - now;
        
        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          
          setCountdown({ days, hours, minutes });
        }
      };
      
      updateCountdown();
      const interval = setInterval(updateCountdown, 60000);
      return () => clearInterval(interval);
    }
  }, [event]);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'running':
        return 'from-red-900 to-red-700 border-red-600 text-red-400';
      case 'basketball':
        return 'from-orange-900 to-orange-700 border-orange-600 text-orange-400';
      case 'crossfit':
        return 'from-green-900 to-green-700 border-green-600 text-green-400';
      case 'triathlon':
        return 'from-blue-900 to-blue-700 border-blue-600 text-blue-400';
      case 'obstacle':
        return 'from-yellow-900 to-yellow-700 border-yellow-600 text-yellow-400';
      case 'swimming':
        return 'from-cyan-900 to-cyan-700 border-cyan-600 text-cyan-400';
      default:
        return 'from-gray-700 to-gray-900 border-gray-600 text-gray-400';
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href
      }).catch(console.error);
    } else {
      alert('Compartiendo evento: ' + event.title);
    }
  };

  if (!event) {
    return (
      <div className="p-8 text-center text-white bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Evento no encontrado</h2>
          <p className="text-gray-300 mb-6">El evento que estás buscando no existe o ha sido eliminado.</p>
          <button 
            onClick={() => window.history.back()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Volver a eventos
          </button>
        </div>
      </div>
    );
  }

  const categoryColors = getCategoryColor(event.category);
  const categoryColorClasses = categoryColors.split(' ');
  const textColor = categoryColorClasses[categoryColorClasses.length - 1];

  // Función para renderizar el contenido específico según el tipo de evento
  const renderEventSpecificContent = () => {
    if (event.distances) {
      return (
        <div className="bg-gray-800 rounded-xl p-6 backdrop-blur-sm bg-opacity-70 shadow-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
            Distancias Disponibles
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {event.distances.map((distance, index) => (
              <div 
                key={index} 
                className="bg-gray-700 hover:bg-gray-600 cursor-pointer text-center py-3 px-4 rounded-lg transition-colors"
              >
                <div className="text-white font-bold text-xl">{distance}</div>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (event.divisions) {
      return (
        <div className="bg-gray-800 rounded-xl p-6 backdrop-blur-sm bg-opacity-70 shadow-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            Divisiones
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {event.divisions.map((division, index) => (
              <div 
                key={index} 
                className="bg-gray-700 hover:bg-gray-600 cursor-pointer text-center py-3 px-4 rounded-lg transition-colors"
              >
                <div className="text-white font-medium">{division}</div>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (event.categories) {
      return (
        <div className="bg-gray-800 rounded-xl p-6 backdrop-blur-sm bg-opacity-70 shadow-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            Categorías
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {event.categories.map((category, index) => (
              <div 
                key={index} 
                className="bg-gray-700 hover:bg-gray-600 cursor-pointer text-center py-3 px-4 rounded-lg transition-colors"
              >
                <div className="text-white font-medium">{category}</div>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (event.raceTypes) {
      return (
        <div className="bg-gray-800 rounded-xl p-6 backdrop-blur-sm bg-opacity-70 shadow-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            Tipos de Carrera
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {event.raceTypes.map((type, index) => (
              <div 
                key={index} 
                className="bg-gray-700 hover:bg-gray-600 cursor-pointer text-center py-3 px-4 rounded-lg transition-colors"
              >
                <div className="text-white font-medium">{type}</div>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (event.ageGroups) {
      return (
        <div className="bg-gray-800 rounded-xl p-6 backdrop-blur-sm bg-opacity-70 shadow-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
            Grupos de Edad
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {event.ageGroups.map((group, index) => (
              <div 
                key={index} 
                className="bg-gray-700 hover:bg-gray-600 cursor-pointer text-center py-3 px-4 rounded-lg transition-colors"
              >
                <div className="text-white font-medium">{group}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen pb-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-60 h-60 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-indigo-800 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      {/* Hero section */}
      <div className="w-full h-80 md:h-96 relative overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${event.image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
        
        <div className="absolute top-4 left-4 z-10">
          <button 
            onClick={() => window.history.back()} 
            className="bg-gray-800/60 hover:bg-gray-800 backdrop-blur-sm text-white px-4 py-2 rounded-lg transition-colors flex items-center"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-1" />
            Volver
          </button>
        </div>
        
        <div className="absolute top-4 right-4 z-10 flex space-x-2">
          <button 
            onClick={() => setLiked(!liked)} 
            className={`${liked ? 'bg-red-600 text-white' : 'bg-gray-800/60 hover:bg-gray-800 text-white'} backdrop-blur-sm p-2 rounded-full transition-colors`}
          >
            <HeartIcon className="w-6 h-6" fill={liked ? 'currentColor' : 'none'} />
          </button>
          <button 
            onClick={handleShare} 
            className="bg-gray-800/60 hover:bg-gray-800 backdrop-blur-sm text-white p-2 rounded-full transition-colors"
          >
            <ShareIcon className="w-6 h-6" />
          </button>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${textColor} bg-gray-800 mb-4`}>
            {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{event.title}</h1>
          <p className="text-gray-300 text-lg max-w-3xl">{event.description}</p>
        </div>
      </div>
      
      {/* Content section */}
      <div className="max-w-6xl mx-auto px-4 relative z-10 -mt-6">
        {/* Quick info cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-800 rounded-xl p-4 backdrop-blur-sm bg-opacity-70 shadow-lg border border-gray-700">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-blue-900/50">
                <CalendarDaysIcon className="w-6 h-6 text-blue-400" />
              </div>
              <div className="ml-3">
                <div className="text-sm text-gray-400">Fecha y Hora</div>
                <div className="text-white font-medium">{formatDate(event.date)} | {event.time}</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 backdrop-blur-sm bg-opacity-70 shadow-lg border border-gray-700">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-green-900/50">
                <MapPinIcon className="w-6 h-6 text-green-400" />
              </div>
              <div className="ml-3">
                <div className="text-sm text-gray-400">Ubicación</div>
                <div className="text-white font-medium">{event.location}</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 backdrop-blur-sm bg-opacity-70 shadow-lg border border-gray-700">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-purple-900/50">
                <CurrencyDollarIcon className="w-6 h-6 text-purple-400" />
              </div>
              <div className="ml-3">
                <div className="text-sm text-gray-400">Precio</div>
                <div className="text-white font-medium">{event.price}</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 backdrop-blur-sm bg-opacity-70 shadow-lg border border-gray-700">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-yellow-900/50">
                <UserGroupIcon className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="ml-3">
                <div className="text-sm text-gray-400">Participantes</div>
                <div className="text-white font-medium">{event.participants.toLocaleString()} inscritos</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Countdown section */}
        <div className="mb-12">
          <div className="bg-gray-800 rounded-xl p-6 backdrop-blur-sm bg-opacity-70 shadow-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <ClockIcon className="w-5 h-5 mr-2 text-blue-400" />
              Cuenta Regresiva
            </h2>
            <div className="grid grid-cols-3 gap-2 md:gap-6">
              <div className="text-center bg-gray-900 rounded-lg p-3">
                <div className="text-3xl font-bold text-white">{countdown.days}</div>
                <div className="text-sm text-gray-400">Días</div>
              </div>
              <div className="text-center bg-gray-900 rounded-lg p-3">
                <div className="text-3xl font-bold text-white">{countdown.hours}</div>
                <div className="text-sm text-gray-400">Horas</div>
              </div>
              <div className="text-center bg-gray-900 rounded-lg p-3">
                <div className="text-3xl font-bold text-white">{countdown.minutes}</div>
                <div className="text-sm text-gray-400">Minutos</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-800 rounded-xl p-6 backdrop-blur-sm bg-opacity-70 shadow-lg border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Acerca del Evento
              </h2>
              <div className="text-gray-300 mb-4 leading-relaxed">
                <p className={showMore ? '' : 'line-clamp-3'}>
                  {event.fullDescription}
                </p>
              </div>
              <button 
                onClick={() => setShowMore(!showMore)} 
                className="text-blue-400 flex items-center text-sm"
              >
                {showMore ? 'Mostrar menos' : 'Leer más'}
                <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform ${showMore ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            {/* Event-specific content */}
            {renderEventSpecificContent()}
            
            <div className="bg-gray-800 rounded-xl p-6 backdrop-blur-sm bg-opacity-70 shadow-lg border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                </svg>
                Beneficios
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {event.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Right column */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-xl p-6 backdrop-blur-sm bg-opacity-70 shadow-lg border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                Organizador
              </h2>
              <div className="text-gray-300 mb-4">{event.organizer}</div>
              
              <div className="grid grid-cols-1 gap-4 mb-6">
                <a 
                  href={`https://${event.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition-colors"
                >
                  <GlobeAltIcon className="w-5 h-5 mr-2" />
                  Visitar Sitio Web
                </a>
                <a 
                  href={`mailto:${event.contact}`}
                  className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition-colors"
                >
                  <EnvelopeIcon className="w-5 h-5 mr-2" />
                  Contactar
                </a>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 backdrop-blur-sm bg-opacity-70 shadow-lg border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <ClipboardDocumentIcon className="w-5 h-5 mr-2 text-yellow-400" />
                Requisitos
              </h2>
              <div className="text-gray-300 mb-6">{event.requirements}</div>
            </div>
            
            <div className="sticky top-8">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg shadow-lg shadow-blue-900/30">
                Inscribirse Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;