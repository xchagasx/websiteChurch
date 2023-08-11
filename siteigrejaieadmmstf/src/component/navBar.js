import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function navBar() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact">
        Tab content for Contact
      </Tab>
      <Tab eventKey="fotos" title="fotos">
        Tab content for Fotos
      </Tab>
    </Tabs>
  );
}

export default navBar;