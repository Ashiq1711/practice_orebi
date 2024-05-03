import React, { useRef, useState } from "react";
import Flex from "./Flex";
import Container from "./Container";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { lovelyPopUp } from "react-lovely-popup";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import Image from "./Image";
import { IoMdClose } from "react-icons/io";
function Header() {
  const categoryItems = [
    "Accesories",
    "Furniture",
    "Electronics",
    "Clothes",
    "Bags",
    "Home appliances",
  ];
  let [open, setOpen] = useState(false);
  let [opencart, setOpencart] = useState(false);
  let btn = useRef();
  let toggle = useRef();
  let handle_modal = () => {
    setOpen(!open);
  };
  let handle_modal2 = () => {
    setOpencart(!opencart);
  };
  lovelyPopUp({
    clickRef: btn,
    toggleRef: toggle,
    callBack: (e) => {
      setOpen(e);
     
    },
  });
  lovelyPopUp({
    clickRef: btn,
    toggleRef: toggle,
    callBack: (e) => {
      setOpencart(e);
    },
  });
  return (
    <header className="px-3 lg:px-0 relative z-30 bg-[#979797] py-3">
      <Container>
        <Flex className=" justify-between">
          <div>
            <Flex className='cursor-pointer' dref={btn} onClick={handle_modal}>
              <HiOutlineMenuAlt2  />
              <p className="ml-2 hidden md:block">Shop by Category</p>
            </Flex>
            <div ref={toggle}>
              {open && (
                <div className=" absolute w-[263px] shadow-2xl z-50">
                  {categoryItems.map((item) => (
                    <Link className="block w-full px-5 py-4 bg-black text-white border-b hover:pl-[30px] duration-300">
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className=" relative mx-4 w-[600px] border rounded-md">
            <input
              className=" w-full h-[40px] md:h-[50px] pl-4"
              type="text"
              placeholder="Search Products"
            />
            <FaSearch className=" absolute top-3 md:top-4 right-3 " />
          </div>

          <Flex className="gap-5 justify-between">
            <Flex>
              <FaUser />
              <IoMdArrowDropdown />
              {/* <IoMdArrowDropup /> */}
            </Flex>
            <div className="relative">
              <div dref={btn} onClick={handle_modal2} >

              <FaShoppingCart />
              </div>
              <div ref={toggle}>
                {opencart && (
                  <div className="bg-white absolute top-7 right-0 w-[360px] ">
                    <Flex className="p-5 justify-between bg-[#979797]">
                      <Image src="public/Rectangle.png" alt="product" />
                      <p className=" font-bold">
                        Black Smart Watch
                        <br />
                        $44.00
                      </p>
                      <IoMdClose onClick={()=>setOpencart(!opencart)} className=" p-1 bg-color-1 text-white text-[35px] rounded-full hover:bg-color-2 hover:text-white"  />
                    </Flex>
                    <p className=" font-semibold p-5">Subtotal: $44.00</p>
                    <Flex className="p-5 justify-between">
                      <button className="px-10 py-4 bg-black text-white hover:bg-white hover:border border hover:text-black hover:font-semibold ">
                        View Cart
                      </button>
                      <button className="px-10 py-4 bg-black text-white  hover:bg-white hover:border border hover:text-black hover:font-semibold">
                        Checkout
                      </button>
                    </Flex>
                  </div>
                )}
              </div>
            </div>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
}

export default Header;
