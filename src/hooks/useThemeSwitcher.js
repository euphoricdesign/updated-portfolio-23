import {useState, useEffect} from 'react';
import Buttons from '../components/Buttons/Buttons';

const useThemeSwitcher = () => {
    const [mode, setMode] = useState(() => localStorage.getItem("mode"));

    useEffect(() => {
        if(mode === "light") {
            document.body.classList.add("light-mode");
            localStorage.setItem("mode", "light");
        } else {
            document.body.classList.remove("light-mode");
            localStorage.setItem("mode", "dark");
        }
    }, [mode]);

    return setMode
};

export default useThemeSwitcher;