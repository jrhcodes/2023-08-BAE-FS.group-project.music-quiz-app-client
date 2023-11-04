import useSecondTimer from '../hooks/useSecondTimer';
import countdownAudio from '../../../resources/audio/countdown.mp3';
import React, { useState, useEffect } from 'react';

const CountDownTimer: React.FC = () => {

    const countdown = useSecondTimer(12000);
    const isFinalSeconds = countdown < 8000;
    const [audio] = useState(new Audio(countdownAudio));

    useEffect(() => {
        if (isFinalSeconds && audio.paused) {
            audio.play()
        }
    }, [audio, isFinalSeconds]
    );

    return <>
        <div className={isFinalSeconds ? "counterFinal" : "counterStandard"}>Remaining:{Math.floor(countdown / 60000).toString().padStart(2, '0')}:{((countdown % 60000) / 1000).toFixed(2).toString().padStart(5, '0')}</div>
    </>;
}

export default CountDownTimer;
