import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer-1 bg-black bg-opacity-80 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4">
              <h5 className="text-xl font-bold mb-6">Features</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a className="border-b border-solid border-transparent hover:border-gray-700 text-gray-600 hover:text-white">
                    Cool stuff
                  </a>
                </li>
                <li className="mb-2">
                  <a className="border-b border-solid border-transparent hover:border-gray-700 text-gray-600 hover:text-white">
                    Random feature
                  </a>
                </li>
                <li className="mb-2">
                  <a className="border-b border-solid border-transparent hover:border-gray-700 text-gray-600 hover:text-white">
                    Team feature
                  </a>
                </li>
                <li className="mb-2">
                  <a className="border-b border-solid border-transparent hover:border-gray-700 text-gray-600 hover:text-white">
                    Stuff for developers
                  </a>
                </li>
                <li className="mb-2">
                  <a className="border-b border-solid border-transparent hover:border-gray-700 text-gray-600 hover:text-white">
                    Another one
                  </a>
                </li>
                <li className="mb-2">
                  <a className="border-b border-solid border-transparent hover:border-gray-700 text-gray-600 hover:text-white">
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 sm:mt-0">
              <h5 className="text-xl font-bold mb-6">Resources</h5>
              <ul className="list-none footer-links">w-1/6
                <li className="mb-2">
                  <a className="border-b border-solid border-transparent hover:border-gray-700 text-gray-600 hover:text-white">
                    Resource
                  </a>
                </li>
                <li className="mb-2">
                  <a className="border-b border-solid border-transparent hover:border-gray-700 text-gray-600 hover:text-white">
                    Resource name
                  </a>
                </li>
                <li className="mb-2">
                  <a className="border-b border-solid border-transparent hover:border-gray-700 text-gray-600 hover:text-white">
                    Another resource
                  </a>
                </li>
                <li className="mb-2">
                  <a className="border-b border-solid border-transparent hover:border-gray-700 text-gray-600 hover:text-white">
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">About</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a className="border-b border-solid border-transparent hover:border-gray-700 text-gray-600 hover:text-white">
                    Team
                  </a>
                </li>
                <li className="mb-2">
                  <a className="border-b border-solid border-transparent hover:border-gray-700 text-gray-600 hover:text-white">
                    Locations
                  </a>
                </li>
                <li className="mb-2">
                  <a className="border-b border-solid border-transparent hover:border-gray-700 text-gray-600 hover:text-white">
                    Privacy
                  </a>
                </li>
                <li className="mb-2">
                  <a className="border-b border-solid border-transparent hover:border-gray-700 text-gray-600 hover:text-white">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">Help</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a className="border-b border-solid border-transparent hover:border-gray-700 text-gray-600 hover:text-white">
                    Support
                  </a>
                </li>
                <li className="mb-2">
                  <a className="border-b border-solid border-transparent hover:border-gray-700 text-gray-600 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li className="mb-2">
                  <a className="border-b border-solid border-transparent hover:border-gray-700 text-gray-600 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
