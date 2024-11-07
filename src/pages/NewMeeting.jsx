import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/NewMeeting.css';
import axios from 'axios';

function NewMeeting() {
  const [followup, setFollowup] = useState('');
  const [title, setTitle] = useState('');
  const [meetid, setMeetid] = useState('');
  const [dept, setDept] = useState('');
  const [host, setHost] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [venue, setVenue] = useState('');
  const [desc, setDesc] = useState('');
  const [members, setMembers] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMeeting = { followup, title, meetid, dept, host, date, time, venue, desc, members };
    axios.post("http://localhost:5000/newmeeting/post", newMeeting)
      .then((response) => {
        console.log(response.data);
        navigate("/meetings")
      }).catch((error) => {
        console.log(error);
      });
    setFollowup('');
    setTitle('');
    setMeetid('');
    setDept('');
    setHost('');
    setDate('');
    setTime('');
    setVenue('');
    setDesc('');
    setMembers('');
  }

  return (
    <div className='new-meeting'>
      <div className="container">
        <div className="head3">
          <h3>NEW-MEETING</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="details">
            <div className="left">
              <div>
                <label htmlFor="follow-up">Follow-up:</label>
                <select name="followup" value={followup} onChange={e => setFollowup(e.target.value)} required>
                  <option value=''>select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" placeholder="Rewards meeting"
                  value={title} onChange={e => setTitle(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="meet-id">ID:</label>
                <input type="text" name="meet-id" placeholder="98765"
                  value={meetid} onChange={e => setMeetid(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="dept">Dept/Team:</label>
                <input type="text" name="dept" placeholder="Reward Points Team"
                  value={dept} onChange={e => setDept(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="host">Host:</label>
                <input type="text" name="host" placeholder="Mr.Dharnesh"
                  value={host} onChange={e => setHost(e.target.value)} required />
              </div>
            </div>
            <div className="right">
              <div>
                <label htmlFor="date">Date</label>
                <input type="date" name="date"
                  value={date} onChange={e => setDate(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="time">Time</label>
                <input type="time" name="time"
                  value={time} onChange={e => setTime(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="venue">Venue:</label>
                <input type="text" name="venue" placeholder="WW101"
                  value={venue} onChange={e => setVenue(e.target.value)} />
              </div>
              <div>
                <label htmlFor="desc">Description:</label>
                <textarea name="desc" value={desc}
                  onChange={e => setDesc(e.target.value)}> </textarea>
              </div>
              <div>
                <label htmlFor="members">Members:</label>
                <textarea name="members" value={members}
                  onChange={e => setMembers(e.target.value)}> </textarea>
              </div>
            </div>
          </div>
          <div className="btn">
            <button type="submit">CREATE MEETING</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewMeeting