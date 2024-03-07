import styled from "styled-components";

export const MypageBody = styled.body`
    width: 100%;
    height: 100%;
    box-sizing : border-box;
    display:  flex;
    flex-direction: column;
    align-items: center;
`

export const MypageContainer = styled.div`
    width: 80%;
    height: 100%;
    box-sizing: border-box;
    /* border: 1px solid; */
    background-color: white;

    display: flex;
    flex-wrap: wrap;
    /* align-items: center; */
    justify-content: flex-start;
`

export const SaleSubmit = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: black;
    color: white;
    font-weight: 600;
    border: 1px solid;
    margin-top: 10px;
    cursor: pointer;
`

export const SellingBtn = styled(SaleSubmit)`
    background-color: lightgray;

`

export const SaleBody = styled.div`
    width: 100%;
    height: 100vh;
    border:  1px solid;
    box-sizing: border-box;
    position: fixed;
    top : 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.534);

`
export const SaleModal = styled.div`
    width: 500px;
    height: 300px;
    border: 1px solid;
    background-color: white;

    position: fixed;
    left: 50%;
    top : 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    & span {
        margin-left: -40px;
    }
`
export const TitleDiv = styled.div`
    width: 90%;
    height: 70px;
    line-height: 70px;
    /* border: 1px solid; */
    font-weight: 600;
    text-align: left;
    font-size: x-large;

    & span{
        font-weight: 500;
        font-size: large;
    }
`
export const PriceInput = styled.input`
    width: 80%;
    height: 50px;
    box-sizing: border-box;
    /* direction: rtl; */
    text-align: right;
    padding-right: 45px;

    &::placeholder{
        float: right;
        padding-right: 5px;
    }

`
export const Btndiv = styled.div`
    width: 90%;
    height: 50px;
    /* border: 1px solid; */
    display: flex;
    justify-content: flex-end;

    & > button {
        width: 80px;
        border: none;
        color: white;
        font-weight: 600;
        background-color: cornflowerblue;
        cursor: pointer;

        &:nth-of-type(1){
            margin-right: 10px;
            background-color: #F05650;
        }
    }

`
export const SuggestDiv = styled.div`
    width: 80%;
    height: 100%;
    /* border: 1px solid; */
    margin-top: 20px;
    background-color: white;
    padding-bottom: 30px;
`

export const SuggestTab = styled.div`
    width: 100%;
    height: 50px;
    /* border : 1px solid; */
    display:  flex;

    /* & div {
        line-height: 50px;
        margin-left: 20px;
        font-weight : 700;
        color : ${(props)=>props.isActive ? "red" : "gray"};
        font-size: large;
        border-bottom : 5px solid black;

    } */
`

export const Testdiv = styled.div`
    cursor: pointer;
    line-height: 50px;
    margin-left: 20px;
    font-weight : 700;
    color : ${(props)=>props.isActive ? "black" : "gray"};
    font-size: large;
    border-bottom : ${(props)=>props.isActive ? "5px solid black" : "none"};
`

export const SuggestTitle = styled.div`
    width: 70%;
    height: 50px;
    /* border: 1px solid black; */
    border-bottom: 1px solid gray;
    margin-top: 20px;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    padding-bottom: 10px;

    font-size: smaller;
`
export const SuggestList  = styled.div`
    width: 60%;
    height: 100%;
    /* border: 1px solid black; */
    
`
export const ListValueDiv = styled.div`
    width: 100%;
    height: 100px;
    /* border: 1px solid black; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const ImgBox = styled.div`
    width: 200px;
    display: flex;
    /* border: 1px solid; */
    align-items: center;
    justify-content: space-around;

    & img {
        width: 70px;
        height: 70px;
        /* border: 1px solid black; */
    }
`
export const ListBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    & button {
        width: 50px;
        height: 40px;
        border: none;
        color : white;
        font-weight: 600;
        background-color: black;
    }
`
export const MypagePricediv = styled.div`
    width: 100%;
    height: 30px;
    /* border: 1px solid; */
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    & img {
        width: 30px;
        height: 100%;
    }
    & div{
        margin-left: 10px;
    }
`