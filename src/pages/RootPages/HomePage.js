import React from "react";
import { Link } from "react-router-dom";
import Features from "../../components/HomePageComps/Features";
import Testimonials from "../../components/HomePageComps/Testimonials";
import CaregivingFam from "../../components/assets/images/CaregivingFamily.jpeg";

function HomePage() {
  return (
    <React.Fragment>
      <div>
        <div className="bg-white">
          {/* Header section */}
          <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                <div className="relative z-10 lg:py-16">
                  <div className="relative h-64 sm:h-80 lg:h-full">
                    <img
                      alt="House"
                      src={CaregivingFam}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="relative flex items-center bg-gray-100">
                  <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                  <div className="p-8 sm:p-16 lg:p-24">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                      Streamlining Senior Care with our Advanced Management
                      System
                    </h2>

                    <p className="mt-4 text-gray-600">
                      Deliver personalized care plans, track progress, and
                      analyze health data to enhance resident outcomes. Our
                      patient management system empowers your senior care
                      facility with advanced analytics, enabling you to make
                      data-driven decisions, optimize care plans, and ensure the
                      highest quality of life for your residents.
                    </p>

                    <div className="flex space-x-4">
                      <div>
                        <Link
                          to="/login"
                          className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                        >
                          Log In
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/demo"
                          className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                        >
                          Request Demo
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <div>
       
        <Features />
      </div>
      <div>additional features section</div>
      <div>
        
        <Testimonials />
      </div>
      <div>final word</div>
      <div>footer</div> */}
      </div>
    </React.Fragment>
  );
}

export default HomePage;
