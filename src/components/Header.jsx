import { useRef, useState, useEffect } from "react";

const Header = () => {
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0px ";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "60px 0px ";
      }
    });
  }, []);
  // eslint-disable-next-line no-unused-vars
  const [links, setLinks] = useState(["Features", "Teams", "SignIn"]);
  return (
    <header
      ref={headerRef}
      className="pt-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-300"
    >
      <div className="container  flex justify-between items-center gap-[30px] flex-col sm:flex-row">
        <a className="logo" href="/">
          <img src="/images/logo.svg" />
        </a>

        <nav>
          <ul className="nav-links flex gap-x-4 ">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase}`}
                  className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
