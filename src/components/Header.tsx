import React from "react";
import Button from "./Button";
import clsx from "clsx";

const MENU_TABS = ["home", "product", "contact", "price"];

const Header = () => {
  const [activeTab, setActiveTab] = React.useState("home");
  const [openedMenu, setOpenedMenu] = React.useState(false);
  return (
    <header className="bg-[#141415] flex items-center justify-between md:justify-evenly p-3.5">
      <div className="hidden md:flex items-center">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-[138px] mr-8 cursor-pointer"
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
      <div className="md:hidden">
        <svg
          width="24"
          height="19"
          viewBox="0 0 24 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setOpenedMenu(!openedMenu)}
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
                  "text-neutral-200 uppercase cursor-pointer px-5 py-2 rounded-[100px] mb-2 text-center",
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
