import * as C from "./Contact.style";

export const ContactInfo = () => {
  return (
    <C.Header>
      <div className="contact-container">
        <h2> Commercial & Others </h2>
        <div className="contact-info">
          <a href="mailto:dev.colomboc@gmail.com">
            <button>
              <img src="imgs/sticker-gmail.svg" /> GMail
            </button>
          </a>
          <a href="https://t.me/matheusclmb">
            <button className="tel-btn">
              <img src="imgs/sticker-telegram.svg" /> Telegram
            </button>
          </a>
        </div>
      </div>
    </C.Header>
  );
};
