import Header from "../header/Header";
import Footer from "../footer/Footer";
import Search from "./components/Search";
import WordOfTheDay from "./components/WordOfTheDay";
import Button from "./components/Button";
import { Link } from "react-router-dom";
import pattern from "../../assets/Pattern.svg";

export default function Home() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="relative flex-1 flex flex-col gap-8 justify-center items-center p-8">
                    <span className="absolute inset-0 bg-[#008cff] pointer-events-none z-0" />
                    <span
                        className="absolute inset-0 bg-[#1eaaee] pointer-events-none z-0"
                        style={{
                            WebkitMaskImage: `url(${pattern})`,
                            maskImage: `url(${pattern})`,
                            WebkitMaskRepeat: "no-repeat",
                            maskRepeat: "no-repeat",
                            WebkitMaskPosition: "50% 60%",
                            maskPosition: "50% 60%",
                            WebkitMaskSize: "500% 500%",
                            maskSize: "500% 500%",
                        }}
                    />

                    <div className="relative z-10 flex w-full flex-col items-center gap-8">
                        <h1 className="text-white text-7xl font-black leading-none">
                            FIND KALAW KAWAW YA WORDS!
                        </h1>
                        <div className="w-full max-w-lg">
                            <Search />
                        </div>
                        <div className="w-full flex flex-wrap justify-center items-center gap-4">
                            <div className="flex flex-1 basis-0.5 min-w-[320px]">
                                <WordOfTheDay />
                            </div>
                            <div className="flex-1 basis-0.5 min-w-[320px]">
                                <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4">
                                    <Link to="/words">
                                        <Button
                                            text={"WORDS"}
                                            bgColor="bg-[#ff0000]"
                                            ptColor="bg-[#ff4f4f]"
                                        />
                                    </Link>
                                    <Link to="/games">
                                        <Button
                                            text={"GAMES"}
                                            bgColor="bg-[#ffa100]"
                                            ptColor={"bg-[#ffbe4f]"}
                                        />
                                    </Link>
                                    <Link to="/videos">
                                        <Button
                                            text={"VIDEOS"}
                                            bgColor="bg-[#589c00]"
                                            ptColor={"bg-[#8cbb4f]"}
                                        />
                                    </Link>
                                    <Link to="/database">
                                        <Button
                                            text={"DATABASE"}
                                            bgColor="bg-[#0000ff]"
                                            ptColor={"bg-[#4f4fff]"}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
