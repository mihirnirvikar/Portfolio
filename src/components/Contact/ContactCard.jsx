import { Asterisk, ArrowRight, MoveLeft, Send } from "lucide-react";
import { useState } from "react";

export const ContactCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [receivedData, setReceivedData] = useState("");
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const formSubmitHandler = async (e) => {
    e?.preventDefault();
    if (!name || !email || !message) {
      return;
    }

    const senderData = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    try {
      const response = await fetch(`${BACKEND_URL}/api/user/send-message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(senderData),
      });
      const data = await response.json();
      console.log(data.message);
      setReceivedData(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(name, email, message);

  return (
    <>
      <div className="mt-8 px-4 mb-4">
        <form onSubmit={formSubmitHandler}>
          {/* Name */}
          <div className="flex flex-col w-full">
            <p className="flex text-[14px]">
              Name{" "}
              <span className="text-red-500 text-[2px]">
                {" "}
                <sup>
                  <Asterisk className="size-3" />
                </sup>
              </span>
            </p>
            <input
              type="text"
              className="h-9 w-full border border-[#D4D4D8] dark:border-[#52525C] hover:border-2  hover:border-[#39A2FF] focus:border-2 focus:border-[#39A2FF] focus:outline-none rounded-sm px-4 mt-2 text-[14px]"
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col w-full mt-6">
            <p className="flex text-[14px]">
              Email{" "}
              <span className="text-red-500 text-[2px]">
                {" "}
                <sup>
                  <Asterisk className="size-3" />
                </sup>
              </span>
            </p>
            <input
              type="text"
              className="h-9 w-full border border-[#D4D4D8] dark:border-[#52525C] hover:border-2  hover:border-[#39A2FF] focus:border-2 focus:border-[#39A2FF] focus:outline-none rounded-sm px-4 mt-2 text-[14px]"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Message */}
          <div className="flex flex-col w-full mt-6">
            <p className="flex text-[14px]">
              Message{" "}
              <span className="text-red-500 text-[2px]">
                {" "}
                <sup>
                  <Asterisk className="size-3" />
                </sup>
              </span>
            </p>
            <textarea
              name=""
              id=""
              type="text"
              className="w-full border border-[#D4D4D8] dark:border-[#52525C] hover:border-2  hover:border-[#39A2FF] focus:border-2 focus:border-[#39A2FF] focus:outline-none rounded-sm px-4 py-2 mt-2 text-[14px]"
              placeholder="Your Message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button
            className="bg-green-600 hover:bg-green-700 text-white rounded-sm h-9 w-32 mt-6 text-[14px] flex justify-center items-center group transition-ease-in-out duration-200 gap-1"
            type="submit"
          >
            Send Message{" "}
            <span className="group-hover:translate-x-1 transition-ease-in-out duration-200">
              <ArrowRight className="size-4 stroke-2" />
            </span>
          </button>

          {receivedData && (
            <div className="mt-4 flex items-center gap-2">
              <p className="text-[16px] text-green-500 flex items-center gap-1">
                {receivedData}
                <Send className="size-5 stroke-2" />
              </p>
            </div>
          )}

          <div className="mt-8 hidden md:flex gap-2 ">
            <MoveLeft className="size-6 stroke-2" />
            <p className="text-[16px]">
              Alternatively, you can contact me on my socials
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
