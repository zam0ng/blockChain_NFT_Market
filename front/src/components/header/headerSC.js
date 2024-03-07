import styled from "styled-components";

export const HeaderBox = styled.div`
    width: 80%;
    height: 100px;
    /* border-bottom: 2px solid lightgray; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    
    background-color: white;

    & > img{
        width: 150px;
        height: 50px;
        /* &:nth-of-type(1){
            height: 50px;
        }
        &:nth-of-type(2){
            height: 10x;
        } */
    }

    /* & div {
        & > img{
            width: 150px;
            height: 100px;
        }

        &:nth-of-type(2) > img {
            width: 10px;
            height: 10px;
        }
        
    } */
    .firstDiv > img {

            width: 150px;
            height: 100px;
        }

    .secondDiv > img {
            width: 40px;
            height: 40px;
        }
        
    

`
export const Logindiv = styled.div`
    width: 100px;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
`
export const LogoImg = styled.img`
    width: 150px;
    height: 50px;
`
