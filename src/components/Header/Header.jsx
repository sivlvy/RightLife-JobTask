import Logo from './Logo/Logo';
import NavBar from './NavBar/NavBar';

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-300  shadow-slate-400 shadow-lg shadow-teal-200">
      <div className=" py-4 px-36 max-w-screen-xl mx-auto flex justify-between">
        <Logo />
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
