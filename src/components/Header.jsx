import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-4 px-8 flex flex-col gap-2 md:flex-row items-center justify-center glass sticky top-0 left-0">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-500">
        <Link to="/">
          B
          <span className="text-black text-3xl md:text-5xl lg:text-6xl italic">
            4
          </span>
          Blog
        </Link>
      </h1>
    </header>
  );
};

export default Header;
