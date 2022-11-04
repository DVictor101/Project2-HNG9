import "./homepage.scss";
import ProfileHeader from "./profilesection/profilesection";
import LinkSection from "./linksection/linksection";
import BeforeFooter from "./sectionbeforefooter/sectionbeforefooter";


function Homepage() {
  return (
    <div className="App">
      <ProfileHeader />
      <LinkSection />
      <BeforeFooter />
      
    </div>
  );
}

export default Homepage;
