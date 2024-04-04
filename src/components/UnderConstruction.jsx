import React from "react";
import { Icons } from "./Icons";
import { useTranslation } from "react-i18next";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
const UnderConstruction = () => {
  const Instagram = Icons["instagram"];
  const Twitter = Icons["twitter"];
  const Facebook = Icons["facebook"];
  const Linkedin = Icons["linkedin"];
  const Youtube = Icons["youtube"];
  const Globe = Icons["globe"];

  const { t, i18n } = useTranslation();

  const languages = ["ko", "en"];

  const [selected, setSelected] = useState("");
  const handleLangChange = (evt) => {
    const lang = evt;

    setSelected(lang);

    i18n.changeLanguage(evt);
  };

  return (
    <div className="items-center overflow-hidden absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-50   rounded-lg bg-white/20  w-fit  drop-shadow-lg text-center ">
      <div className=" px-6 ">
        <Listbox
          onChange={handleLangChange}
          className="flex justify-end pt-3 w-full"
        >
          <div className="relative mt-1 text-center ">
            <Listbox.Button className=" cursor-pointer relative   rounded-md border uppercase  border-white px-5 py-1  text-center shadow-md focus:outline-none focus-visible:border-cyan-500 sm:text-sm">
              {selected === "" ? <Globe size={20} /> : selected}

              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"></span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className=" uppercase absolute  top-full px-5 py-1 mt-1 max-h-60  overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {languages.map((lang, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      ` relative cursor-pointer select-none text-center ${
                        active ? " text-cyan-500" : "text-gray-500"
                      }`
                    }
                    value={lang}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {lang}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-cyan-500"></span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>

        <img
          src={"./logoWhite.svg"}
          className="w-[150px] m-auto  pb-10  pt-6"
        />

        <h2 className="text-white font-bold lg:text-4xl  text-2xl  tracking-wider ">
          {t("title")}
        </h2>
        <p className="pt-6 text-white font-bold lg:text-2xl text-lg tracking-wider">
          {t("subtitle")}
        </p>
        <p className="pt-10 text-white font-bold lg:text-md  text-sm break-words    ">
          {t("description1")} <br />
          {t("description2")}
        </p>
        <div className="flex justify-center items-center   gap-6  pt-3 ">
          <a href="https://www.instagram.com/truecandr/">
            <Instagram className="text-white hover:delay-300 hover:transition ease-in-out" />
          </a>
          <a href="https://twitter.com/truecandr">
            <Twitter className=" text-white hover:delay-300 hover:transition ease-in-out" />
          </a>
          <a href="https://www.facebook.com/candrofficial/">
            <Facebook className="text-white hover:delay-300 hover:transition ease-in-out" />
          </a>
          <a href="https://kr.linkedin.com/company/candr">
            <Linkedin className="text-white hover:delay-300 hover:transition ease-in-out" />
          </a>
          <a href="">
            <Youtube className="text-white hover:delay-300 hover:transition ease-in-out" />
          </a>
        </div>
        <div className="pt-10 pb-10 ">
          <iframe
            width={560}
            height={315}
            className="max-w-[90vw] rounded "
            src="https://www.youtube.com/embed/27hMNWcsa-Y?si=FmhoL_HwQIS7QJEM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
