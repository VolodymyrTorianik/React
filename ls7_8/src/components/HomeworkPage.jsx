import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Content from './Content';
import './HomeworkPage.css';

class HomeworkPage extends React.Component {
  render() {
    const headerData = { title: 'Hello React Homework' };
    const footerData = { content: 'This is footer' };
    const sidebarData = { links: ['Home', 'About', 'Contact'] };

    return (
      <div className="homework-container">
        <div className="header">
          <Header data={headerData} />
        </div>
        <div className="main">
          <div className="sidebar">
            <Sidebar data={sidebarData} />
          </div>
          <div className="content">
            <Content />
          </div>
        </div>
        <div className="footer">
          <Footer data={footerData} />
        </div>
      </div>
    );
  }
}

export default HomeworkPage;
