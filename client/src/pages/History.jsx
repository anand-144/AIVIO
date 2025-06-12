// src/pages/History.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get('http://localhost:4000/api/image/user-history', {
          headers: {
            token,
          },
        });

        if (data.success) {
          setHistory(data.history);
        } else {
          alert('Failed to fetch history');
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen text-white p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Image Generation History</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {history.length > 0 ? (
          history.map((item, index) => (
            <div key={index} className="bg-neutral-800 p-4 rounded-xl shadow-lg">
              <img src={item.image} alt={item.prompt} className="w-full h-auto rounded" />
              <p className="mt-2 text-sm">{item.prompt}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center">No history found.</p>
        )}
      </div>
    </div>
  );
};

export default History;
