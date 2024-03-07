import React, { useContext, useEffect, useState } from 'react'
import Header from '../header/Header'
import { Body,ImgUploadBox,InfoBox,ModalBody,ModalBox,RowContainer,BtnBox,ProcessBtn,MintBtnSC,CreateBtn
,MainBox,MainContainer,Titlediv } from './mainSC'; 
import axios from "axios"
import useWeb3 from '../../hooks/web3.hook';
import abi from '../../abi/Mynft.json';
import Allnftbox from './Allnftbox';
import { Global } from '../../App';
const Main = () => {

    const [bool,setBool] = useState(false);
    const [file,setFile] = useState(null);
    const [name,setName] = useState(null);
    const [des,setDes] = useState(null);
    const [hash,setHash] = useState(null);
    // const {user,web3} = useWeb3();
    const [contract,setContract] = useState(null);
    const [lastobjArr, setlastobjArr] = useState([]);
    
    const {user,web3} = useContext(Global);
    // console.log("obj-------",user,web3);

    useEffect(()=>{
        if(web3 !==null){
            if(contract) return;
            const mynft = new web3.eth.Contract(abi,process.env.REACT_APP_CA,{data:""});
            setContract(mynft);
        }
    },[web3])

    useEffect(()=>{

        if(contract){
            getAllMintingNft();
        }
    },[contract])

    const getAllMintingNft = async()=>{

        const data = await contract.methods.getAllMintingNft().call();
        // console.log(data);

        for (let index = 0; index < data.length; index++) {
            
            const resp = await axios.get(`https://ipfs.io/ipfs/${data[index].hashArr}`)
            // console.log(resp.data);

            let newobj ={...data[index],...resp.data};
            setlastobjArr(preArr =>[...preArr,newobj]);
        }
    }

    // 출력확인
    useEffect(()=>{
        // console.log(lastobjArr);
        
    },[lastobjArr])
    //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

    const cancelBtn = ()=>{
        setBool(!bool);
    }

    useEffect(()=>{

        //⭐⭐⭐useEffect if문쓰기 !
        if(file)
        ImgUpload(file);
        
    },[file])

    const ImgUpload = async(file)=>{
        const fileData = new FormData();
        fileData.append("file",file);

        const resp = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS",fileData,{
            headers : {
                "Content-Type" : "multipart/form-data",
                pinata_api_key : process.env.REACT_APP_PINATA_API_KEY,
                pinata_secret_api_key : process.env.REACT_APP_PINATA_SECRET_API_KEY,
            },
        })

        console.log(resp.data.IpfsHash);
        setHash(`https://amethyst-defeated-badger-139.mypinata.cloud/ipfs/${resp.data.IpfsHash}`);
    }

    const inputvalue = (e) =>{
        const fieldName = e.target.name;
        if(fieldName == "name"){
            setName(e.target.value);
        }
        else if(fieldName == "des"){
            setDes(e.target.value);
        }
    }

    const mintBtn = async()=>{
        const data = await axios.post("http://localhost:8080/nftinfo",{
            name : name,
            des : des,
            hash : hash,
        },{
            withCredentials : true,
        })
        console.log(data.data);
        
        const mint = await contract.methods.minting(data.data).send({
            from : user.account,
        })

        console.log("mint------",mint)
        setHash(null);
        if(mint){
            setBool(!bool);
        }
    }
    
    const [ta,setTa] =useState();

    useEffect(()=>{
        console.log(ta);
    },[ta])

  return (
    <Body>
        <Header props ={{bool,setBool}}/>
    {bool ?

        <ModalBody>
            <ModalBox>
                <h3>Create NFT</h3>

                <RowContainer> 
                    <ImgUploadBox>
                        <label>이미지 업로드</label>
                        <br></br>
                        <input type='file' onChange={(e)=>setFile(e.target.files[0])}></input>
                    </ImgUploadBox>
                    <InfoBox>
                        <div>Name *</div>
                        <br></br>
                        <input onChange={inputvalue} type="text" name="name" placeholder='Name your NFT'/>
                        <br></br>
                        <div>Description</div>
                        <br></br>
                        <input onChange={inputvalue} type="text" name="des" placeholder='Enter a description'/>

                    </InfoBox>
                </RowContainer>

                <BtnBox>
                    {hash}
                    <MintBtnSC onClick={cancelBtn}>Cancel</MintBtnSC>
                    {hash ? <CreateBtn onClick={mintBtn}>Create</CreateBtn> : <ProcessBtn>Processing</ProcessBtn>}
                </BtnBox>
                
            </ModalBox>    

        </ModalBody>
        
        :
        <MainBox>
            <Titlediv>
                <h4>전체 NFT {lastobjArr.length}개</h4>
            </Titlediv>
            <Allnftbox lastobjArr = {lastobjArr}/>
        </MainBox>
    }

    </Body>
  )
}

export default Main