export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80",
      title: "Limosina Ejecutiva"
    },
    {
      url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80",
      title: "Autobús de Lujo"
    },
    {
      url: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80",
      title: "Minibús Ejecutivo"
    },
    {
      url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80",
      title: "Interior Limosina"
    },
    {
      url: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80",
      title: "Exterior Detalle"
    },
    {
      url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80",
      title: "Servicio VIP"
    }
  ]

  return (
    <div className="pt-16">
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Galería</h1>
          <p className="text-xl text-gray-300">
            Explora nuestra colección de vehículos y servicios de lujo
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <div 
                className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${image.url})` }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}