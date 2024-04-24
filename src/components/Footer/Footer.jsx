const Footer = () => {
  return (
    <div className="bg-teal-200 pt-10 pb-10">
      <div className="py-4 pt-10 px-36 max-w-screen-xl mx-auto">
        <div className="">
          <a
            className=" font-bold w-fit px-4 py-1 rounded-xl bg-teal-500 text-slate-50 hover:scale-105 transiton-all duration-200 mb-10 block font-mono  border-2 border-slate-500 "
            href=""
          >
            <span className="">C</span>ONSULTING
          </a>
          <div>
            <div className="flex justify-between gap-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d682.4673516291286!2d121.10564911317951!3d14.62080471169573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339787bebb6e9e97%3A0x980e304868e6f304!2zTWFyaWtpbmEtSW5mYW50YSBId3ksIDE4MDAsINCk0LjQu9C40L_Qv9C40L3Riw!5e0!3m2!1sru!2sua!4v1713968547015!5m2!1sru!2sua"
                width="600"
                height="450"
                allowFullScreen=""
                className="rounded-lg border-2 border-slate-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div>
                <h2 className="text-4xl text-slate-600 font-mono pb-10">
                  Contact:
                </h2>
                <ul>
                  <li>
                    <p className="text-2xl text-slate-600 font-mono pb-2">
                      Address:
                    </p>
                    <p className="text-md pb-4">
                      Lansangang Marikina-Infanta, Marikina, 1800 Kalakhang
                      Maynila
                    </p>
                  </li>
                  <li className="">
                    <p className="text-2xl text-slate-600 font-mono pb-2">
                      Phone:
                    </p>
                    <a href="tel: +639178761111" className="text-md pb-4">
                      +63 917 876 1111
                    </a>
                  </li>
                  <li>
                    <p className="text-2xl text-slate-600 font-mono pb-2">
                      Email:
                    </p>
                    <p className="text-md pb-4">fitnessgym@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center items-center mt-4 gap-4 text-black underline text-lg">
              <a
                href="https://on-tech.tech/whites/1/privacy.html"
                target="_blank"
              >
                Privacy Policy
              </a>
              <a
                href="https://on-tech.tech/whites/1/terms.html"
                target="_blank"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
