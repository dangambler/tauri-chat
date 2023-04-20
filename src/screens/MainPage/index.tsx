import { useState } from "react";
import { FIREBASE } from "../../config/firebase";
import {
  Timestamp,
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

type Message = {
  name: string;
  message: string;
  time?: Timestamp;
};

const MainPage: React.FC = () => {
  const [msg, setMSG] = useState("");
  const [name, setName] = useState("");

  const col = collection(FIREBASE.db, "messages");
  const q = query(col, orderBy("time"));

  // Type 'DocumentData' is not assignable to type 'Message'.
  // ..yeah, couldn't care less
  // @ts-ignore
  const [messages, loading, error] = useCollectionData<Message>(q);

  const send = () => {
    if (!msg || !name) return;

    addDoc(collection(FIREBASE.db, "messages"), {
      name,
      message: msg,
      time: serverTimestamp(),
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
      {loading && <p>Loading..</p>}
      {error && <p style={{ color: "red" }}>Err: {error.message}</p>}
      {messages && messages.length > 0
        ? messages
            .slice()
            .reverse()
            .map((msg) => (
              <p>
                {msg.name}: {msg.message + " "}
                {msg.time && (
                  <span style={{ backgroundColor: "black", color: "white" }}>
                    ({msg.time.toDate().toUTCString()})
                  </span>
                )}
              </p>
            ))
        : null}
    </div>
  );
};

export default MainPage;
