import Header from "../header/Header";
import Footer from "../footer/Footer";
import Search from "./components/Search";
import WordOfTheDay from "./components/WordOfTheDay";
import Button from "./components/Button";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1 flex flex-col gap-8 justify-center items-center bg-blue-400 p-8">
                    <h1 className="text-white text-7xl font-black leading-none">FIND KALAW KAWAW YA WORDS!</h1>
                    <div className="w-full max-w-lg">
                        <Search />
                    </div>
                    <div className="w-full flex flex-wrap items-stretch gap-4">
                        <div className="flex flex-1 basis-0.5 min-w-[320px]">
                            <WordOfTheDay />
                        </div>
                        <div className="flex-1 basis-0.5 min-w-[320px]">
                            <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4">
                                <Link to="/words">
                                    <Button text={"WORDS"} bgColor="bg-red-500" bdColor={"border-red-600"} />
                                </Link>
                                <Link to="/games">
                                    <Button text={"GAMES"} bgColor="bg-yellow-400" bdColor={"border-yellow-500"} />
                                </Link>
                                <Link to="/videos">
                                    <Button text={"VIDEOS"} bgColor="bg-lime-400" bdColor={"border-lime-500"} />
                                </Link>
                                <Link to="/database">
                                    <Button text={"DATABASE"} bgColor="bg-blue-500" bdColor={"border-blue-600"} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}
