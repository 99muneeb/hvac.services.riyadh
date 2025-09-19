import React from "react";

const ServiceDetailsModul = ({ showModal, closeModal }) => {
  if (!showModal) return null;
  return (
    <>
      {showModal && (
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 md:max-h-full bg-gray-200 bg-opacity-5 "
        >
          <div className="relative w-full max-w-lg md:max-w-2xl max-h-full flex flex-col justify-center items-center ">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 !overflow-y-auto">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-black bg-transparent border border-solid hover:border-[#F2931D] hover:text-[#28A2C9] rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-[#28A2C9] dark:hover:text-white"
                data-modal-hide="authentication-modal"
                onClick={closeModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  Get A Quote
                </h3>
                <div className="flex items-center justify-center">
                  {/* <!-- Author: FormBold Team --> */}
                  <div className="mx-auto w-full max-w-[550px] bg-white">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsam maiores magni explicabo ipsum obcaecati dolores
                      sequi fuga rem ut fugiat illum quos enim ratione at,
                      dolore cum iusto eaque harum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceDetailsModul;
