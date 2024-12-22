import { useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { SlMagnifier } from "react-icons/sl";

const Filters = ({
  filters,
  setFilters,
  cityName,
  cities,
  setSelectedCity,
  activeSearch,
  search,
  setSearch,
}) => {
  // Tanlangan filtr nomini saqlash uchun state
  const [selectedFilterTitle, setSelectedFilterTitle] =
    useState("Выберите фильтр");

  const handleFilterChange = (selectedKey) => {
    const updatedFilters = Object.keys(filters).reduce((acc, key) => {
      acc[key] = {
        ...filters[key],
        value: key === selectedKey,
      };
      return acc;
    }, {});
    setFilters(updatedFilters);

    setSelectedFilterTitle(filters[selectedKey]?.title || "Select Filter");
  };

  return (
    <div className="md:max-container mb-[30px] flex flex-col justify-between gap-[20px] md:flex-row md:items-center">
      <div className="flex flex-row gap-[10px] md:gap-[30px] xl:flex-row xl:gap-[30px]">
        {/* Filter Menu */}
        <Menu
          as="div"
          className="relative inline-block w-[calc(50%-5px)] text-left sm:w-full sm:max-w-[200px]"
        >
          <div>
            <MenuButton className="flex sm:w-[180px] w-full py-5 justify-center gap-x-1.5 rounded-[5px] bg-white  pl-4 pr-2 text-xs font-bold text-gray-light shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 md:w-[200px] md:py-[15px] md:pl-[30px] md:pr-[22px] md:text-base">
              <span className="block w-[90%] text-start text-xs md:text-sm">
                {selectedFilterTitle}
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
            className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in md:w-52"
          >
            <div className="py-1">
              {filters &&
                Object.entries(filters).map(([key, filter]) => (
                  <MenuItem key={key} onClick={() => handleFilterChange(key)}>
                    <p className="block px-2 py-1 text-xs text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 md:px-4 md:py-2 md:text-sm">
                      {filter.title}
                    </p>
                  </MenuItem>
                ))}
            </div>
          </MenuItems>
        </Menu>

        {/* City Menu */}
        <Menu
          as="div"
          className="relative inline-block w-[calc(50%-5px)] text-left sm:w-full sm:max-w-[150px]"
        >
          <div>
            <MenuButton className="flex sm:w-[100px] w-full justify-center gap-x-1.5 py-5 rounded-[5px] bg-white pl-4 pr-2 text-[10px] font-bold text-gray-light shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 md:w-[130px] md:py-[15px] md:pl-[30px] md:pr-[22px] md:text-base">
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
            className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5  transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in md:w-52"
          >
            <div className="py-1">
              {cities?.map((city) => (
                <MenuItem key={city.id} onClick={() => setSelectedCity(city)}>
                  <span className="block px-2 py-1 text-xs text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 md:px-4 md:py-2 md:text-sm">
                    {city?.name}
                  </span>
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Menu>
      </div>

      {/* Search Input */}
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
