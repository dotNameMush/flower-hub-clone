import "@styles/navigation.less";
const Header = () => {
  return (
    <div id="navigation" className="relative">
      <section id="flowerNav" className="z-10 hidden w-full lg:fixed lg:block">
        <div className="nav-container z-10 flex w-full flex-row items-center justify-between px-16 py-2">
          <aside className="relative">
            <a href="/">
              <img
                src="/flower-hub-clone/logo.png"
                alt="Logo"
                className="w-full max-w-[216px]"
              />
            </a>
          </aside>
          <nav id="nav-hub">
            <ul className="nav z-10 flex h-full flex-row items-center gap-6 py-2.5 pl-6 pr-2.5">
              <a href="https://www.flower.se/hub/elavtal/">
                <li>Elavtal </li>
              </a>
              <a href="https://www.flower.se/hub/fragor-och-svar/">
                <li>Frågor och svar </li>
              </a>
              <a href="https://www.flower.se/hub/kontakta-oss/">
                <li>Kontakta oss </li>
              </a>

              <div className="flex flex-row items-center gap-4 pr-2">
                <a href="https://portal.flowerhub.se/" target="">
                  <button className="nav-btn-light">Logga in</button>
                </a>
                <a
                  href="https://www.flower.se/hub/kom-igang-med-flower-hub/"
                  target=""
                >
                  <button className="nav-btn-dark">Skaffa Flower Hub</button>
                </a>
              </div>
            </ul>
          </nav>
        </div>
      </section>
      <section
        id="flowerNavMobile"
        className="fixed z-50 flex w-full flex-row items-center justify-between px-3 pt-12 lg:hidden"
      >
        <div className="relative">
          <a href="https://www.flower.se/hub">
            <img
              id="nav-logo-m"
              src="https://www.flower.se/wp-content/themes/flowertech/img/flowerhub_logo.png"
              className="max-w-[200px]"
              alt="Flowertech"
            />
          </a>
        </div>
        <button className="btn-dark">Menu</button>
        <div className="mobile-menu bg-white">
          <div className="flex flex-row items-start justify-between">
            <a href="https://www.flower.se/hub">
              <img
                src="https://www.flower.se/wp-content/themes/flowertech/img/logo_round.png"
                className="max-w-[80px]"
                alt="Flowertech"
              />
            </a>
            <button id="closeHamburger" className="btn-dark">
              Close menu
            </button>
          </div>

          <nav className="flex h-full flex-col justify-between pb-32 pt-12">
            <ul className="flex flex-col gap-4">
              <a href="https://www.flower.se/hub/elavtal/">
                <li className="body">Elavtal </li>
              </a>
              <a href="https://www.flower.se/hub/fragor-och-svar/">
                <li className="body">Frågor och svar </li>
              </a>
              <a href="https://www.flower.se/hub/kontakta-oss/">
                <li className="body">Kontakta oss </li>
              </a>
            </ul>
            <div className="flex flex-col gap-2 pr-2">
              <a href="https://portal.flowerhub.se/" target="">
                <button className="nav-btn-light">Logga in</button>
              </a>
              <a
                href="https://www.flower.se/hub/kom-igang-med-flower-hub/"
                target=""
              >
                <button className="nav-btn-dark">Skaffa Flower Hub</button>
              </a>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Header;
