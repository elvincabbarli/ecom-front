import { useEffect, useState } from "react";
import Header from "../components/Layouts/Header/Header";
import Footer from "../components/Layouts/Footer/Footer";
import SearchModal from "../components/Modals/SearchModal/SearchModal";
import DialogModal from "../components/Modals/DialogModal/DialogModal";

const MainLayout = ({ children }) => {
    const [isSearchOpened, setIsSearchOpened] = useState(false)
    const [isModalOpened, setIsModalOpened] = useState(false)

    useEffect(() => {
        const dialogStatus = localStorage.getItem('dialog') ? JSON.parse(localStorage.getItem('dialog')) : localStorage.setItem('dialog', JSON.stringify(isModalOpened))

        setInterval(() => {
            setIsModalOpened(dialogStatus)
        }, 2000);
    }, [isModalOpened])

    return (
        <div className="main-layout">
            <Header setIsSearchOpened={setIsSearchOpened} />
            <SearchModal isSearchOpened={isSearchOpened} setIsSearchOpened={setIsSearchOpened} />
            <DialogModal isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;

