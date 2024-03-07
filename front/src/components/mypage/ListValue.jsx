import React from 'react'
import { ListValueDiv,ImgBox,ListBox } from './mypageSC'
const ListValue = ({item}) => {

  console.log(item.buyer)
  return (
    <ListBox>
    <ListValueDiv>
        <ImgBox>
            <img src="" alt="" />
            <div>이름</div>
        </ImgBox>
        <div>{item.buyer}</div>
        <div>0.013ETH</div>
        <div>
            <button>수락</button>
        </div>
    </ListValueDiv>
    
    </ListBox>
  )
}

export default ListValue