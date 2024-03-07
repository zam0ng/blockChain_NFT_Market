import {useEffect, useState} from "react"
import Web3 from "web3";

const useWeb3 = () =>{

    const [user,setUser] = useState({
        account : "",
        balance : "",
    });

    const [web3, setweb3] = useState(null);

    useEffect(()=>{

        try {
            if(window.ethereum){
                window.ethereum.request({
                    method : "eth_requestAccounts",
                }).then(async ([data])=>{
                    const web3Provider = new Web3(window.ethereum);
                    setUser({
                        account : data,
                        balance : web3Provider.utils.toWei(await web3Provider.eth.getBalance(data),"ether"),
                    });
                    setweb3(web3Provider);
    
                }).catch((error)=>{
                    if(error.code === 4001){
                        alert("메타마스크 로그인")
                    }
                });
    
    
                // 웹 메타마스크 지갑 다 뜰거고
                // 그 지갑에 있는 토큰 양을 다 보여줄거고
                // 컨트렉트를 배포한 네트워크가 맞는지 아니면 네트워크 변경할 수 있게 함수실행
                // 지갑을 바꾸면 바꾼 지갑 내용으로 브라우저에 보일수 있게 
            }else{
                alert("메타마스크 설치하세요");
            }
        } catch (error) {
            console.log(error.code);
            console.log("error",error)
        }
        
    },[]);

    return {user, web3};
}

export default useWeb3;