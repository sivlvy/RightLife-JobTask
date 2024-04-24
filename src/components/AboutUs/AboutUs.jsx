import css from './aboutus.module.css';

const AboutUs = () => {
  return (
    <div className="bg-teal-100 border-b-4 border-t-4 shadow-md pt-10 pb-10">
      <div className="py-4 pt-10 px-36 max-w-screen-xl mx-auto">
        <h2 className="w-64 bg-teal-600  h-24 border-2 border-teal-700 rounded-2xl shadow-md flex items-center justify-center mx-auto mb-10 text-center text-white  cursor-pointer font-bold text-4xl font-mono">
          About us
        </h2>
        <ul className="flex justify-between gap-y-4 gap-x-2">
          <li className={css.item}>
            At XYZ Consulting, we are committed to helping businesses achieve
            their goals and unlock their full potential. With a team of
            experienced professionals and innovative solutions, we provide
            strategic guidance and practical support to clients across various
            industries.
          </li>
          <li className={css.item}>
            Our approach is tailored to meet the unique needs of each client,
            ensuring that our recommendations are relevant, effective, and
            sustainable. Whether you are a small startup or a large corporation,
            we are dedicated to delivering results that exceed your
            expectations.
          </li>
          <li className={css.item}>
            With a focus on collaboration, integrity, and excellence, we strive
            to build long-term partnerships with our clients and become trusted
            advisors in their journey towards success. Contact us today to learn
            more about how we can help your business thrive.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
