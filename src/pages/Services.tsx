import { Shield, Clock, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Eventos Corporativos",
      description:
        "Transporte ejecutivo para conferencias, reuniones y eventos empresariales. Incluye WiFi, asientos cómodos y servicio profesional.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80",
    },
    {
      title: "Bodas y Celebraciones",
      description:
        "Limosinas de lujo para bodas y eventos especiales. Servicio premium con champagne y decoración personalizada.",
      image:
        "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80",
    },
    {
      title: "Turismo y Excursiones",
      description:
        "Autobuses confortables para viajes turísticos y excursiones grupales. Guías profesionales y rutas personalizadas.",
      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-muted text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-foreground-muted">
            Ofrecemos una amplia gama de servicios de transporte de lujo para
            todas tus necesidades
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-lg overflow-hidden"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-foreground-muted mb-4">
                  {service.description}
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary"
                >
                  Reservar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Seguridad Garantizada
              </h3>
              <p className="text-foreground-muted">
                Vehículos mantenidos regularmente y conductores profesionales
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Puntualidad</h3>
              <p className="text-foreground-muted">
                Siempre a tiempo, siempre confiable
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Servicio Premium</h3>
              <p className="text-foreground-muted">
                Experiencia de lujo en cada viaje
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Personal Calificado
              </h3>
              <p className="text-foreground-muted">
                Equipo profesional y cortés
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
