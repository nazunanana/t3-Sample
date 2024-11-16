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

    // 最高4行まで伸びる
    const resize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
        setHeight(`${Math.min(e.target.scrollHeight, 4 * e.target.scrollHeight)}px`)
    }

    return(
        <textarea rows={4} cols={30} style={textareaStyle} />
    )
}