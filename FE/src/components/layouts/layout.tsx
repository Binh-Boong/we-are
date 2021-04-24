import Link from "next/link";

import * as PathPage from "constants/path-page";

import layoutCss from "./layout.module.css";
import { WeLogo } from "components/images/we-logo";

export const Layout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="relative min-h-screen font-Source-Sans-Pro">
      {/* <div className="we-are-menu">
        <Link href={PathPage.PAGE_HOME}>
          <div className="h-20 cursor-pointer w-28">
            <WeLogo />
          </div>
        </Link>
      </div> */}
      
      <div className={`relative flex w-full ${layoutCss.pageBody}`}>
        {children}
      </div>
      <div className="fixed bottom-0 z-40 w-full">
        <div className="relative z-30 flex items-end justify-center w-11/12 h-0 p-4 mx-auto lg:w-9/12">
          <div 
            className="absolute h-12 bg-white rounded-md bottom-2 left-4 right-4 md:left-20 md:right-20"
            style={{ backgroundColor: "#6790a3" }}
          >

          </div>
          <div className="flex">
            <Link href={PathPage.PAGE_EVENT}>
              {/* <p className="font-semibold text-green-600 cursor-pointer regular-24 hover:text-green-400">Teams</p> */}
              <div className="w-16 h-16 transform rounded-full cursor-pointer hover:scale-110">
                <img src="/page/we_event.png" alt="we event" />
              </div>
            </Link>
          </div>
          <div className="flex mx-4">
            <Link href={PathPage.PAGE_HOME}>
              <div 
                className="flex items-center justify-center px-4 transform border-0 cursor-pointer hover:scale-110"
              >
                <div className="transform rounded-full cursor-pointer w-28 h-28 hover:scale-110">
                  <img src="/page/we_are.png" alt="we event" />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex">
            <Link href={PathPage.PAGE_WIKI}>
              {/* <p className="font-semibold text-green-600 cursor-pointer regular-24 hover:text-green-400">wiki</p> */}
              <div className="w-16 h-16 transform rounded-full cursor-pointer hover:scale-110">
                <img src="/page/we_wiki.png" alt="we wiki" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
