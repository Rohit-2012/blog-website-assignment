import { useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";

const GoUp = () => {
    const [hidden, setHidden] = useState(true)

    const listenToScroll = () => {
        const windowScrolled = document.body.scrollTop || document.documentElement.scrollTop

        if (windowScrolled > 300) {
            setHidden(false)
        } else {
            setHidden(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
        return () => window.removeEventListener('scroll', listenToScroll)
    }, [])

    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <button onClick={scrollUp} className={`fixed bottom-4 right-4 bg-slate-900 p-6 rounded-full ${hidden ? 'hidden' : ''}`}>
            <BiUpArrowAlt className="text-white font-bold text-2xl"/>
        </button>
    );
}

export default GoUp;