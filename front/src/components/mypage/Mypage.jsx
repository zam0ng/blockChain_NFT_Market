import React, { useEffect, useState } from 'react'
import Header2 from '../header/Header2'
import { MypageBody ,MypageContainer, SuggestDiv,SuggestTab,Testdiv,SuggestTitle,
    SuggestList} from './mypageSC'
import { Titlediv } from '../main/mainSC'
import Myntf from './Mynft'
import abi from '../../abi/Mynft.json';
import saleabi from '../../abi/Salenft.json';

import axios from 'axios'
import Web3 from 'web3'
import ListValue from './ListValue'
import useWeb3 from '../../hooks/web3.hook'
const Mypage = () => {
    const [salecontract,setsaleContract] = useState(null);

    const {user,web3}= useWeb3();
    const [contract, setContract] = useState(null);
    const [objArr,setobjArr] = useState([]);
    const [saleArr ,setsaleArr] = useState([]);
    const [priceArr,setpriceArr] = useState([]);
    const [saleNftInfoArr,setsaleNftInfoArr] = useState([]);
    const [lastobjArr, setlastobjArr] = useState([]);
    const [isauth,setisauth] = useState(false);
    const [isSelect, setSelect] = useState("receive");
    const [offerArr,setofferArr] = useState([]);

    useEffect(()=>{
        if(web3 !==null){
            if(contract || salecontract) return;
            
            const mynft = new web3.eth.Contract(abi,process.env.REACT_APP_CA,{data:""});
            setContract(mynft)

            const salenft = new web3.eth.Contract(saleabi,process.env.REACT_APP_SALE_CA,{data:""});
            setsaleContract(salenft);
        }
    },[web3]);

    useEffect(()=>{

        if(contract || salecontract){
            if(isauth !=true) giveAuth();

            getMyMintingNFT();
            getOfferPrice();
            // getMyNftTokenIds();
            // sellingNftPrice();
        }

    },[contract,salecontract])
    

    // ⭐ 마이페이지 접속시 권한 넘기기
    const giveAuth = async() =>{

        // 권한이 되어있는지 여부 확인
        const resp = await salecontract.methods.salesNFT().call({
            from : user.account,
        })

        console.log(resp)
        if(resp == false){
        console.log("권한주기 실행됨");
        const data = await salecontract.methods.setApprovalForAll().send({
            from : user.account,
        })

        console.log(data);
        }
        
    }

    const getMyMintingNFT = async() =>{

        let data = await contract.methods.getMyMintingNFT().call({
            from : user.account,
        })
        
        data = data.filter((el)=> el.hashStr !="")

        for (let index = 0; index < data.length; index++) {
            const resp = await axios.get(`https://ipfs.io/ipfs/${data[index].hashStr}`)
   
            let newobj = { ...data[index], ...resp.data}
            setlastobjArr(preArr => [...preArr,newobj])

        }
        console.log(data);

            
    }

        useEffect(()=>{
            console.log("lastobjArr-----------",lastobjArr)
        },[lastobjArr])
    //----------------------------------------

    const viewnft = () =>{
        return lastobjArr?.map((item,index)=><Myntf item={item} index={index}></Myntf>)
    }
    const selectValue = (e) =>{
        console.log(e);
        setSelect(e);
    }


    const getOfferPrice = async()=>{
        const [data] = await contract.methods.getOfferPrice().call({
            from : user.account,
        })

        console.log(data);
        setofferArr(data);
    }

    const filter =() =>{
        
       
        return  offerArr?.map((item)=><ListValue item={item}/>) 
        // if(isSelect === "receive"){

        // }
        // else if(isSelect === "send"){
            
        // }
    }     

  return (<>
    <MypageBody>
        <Header2/>
            <Titlediv>
                <h4>나의 NFT {lastobjArr.length}개</h4>
            </Titlediv>
            <MypageContainer>
            {viewnft()}
            </MypageContainer>
        <SuggestDiv>
            <SuggestTab>
                <Testdiv isActive = {isSelect === "receive"} onClick={()=>{selectValue("receive")}}>받은 제안</Testdiv>
                <Testdiv isActive = {isSelect === "send"} onClick={()=>{selectValue("send")}}>보낸 제안</Testdiv>
            </SuggestTab>
            <SuggestTitle>
                <div>이름</div>
                <div>거래상대</div>
                <div>제안가</div>
                <div></div>
            </SuggestTitle>
            <SuggestList>
                {filter()}
            </SuggestList>


        </SuggestDiv>

    </MypageBody>
    </>
  )
}

export default Mypage