import { IoRemoveCircleSharp } from "react-icons/io5";
import '~/styles/app.css';

export default function Page() {

    // タグ削除関数
    // const removeTag = () => {
    //     // Element削除
    // }

    return (
        <div className="layout">
            <div>
                <label className="label">
                    タグ
                </label>
                <span id="badge-dismiss-1" className="inline-flex items-center px-2 py-1 font-semibold text-[#ff8a80] bg-white rounded-full border border-[#ff8a80]">
                    <button data-dismiss-target="#badge-dismiss-1">
                        {/* onClick={removeTag} */}
                        <IoRemoveCircleSharp color="#ff7366" size="24px" />
                    </button>
                    <span className="pt-0.5 px-1 text-base leading-none">新規タグ</span>
                </span>
            </div>
        </div>
    )
}