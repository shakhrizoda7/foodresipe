import styled from 'styled-components';

export const LandingStyled = styled.div`
  width: 100%;
  height: 322px;
  position: relative;
  overflow: hidden;
  margin-top: 80px;

  @media(max-width: 450px){
    height: 250px;
    margin-top: 60px;
  }

  .bgOpacity{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .heroImg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .brandSologan{
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    color: white;
    text-align: center;

    @media(max-width: 450px){
      width: 380px;
      font-size: 20px;
    }
  }

  .searchForm{
    width: 300px;
    display: flex;
    align-items: center;
    background-color: #E9EFEC;
    border-radius: 10px;
    padding: 0 10px;
    display: none;
    position: absolute;
    z-index: 10;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media(max-width: 450px){
      display: flex;
      margin-top: 5%;
      padding: 6px 10px;
    }

    .searchFood{
        width: 250px;
        border: none;
        padding: 6px 14px;
        outline: none;
        background-color: transparent;

        @media(max-width: 450px){
          width: 230px;
        }
    }

    .searchBtn{
        outline: none;
        background-color: transparent;
        border: none;
        font-size: 20px;
        color: #6A9C89;
    }
  }

`;