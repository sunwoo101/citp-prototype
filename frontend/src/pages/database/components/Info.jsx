import Button from "../components/Button";
import WordsTranslated from "../components/WordsTranslated";

export default function Info({ clickAction }) {
    return (
        <>
            <h1 className="text-white text-7xl font-black leading-none">DATABASE</h1>
            <div className="w-full grid grid-cols-2 grid-rows-1 gap-4 p-4">
                <WordsTranslated />
                <p className="text-white text-3xl leading-none p-4">
                    Anyone can create an account and contribute to the translation
                    database. After a translation is submitted, at least three maintainers
                    must approve it before it is added to the database.
                </p>
            </div>
            <Button
                text={"Add new translation"}
                bgColor="bg-[#0000ff]"
                ptColor={"bg-[#4f4fff]"}
                clickAction={clickAction}
            />
        </>
    );
}
