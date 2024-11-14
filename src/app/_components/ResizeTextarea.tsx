"use client";

import { CSSProperties, useState } from "react"; 

export default function ResizeTextarea() {
    // チャット送信用スタイル
    const textareaStyle: CSSProperties = {
        resize: 'none',
        bottom: 0 // 下端を固定
    }

    const [height, setHeight] = useState("auto")
    const [text, setText] = useState("");

    const resize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
        setHeight(`${Math.min(scrollHeight, 4 * e.target.scrollHeight)}px`)
    }

    return(
        <textarea rows={1} cols={30} onChange={resize} style={textareaStyle, height: height} defaultValue={text} />
    )
}