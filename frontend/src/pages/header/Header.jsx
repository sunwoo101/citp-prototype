import Button from "./components/Button";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Menu } from "lucide-react";
import logo from "../../assets/Logo.PNG";

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4">
            <span className="text-8xl">
                <img
                    src={logo}
                    alt="Torres Strait Islander Flag"
                    className="h-[1em] w-auto object-contain"
                />
            </span>

            <div className="flex gap-2 items-center justify-end">
                <Link to="/words">
                    <Button
                        text={"WORDS"}
                        bgColor="bg-red-500"
                        bdColor={"border-red-600"}
                    />
                </Link>
                <Link to="/learn">
                    <Button
                        text={"LEARN"}
                        bgColor="bg-yellow-400"
                        bdColor={"border-yellow-500"}
                    />
                </Link>
                <Link to="/games">
                    <Button
                        text={"GAMES"}
                        bgColor="bg-red-500"
                        bdColor={"border-red-600"}
                    />
                </Link>
                <Search color="red" size={60} strokeWidth={4} />
                <CircleUserRound color="gray" size={60} strokeWidth={1} />
                <Menu color="red" size={60} strokeWidth={4} />
            </div>
        </header>
    );
}
