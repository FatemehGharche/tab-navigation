import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState(
    () => Number(localStorage.getItem('activeTab')) || 0
  );

  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  return (
    <div className="container">
      <header className="header">
        <h1>Tabs Component with React</h1>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </header>
      <div className="tab-content-container">
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
};

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'];

  return (
    <div className="tabs">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={activeTab === index ? 'active' : ''}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

const TabContent = ({ activeTab }) => {
  const contents = [
    { title: 'Content 1', text: '1- Lorem ipsum dolor sit amet.' },
    { title: 'Content 2', text: '2- Lorem ipsum dolor sit amet.' },
    { title: 'Content 3', text: '3- Lorem ipsum dolor sit amet.' },
    { title: 'Content 4', text: '4- Lorem ipsum dolor sit amet.' },
  ];

  if (activeTab < 0 || activeTab >= contents.length)
    return <p>Invalid Tab</p>;

  return (
    <div className="tab-content">
      <h2>{contents[activeTab].title}</h2>
      <p>{contents[activeTab].text}</p>
    </div>
  );
};

export default App;
