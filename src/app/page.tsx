import { IoSearchSharp, IoSendSharp } from "react-icons/io5";
import { HydrateClient } from "~/trpc/server";
import ResizeTextarea from "~/app/_components/ResizeTextarea";
import Link from 'next/link';
import '~/styles/app.css';


export default async function Home() {
    // UIテスト用ページ

    // チャット送信用スタイル
    const textareaClass = `
        resize-none
        border
        rounded
        focus:outline-none
        mb-3
    `

    return (
        <HydrateClient>
            <div className="layout">
                <div>
                    <label className="label">
                        入力欄
                    </label>
                    <input className="appearance-none border rounded-2xl py-1 px-3 mb-3 focus:outline-none" type="text" />

                    <label className="label">
                        検索欄
                    </label>
                    <div className="flex items-center space-x-1 mb-3">
                        <IoSearchSharp style={{ color: '#5c5c5c', fontSize: '25px' }} />
                        <input className="appearance-none border rounded-2xl py-1 px-3 focus:outline-none" type="text" />
                    </div>

                    <label className="label">
                        チャット送信
                    </label>
                    <div className="flex space-x-2 mb-3 items-end">
                        <textarea rows={4} cols={30} className={textareaClass} />
                        <button>
                            <Link href="tag.tsx">
                                <IoSendSharp style={{ color: '#5c5c5c', fontSize: '25px' }} />
                            </Link>
                        </button>
                    </div>

                        <label className="label">
                            可変テキストエリア
                        </label>
                        <ResizeTextarea className={textareaClass} />

                        <div className="space-x-4">
                        <button className="flex-col bg-[#ffa299] hover:bg-[#f87f74] text-white font-semibold py-2 px-4 rounded">
                            <Link href="tag.tsx">
                                ボタン
                            </Link>
                        </button>

                        <button className="flex-col bg-[#ffffff] hover:bg-[#ff8a80] text-[#ff8a80] hover:text-white border border-[#ff8a80] hover:border-transparent font-semibold py-2 px-4 rounded">
                            <Link href="tag.tsx">
                                ボタン
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </HydrateClient>
    );
}
