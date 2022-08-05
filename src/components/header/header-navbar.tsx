const HeaderNavbar = () => {
  return (
    <>
      <a href="/">
        <button className="hover:bg-green-900 hover:border-b-2 h-10 px-7 ">
          PARTIDAS
        </button>
      </a>
      <a href="/standings">
        <button className="hover:bg-green-900 hover:border-b-2 h-10 px-6 ">
          CLASSIFICAÇÃO
        </button>
      </a>
      <a href="/stats">
        <button className="hover:bg-green-900 h-10 hover:border-b-2 px-6 ">
          ESTATÍSTICAS
        </button>
      </a>
      <a href="/athletes-board">
        <button className="hover:bg-green-900 hover:border-b-2 h-10 px-7 ">
          JOGADORES
        </button>
      </a>
    </>
  );
};

export default HeaderNavbar;
