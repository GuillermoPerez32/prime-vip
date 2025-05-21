import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PrimeVIP</h3>
            <p className="text-gray-400">
              Servicio premium de transporte para todas tus necesidades.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <Link
                to="/services"
                className="block text-gray-400 hover:text-white"
              >
                Servicios
              </Link>
              <Link
                to="/fleet"
                className="block text-gray-400 hover:text-white"
              >
                Flota
              </Link>
              <Link
                to="/contact"
                className="block text-gray-400 hover:text-white"
              >
                Contacto
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-400">
              <p>+5356713029</p>
              <p>luisguillermo.rodriguez32@gmail.com</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} PrimeVIP. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
