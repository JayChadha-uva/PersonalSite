export default function Index() {
    return (
      
  <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div className="grid grid-cols-3">
    <div className="self-center text-xl font-semibold whitespace-nowrap dark:text-white my-3 ml-5">Jay Chadha</div>
    <div className="flex justify-center items-center" id="navbar-sticky">
    <ul className=" flex flex-row gap-x-5 text-md font-medium border-0 bg-white dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="/" className="hover:bg-transparent hover:text-blue-700 p-0 dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="/portfolio" className="text-white hover:bg-transparent text-blue-700 p-0 dark:text-white" aria-current="page">Portfolio</a>
        </li>
        <li>
          <a href="/contact" className="hover:bg-transparent hover:text-blue-700 p-0 dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700">Contact</a>
        </li>
      </ul>
      </div>  
    </div>
    <div></div>
  </nav>
  
    );
  }
  