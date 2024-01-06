import React from "react";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      link: "Home",
    },
    {
      path: "/",
      link: "About",
    },
    {
      path: "/",
      link: "Contact US",
    },
  ];
  return (
    <>
      <header className="bg-black text-white py-4 px-4 ">
        <div className="container ">
          <div className="row">
            <div className="col-2">
              <nav className="">
                <a href="/" className="text-xl font-bold text-red">
                  Logo
                </a>
              </nav>
            </div>
            <div className="col-6">
              <div>
                <ul className="flex items-center gap-3 justify-center">
                  {navItems.map((item) => {
                    return (
                      <>
                        <li>
                          <a
                            href=""
                            className="hover:text-pink-500 hover:border-b-2 text-white"
                          >
                            {item.link}
                          </a>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-4 flex justify-end">
              <div>
                <ul className="flex gap-3">
                  <li>
                    <a
                      href=""
                      className="bg-green-500 py-2 px-4 rounded transition-all hover:bg-red-400 hover:transition-all transition duration-300 ease-in-out "
                    >
                      Login
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="bg-cyan-400 py-2 px-4 rounded transition-all hover:bg-red-400 hover:transition-all transition duration-300 ease-in-out "
                    >
                      Sign up
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
