import TagUI from "~/app/_components/TagUI";
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
                    タグUI
                </label>
                <TagUI />

                <label className="label">
                    テキストエリア＋タグ
                </label>
                <textarea className="appearance-none border rounded py-1 px-3 mb-3 focus:outline-none">
                    <TagUI />
                </textarea>
            </div>
        </div>
    )
}