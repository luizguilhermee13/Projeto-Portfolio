import { BackgroundPixelStars } from "@/components/ui/BackgroundPixelStars";
import Navbar from "./components/ui/Navbar";
import Introducao from "./components/ui/Introducao";
import CaixaDeFerramentas from "./components/ui/CaixaDeFerramentas";

export function App() {
  return (
    <div className="relative min-h-screen w-full bg-black bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAIElEQVR42mIUEhJiwAbevXuHVZyJgUQwqmEUDB0AEGAADd8DEPTX6ksAAAAASUVORK5CYII=')] bg-size-[10px] text-white">
      {/* O componente de estrelas atuará como background animado */}
      <BackgroundPixelStars />

      <header>
        <Navbar />
      </header>
      <main className="grid grid-cols-1">
        <Introducao />
        <CaixaDeFerramentas />
        {/* slide habilidades*/}
      </main>
    </div>
  );
}

export default App;
