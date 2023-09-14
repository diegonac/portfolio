import React from "react";
import contactList from "../utils/contactList";
import "../assets/Contact.css";

const Contact: React.FC = () => {
  return (
    <section id="section-contact" data-aos="fade-right">
      <div className="logo-contact"></div>
      <h3>Vivir, aprender y subir de nivel un día a la vez</h3>
      <div className="container-item-contact">
        {contactList.map((item, index) => (
          <a
            key={index}
            href={
              item.link === "diegonacimiento18@gmail.com"
                ? `mailto:${item.link}`
                : item.link
            }
            target="_blank"
          >
            <div
              className="item-icon-contact"
              style={{
                margin: "auto",
                height: "50px",
                width: "50px",
                backgroundImage: `url("${item.icon}")`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
              // onClick={() => redirect(item.link)}
            ></div>
            <p>{item.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
