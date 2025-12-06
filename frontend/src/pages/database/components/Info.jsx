import Button from "../components/Button";
import WordsTranslated from "../components/WordsTranslated";

export default function Info({ clickAction }) {
    return (
        <>
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight sm:leading-none text-center">DATABASE</h1>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 p-2 sm:p-4">
                <WordsTranslated />
                <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight sm:leading-normal p-2 sm:p-4">
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
