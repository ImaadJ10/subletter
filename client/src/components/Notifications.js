import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import SingleNotification from './SingleNotification';
import '../css/Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get('http://localhost:1234/notifications')
          .then((res) => {
            const curr_notif = {
              id: res.data.nid,
              title: res.data.content,
              content: 'blah blah blah new notification blah blah blah',
            };

            setNotifications((prevNotification) => [...prevNotification, curr_notif]);
          })
          .catch((e) => {});
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, [notifications]);

  return (
    <div className="notifs">
      <h1>Notifications</h1>
      <ul>
        {notifications.map((notif) => {
          return (
            <SingleNotification
              id={notif.id}
              title={notif.title}
              content={notif.content}
              setNotifications={setNotifications}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Notifications;
