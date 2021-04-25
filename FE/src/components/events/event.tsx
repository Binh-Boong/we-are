import { TextAnimation } from "components/events/text-animation";

export const Event = (): JSX.Element => {
  return (
    <div 
      className="w-full"
      style={{ marginBottom: 144 }}
    >
      <div className="flex items-center justify-center w-full py-6">
        <TextAnimation
          texts={["Event", "WeAre"]}
          dot="_"
        />
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-10/12 lg:w-9/12 xl:w-8/12">
          <div className="flex flex-wrap items-center justify-between py-4 mx-6 md:flex-nowrap md:mx-0">
            <div className="h-auto max-w-full">
              <img src="/event/travel.svg" alt="we go travel" />
            </div>
            <div className="text-right">
              <p className="text-3xl font-medium">Travel</p>
              <p>You wanna chill with us tonight.</p>
              <p>
                <code>
                  &quot;Nếu mà mệt quá, giữa thành phố sống chồng lên nhau.
                </code>
              </p>
              <p>
                <code>
                  Cùng lắm thì mình <strong>chốt lịch</strong>, 
                  mình <strong>dọn đồ</strong> và cùng đi <strong>chill.&quot;</strong>.
                </code>
              </p>
              <p><i>→ Mr.Đen Râu ←</i></p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between py-4 mx-6 md:flex-nowrap md:mx-0">
            <div className="text-left">
              <p className="text-3xl font-medium">
                Beer & Alcohol 
              </p>
              <p>Remove all sadness and pressure and help you share your feelings.</p>
              <p>
                <code>
                  &quot;When you win you deserve a drink. When you failed, you really need it.&quot;
                </code>
              </p>
              <p><i>→ Mr.Napoleon Bonaparte ←</i></p>
            </div>
            <div className="h-auto max-w-full">
              <img src="/event/drink.svg" alt="we go drink" />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between py-4 mx-6 md:flex-nowrap md:mx-0">
            <div className="h-auto max-w-full">
              <img src="/event/eat.svg" alt="we go travel" />
            </div>
            <div className="text-right">
              <p className="text-3xl font-medium">Eat 💗</p>
              <p>What is for dinner?</p>
              <p>With whom to eat tonight?</p>
              <p>
                <code>
                  Do you know &quot;Chân gà nướng!&quot;
                </code>
              </p>
              <p>
                <code>
                  &quot;Enemies kill each other with bullets. Don&apos;t kill you by fasting with food and drinks...&quot;
                </code>
              </p>
              <p><i>→ Mr.Cut The Wind ←</i></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
