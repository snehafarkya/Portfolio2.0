import React from "react";

export default function Newexp() {
  return (
    <section>
      <div className=" text-white md:py-8 pt-8 pb-0">
        <div className="container mx-auto flex flex-col items-start md:flex-row gap-4 md:gap-0 md:my-12 mb-0  md:mb-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-6">
            <p className=" text-yellow-300 uppercase tracking-loose">
              Experience
            </p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
              Working Since 2021
            </p>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Nurturing Growth and Learning - My Journey of Gaining Professional
              Experience Since Freshman Year in College
            </p>
            <a href="/work" rel="noopener noreferrer">
              <button
                className="btn-prim w-fit"
                style={{ background: "transparent", width: "fit-content" }}
              >
                Explore Now
              </button>
            </a>
          </div>

          <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div class="container mx-auto w-full h-full">
              <div class="relative wrap overflow-hidden md:p-10 p-4 h-full">
                <div
                  class="border-2-2 border-yellow-555 absolute h-full border hidden md:flex"
                  style={{
                    right: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  class="border-2-2 border-yellow-555 absolute h-full border hidden md:flex"
                  style={{
                    left: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                <div class="mb-8 flex justify-between  flex-row-reverse items-center w-full right-timeline">
                  <div class="order-1 md:flex hidden w-5/12"></div>
                  <div class="order-1  md:w-5/12 px-4 rounded-lg bg-gray-800 py-4 text-right expcard">
                    <p class="mb-3 text-base text-yellow-300">
                      August 2023 - Present
                    </p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl">QORUZ</h4>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      As a Frontend developer, I aim to enhance user experiences
                      and bring innovative designs to life. Collaborating with a
                      team of talented professionals to create a seamless
                      interface.
                    </p>
                  </div>
                </div>

                <div class="mb-8 flex justify-between items-center w-full left-timeline">
                  <div class="order-1 md:flex hidden w-5/12"></div>
                  <div class="order-1 md:w-5/12 px-4 rounded-lg bg-gray-800  py-4 text-left expcard">
                    <p class="mb-3 text-base text-yellow-300">
                      June 2023-July 2023
                    </p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl">
                      Freelance
                    </h4>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      As a freelancer, I have worked closely with the client to
                      deliver satisfactory development. Got my hands on
                      Storybook component.
                    </p>
                  </div>
                </div>

                <div class="mb-8 flex justify-between flex-row-reverse  items-center w-full right-timeline">
                  <div class="order-1 md:flex hidden w-5/12"></div>
                  <div class="order-1  md:w-5/12 px-4 rounded-lg bg-gray-800  py-4 text-right expcard">
                    <p class="mb-3 text-base text-yellow-300">
                      March 2023-April 2023
                    </p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl">
                      GoSchedule
                    </h4>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Worked remotely with the founder and senior developer in
                      Angular js. Made dashboard component and developed the
                      onboarding calendly like scheduler.
                    </p>
                  </div>
                </div>
                <div class="mb-8 flex justify-between items-center w-full left-timeline">
                  <div class="order-1 md:flex hidden w-5/12"></div>
                  <div class="order-1 md:w-5/12 px-4 rounded-lg bg-gray-800  py-4 text-left expcard">
                    <p class="mb-3 text-base text-yellow-300">
                      {" "}
                      August 2022-November 2022
                    </p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl">
                      Economize
                    </h4>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      At Economize, I wrote technical blogs and developed my
                      inter personal skills. I worked closely with co-founder
                      and built strong time management skills
                    </p>
                  </div>
                </div>

                <div class="mb-8 flex justify-between flex-row-reverse  items-center w-full right-timeline">
                  <div class="order-1 md:flex hidden w-5/12"></div>

                  <div class="order-1 md:w-5/12 px-4 rounded-lg bg-gray-800  py-4 text-right expcard">
                    <p class="mb-3 text-base text-yellow-300">
                      November 2021-February 2022
                    </p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl ">
                      The Bug Community
                    </h4>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      TBC taught me how to deal and negotiate with clients. I
                      worked on strict deadlines, wrote content for clients,
                      made videos for clients.
                    </p>
                  </div>
                </div>

                <div class="mb-8 flex justify-between  items-center w-full left-timeline">
                  <div class="order-1 md:flex hidden w-5/12"></div>
                  <div class="order-1  md:w-5/12 px-4 rounded-lg bg-gray-800  py-4 text-left expcard">
                    <p class="mb-3 text-base text-yellow-300">
                      {" "}
                      August 2021-August 2022
                    </p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl">
                      Medi-Caps University ACM Student Chapter
                    </h4>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      I was the Executive member of content team in (MU-ACM). I
                      got my hands on new experiences. I wrote descriptive
                      emails, whatsapp invitation messages and event invitations
                      etc.
                    </p>
                  </div>
                </div>
              </div>
              <img
                class="mx-auto md:-mt-20  md:flex hidden animate-bounce"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
