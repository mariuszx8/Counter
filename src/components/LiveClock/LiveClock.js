import React from 'react';
import Clock from 'react-live-clock';
import './LiveClock.scss';

const LiveClock = () => {

    return (
        <div className='live-clock-container'>
            <div className='live-clock'>
                <div className='live-clock-part'>
                    <Clock format={'HH'} ticking={true} className='live-clock-hours' />
                    <div className="clock-label">Hours</div>
                </div>
                <div className='live-clock-part'>
                    <Clock format={'mm'} ticking={true} className='live-clock-minutes' />
                    <div className="clock-label">Min</div>
                </div>
                <div className='live-clock-part'>
                    <Clock format={'ss'} ticking={true} className='live-clock-seconds' />
                    <div className="clock-label">Sec</div>
                </div>
            </div>  
        </div>
    )
}

export default LiveClock

