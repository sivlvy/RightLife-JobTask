import css from './hero.module.css';

const Hero = () => {
  return (
    <div className="">
      <div className={css.bg_image}>
        <div className="py-4 px-36 max-w-screen-xl mx-auto">
          <h1 className="text-white  uppercase text-5xl mt-32 pb-10 tracking-tight font-mono font-semibold">
            Your success is our mission
          </h1>
          <h2 className="text-white text-4xl font-semibold font-mono tracking-tight">
            Innovative solutions for your business!
          </h2>
          <div className="mt-20 ">
            <a
              rel="noreferrer"
              href="https://t.me/right_life_anatoliy"
              className="px-4 w-fit rounded-xl text-slate-600 bg-teal-100 hover:bg-teal-500 hover:text-slate-200 transition-all duration-300 hover:scale-105 py-2 text-2xl font-bold font-mono block   border-2 border-teal-500 hover:border-teal-400"
              target="_blank"
            >
              Sign up for a consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
