import Header from "../header/Header";
import Footer from "../footer/Footer";
import SearchInput from "./components/SearchInput";
import WordOfTheDay from "./components/WordOfTheDay";
import Button from "./components/Button";
import { Link } from "react-router-dom";
import pattern from "../../assets/Pattern.svg";

export default function Home() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="relative flex-1 flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center items-center p-4 sm:p-6 md:p-8">
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

                    <div className="relative z-10 flex w-full flex-col items-center gap-4 sm:gap-6 md:gap-8">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight sm:leading-none text-center px-4">
                            FIND KALAW KAWAW YA WORDS!
                        </h1>
                        <div className="w-full max-w-lg px-4">
                            <SearchInput />
                        </div>
                        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4 px-4">
                            <div className="flex w-full lg:flex-1 lg:basis-0.5 lg:min-w-[320px]">
                                <WordOfTheDay />
                            </div>
                            <div className="w-full lg:flex-1 lg:basis-0.5 lg:min-w-[320px]">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 p-2 sm:p-4">
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
