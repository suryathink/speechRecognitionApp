import "./App.css";
import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

function App() {
  const [copyText, setCopyText] = useState("");
  const [isCopied, setCopied] = useClipboard(copyText, {
    successDuration: 1000,
  });

  const start = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  //  console.log(transcript)
  const stop = () => {
    SpeechRecognition.stopListening();
  };

  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  return (
    <>
      <div className="container">
        <h2>Automatic speech recognition</h2>
        <br />
        <p>
          This is my Automatic Speech Recognition web app!
          With just a click of a button, you can now easily convert your spoken
          words into text with unmatched speed and accuracy.
        </p>
        <div className="main-content" onClick={() => setCopyText(transcript)}>
          {transcript}
          {/* {console.log(transcript)} */}
        </div>

        <div className="btn-style">
          <button onClick={setCopied}>
            {isCopied ? " Text Copied!" : "Copy this Text"}
          </button>
          <button onClick={start}>Start Listening</button>
          <button onClick={SpeechRecognition.stopListening}>
            Stop Listening
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
