import React from "react";
import './Features.css'; // Importing the CSS file for styling

function Features() {
  return (
    <div className="features">
      <h2>Club Features</h2>
      <p>Our club provides a range of exciting opportunities to enhance your skills and connect with others. Explore what we offer below!</p>
      
      <div className="features-grid">
        <div className="feature-item">
          <img src="https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/312610881_1430387470818860_598211074214752622_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGHerKK8YOc8o9eIKz1XxknWH9vxwLmXQ5Yf2_HAuZdDj3b5t_L7_5Qw6SqONQmz_o0OE8w9rY6REGnxNrc_TYh&_nc_ohc=Ozn9b6hiVtcQ7kNvgG9D0jd&_nc_ht=scontent.fdvo2-2.fna&oh=00_AYASe252t6AAGy2jtJdHtjk_njE2Ebh_UC1_OGvG4R1AaA&oe=66E34E7F" alt="Networking" />
          <h3>Networking Opportunities</h3>
          <p>Meet like-minded individuals and expand your professional network through our events and workshops.</p>
        </div>
        <div className="feature-item">
          <img src="https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/445378282_420633237455138_8377256523948595738_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF778rVXhuH0BT3eoR3unfvAji9bwCUup0COL1vAJS6naRIgGOxB4bBlMgDYRUedyNXQUIWS2e1gomuKNfHbYCr&_nc_ohc=FHBVVuSDxp8Q7kNvgG2wffz&_nc_ht=scontent.fdvo2-2.fna&oh=00_AYDxFWTlWSBaj7nK_8WDSavUr0Psxc3NK1ZW6-ZrgwpiXA&oe=66E338E6" alt="Workshops" />
          <h3>Technical Workshops</h3>
          <p>Participate in hands-on workshops to learn new skills and stay updated with the latest technology trends.</p>
        </div>
        <div className="feature-item">
          <img src="https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/399690610_310357305149399_4377132435773178339_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFDHGGHMEZ2mV_W2hwuiNyUBoar_QulxbsGhqv9C6XFuz8Odm9qRwavwVIA91hwfD37ujuUTcGGE9FS1hRUJYFU&_nc_ohc=noZYecajsJEQ7kNvgH2R7FZ&_nc_ht=scontent.fdvo2-2.fna&_nc_gid=AYNQ6kOWTLfhsgw89_8gjDu&oh=00_AYCJvt2JoQZqV0ITn2dKjQeDD8CckM1udJ4QfKGfXzo_XQ&oe=66E331AD" alt="Competitions" />
          <h3>Competitions</h3>
          <p>Challenge yourself in coding competitions and hackathons to push your skills to the limit.</p>
        </div>
        <div className="feature-item">
          <img src="https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/305807321_113054244879707_1486393061591012067_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHOxWRKEfQnf7Lp-5E5nmTMpMAQzazojhGkwBDNrOiOEVkLHbsmxj7AzHrlzsz-h02a35HcP4AB-0qOuyAy1MXB&_nc_ohc=fWBKftamJIsQ7kNvgEHYZbV&_nc_ht=scontent.fdvo2-2.fna&_nc_gid=ADITx-EFjHEqtclci8m6V8g&oh=00_AYDpLVDR2CagX2pKrP1ftyDJ2nx8Pv510SbPI8IyzpNwXQ&oe=66E34B08" alt="Community" />
          <h3>Community Support</h3>
          <p>Get help and support from our active community of tech enthusiasts and professionals.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
