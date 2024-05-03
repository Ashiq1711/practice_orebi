import React, { useEffect, useState } from "react";
import Flex from "./Flex";
import Container from "./Container";
import { Link, NavLink } from "react-router-dom";
import Image from "./Image";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";
function Navbar() {
  const items = [
    {
      labe: "Home",
      link: "/",
    },
    {
      labe: "Shop",
      link: "/shop",
    },
    {
      labe: "About",
      link: "/about",
    },
    {
      labe: "Contact",
      link: "/contact",
    },
    {
      labe: "Jurnal",
      link: "/jurnal",
    },
  ];
  const langauge = ["EN", "RU"];
  const [menu, setMenu] = useState(false);

  return (
    <nav className="lg:px-0 px-3 py-8 relative z-50">
      <Container>
        <Flex className=" justify-between">
          <section className="flex gap-4">
            <Image src="Logo.png" alt="logo" />
          </section>
          <div className=" md:flex gap-10 hidden md:block">
                {items.map((d, i) => (
                  <NavLink key={i} className=" font-bold text-color-2 hover:text-color-1" to={d.link}>
                    {d.labe}
                  </NavLink>
                ))}
              </div>
          {/* side mobile menu */}
          <div
            className={clsx(
              " fixed h-full w-screen md:hidden bg-black/50 backdrop-blur-sm top-0 right-0 translate-x-full transition-all ",
              menu && " -translate-x-0 "
            )}
          >
            <section className=" text-black bg-white  absolute w-56  right-0 top-0 h-screen p-8 gap-8 z-50 flex">
              <IoMdClose
                onClick={() => setMenu(false)}
                className=" text-2xl absolute cursor-pointer  mt-0 top-8 right-3"
              />
              <div className="flex-col flex mt-8 gap-6">
                {items.map((d, i) => (
                  <NavLink key={i} className=" font-bold text-color-2 hover:text-color-1 " to={d.link}>
                    {d.labe}
                  </NavLink>
                ))}
              </div>
            </section>
            
          </div>
          <section className=" flex items-center gap-4">
            {langauge.map((item) => (
              <Link className="hidden md:block hover:font-bold">{item}</Link>
            ))}
            <HiMenu
              onClick={() => setMenu(true)}
              className=" text-2xl cursor-pointer md:hidden"
            />
          </section>
        </Flex>
      </Container>
    </nav>
  );
}

export default Navbar;
