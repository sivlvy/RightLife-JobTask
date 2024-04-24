import Avatar from '@mui/material/Avatar';

const Reviews = () => {
  return (
    <div className="bg-teal-100 pt-10 pb-10">
      <div className="py-4 pt-10 px-36 max-w-screen-xl mx-auto">
        <h2 className="w-64 bg-teal-600  h-24 border-2 border-teal-700 rounded-2xl shadow-md flex items-center justify-center mx-auto mb-10 text-center text-white  cursor-pointer font-bold text-4xl font-mono">
          Reviews
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <li className=" cursor-pointer hover:scale-105 transition-all duration-200 bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-x-2 pb-4">
              <Avatar alt="Jeremy" src="../images/avatar.jpg" />
              <h3 className="text-xl font-semibold mb-2 font-mono pt-2 text-slate-700">
                John Doe
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              "I was impressed by the professionalism and expertise of the XYZ
              Consulting team. They provided valuable insights and practical
              solutions that helped our business grow."
            </p>
          </li>
          <li className=" cursor-pointer hover:scale-105 transition-all duration-200 bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-x-2 pb-4">
              <Avatar alt="Jane Smith" src="../images/avatar.jpg" />
              <h3 className="text-xl font-semibold mb-2 font-mono pt-2 text-slate-700">
                Jane Smith
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              "Working with XYZ Consulting was a great experience. Their
              collaborative approach and attention to detail made the consulting
              process smooth and effective."
            </p>
          </li>
          <li className=" cursor-pointer hover:scale-105 transition-all duration-200 bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-x-2 pb-4">
              <Avatar alt="David Johnson" src="../images/avatar.jpg" />
              <h3 className="text-xl font-semibold mb-2 font-mono pt-2 text-slate-700">
                David Johnson
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              "XYZ Consulting exceeded our expectations in every way. Their
              dedication to our success and innovative solutions truly set them
              apart."
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
