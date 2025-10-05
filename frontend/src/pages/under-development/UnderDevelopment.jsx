import Header from "../header/Header";
import Footer from "../footer/Footer";
import Button from "./components/Button";
import { Link } from "react-router-dom";
import pattern from "../../assets/Pattern.svg";

export default function UnderDevelopment() {
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
                            UNDER DEVELOPMENT
                        </h1>
                        <Link to="/">
                            <Button
                                text={"RETURN HOME"}
                                bgColor="bg-[#ff0000]"
                                ptColor="bg-[#ff4f4f]"
                            />
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
