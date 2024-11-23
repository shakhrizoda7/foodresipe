import styled from 'styled-components';

export const FooterStyled = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 5%;
    background-color: #E9EFEC;

    .logo{
        display: flex;
        align-items: center;
        gap: 10px;

        a{
            text-decoration: none;
            color: #16423C;
            
            h4{
                margin: 0;

                @media(max-width: 450px){
                    font-size: 15px;
                }
            }
        }
    }

    .brandSlogan{
        color: #6A9C89;
        font-size: 14px;
        margin-top: 10px;

        @media(max-width: 450px){
            font-size: 12px;
            margin-top: 15px;
        }
    }
`;