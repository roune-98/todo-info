import {useState} from 'react'

const UseModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle(){
        setIsShowing(!isShowing);
    }
    return (
        toggle,
        isShowing
        )
}

export default UseModal;