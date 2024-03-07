import React from 'react'
import { NftBox, Imgdiv, Nftname, Nftdes, Pricediv,BuyBtn ,BuyNowdiv,SuggetPricediv} from './mainSC'
import { testImg, ethImg } from '../../img'
import useWeb3 from '../../hooks/web3.hook';
import abi from '../../abi/Mynft.json';
import saleabi from '../../abi/Salenft.json';
import { useState,useEffect } from 'react';
const Allnft = ({ item,index }) => {
  const {user,web3} = useWeb3();
  const [contract,setContract] = useState(null);
  const [salecontract,setsaleContract] = useState(null);
  const [suggestPrice, setsuggestPrice] = useState(null);

    useEffect(()=>{
        if(web3 !==null){
            if(contract) return;
            const mynft = new web3.eth.Contract(abi,process.env.REACT_APP_CA,{data:""});
            setContract(mynft);

            const salenft = new web3.eth.Contract(saleabi,process.env.REACT_APP_SALE_CA,{data:""});
            setsaleContract(salenft);
        }
    },[web3])

  let Imgurl = `https://ipfs.io/ipfs/${(item.image).split("/")[4]}`

  const buyBtn = async(e,t) =>{
    console.log(Number(e))
    console.log(Number(e)/1000);
    console.log(Number(t));
    console.log("구매가자");

    const data = await salecontract.methods.buyNow(Number(t)).send({
      from : user.account,
      value : web3.utils.toWei(`${Number(e)/1000}`, "ether"),
    })

    console.log(data);

    
    // 🚨 본인꺼 구매 못하게 로직 추가 / 일단 구매 먼저
  }

  const suggestBtn = async(e) =>{
    console.log(Number(e));
    console.log(suggestPrice);
    const data = await contract.methods.OfferPrice(Number(e), suggestPrice*1000).send({
      from : user.account,
    })
    console.log(data);
  }
  return (
    <NftBox key={item.tokenId}>
      <Imgdiv>
        <img src={Imgurl} alt="" />
      </Imgdiv>
      <Nftname>{item.name}</Nftname>
      <Nftdes>{item.description}</Nftdes>
      <Pricediv>
      {item.price ?
        <>
        <BuyNowdiv>
          <img src={ethImg} alt="" />
          <div>
            {parseFloat(item.price)/1000} ETH
            <BuyBtn onClick={()=>{buyBtn(item.price,item.tokenId)}}>즉시 구매</BuyBtn>
          </div>
        </BuyNowdiv>
        <SuggetPricediv>
          <input onChange={(e)=>(setsuggestPrice(e.target.value))} type="text" /><span>ETH</span>
          <button onClick={()=>(suggestBtn(item.tokenId))}>가격 제안</button>
        </SuggetPricediv>
        </>
        
        :<div>미판매</div>}

      </Pricediv>

    </NftBox>
  )
}

export default Allnft