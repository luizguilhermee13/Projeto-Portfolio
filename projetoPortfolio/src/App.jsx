import { BackgroundPixelStars } from "@/components/ui/BackgroundPixelStars";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Introducao from "@/components/sections/Introducao";
import CaixaDeFerramentas from "@/components/sections/CaixaDeFerramentas";
import ProjetosFeitos from "@/components/sections/ProjetosFeitos";
import SectionSobre from "@/components/sections/SectionSobre";
import SectionProcesso from "@/components/sections/SectionProcesso";

export function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-page bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAIElEQVR42mIUEhJiwAbevXuHVZyJgUQwqmEUDB0AEGAADd8DEPTX6ksAAAAASUVORK5CYII=')] bg-size-[10px] text-ink">
      <BackgroundPixelStars />

      <header className="relative z-20">
        <Navbar />
      </header>

      <main className="relative z-10">
        <Introducao />
        <CaixaDeFerramentas />
        <ProjetosFeitos />
        <SectionSobre />
        <SectionProcesso />
      </main>

      <Footer />
    </div>
  );
}

export default App;
