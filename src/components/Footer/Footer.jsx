import { useState } from "react";
import Brand from "../Navbar/Brand";
import { Send } from "lucide-react";

const columns = [
  ["Company", ["About Us", "Careers", "Blog"]],
  ["Services", ["Go", "Go XL", "Go Comfort"]],
  ["Support", ["Help Center", "Safety", "FAQs"]],
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const submit = (event) => {
    event.preventDefault();
    setEmail("");
  };

  return (
    <footer id="about" className="px-4 py-4">
      {/* Container styled to match Navbar card size, border, background, and shadow */}
      <div className="mx-auto max-w-[1180px] rounded-3xl border border-slate-100 bg-white px-6 py-10 shadow-[12px_0_24px_-8px_rgba(0,0,0,0.08),-12px_0_24px_-8px_rgba(0,0,0,0.08)] max-[720px]:px-[18px]">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr_1.3fr] gap-7 max-[900px]:grid-cols-2">
          <div>
            <a href="#home">
              <Brand />
            </a>
            <p className="mt-2.5 max-w-[220px] text-[13px] text-[#726E85]">
              Making every journey safe, comfortable and convenient for millions
              of people.
            </p>
          </div>

          {columns.map(([title, items]) => (
            <div key={title}>
              <h3 className="mb-4 text-[13.5px] font-bold">{title}</h3>
              <ul className="space-y-2.5 text-[13px] text-[#726E85]">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <div id="help">
            <h3 className="mb-4 text-[13.5px] font-bold">
              Subscribe to Newsletter
            </h3>
            <p className="text-[13px] text-[#726E85]">
              Get the latest updates and offers straight to your inbox.
            </p>
            <form
              onSubmit={submit}
              className="mt-3.5 flex gap-1.5 rounded-xl border border-slate-100 p-1.5"
            >
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                required
                placeholder="Enter your email"
                aria-label="Email address"
                className="min-w-0 flex-1 px-2.5 text-xs outline-none"
              />
              <button
                aria-label="Subscribe"
                className="flex h-8 w-9 items-center justify-center rounded-lg bg-[#7C4DFF] text-white transition-opacity hover:opacity-90"
              >
                <Send size={15} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-9 border-t border-slate-100 pt-5 text-center text-[12.5px] text-[#726E85]">
          © 2024 RideGo. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
