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

                    {/* TODO: Tag.tsxへのボタン実装する
                https://tailwindui.com/components/application-ui/elements/buttons */}
                </div>
            </div>
        </HydrateClient>
    );
}
