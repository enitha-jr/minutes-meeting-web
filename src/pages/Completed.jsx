import React, { useState, useEffect } from 'react'
// import './styles/Meetings.css'
import axios from 'axios';
import schedule from '../assets/icons/schedule.png'
import calendar from '../assets/icons/calendar.png'
import person from '../assets/icons/person.png'
import venue from '../assets/icons/apartment.png'
import meetimg from '../assets/icons/meeting.png'
import { useNavigate } from 'react-router-dom';

const Completed = () => {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/meetings/completed")
        .then((response) => {
            setDetails(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, [])

    const navigate = useNavigate()

    const handleDetail=(meetingid)=>{ 
        navigate(`/meetings/${meetingid}`);
    }

    return (
            <div className="meet-body">
                {details.map((detail) => (
                    <div className='meet-overview' key={detail.meetingid} onClick={()=>handleDetail(detail.meetingid)}>
                            <div className='image'>
                                <img src={meetimg} width="140"/>
                            </div>
                            <div className='meet-head'>
                                <div className='meet-title'>{detail.title}</div>
                                <div className='meet-by'>by {detail.dept}</div>
                            </div>
                            <div className='meet-details'>
                                <div className='meet-details-container'>
                                    <img src={person} width={22} />
                                    <div>{detail.host}</div>
                                </div>
                                <div className='meet-details-container'>
                                    <img src={calendar} width={22} />
                                    <div>{detail.date}</div>
                                </div>
                                <div className='meet-details-container'>
                                    <img src={venue} width={22} />
                                    <div>{detail.venue}</div>
                                </div>
                                <div className='meet-details-container'>
                                    <img src={schedule} width={22} />
                                    <div>{detail.time}</div>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
    )
}

export default Completed