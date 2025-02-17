import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Content from './Content';
import './HomeworkPage.css';

function HomeworkPage() {
  const headerData = { title: 'Header Information' };
  const footerData = { content: 'Footer Content' };
  const sidebarData = { links: ['Link 1', 'Link 2', 'Link 3'] };

  return (
    <div className="homework-page">
      <div className="header">
        <Header data={headerData} />
      </div>
      <div className="sidebar">
        <Sidebar data={sidebarData} />
      </div>
      <div className="content">
        <Content />
      </div>
      <div className="footer">
        <Footer data={footerData} />
      </div>
    </div>
  );
}

export default HomeworkPage;
