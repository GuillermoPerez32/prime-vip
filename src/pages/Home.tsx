import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pt-16">
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-muted">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-foreground">
              <h1 className="text-5xl text-primary font-bold mb-4">
                Viaja con Estilo y Comodidad
              </h1>
              <p className="text-xl mb-8">
                Servicio premium de renta de autobuses y limosinas para
                cualquier ocasión
              </p>
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary inline-flex items-center"
              >
                Reserva Ahora
                <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-foreground text-3xl font-bold text-center mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">
                Eventos Corporativos
              </h3>
              <p className="text-foreground-muted mb-4">
                Transporte ejecutivo para conferencias, reuniones y eventos
                empresariales.
              </p>
              <Link
                to="/services"
                className="text-primary hover:text-primary-hover"
              >
                Saber más →
              </Link>
            </div>
            <div className="bg-card rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">
                Bodas y Celebraciones
              </h3>
              <p className="text-foreground-muted mb-4">
                Limosinas de lujo para hacer tu día especial aún más memorable.
              </p>
              <Link
                to="/services"
                className="text-primary hover:text-primary-hover"
              >
                Saber más →
              </Link>
            </div>
            <div className="bg-[color:var(--color-card)] rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Turismo</h3>
              <p className="text-[color:var(--color-foreground-muted)] mb-4">
                Excursiones y viajes turísticos con máxima comodidad.
              </p>
              <Link
                to="/services"
                className="text-primary hover:text-primary-hover"
              >
                Saber más →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[color:var(--color-card)] p-6 rounded-lg shadow">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-[color:var(--color-foreground-muted)] mb-4">
                "Excelente servicio para nuestro evento corporativo. El
                conductor fue muy profesional y puntual."
              </p>
              <p className="font-semibold">
                - María González, Directora de Eventos
              </p>
            </div>
            <div className="bg-[color:var(--color-card)] p-6 rounded-lg shadow">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-[color:var(--color-foreground-muted)] mb-4">
                "La limosina para nuestra boda fue perfecta. Todo el proceso de
                reserva fue muy sencillo."
              </p>
              <p className="font-semibold">- Carlos Ruiz, Cliente</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
