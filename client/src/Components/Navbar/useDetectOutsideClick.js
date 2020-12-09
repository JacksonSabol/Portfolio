import { useState, useEffect } from 'react';

export const useDetectOutsideClick = (el, initialState) => {
    const [toggled, setToggled] = useState(initialState);

    useEffect(() => {
        const pageClickEvent = (e) => {
            // If the active element exists and is clicked outside of
            if (el.current !== null && !el.current.contains(e.target)) {
                setToggled(false);
            }
        };

        // If the item is active (ie open) then listen for clicks
        if (toggled) {
            window.addEventListener('click', pageClickEvent);
        }

        return () => {
            window.removeEventListener('click', pageClickEvent);
        }

    }, [toggled, el]);

    return [toggled, setToggled];
}