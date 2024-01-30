import React from 'react'
import './comments.scss'
const CommentItem = ({item}) => {
    return (
        <div  className=" w-full rounded-[10px] bg-[#F7F7F8] p-[24px] flex flex-col">
            <div className="flex flex-row justify-start items-center gap-4 pb-[20px]">
                <img className="img" src="https://s3-alpha-sig.figma.com/img/cfb7/002c/fa0c8f8d9bd28e970bf232047d060cd7?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gM6FB2kqexSFqr-MjvhV0Lbh2WSMwq6BMdGwtEWDGo6HguY2Jmocb1zPHHxtIc2SS8lWoHhITxnShX55d6uHETGmKmst1A2XNcEJAFAh-ReH21LqiQsVDkjutoFzCjmDMv8ShBODxksbStB7JOfxYQsPiJmqWZ61NLSEFekIol4IN86zXp9PVDvU7t4O89jBH42s0R4EsuUig8cG9XJd1ukQgTlRaaYEU5QA-n61jxupmdKHUtVq~LbvyfrxE2mot2OIqa-Yh9ZtP4QUzK8w858Mj7gt6RCLP4q-McI6QxUgRL-2V-I~bjAgv8ZlKrYZyBtxEGkH3adeE4UdPL7txw__"
                 alt="fasd" />
                <div className="flex w-3/4 flex-col">
                    <h1 className="text-[#040303] text-[20px] font-[400]">{item.name}</h1>
                    <p className="text-[#040303] text-[13px] font-[400] opacity-[0.6]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi </p>
                </div>
            </div>
            <p className="text-[16px] font-[400] opacity-[0.6]">
                {item.description}
            </p>
        </div>
    )
}

export default CommentItem