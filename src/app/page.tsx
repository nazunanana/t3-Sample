import { IoSearchSharp, IoSendSharp } from "react-icons/io5";
import { HydrateClient } from "~/trpc/server";
import './styles/app.css'


export default async function Home() {
    // UIテスト用ページ

    // チャット送信用スタイル
    const textareaStyle = `
        resize-none
        border
        rounded
        focus:outline-none
    `

    return (
        <HydrateClient>
            {/* <div className="flex justify-center items-center h-screen bg-[#ffd1cc]"> */}
                <div>
                    <label className="block text-gray-700 text-sm font-bold">
                        入力欄
                    </label>
                    <input className="appearance-none border rounded-2xl py-1 px-3 mb-3 focus:outline-none" type="text" />

                    <label className="block text-gray-700 text-sm font-bold">
                        検索欄
                    </label>
                    <div className="flex items-center space-x-1 mb-3">
                        <IoSearchSharp style={{ color: '#5c5c5c', fontSize: '25px' }} />
                        <input className="appearance-none border rounded-2xl py-1 px-3 focus:outline-none" type="text" />
                    </div>

                    <label className="block text-gray-700 text-sm font-bold">
                        チャット送信
                    </label>
                    <div className="flex space-x-2 mb-3 items-end">
                        <textarea rows={4} cols={30} className={ textareaStyle } />
                        <IoSendSharp style={{ color: '#5c5c5c', fontSize: '25px' }} />
                    </div>
                </div>
            {/* </div> */}
        </HydrateClient>
    );
}
