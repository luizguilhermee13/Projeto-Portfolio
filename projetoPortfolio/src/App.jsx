import { BackgroundPixelStars } from "@/components/ui/BackgroundPixelStars";
import Navbar from "./components/ui/Navbar";

export function App() {
  return (
    <div className="relative min-h-screen w-full bg-black bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAIElEQVR42mIUEhJiwAbevXuHVZyJgUQwqmEUDB0AEGAADd8DEPTX6ksAAAAASUVORK5CYII=')] bg-size-[10px] text-white">
      {/* O componente de estrelas atuará como background animado */}
      <BackgroundPixelStars />

      <header>
        <Navbar />
      </header>
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        <h1 className="text-4xl font-bold tracking-wider mb-4">Meu Portfólio</h1>
        <p className="text-gray-400">Migrando para React + Vite 🚀</p>
      </main>
    </div>
  );
}

export default App;
