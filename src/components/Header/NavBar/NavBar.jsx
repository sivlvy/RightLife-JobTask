import css from './navbar.module.css';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between gap-8">
      <a className={css.item} href="">
        Blog
      </a>
      <a className={css.item} href="">
        Contacts
      </a>
      <a className={css.item} href="">
        FAQ
      </a>
      <a className={css.item} href="">
        About us
      </a>
      <a className={css.item} href="tel:+621278864581">
        Call: +62 127 886 4581
      </a>
    </nav>
  );
};

export default NavBar;
