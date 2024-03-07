import React, { useEffect, useState } from 'react'
import { logoImg ,mintImg, myImg } from '../../img'
import { HeaderBox,Logindiv } from './headerSC'
import Web3, { eth } from "web3";
import { Link } from 'react-router-dom';


const Header = ({props}) => {

    const {bool, setBool} = props;

    const [user, setUser] = useState({
        account : "",
        balance : "",
    })
    const [web3,setWeb3] = useState(null);
    const [network, setNetwork] = useState("");
    const [error,setError] = useState(null)


    function MetaMask(){
        try {
            if(window.ethereum){
            
                window.ethereum.request({
                    method : "eth_requestAccounts",
                }).then(async ([data])=>{
                    const web3Provider = new Web3(window.ethereum);
    
                    setUser({
                        account : data,
                        balance : web3Provider.utils.fromWei(await web3Provider.eth.getBalance(data),"ether"),
                    })
                    setWeb3(web3Provider);
                    
                }).catch((error)=>{
                    if(error.code===4001){
                        alert("메타마스크 로그인")
                    }
                    
                    if(error.code==-32002){
                        console.log("들어옴??")
                        const web3Provider = new Web3(window.ethereum);
                    }

                })
            }
            else{
                setError(error);
                alert("메타마스크 설치하세요!")
            }
        } catch (error) {
            console.log("error : ",error)
        }
        
    }

    window.ethereum.on("accountsChanged",async(account)=>{

        MetaMask();
        
    })
    window.ethereum.on("chainChanged", (chainId)=>{
        if(chainId == "0xaa36a7"){
            setNetwork("Sepolia")
        }
        else if(chainId == "0x539"){
            setNetwork("Ganache")
        }
    })
    
    async function  getChainId(){
       const chainId = await window.ethereum.request({
        method: "eth_chainId"
       })
       viewNetwork(chainId);
    }
    getChainId();

    // sepolia : 0xaa36a7 , ganache : 0x539
    function viewNetwork(chainId){

        if(chainId == "0xaa36a7"){
            setNetwork("Sepolia")
        }
        else if(chainId == "0x539"){
            setNetwork("Ganache")
        }
    }

    

    const LoginBtn = async() =>{
        console.log("눌림>");
        MetaMask();
        
    }

    useEffect(()=>{
        MetaMask();
        getChainId();
    },[])
    const ta = ()=>{
        console.log("눌림?");
        setBool(!bool);
    }
  return (
    <>
    <HeaderBox>
         <>
        <img src={logoImg} alt="" />
        <div>{network}</div>
        {user.account ? <div>{user.account}<br></br>{parseFloat(user.balance).toFixed(4)}ETH</div> : <Logindiv onClick={LoginBtn}>로그인</Logindiv>}
        <div className='firstDiv'><img onClick={ta} src={mintImg} alt="" /></div>
        <Link to="/mypage"><div className='secondDiv'><img src={myImg} alt="" /></div></Link>
        </>
    </HeaderBox>
    </>

  )
}

export default Header