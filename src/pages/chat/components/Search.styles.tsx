import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 17px;
  box-sizing: border-box;
  position: relative;
`

export const InputContainer = styled.div`
  flex: 1;
  display: flex;
  height: 26px;
  align-items: ceter;
  position: relative;

  & > .search-icon-container {
    position: absolute;
    top: 50%;
    left: 6px;
    transform: translateY(-50%);
  }
`

export const SearchInput = styled.input`
  width: 100%;
  background-color: #eee;
  height: 26px;
  border: 1px solid transparent;
  outline: none;
  border-radius: 4px;
  padding: 0 12px 0 28px;

  &:active, &:focus {
    background-color: #fff;
    border: 1px solid #009988;
  }
`;

export const PlusContainer = styled.div`
  width: 28px;
  height: 28px;
  margin-left: 17px;
  border-radius: 4px;
  background-color: #eee;

  &:active {
    background-color: #fff;
  }
`;

export const DraggableContent = styled.div`
  position: absolute;
  width: 100%;
  height: 16px;
  top: 0;
  left: 0;
  z-index: 10;
  -webkit-app-region: drag;
`
