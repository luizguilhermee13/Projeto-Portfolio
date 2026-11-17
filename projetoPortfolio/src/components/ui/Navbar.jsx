import Button from "./Button";

function Navbar() {
  return (
    <div className="bg-[#090A10] w-full h-24 bg-clip-content opacity-100 grid grid-cols-2 m-0">
      {/*nome / função*/}
      <div className="flex items-center gap-12 px-8">
        <h1 className="text-[#F2F3FA] w-45.25 h-7.5 text-2xl font-semibold font-[inter]">
          Luiz Delila <span className="text-[#A6ADFF] text-3xl font-semibold font-[inter]">.</span>
        </h1>
        <span className="text-[#A1A4B6] w-34.75 h-3.5 text-[12px]  font-mono">DESENVOLVEDOR FRONT-END</span>
      </div>
      {/*topicos / contato*/}
      <div className="flex items-center justify-around px-8 gap-26">
        <ol className="flex items-center justify-around px-30 gap-8 text-[#A1A4B6] w-13.75 h-4.25 text-sm font-sans font-normal">
          <li className="cursor-pointer">Projetos</li>
          <li className="cursor-pointer">Sobre</li>
          <li className="cursor-pointer">Roadmap</li>
        </ol>
        <Button>Vamos Conversar</Button>
      </div>
    </div>
  );
}

export default Navbar;
