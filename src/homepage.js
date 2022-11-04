import "./homepage.scss";
import ProfileHeader from "./profilesection/profilesection";
import LinkSection from "./linksection/linksection";
import BeforeFooter from "./sectionbeforefooter/sectionbeforefooter";
import Footer from "./footer";

function Homepage() {
  return (
    <div className="App">
      <ProfileHeader />
      <LinkSection />
      <BeforeFooter />
      <Footer />
    </div>
  );
}

export default Homepage;
