import { FaUsers, FaPhone } from 'react-icons/fa'; // Asegúrate de importar esto en la parte superior del archivo

interface Props {
  title: string;
  subTitle?: string;
}

export const CustomJumbotron = ({ title, subTitle }: Props) => {
  const defaultSubTitle =
    'En nuestra tienda online encontrarás casacas y prendas confeccionadas, Cada diseño está pensado para acompañarte en tu día a día con comodidad, resistencia y estilo.';

  const backgroundStyle = {
    // Reemplaza con la URL o ruta correcta de tu imagen
    backgroundImage: "url('/fondo.jpg')", 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };


  return (
    // Aplicamos el estilo y eliminamos la clase 'bg-muted/30'
<section
  className="py-32 px-4 lg:px-8 bg-gray-900 text-white" // Fondo oscuro y texto blanco
  style={backgroundStyle}
>
  <div className="container mx-auto text-center">
    <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6 font-extrabold">
      {title}
    </h1>
    <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
      {subTitle || defaultSubTitle}
    </p>

    {/* Contenedor de los botones */}
    <div className="flex justify-center space-x-4">
      {/* Botón Nosotros */}
      <button
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 flex items-center" // Agregamos 'flex items-center'
        onClick={() => console.log('Ir a Nosotros')} // Reemplaza con tu lógica de navegación
      >
        <FaUsers className="mr-2" /> {/* El icono y clase 'mr-2' para un poco de margen a la derecha */}
        Nosotros
      </button>

      {/* Botón Contactos */}
      <button
          className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 flex items-center"        onClick={() => console.log('Ir a Contactos')} // Reemplaza con tu lógica de navegación
      >
        <FaPhone className="mr-2" />
        Contactos
      </button>
    </div>
  </div>
</section>
  );
};
