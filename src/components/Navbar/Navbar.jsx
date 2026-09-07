import { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe2, Menu, X, Check } from "lucide-react";
import Brand from "./Brand";

const links = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Safety", "#safety"],
  ["About Us", "#about"],
  ["Help", "#help"],
];

const languages = [
  { code: "EN", name: "English" },
  { code: "ES", name: "Español" },
  { code: "FR", name: "Français" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const langDropdownRef = useRef(null);

  // Close language dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target)
      ) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 py-4 relative">
      {/* Outer navbar container */}
      <div className="mx-auto flex max-w-[1180px] items-center justify-between rounded-3xl bg-white px-6 py-3 border border-slate-100 shadow-[12px_0_24px_-8px_rgba(0,0,0,0.08),-12px_0_24px_-8px_rgba(0,0,0,0.08)] max-[720px]:px-[18px]">
        <a href="#home" aria-label="RideGo home">
          <Brand />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 text-[14.5px] font-medium min-[901px]:flex">
          {links.map(([label, href], index) => (
            <a
              key={label}
              href={href}
              className={`${
                index === 0
                  ? "opacity-100 after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:rounded after:bg-[#7C4DFF]"
                  : "opacity-70"
              } relative pb-1 transition-opacity hover:opacity-100`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-[18px]">
          {/* Language Selector Dropdown Container */}
          <div
            className="relative hidden min-[641px]:block"
            ref={langDropdownRef}
          >
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium opacity-80 transition-all hover:bg-slate-100 hover:opacity-100 focus:outline-none"
              aria-expanded={langOpen}
              aria-haspopup="true"
            >
              <Globe2 size={16} aria-hidden="true" />
              <span>{selectedLang.code}</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>

            {/* Language Menu */}
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-36 rounded-2xl border border-slate-100 bg-white py-1.5 shadow-xl">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      setSelectedLang(lang);
                      setLangOpen(false);
                    }}
                    className="flex w-full items-center justify-between px-4 py-2 text-left text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#7C4DFF]"
                  >
                    <span>{lang.name}</span>
                    {selectedLang.code === lang.code && (
                      <Check size={14} className="text-[#7C4DFF]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 3D Styled Login / Sign Up Button */}
          <a
            href="#home"
            className="relative hidden min-[641px]:inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#9B6BFF] via-[#6934E0] to-[#3F1A9E] border-b-[3.5px] border-[#2A1070] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_16px_-2px_rgba(63,26,158,0.45)] transition-all duration-150 ease-out hover:brightness-110 hover:-translate-y-[1px] hover:shadow-[0_10px_20px_-2px_rgba(63,26,158,0.5)] active:translate-y-[2px] active:border-b-0 active:mt-[3.5px] active:shadow-[0_2px_4px_rgba(63,26,158,0.3)]"
          >
            {/* Glossy top highlight matching the pin's highlight gradient */}
            <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-white/45 to-transparent" />

            {/* Button Content */}
            <span className="relative z-10">Login / Sign Up</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="text-2xl min-[901px]:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {open && (
        <nav className="absolute left-4 right-4 top-full mt-2 grid gap-3 rounded-2xl bg-white p-4 shadow-xl border border-slate-100 min-[901px]:hidden max-[720px]:left-[18px] max-[720px]:right-[18px]">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium transition-colors hover:text-[#7C4DFF]"
            >
              {label}
            </a>
          ))}
          <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-sm font-medium text-slate-600">
            <span className="flex items-center gap-2">
              <Globe2 size={16} /> Language
            </span>
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setSelectedLang(lang)}
                  className={`px-2 py-1 text-xs rounded-md ${
                    selectedLang.code === lang.code
                      ? "bg-[#7C4DFF] text-white"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {lang.code}
                </button>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
