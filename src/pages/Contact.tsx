import { useState } from "react";
import { Phone, Mail, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "corporate",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-6">Contáctanos</h1>
            <p className="text-foreground-muted mb-8">
              Estamos aquí para ayudarte a planificar tu viaje perfecto.
              Completa el formulario o contáctanos directamente a través de los
              siguientes medios.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Teléfono</h3>
                  <p className="text-foreground-muted">+53 56713029</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-foreground-muted">
                    luisguillermo.rodriguez32@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground-muted mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground-muted mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground-muted mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground-muted mb-2">
                  Tipo de Servicio
                </label>
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="corporate">Eventos Corporativos</option>
                  <option value="wedding">Bodas</option>
                  <option value="tourism">Turismo</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground-muted mb-2">
                  Mensaje
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-foreground py-3 rounded-lg hover:bg-primary flex items-center justify-center space-x-2"
              >
                <span>Enviar Mensaje</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
