import styled from "styled-components";

export const ResipeCardStyled = styled.div`
  margin-top: 2%;
  width: 100%;
  min-height: 33.9vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media(max-height: 950px){
    min-height: calc(100vh - 399px);
  }

  .food-cards{
    width: 100%;
    padding: 5% 12%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .loadingBox{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .expand-more {
      margin-left: auto;
      transition: transform 0.15s ease-in-out; // Assuming the shortest duration
  
      &.expanded {
        transform: rotate(180deg);
      }
  
      &.collapsed {
        transform: rotate(0deg);
      }
    }
  
    .cardBox{
      cursor: pointer;
      color: #16423C;
      max-width: 350px;
      height: auto;
      display: flex;
      flex-direction: column;
      box-shadow: none;
      background-color: #E9EFEC;
      border-radius: 20px;
    }
  }

`;