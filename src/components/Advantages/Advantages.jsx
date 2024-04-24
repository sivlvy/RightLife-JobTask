import css from './advantages.module.css';

const Advantages = () => {
  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-300 ">
      <div className="py-4 pt-10 px-36 max-w-screen-xl mx-auto">
        <h2 className="w-64 bg-teal-100  h-24 border-2 border-teal-700 rounded-2xl shadow-md flex items-center justify-center mx-auto mb-10 text-center text-slate-600  cursor-pointer font-bold text-4xl font-mono">
          Advantages
        </h2>
        <ul className="flex flex-wrap justify-between gap-y-4 gap-x-2">
          <li className={css.item}>
            <h3 className="text-center font-bold pb-2 py-2 text-lg">
              Expertise
            </h3>
            <p>
              Our team consists of industry experts with extensive knowledge and
              experience.
            </p>
          </li>
          <li className={css.item}>
            <h3 className="text-center font-bold pb-2 py-2 text-lg">
              Tailored Solutions
            </h3>
            <p>
              We provide customized solutions that address the unique challenges
              and goals of each client.
            </p>
          </li>
          <li className={css.item}>
            <h3 className="text-center font-bold pb-2 py-2 text-lg">
              Client Satisfaction
            </h3>
            <p>
              Client satisfaction is our top priority, and we are committed to
              delivering results that exceed expectations.
            </p>
          </li>
          <li className={css.item}>
            <h3 className="text-center font-bold pb-2 py-2 text-lg">
              Innovative Approaches
            </h3>
            <p>
              We utilize innovative approaches and cutting-edge technologies to
              solve complex business problems.
            </p>
          </li>
          <li className={css.item}>
            <h3 className="text-center font-bold pb-2 py-2 text-lg">
              Collaborative Partnerships
            </h3>
            <p>
              We believe in building long-term, collaborative partnerships with
              our clients to drive sustainable growth and success.
            </p>
          </li>
          <li className={css.item}>
            <h3 className="text-center font-bold pb-2 py-2 text-lg">
              Continuous Support
            </h3>
            <p>
              We offer continuous support and guidance throughout the consulting
              process to ensure our clients achieve their objectives.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Advantages;
