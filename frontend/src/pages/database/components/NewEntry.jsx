import { useState, useEffect } from "react";
import Button from "../components/Button";
import InputField from "./InputField";
import { add } from "../../../api/word-bank";

export default function NewEntry() {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [english, setEnglish] = useState("");
    const [kky, setKky] = useState("");
    const [tsc, setTsc] = useState("");
    const [category, setCategory] = useState("");
    const [submittedBy, setSubmittedBy] = useState("");

    const submit = async () => {
        try {
            setLoading(true);
            setMessage("");

            const { data: result } = await add(
                english,
                kky,
                tsc,
                category,
                submittedBy,
            );

            if (result?.success === false) {
                throw new Error(result?.message || "Request failed");
            }

            setEnglish("");
            setKky("");
            setTsc("");
            setCategory("");
            setSubmittedBy("");
            setMessage(result?.message);
        } catch (err) {
            const serverMsg =
                err?.response?.data?.message || err?.message || "Failed to fetch words";

            setMessage(serverMsg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <h1 className="text-white text-7xl font-black leading-none">NEW ENTRY</h1>
            <div className="w-xl flex flex-col gap-4 p-4">
                <InputField
                    placeholder={"English"}
                    value={english}
                    onChange={setEnglish}
                />
                <InputField
                    placeholder={"Kalaw Kawaw Ya"}
                    value={kky}
                    onChange={setKky}
                />
                <InputField
                    placeholder={"Torres Strait Creole"}
                    value={tsc}
                    onChange={setTsc}
                />
                <InputField
                    placeholder={"Category"}
                    value={category}
                    onChange={setCategory}
                />
                <InputField
                    placeholder={"Name"}
                    value={submittedBy}
                    onChange={setSubmittedBy}
                />
                <p className="text-red-600 text-xl font-black leading-none">
                    {message}
                </p>
                <div className="flex justify-center">
                    <Button
                        text={"Submit"}
                        bgColor="bg-[#0000ff]"
                        ptColor={"bg-[#4f4fff]"}
                        clickAction={submit}
                    />
                </div>
            </div>
        </>
    );
}
