export function TechStack() {
  const technologies = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Arduino",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
    },
  ];

  return (
    <section className="bg-transparent py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Título simple */}
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-2xl font-semibold text-gray-300">
            Tecnologías y Herramientas
          </h2>
          <p className="text-sm text-gray-500">Stack con el que trabajo</p>
        </div>

        {/* Iconos en línea horizontal */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-2"
              title={tech.name}
            >
              {/* Icono simple con hover sutil */}
              <div className="h-12 w-12 rounded-lg border border-white/10 bg-white/5 p-2 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-white/20 hover:bg-white/10 md:h-14 md:w-14">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-full w-full object-contain opacity-80 transition-opacity group-hover:opacity-100"
                />
              </div>

              {/* Nombre solo visible al hacer hover */}
              <span className="text-xs text-gray-500 opacity-0 transition-opacity group-hover:opacity-100">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
