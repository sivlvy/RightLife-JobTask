import React, { useState, useRef, useEffect } from 'react';
import IntlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [errorCode, setErrorCode] = useState('');
  const [showModal, setShowModal] = useState(false);
  const phoneInputRef = useRef(null);

  useEffect(() => {
    const input = phoneInputRef.current;
    const iti = IntlTelInput(input, {
      initialCountry: 'de',
      preferredCountries: ['ua', 'us', 'gb'],
      utilsScript: '/intl-tel-input/js/utils.js?1713364227752',
    });

    iti.setNumber(number);
    setIsValid(iti.isValidNumber());
    setErrorCode(iti.getValidationError());

    input.addEventListener('blur', () => {
      setNumber(iti.getNumber());
      setIsValid(iti.isValidNumber());
      setErrorCode(iti.getValidationError());
    });
  }, [number]);

  const handleSubmit = e => {
    e.preventDefault();
    // Тут ви можете обробити дані форми
    console.log({ name, email, number, isValid, errorCode });
    // Очищення інпутів після відправки форми
    setName('');
    setEmail('');
    setNumber('');
    setShowModal(true); // Показати модальне вікно після відправки форми
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-300 pb-10">
      <div className="py-4 pt-10 px-36 max-w-screen-xl mx-auto">
        <h2 className="w-96 bg-teal-100 h-24 border-2 border-teal-700 rounded-2xl shadow-md flex items-center justify-center mx-auto mb-10 text-center text-slate-600 cursor-pointer font-bold text-4xl font-mono">
          Application form
        </h2>
        <form className="rounded-md shadow-md border-2 border-slate-600 bg-teal-200 max-w-fit px-36 py-16 mx-auto">
          <div className="flex items-center justify-center mb-10">
            <div className="relative">
              <input
                id="username"
                name="username"
                type="text"
                required={true}
                className="w-80 bg-white rounded-xl px-2 border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <label
                htmlFor="username"
                className="absolute left-2 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
              >
                Name
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center mb-10">
            <div className="relative">
              <input
                id="email"
                required={true}
                name="email"
                type="email"
                className="w-80 bg-white rounded-xl px-2 border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <label
                htmlFor="email"
                className="absolute left-2 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
              >
                Email
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="">
              <input
                ref={phoneInputRef}
                type="tel"
                className="w-80 bg-white rounded-xl px-2 border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                value={number}
                onChange={e => setNumber(e.target.value)}
              />
            </div>
          </div>
          <button
            className="px-16 rounded-xl text-slate-600 bg-teal-100 hover:bg-teal-500 hover:text-slate-200 transition-all duration-300 hover:scale-105 py-2 text-2xl font-bold font-mono block mx-auto mt-10 border-2 border-teal-500 hover:border-teal-400"
            onClick={handleSubmit}
          >
            Send
          </button>
        </form>
      </div>
      {showModal && (
        <div>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="fixed z-10 inset-0 overflow-y-auto ">
            <div className="flex items-center justify-center min-h-screen">
              <div className="bg-white rounded-lg px-8 py-6 shadow-lg">
                <h2 className="text-2xl font-bold mb-4">
                  Form submitted successfully!
                </h2>
                <p>Thank you for your submission.</p>
                <button
                  className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
