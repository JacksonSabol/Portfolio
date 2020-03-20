import { useState } from 'react';

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);

    const handleSelect = (item) => {
        setIsShowing(true);
        setCurrentItem(item);
    };
    const handleClose = () => {
        setIsShowing(false);
        setCurrentItem(null);
    };

    return {
        isShowing,
        handleSelect,
        handleClose,
        currentItem,
    }
};

export default useModal;