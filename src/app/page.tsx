import { HydrateClient } from "~/trpc/server";

export default async function Home() {
    // UIテスト用ページ
    return (
        <HydrateClient>
                <div className="flex justify-center items-center h-screen">
                    <form>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                ラベル+入力欄
                            </label>
                            <input className="appearance-none border rounded-md py-2 px-3 focus:outline-none" type="text" />
                        </div>
                    </form>
                </div>
        </HydrateClient>
    );
}
