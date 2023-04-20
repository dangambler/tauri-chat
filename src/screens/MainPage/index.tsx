import { useState } from "react";
import { FIREBASE } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const MainPage: React.FC = () => {
  const [msg, setMSG] = useState("");
  const [name, setName] = useState("");

  const send = () => {
    if (!msg || !name) return;

    addDoc(collection(FIREBASE.db, "messages"), {
      name,
      message: msg,
    });
  };

  return (
    <div>
      <div style={{ flexDirection: "row" }}>
        <input
          placeholder="Name"
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <input
          placeholder="Message"
          onChange={(e) => setMSG(e.currentTarget.value)}
        />
        <button onClick={send}>Send</button>
      </div>
    </div>
  );
};

export default MainPage;
