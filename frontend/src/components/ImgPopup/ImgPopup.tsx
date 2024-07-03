import React from "react";
import "./ImgPopup.css";

interface ImgPopupProps {
  gallery: string[];
  imgShown: number;
  setImgShown: React.Dispatch<React.SetStateAction<number>>;
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const ImgPopup: React.FC<ImgPopupProps> = ({ gallery, imgShown, setImgShown, setShowPopUp }) => {

  const switchImageHandler = (crement: boolean) => {
    if (!crement && imgShown > 0) {
      setImgShown((prev) => prev - 1);
    } else if (crement && imgShown + 1 < gallery.length) {
      setImgShown((prev) => prev + 1);
    }
  };

  return (
    <section className="img_popup_sec">
      <button 
        className={`switch_btn ${imgShown === 0 && "hide"}`} 
        onClick={() => switchImageHandler(false)}>
            <svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M38.5007 70.5833C56.2107 70.5833 70.584 56.2099 70.584 38.4999C70.584 20.7899 56.2107 6.41659 38.5007 6.41659C20.7907 6.41659 6.41732 20.7899 6.41732 38.4999C6.41732 56.2099 20.7907 70.5833 38.5007 70.5833ZM42.3507 25.9876L27.3677 37.2168C26.5015 37.8584 26.5015 39.1418 27.3677 39.7834L42.3507 51.0126C43.4094 51.8147 44.9173 51.0447 44.9173 49.7293V27.2709C44.9173 25.9555 43.4094 25.1855 42.3507 25.9876ZM64.1673 38.4999C64.1673 24.3512 52.6494 12.8333 38.5007 12.8333C24.3519 12.8333 12.834 24.3512 12.834 38.4999C12.834 52.6487 24.3519 64.1666 38.5007 64.1666C52.6494 64.1666 64.1673 52.6487 64.1673 38.4999Z" fill="white"/>
            </svg>
      </button>
      <img src={gallery[imgShown]} alt="Popup Image" />
      <button 
        className={`switch_btn ${imgShown + 1 === gallery.length && "hide"}`} 
        onClick={() => switchImageHandler(true)}>
            <svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M38.4993 6.41675C20.7893 6.41675 6.41602 20.7901 6.41602 38.5001C6.41602 56.2101 20.7893 70.5834 38.4993 70.5834C56.2093 70.5834 70.5827 56.2101 70.5827 38.5001C70.5827 20.7901 56.2093 6.41675 38.4993 6.41675ZM34.6493 51.0124L49.6323 39.7832C50.4985 39.1416 50.4985 37.8582 49.6323 37.2166L34.6493 25.9874C33.5906 25.1853 32.0827 25.9553 32.0827 27.2707V49.7291C32.0827 51.0445 33.5906 51.8145 34.6493 51.0124ZM12.8327 38.5001C12.8327 52.6488 24.3506 64.1667 38.4993 64.1667C52.6481 64.1667 64.166 52.6488 64.166 38.5001C64.166 24.3513 52.6481 12.8334 38.4993 12.8334C24.3506 12.8334 12.8327 24.3513 12.8327 38.5001Z" fill="white"/>
            </svg>
      </button>
      <button 
        className="closing_btn" 
        onClick={() => setShowPopUp(false)}
      >
      Close
      </button>
    </section>
  );
};

export default ImgPopup;