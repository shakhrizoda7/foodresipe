import styled from 'styled-components';

export const HeaderStyled = styled.div`    
    .headerDiv{
        width: 100%;
        height: 80px;
        padding: 2% 5%;
        background-color: #E9EFEC;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        top: 0;
        z-index: 100;

        @media(max-width: 450px){
            height: 60px;
        }
        
        .logo{
            display: flex;
            align-items: center;
            gap: 10px;

            a{
                text-decoration: none;
                color: #6A9C89;

                h4{
                    margin: 0;

                    @media(max-width: 450px){
                        font-size: 15px;
                    }
                }
            }
        }
    
        .searchForm{
            display: flex;
            align-items: center;
            background-color: #fff;
            border-radius: 10px;
            padding: 5px 10px;

            @media(max-width: 450px){
                display: none;
            }
    
            .searchFood{
                width: 250px;
                border: none;
                padding: 6px 14px;
                outline: none;
                background-color: transparent;
            }
    
            .searchBtn{
                outline: none;
                background-color: transparent;
                border: none;
                font-size: 20px;
                color: #6A9C89;
            }
        }
    }
`;