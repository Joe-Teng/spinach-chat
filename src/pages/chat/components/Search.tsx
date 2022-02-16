import React, { FC } from "react";
import { Box } from '@chakra-ui/react'
import { SearchContainer, SearchInput, InputContainer, PlusContainer, DraggableContent } from './Search.styles'
import { Plus, Search as SearchIcon } from '../../../components/Icon'

const Search: FC = () => {
  return <SearchContainer>
    <DraggableContent />
    <InputContainer>
      <SearchInput placeholder="搜索" />
      <Box w="16px" h="16px" className="search-icon-container">
        <SearchIcon />
      </Box>
    </InputContainer>
    <PlusContainer>
      <Plus />
    </PlusContainer>
  </SearchContainer>
}

export default Search
