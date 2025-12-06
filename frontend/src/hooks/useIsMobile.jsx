import { useState, useEffect } from 'react';

const mobileBreakpoint = 768;

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Initial check and resize listener setup
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < mobileBreakpoint);
        };

        checkIsMobile(); // Check on mount
        window.addEventListener('resize', checkIsMobile);

        // Cleanup the event listener on unmount
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    return isMobile;
};

export default useIsMobile;
