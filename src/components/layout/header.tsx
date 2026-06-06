"use client";

import React, { useEffect, useRef, useState} from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Projets", href: "/projets" },
  { label: "À propos", href: "/about" },
];

function NavLink({
  item,
  onClick,
}: {
  item: NavItem;
  onClick?: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="text-xs font-medium hover:text-white transition"
    >
      {item.label}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

  // Ferme le menu si écran desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
    /* ---------------- GRAIN ---------------- */
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
  
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
  
      const resize = () => {
        canvas.width = canvas.offsetWidth * window.devicePixelRatio;
        canvas.height = canvas.offsetHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      };
  
      const draw = () => {
        const w = canvas.offsetWidth;
        const h = canvas.offsetHeight;
  
        const imageData = ctx.createImageData(w, h);
        const data = imageData.data;
  
        for (let i = 0; i < data.length; i += 4) {
          const v = Math.random() * 255;
          data[i] = v;
          data[i + 1] = v;
          data[i + 2] = v;
          data[i + 3] = Math.random() * 28;
        }
  
        ctx.putImageData(imageData, 0, 0);
      };
  
      resize();
      draw();
  
      let frame = 0;
  
      const animate = () => {
        frame++;
        if (frame % 3 === 0) draw();
        requestAnimationFrame(animate);
      };
  
      animate();
  
      window.addEventListener("resize", () => {
        resize();
        draw();
      });
    }, []);

  return (
    <header className="top-0 z-50 backdrop-blur">
      <div className="relative z-20 flex items-center justify-between px-10 pt-7">
        
              {/* GRAIN */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10 opacity-50" />

      {/* BLOBS */}
      <div className="absolute -right-40 -top-60 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(93,202,165,0.07),transparent_70%)]" />
      <div className="absolute -bottom-24 -left-20 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(127,119,221,0.06),transparent_70%)]" />


        {/* Logo */}
        <Link
          href="/"
          className="text-[18px] font-extrabold tracking-tight"
        >
          Gabriel Christe
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-8 uppercase tracking-widest text-white/50 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/signin"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:opacity-80"
          >
            Contact ↗
          </Link>
        </div>

        {/* Mobile button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6 text-black" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-black" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                onClick={closeMenu}
              />
            ))}

            <Link
              href="/signin"
              onClick={closeMenu}
              className="mt-2 rounded-lg bg-black px-4 py-2 text-center text-sm text-white"
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}