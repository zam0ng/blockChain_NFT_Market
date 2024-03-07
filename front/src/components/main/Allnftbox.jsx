import React from 'react'
import { MainContainer } from './mainSC'
import Allnft from './Allnft';

const Allnftbox = ({lastobjArr}) => {
    // console.log(objArr);

    const viewNft = ()=>{
        return lastobjArr.map((item,index) =><Allnft item ={item} index={index}></Allnft>)
    }

  return (
    <MainContainer>
        {viewNft()}
    </MainContainer>
  )
}

export default Allnftbox