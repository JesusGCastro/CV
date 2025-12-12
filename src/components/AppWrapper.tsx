import { ReactNode } from "react";

interface AppWrapperProps {
  children: ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Efecto de fondo animado global */}
      <div className="pointer-events-none fixed inset-0 opacity-20">
        <div className="absolute top-20 left-20 h-72 w-72 animate-pulse rounded-full bg-blue-500 mix-blend-multiply blur-xl filter"></div>
        <div className="absolute right-20 bottom-20 h-72 w-72 animate-pulse rounded-full bg-purple-500 mix-blend-multiply blur-xl filter"></div>
        <div
          className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-indigo-500 mix-blend-multiply blur-xl filter"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Contenido de tu app */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
