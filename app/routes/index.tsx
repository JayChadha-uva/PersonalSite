import styles from "~/styles/gridStyles.css";
import profilePic from "~/images/IMG_0207.png";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white" id="page">
      <nav className=" px-2 py-2.5  fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="grid grid-cols-3">
          <div className="self-center text-xl font-semibold whitespace-nowrap dark:text-white my-3 ml-5">
            Jay Chadha
          </div>
          <div className="flex justify-center items-center" id="navbar-sticky">
            <ul className=" flex flex-row gap-x-5 text-md font-medium border-0  dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="text-white hover:bg-transparent text-blue-700 p-0 dark:text-white"
                  aria-current="page"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="hover:bg-transparent hover:text-blue-700 p-0 dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          <div></div>
        </div>
      </nav>
      <main>
        <div className="flex justify-around mt-20">
          <div></div>

          <div className="flex justify-center">
            <div className="flex-row max-w-xl">
              <h5 className="text-xl font-medium mb-2">About</h5>
              <div className="flex flex-row">
                <img
                  className="h-auto object-cover w-48 rounded-t-lg rounded rounded-l-lg"
                  src={profilePic}
                  alt=""
                />
                <div className="p-6 flex flex-col justify-start">
                  <p className="text-base mb-4">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className=" text-xs">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </main>
    </div>
  );
}
