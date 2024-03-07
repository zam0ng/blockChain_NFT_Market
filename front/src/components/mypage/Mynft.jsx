import React, { useEffect, useState } from 'react'
import { NftBox,Imgdiv,Nftname,Nftdes,Pricediv } from '../main/mainSC'
import { SaleSubmit } from './mypageSC'
import { testImg ,ethImg} from '../../img'
import { SaleBody, SaleModal,TitleDiv,PriceInput,Btndiv,SellingBtn,MypagePricediv} from './mypageSC'
import abi from '../../abi/Mynft.json';
import axios from 'axios'
import useWeb3 from '../../hooks/web3.hook'

const Myntf = ({item,index}) => {

    const {user,web3}= useWeb3();
    const [contract, setContract] = useState(null);

    const [isactive, setisactive]= useState(false);
    const [price,setPrice] = useState(null);
    const [tokenIdx,setTokenIdx] =useState(null);
   

    let Imgurl = `https://ipfs.io/ipfs/${(item.image).split("/")[4]}`


    useEffect(()=>{
        if(web3 !==null){
            if(contract) return;
            
            const mynft = new web3.eth.Contract(abi,process.env.REACT_APP_CA,{data:""});
            setContract(mynft)
        }
    },[web3]);

    const saleBtn = (index) =>{
        console.log("판매버튼 눌림",index);
        setTokenIdx(index);
        setisactive(!isactive);
    }

    const realsaleBtn = async() =>{
        console.log(price);
        console.log(tokenIdx);
        const data = await contract.methods.NftsaleSumbit(tokenIdx,price).send({
            from : user.account,
        })
        console.log(data);

        // sellingNftPrice();
        if(data) setisactive(!isactive);
    }
    
  return (
    <>
    <NftBox key ={item.tokenId}>
        <Imgdiv>
            <img src={Imgurl} alt="" />
        </Imgdiv>
        <Nftname>{item.name}</Nftname>
        <Nftdes>{item.description}</Nftdes>
        <MypagePricediv>
            <img src={ethImg} alt="" />
            {item.price ? <div>{parseFloat(item.price)/1000} ETH</div> :<div>미판매</div>}
        </MypagePricediv>
        {item.price ? <SellingBtn>판매취소</SellingBtn>: 
        
        <SaleSubmit onClick={()=>{saleBtn(parseInt(item.tokenId))}}>판매등록</SaleSubmit>}
    </NftBox>
    {isactive ?
    
    <SaleBody>
        <SaleModal>
            <TitleDiv>Enter the selling price</TitleDiv>
            <div style={{display:"flex",alignItems :"center",width:"100%",justifyContent:"center"}}>
                <PriceInput onChange={(e)=>(setPrice(e.target.value*1000))}></PriceInput><span>ETH</span>
            </div>
            <Btndiv>
                <button onClick={()=>(setisactive(!isactive))}>cancel</button>
                <button onClick={realsaleBtn}>submit</button>
            </Btndiv>
        </SaleModal>

        
    </SaleBody> : <></>}
    </>
  )
}

export default Myntf