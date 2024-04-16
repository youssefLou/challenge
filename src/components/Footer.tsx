function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className=" w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <ul className=" text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <li className="py-4">
            <a href="/privacy" className="  hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li className="py-4">
            <a href="/terms" className="hover:underline me-4 md:me-6">
              Terms
            </a>
          </li>
          <li className="py-4">
            <a href="/" className="hover:underline me-4 md:me-6">
              Home
            </a>
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
  );
}

export default Footer;
