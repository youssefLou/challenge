import { Link, Outlet } from "react-router-dom";

function Footer() {
  return (
    <>
      <Outlet />
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className=" w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <ul className=" text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <li className="py-4">
              <Link to="/privacy" className="  hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li className="py-4">
              <Link to="/terms" className="hover:underline me-4 md:me-6">
                Terms
              </Link>
            </li>
            <li className="py-4">
              <Link to="/" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
          </ul>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="" className="hover:underline">
              The 7-Day Challenge
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
