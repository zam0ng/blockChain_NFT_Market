import styled from "styled-components";

export const Body = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;

`

export const ModalBody = styled.div`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    /* border:  1px solid red; */
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.534);

`
export const ModalBox =styled.div`
    width: 80%;
    height: 660px;
    box-sizing: border-box;
    position: absolute;
    /* border:  1px solid red; */
    top :50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: white;

`
export const ImgUploadBox = styled.div`
    width: 45%;
    height: 500px;
    border: 1px solid;
    box-sizing :border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 20px;

    & label {
        font-size: x-large;
        font-weight: 600;
    }
    & input {
        border: none;
    }

`

export const InfoBox = styled.div`
    width: 45%;
    height: 500px;
    /* border: 1px solid; */
    box-sizing: border-box;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & div {
        width: 150px;
        height: 50px;
        line-height: 50px;
        /* border: 1px solid; */
        font-size: x-large;
        text-align: left;
    }

    & input{
        margin-top: -20px;
        width: 450px;
        height: 50px;
        
        &::placeholder{
            font-size: large;
        }
    }
    
`

export const RowContainer = styled.div`
    width: 100%;
    height: 500px;
    /* border: 1px solid; */
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;

`

export const BtnBox = styled.div`
    width: 95%;
    height: 100px;
    /* border: 1px solid red; */
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & > button{
        width: 100px;
        height: 50px;
        border-radius: 20px;
        margin-left: 10px;
        border: none;
        color:  white;
        font-weight: 600;
        cursor: pointer;
        /* background-color: #F05650; */


        /* &:nth-of-type(1){
            background-color: #F05650;
        }
        &:nth-of-type(2){
            background-color: ${(props) => props.hasHash ? "cornflowerblue ": "gray"};
        } */
        
    }
`
export const MintBtnSC = styled.div`
    width: 100px;
    height: 50px;
    border-radius: 20px;
    margin-left: 10px;
    border: none;
    color:  white;
    font-weight: 600;
    cursor: pointer;
    background-color: #F05650;
    line-height: 50px;
`
export const ProcessBtn = styled(MintBtnSC)`
    
    background-color: gray;
    
`
export const CreateBtn = styled(MintBtnSC)`

    background-color: cornflowerblue;
    
`

export const MainBox = styled.div`
    width: 100%;
    height: 100%;
    box-sizing:border-box;
    /* position: absolute;
    top: 0;
    left: 0;
    z-index: -1; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    

    & h4{
        /* border:  1px solid red; */
        text-align: left;
    }

`

export const Titlediv = styled.div`
    width: 80%;
    /* height: 200px; */
    /* border: 1px solid red; */
    & h4 {
        text-align: left;
    };
`

export const MainContainer = styled.div`
    width: 80%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;

    background-color: white;

`
export const NftBox = styled.div`
    width: 290px;
    height: 430px;
    /* border: 1px solid; */
    margin-left: 13px;
    margin-top: 20px;
    margin-bottom: 40px;
`
export const Imgdiv = styled.div`
    width: 100%;
    height: 300px;
    border: 1px solid lightgray;

    & img{
        width: 100%;
        height: 100%;
    }
`
export const Nftname = styled.div`
    width: 100%;
    height: 30px;
    /* border: 1px solid; */
    line-height: 30px;
    text-align: left;
    font-weight: 500;
    margin-top: 10px;
    padding-left: 7px;

`
export const Nftdes = styled.div`
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-align: left;
    color: gray;
    margin-top: 5px;
    padding-left: 7px;

`
export const Pricediv = styled.div`
    width: 100%;
    height: 30px;
    /* border: 1px solid; */
    margin-top: 10px;
    
`
export const BuyNowdiv = styled.div`
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
export const SuggetPricediv = styled.div`
    width: 100%;
    height: 40px;
    /* border: 1px solid brown;
    border-radius: 20px; */
    line-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    & input {
        width: 110px;
        height: 30px;
        /* float: right; */
        text-align: right;
        padding-right: 45px;
    }
    & button {
        width: 100px;
        height: 30px;
        border: none;
        color : white;
        background-color: black;
        font-weight: 600;
        border-radius: 20px;
    }

    & span{
        margin-left: -40px;
        margin-right: 15px;
    }
`

export const BuyBtn = styled.button`
    width: 100px;
    height: 30px;
    border: none;
    margin-left: 15px;
    font-size: 600;
    color: white;
    border-radius: 10px;
    background-color: orangered;
    cursor: pointer;
`