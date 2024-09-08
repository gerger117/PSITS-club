import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

function Home() {
  // Slideshow state to handle current image
  const [currentIndex, setCurrentIndex] = useState(0);

  // Image URLs for the slideshow
  const images = [
    "https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/365060815_251490441036086_4505305708788358797_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHFxeZ-vHvuuUdfSqpb0PeXa1e_43zOs2ZrV7_jfM6zZpNJpfPSjjfwyITsEcX_TfB9-TDfkaRoEI-nJg2N93UU&_nc_ohc=fIywYCfeGCYQ7kNvgHQVMVF&_nc_ht=scontent.fdvo2-1.fna&oh=00_AYAm-ojf6AQa8D5LaYNav0TR5YBfDW24QlQSMtuz99_rSw&oe=66E31FB0",
    "https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/365138428_251490521036078_6322640332458390937_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeErs6tvaOqz5Vf-X03WrOARKDBk2nPALvUoMGTac8Au9RcQBVCx4fDbblp51A9-GNXtBnj8SRutPG055X1Jxnow&_nc_ohc=um1c3Q4x8DIQ7kNvgHBeEQi&_nc_ht=scontent.fdvo2-1.fna&_nc_gid=Ab5uD-pFUTqPjarIazssfcI&oh=00_AYDcGSzyLWfQ_rsRzO9j1x8q5CI6eWUJzWYEdPPT_nVYJQ&oe=66E32CEC",
    "https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/365246755_251490471036083_7499994518220327966_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHqTS9hlV9hylIfkxq_-_zFmawayrcJhuCZrBrKtwmG4L6TktIzg1ZmLcGO3789wK6rJqQber1T_mlzIo0m98o-&_nc_ohc=oBUkE2q6-3MQ7kNvgFuRGkz&_nc_ht=scontent.fdvo2-2.fna&_nc_gid=AFHh6ZUUjLH0he8YRvlaVCL&oh=00_AYAFgmtYGZekgtn_CUEnw2QF8Set6q58VsJN4GHVVmqA8w&oe=66E32C7A",
    "https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/364783550_251494344369029_8685747521246587580_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE3kUGC9g7iVCV7CC_AWcsLSEXjRHdaH1hIReNEd1ofWNE0IKyMBxJlK2pVPQ_hSiWkPPe8XGwolvMi9aolZ7L_&_nc_ohc=XN5jOYb_jvsQ7kNvgE9z7Ij&_nc_ht=scontent.fdvo2-1.fna&oh=00_AYCcWPYfCT5fFArRxlEOpMHWACogwTrhmkLCNYCgRgcjZw&oe=66E33C12",
  ];

  // Automatically change the current image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="home">
      <h1>Welcome PSITS Club</h1>
      <p>Join us in exploring technology, coding, and innovation!</p>

      <div className="video-section">
        <div className="video-container">
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fndkcpsits%2Fvideos%2F420254937659868%2F&show"
            title="Facebook video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: '760px', height: '515px', borderRadius: '8px' }}
          ></iframe>
        </div>
      </div>

      <div className="slideshow">
        <img src={images[currentIndex]} alt="Slideshow" />
      </div>

      <div className="upcoming-events">
        <h2>Featured Upcoming Event</h2>
        <p>Hackathon 2024: A coding competition that pushes your skills to the limit!</p>
      </div>

      {/* Button to navigate to Features */}
      <div className="button-container" style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link to="/features" className="btn btn-primary">
          Explore Club Features
        </Link>
      </div>
    </div>
  );
}

export default Home;
