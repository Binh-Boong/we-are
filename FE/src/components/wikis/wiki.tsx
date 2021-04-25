import { TextAnimation } from "components/events/text-animation";

export const Wiki = (): JSX.Element => {
  return (
    <div 
      className="w-full"
      style={{ marginBottom: 144 }}
    >
      <div className="flex items-center justify-center w-full py-6">
        <TextAnimation
          texts={["Wiki ", "About"]}
          dot="_"
        />
      </div>
      <div className="flex justify-center">
        <div className="w-full p-6 lg:p-4 md:w-10/12 lg:w-9/12 xl:w-8/12">
          <div className="w-full text-xl">
            <p className="py-2 mb-4 text-3xl text-gray-800 border-0 border-b border-gray-300 border-solid">
              # WE ARE?
              <a 
                href="https://vi.wikipedia.org/wiki/Th%E1%BA%A3o_lu%E1%BA%ADn_Th%C3%A0nh_vi%C3%AAn:Kothenao2012" 
                target="_blank"
                className="ml-10 text-blue-800" rel="noreferrer"
              >
                (wiki page)
              </a>
            </p>
            <p><strong>A few questions.</strong></p>
            <ul className="ml-8 list-disc">
              <li>Who are we?</li>
              <li>What do we need?</li>
              <li>What Have We Got?</li>
            </ul>
            <p className="mt-4"><strong>The answers.</strong></p>
            <ul className="ml-8 list-disc">
              <li>We are the ones who need fun and sharing.</li>
              <li>We need to forget about stressful moments in work and society.</li>
              <li>We all have a common need. Why not become a group.</li>
            </ul>
            <p className="py-2 mt-6 mb-4 text-3xl text-gray-800 border-0 border-b border-gray-300 border-solid">
              # Some activities.
            </p>
            <ul className="ml-8 list-disc">
              <li>Travel.</li>
              <li>Beer & Alcohol.</li>
              <li>Eat.</li>
            </ul>
            <p className="py-2 mt-6 mb-4 text-3xl text-gray-800 border-0 border-b border-gray-300 border-solid">
              # How to vote.
            </p>
            <ul className="ml-8 list-disc">
              <li>Go to <a className="text-blue-800" target="_blank" href="https://justyousaid.com/" rel="noreferrer">Vote Page</a></li>
              <li>Enter your name <i className="text-xs">OR</i> login with account art.</li>
              <li>Start choosing votes.</li>
              <li><i>In the new feature we update login with google account.</i></li>
            </ul>
            <p className="py-2 mt-6 mb-4 text-3xl text-gray-800 border-0 border-b border-gray-300 border-solid">
              # Join us now.
            </p>
            <p className="inline-block p-4 m-4 text-red-500 border border-red-500 border-solid rounded-lg select-none">
              So sorry. Function not supported online.
            </p>
            <p className="text-2xl text-gray-800">* But. You can join us by taking the following steps. *</p>
            <ul className="ml-8 list-decimal list-inside">
              <li>Clean hygiene.</li>
              <li>Dressed beautifully.</li>
              <li>Get into bed.</li>
              <li>Good night!</li>
            </ul>
            <p className="py-2 mt-6 mb-4 text-3xl text-gray-800 border-0 border-b border-gray-300 border-solid">
              # Development.
            </p>
            <p><i>Developed by our team - <strong>&apos;WE TEAM&apos;</strong>.</i></p>
            <p><i>In the near future, we will develop a page to share knowledge or questions about technology for members.</i></p>
            <p><code>Improve code every day</code></p>
            
            <p className="mt-8"># License source</p>
            <p className="">----</p>
            <p className="">MIT</p>


            <p className="mt-6">**Thanks and best regards**</p>
          </div>
        </div>
      </div>
    </div>
  );
};
