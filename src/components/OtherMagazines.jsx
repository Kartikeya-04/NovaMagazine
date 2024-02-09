import React from 'react';
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const OtherMagazine = () => {

  const img = [{
    image: img1,
    title: "Magazine-1",
    para: "This is the first magazine",
    delay: "0.3s"
    },
    {
      image: img2,
      title: "Magazine-2",
      para: "This is the second magazine",
      delay: "0.7s"
    },
    {
      image: img3,
      title: "Magazine-3",
      para: "This is the third magazine",
      delay: "1.1s"
    },
    {
      image: img4,
      title: "Magazine-4",
      para: "This is the fourth magazine",
      delay: "1.5s"
    }
  ];

  return (
    <>
    <div className='o-magazine'>
      <h2>Other Magazines</h2>
      <div className='inner-div'>
      {
        img.map((i) => (
          <div className="cards">
            <div className="img-container" >
              <img style={{
                animationDelay: i.delay,
              }} className='img' src={i.image} alt="Magazine" />
            </div>
            <div className='text'>
              <h4>{i.title}</h4>
              <p>{i.para}</p>
            </div>
          </div>
        ))
      }
      </div>
    </div>
    </>
  )
}

export default OtherMagazine;