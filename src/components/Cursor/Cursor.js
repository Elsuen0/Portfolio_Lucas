import React, { useState, useEffect } from 'react';
import './CustomCursor.scss'; // Importer le fichier de styles CSS

const CustomCursor = () => {
    const [mainCursorPos, setMainCursorPos] = useState({ x: -100, y: -100 });
    const [shadowCursorPos, setShadowCursorPos] = useState({ x: -100, y: -100 });

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        setMainCursorPos({ x: clientX, y: clientY });
    };

    useEffect(() => {
        let animationFrameId;

        const updateShadowCursorPos = () => {
            setShadowCursorPos((prevPos) => ({
                x: prevPos.x + (mainCursorPos.x - prevPos.x) * 0.1, // Ajustez le facteur 0.1 pour contrôler l'intervalle
                y: prevPos.y + (mainCursorPos.y - prevPos.y) * 0.1,
            }));

            if (
                mainCursorPos.x !== shadowCursorPos.x ||
                mainCursorPos.y !== shadowCursorPos.y
            ) {
                animationFrameId = requestAnimationFrame(updateShadowCursorPos);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        animationFrameId = requestAnimationFrame(updateShadowCursorPos);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [mainCursorPos, shadowCursorPos]);

    return (
        <div>
            <div
                className="main-cursor"
                style={{
                    left: `${mainCursorPos.x}px`,
                    top: `${mainCursorPos.y}px`,
                }}
            ></div>
            <div
                className="shadow-cursor"
                style={{
                    left: `${shadowCursorPos.x}px`,
                    top: `${shadowCursorPos.y}px`,
                }}
            ></div>
        </div>
    );
};

export default CustomCursor;
