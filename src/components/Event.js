import React from "react";

function Event() {
  return (
    <div className="section event-gallery">
      <h2>Upcoming Events</h2>
      <p>Join us for exciting events that will help you grow in your IT and CS journey!</p>

      <div className="gallery">
        <div className="gallery-item">
          <img
            src="https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/305486272_113054008213064_6743234256837578331_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFF8m1o4JOYC_yzBWB3nrGlJK1bHdyHauIkrVsd3Idq4l67QKSSEvoqNq28fKDlNjjJYU08Ml3KS3xuqiSfbIkj&_nc_ohc=Q-1Gn6LI6I4Q7kNvgGFcuWC&_nc_ht=scontent.fdvo2-2.fna&oh=00_AYDZujCPWywNy_NmKkjS4evvFVSPfAZ0mGB0uHeeAVVdSg&oe=66E33E7A"
            alt="Event 1"
          />
          <h3>Hackathon 2024</h3>
          <p>Get ready to code and innovate in our annual Hackathon!</p>
        </div>

        <div className="gallery-item">
          <img
            src="https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/306858889_113053944879737_8859970328996248552_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHdTaLY7AJCqsCrPGejBl63457bhqruXkHjntuGqu5eQYEo9raqIBnAk98_CJhRmzBRBmY8aUZfLWBkyTJpn7JD&_nc_ohc=ss-0fR1OdWUQ7kNvgHj_ml-&_nc_ht=scontent.fdvo2-1.fna&_nc_gid=A0uStVTNHvtR0klALbkbw7B&oh=00_AYBTBO5vliFS92cYY8GnHsMM7-CBfzBl8Sw986R9v6WZhQ&oe=66E33964"
            alt="Event 2"
          />
          <h3>Tech Workshop</h3>
          <p>Learn the latest trends in tech with hands-on workshops.</p>
        </div>
      </div>

      <h2 className="past-event-header">Past Events</h2>
      <p>Here are some of the amazing events we've hosted in the past.</p>

      <div className="gallery">
        <div className="gallery-item">
          <img
            src="https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/404006764_311106198407843_8176448680879604310_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEOpt4fPnDKtXpcRJOCslucz4YrhsmxkR7PhiuGybGRHiWLgkhNwlCGnEjy2ZUH4ZQ8018pCYuSOAWwWEhURf8N&_nc_ohc=MI5UrBsBc4AQ7kNvgE7xbGK&_nc_ht=scontent.fdvo2-1.fna&oh=00_AYDuFvrh3yPuGASm-qvmBGMspVDmQUQPO1lRALnNSQgvVA&oe=66E333CB"
            alt="Past Event 1"
          />
          <h3>Guest Speaker Session 2023</h3>
          <p>Industry leaders shared valuable insights on IT/CS career paths.</p>
        </div>

        <div className="gallery-item">
          <img
            src="https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/306777956_113054271546371_5494349146875846409_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE-1HAzGzof0PJ7XRNdjlfHC_1rzSAtPQ0L_WvNIC09Db4eVQOOL7NawSzAcYC--9aRI4gBcNS3DhbkL0k3DB9D&_nc_ohc=ucZagGXptvcQ7kNvgH9kpko&_nc_ht=scontent.fdvo2-1.fna&oh=00_AYCMwcDGhP4fyJcKsg4vSfznXK_GSTIfZR19x4bPcv4rig&oe=66E3359E"
            alt="Past Event 2"
          />
          <h3>Coding Bootcamp 2023</h3>
          <p>An immersive coding bootcamp to upskill future developers.</p>
        </div>
      </div>
    </div>
  );
}

export default Event;
