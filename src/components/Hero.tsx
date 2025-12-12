import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Columna Izquierda - Información */}
          <div className="space-y-6 text-white">
            <div className="flex items-center gap-2 text-blue-400">
              <MapPin size={18} />
              <span className="text-sm">Ciudad Obregón, Sonora, MX</span>
            </div>

            <div>
              <h1 className="mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                Jesús Rene
              </h1>
              <h1 className="mb-4 text-5xl font-bold md:text-6xl">
                González Castro
              </h1>
              <div className="h-1 w-24 rounded bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>

            <p className="text-2xl font-medium text-blue-300">
              Ingeniero en Software
            </p>

            <p className="text-lg leading-relaxed text-gray-300">
              Desarrollador Full Stack especializado en crear soluciones
              innovadoras con{" "}
              <span className="font-semibold text-blue-400">React</span>,
              <span className="font-semibold text-green-400"> Node.js</span> y
              <span className="font-semibold text-yellow-400"> Firebase</span>.
              Experiencia en sistemas embebidos con ESP32.
            </p>

            {/* Botones de acción */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contacto"
                className="group relative rounded-lg bg-blue-600 px-6 py-3 font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-blue-500/50"
              >
                Contactarme
              </a>
              <a
                href="#proyectos"
                className="group relative rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
              >
                Ver Proyectos
              </a>
              <button className="rounded-lg border border-white/20 bg-white/10 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
                <Download size={20} />
              </button>
            </div>

            {/* Redes sociales */}
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="rounded-lg bg-white/10 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="rounded-lg bg-white/10 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="rounded-lg bg-white/10 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Columna Derecha - Imagen */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Anillo decorativo animado */}
              <div className="animate-spin-slow absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 blur-lg"></div>

              {/* Imagen de perfil */}
              <div className="relative rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-1">
                <img
                  className="h-64 w-64 rounded-full border-4 border-gray-900 object-cover md:h-80 md:w-80"
                  src="yo.jfif"
                  alt="Jesús Rene González Castro"
                />
              </div>

              {/* Badge flotante */}
              <div className="absolute -right-4 -bottom-4 rounded-full bg-white px-6 py-3 font-semibold text-gray-900 shadow-xl">
                <span className="text-blue-600">●</span> Disponible
              </div>
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30">
            <div className="mt-2 h-3 w-1 rounded-full bg-white/50"></div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `,
        }}
      />
    </section>
  );
}
