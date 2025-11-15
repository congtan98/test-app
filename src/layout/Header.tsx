import React, { useEffect } from "react";
import Button from "../components/Button";
import clsx from "clsx";

const MENU_TABS = ["home", "product", "contact", "price"];

const Header = () => {
  const [activeTab, setActiveTab] = React.useState("home");
  const [openedMenu, setOpenedMenu] = React.useState(false);

  useEffect(() => {
    if (openedMenu) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openedMenu]);

  return (
    <header className="bg-[#141415] flex items-center justify-between md:justify-evenly p-3 md:p-5">
      <div className="hidden md:flex items-center">
        <img
          src="/images/logo.png"
          alt="logo"
          className="mr-8 cursor-pointer h-10"
         
        />
        {MENU_TABS.map((menu) => {
          return (
            <span
              className={clsx(
                "text-neutral-200 uppercase cursor-pointer px-5 py-2 rounded-[100px]",
                activeTab === menu ? "text-primary bg-secondary-600" : ""
              )}
              onClick={() => setActiveTab(menu)}
            >
              {menu}
            </span>
          );
        })}
      </div>
      <div className="md:hidden flex items-center gap-2">
        {openedMenu ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setOpenedMenu(false)}
          >
            <path
              d="M3.0606 2.93937C2.47481 3.52516 2.47481 4.4749 3.0606 5.06069L17.9098 19.9099C18.4956 20.4957 19.4454 20.4957 20.0312 19.9099C20.6169 19.3241 20.6169 18.3744 20.0312 17.7886L5.18192 2.93937C4.59613 2.35358 3.64639 2.35358 3.0606 2.93937Z"
              fill="white"
              fill-opacity="0.8"
            />
            <path
              d="M3.0606 20.0605C2.47481 19.4747 2.47481 18.5249 3.0606 17.9392L17.9098 3.08991C18.4956 2.50413 19.4454 2.50413 20.0312 3.08991C20.6169 3.6757 20.6169 4.62545 20.0312 5.21123L5.18192 20.0605C4.59613 20.6463 3.64639 20.6463 3.0606 20.0605Z"
              fill="white"
              fill-opacity="0.8"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="19"
            viewBox="0 0 24 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setOpenedMenu(true)}
          >
            <rect
              width="24"
              height="3"
              rx="1.5"
              fill="white"
              fill-opacity="0.8"
            />
            <rect
              y="8"
              width="24"
              height="3"
              rx="1.5"
              fill="white"
              fill-opacity="0.8"
            />
            <rect
              y="16"
              width="16"
              height="3"
              rx="1.5"
              fill="white"
              fill-opacity="0.8"
            />
          </svg>
        )}

        <img src="/images/logo-single.png" alt="Logo" />
      </div>
      <div className="flex items-center gap-2">
        <Button label="sign up" />
        <Button label="log in" color="secondary" />
        <div className="hidden md:flex items-center gap-1 cursor-pointer pl-2">
          <span className="text-neutral font-medium">ENG</span>
          <svg
            width="8"
            height="4"
            viewBox="0 0 8 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-9.78783e-05 6.54906e-06H7.85771L3.92881 3.92891L-9.78783e-05 6.54906e-06Z"
              fill="#F0F0F0"
            />
          </svg>
        </div>
      </div>

      {openedMenu && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-secondary-800 p-5 z-50 h-full animate-menu">
          {MENU_TABS.map((menu) => {
            return (
              <div
                className={clsx(
                  "text-neutral-200 uppercase cursor-pointer px-5 py-2 rounded-[100px] mb-2 text-center text-[14px]",
                  activeTab === menu ? "text-primary bg-secondary-600" : ""
                )}
                onClick={() => {
                  setActiveTab(menu);
                  setOpenedMenu(false);
                }}
              >
                {menu}
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
