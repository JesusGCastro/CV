import AppWrapper from "./components/AppWrapper";
import { Hero } from "./components/Hero";
import { TechStack } from "./components/TechStack";

function App() {
  return (
    <AppWrapper>
      <Hero />
      <TechStack />
      {/* Aquí van todas tus demás secciones */}
      {/* <Proyectos /> */}
      {/* <Contacto /> */}
    </AppWrapper>
  );
}

export default App;
