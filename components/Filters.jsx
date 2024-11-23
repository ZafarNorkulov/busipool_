import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { SlMagnifier } from "react-icons/sl";

const Filters = ({
  cityName,
  cities,
  setSelectedCity,
  activeSearch,
  search,
  setSearch,
}) => {
  return (
    <div className="max-container mb-[30px] flex flex-col justify-between gap-[20px] md:flex-row md:items-center">
      <div className="flex flex-row gap-[10px] md:gap-[30px] xl:flex-row xl:gap-[30px]">
        <Menu
          as="div"
          className="relative inline-block max-w-[200px] text-left"
        >
          <div>
            <MenuButton className="inline-flex md:w-[200px] w-[180px] justify-center gap-x-1.5 rounded-[5px] bg-white py-2 pl-4 pr-2 text-xs font-bold text-gray-light shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 md:py-[15px] md:pl-[30px] md:pr-[22px] md:text-base">
              <span className="block w-[90%] text-start text-sm md:text-sm">
                По популярности
              </span>

              <div className="w-[10%]">
                {" "}
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 h-3 w-3 text-gray-light md:h-5 md:w-5"
                />
              </div>
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in md:w-52"
          >
            <div className="py-1">
              <MenuItem>
                <p className="block px-2 py-1 text-[8px] text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 md:px-4 md:py-2 md:text-sm">
                  Lorem, ipsum.
                </p>
              </MenuItem>
              <MenuItem>
                <p className="block px-2 py-1 text-[8px] text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 md:px-4 md:py-2 md:text-sm">
                  Lorem, ipsum.
                </p>
              </MenuItem>
              <MenuItem>
                <p className="block px-2 py-1 text-[8px] text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 md:px-4 md:py-2 md:text-sm">
                  Lorem, ipsum.
                </p>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
        <Menu
          as="div"
          className="relative inline-block max-w-[150px] text-left"
        >
          <div>
            <MenuButton className="flex md:w-[130px] w-[100px] justify-center gap-x-1.5 rounded-[5px] bg-white py-2 pl-4 pr-2 text-[10px] font-bold text-gray-light shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 md:py-[15px] md:pl-[30px] md:pr-[22px] md:text-base">
              <span className="block w-[90%] text-start text-xs md:text-sm">
                {cityName}
              </span>
              <div className="w-[10%]">
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 h-3 w-3 text-gray-light md:h-5 md:w-5"
                />
              </div>
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in md:w-52"
          >
            <div className="py-1">
              {cities?.map((city) => (
                <MenuItem key={city.id} onClick={() => setSelectedCity(city)}>
                  <span className="block px-2 py-1 text-[8px] text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 md:px-4 md:py-2 md:text-sm">
                    {city?.name}
                  </span>
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Menu>
      </div>
      {activeSearch && (
        <div className="flex items-center overflow-hidden rounded-[3px] border border-gray-dark hover:bg-gray-50">
          <input
            type="search"
            value={search}
            placeholder="Поиск"
            className="flex-1 border-none p-[20px] text-[14px] font-bold leading-[110%] text-gray-dark outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="border-l border-gray-dark p-[20px]">
            <SlMagnifier />
          </span>
        </div>
      )}
    </div>
  );
};
export default Filters;
