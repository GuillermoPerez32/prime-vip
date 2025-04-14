import { Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function Fleet() {
  const vehicles = [
    {
      name: "Limosina Ejecutiva",
      image:
        "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80",
      capacity: "6-8 pasajeros",
      features: [
        "Bar integrado",
        "Sistema de sonido premium",
        "Iluminación LED",
        "TV LCD",
      ],
      ideal: "Bodas, eventos especiales",
    },
    {
      name: "Autobús de Lujo",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80",
      capacity: "30-35 pasajeros",
      features: ["WiFi", "Baño", "Aire acondicionado", "Asientos reclinables"],
      ideal: "Viajes largos, excursiones",
    },
    {
      name: "Minibús Ejecutivo",
      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80",
      capacity: "15-20 pasajeros",
      features: [
        "WiFi",
        "Aire acondicionado",
        "Sistema de audio",
        "Portaequipajes",
      ],
      ideal: "Eventos corporativos, transfers",
    },
  ];

  return (
    <div className="pt-16">
      <div
        className="bg-gray-900 text-white py-16 bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <h1 className="text-4xl font-bold mb-4">Nuestra Flota</h1>
          <p className="text-xl text-foreground-muted">
            Descubre nuestra exclusiva selección de vehículos de lujo
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-lg overflow-hidden"
            >
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${vehicle.image})` }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{vehicle.name}</h3>

                <div className="flex items-center space-x-2 mb-4">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-foreground-muted">
                    {vehicle.capacity}
                  </span>
                </div>

                <h4 className="font-semibold mb-2">Características:</h4>
                <div className="text-foreground-muted mb-4 space-y-2">
                  {vehicle.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-2 pb-2 ml-2"
                    >
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-2 text-primary mb-4">
                  <Calendar className="h-5 w-5" />
                  <span>Ideal para: {vehicle.ideal}</span>
                </div>

                <Link
                  to="/contact"
                  className="inline-block w-full bg-primary text-white text-center px-6 py-2 rounded-lg hover:bg-primary transition-colors"
                >
                  Reservar Ahora
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
