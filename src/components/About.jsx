import React from 'react';

export const About = () => {
  return (
    <div style={{padding: '15px'}}>
      
      <h3 style={{textAlign: 'center'}}>This is a todo list app built with React.</h3>
      <ul style={{padding: '15px'}}>
        <li>A To-Do List app helps users manage tasks by organizing them into a list format.</li>
        <li>Users can add new tasks using an input field and a button.</li>
        <li>Each task is displayed with an option to delete to mark it as completed.</li>
        <li>Tasks are stored in memory or local storage to persist between page reloads.</li>
        <li>JavaScript handles interactivity, updating the DOM based on user actions.</li>
      </ul>
    </div>
  );
};
