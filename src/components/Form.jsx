import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const reform = useRef();
  const SendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm("service_d0iwidh", "template_u3xguvp", reform.current, {
        publicKey: "7yDT1OT0JAMPg-xUN",
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    alert("Your message has been sent successfully");
  };

  return (
    <form id="Form" className="w-1/2" ref={reform} action="" onSubmit={SendEmail}>
      <input
        className=" w-full h-12 text-white rounded-md bg-black border border-gray-500"
        type="text"
        placeholder="Enter your name"
        name="user_name"
        required
      />
      <br />
      <br />
      <input
        className=" w-full h-12 text-white rounded-md bg-black border border-gray-500"
        type="email"
        placeholder="Enter your email"
        name="user_email"
        required
      />
      <br />
      <br />
      <textarea
        className="w-full h-80 text-white rounded-md bg-black border border-gray-500"
        name="message"
        id=""
        placeholder="Enter message"
        required
      ></textarea>{" "}
      <br />
      <br />
      <input
        id="InputSubmit"
        className=" w-1/5 h-10 cursor-pointer bg-yellow-600 rounded text-white"
        type="submit"
        value="Send"
      />
    </form>
  );
}

export default Form;
