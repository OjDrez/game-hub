import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuList>Relevance</MenuList>
        <MenuList>Date Added</MenuList>
        <MenuList>Name</MenuList>
        <MenuList>Release date</MenuList>
        <MenuList>Popularity</MenuList>
        <MenuList>Average rating</MenuList>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
