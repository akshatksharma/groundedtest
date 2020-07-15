import AudioRecorder from "audio-recorder-polyfill";
import { isMobileSafari, isSafari } from "react-device-detect";

const recordAudio = () =>
  new Promise(async (resolve, reject) => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    let mediaRecorder = null;

    if (isMobileSafari || isSafari) {
      mediaRecorder = new AudioRecorder(stream);
      console.log("onsafari");
    } else mediaRecorder = new MediaRecorder(stream);

    console.log(mediaRecorder);
    const audioChunks = [];

    // mediaRecorder.addEventListener("dataavailable", (event) => {
    //   audioChunks.push(event.data);
    // });

    mediaRecorder.addEventListener("dataavailable", stop);

    const start = () => {
      mediaRecorder.start();
    };

    const pause = () => mediaRecorder.pause();

    const resume = () => mediaRecorder.resume();

    const stop = (event) =>
      new Promise((resolve) => {
        mediaRecorder.addEventListener("stop", () => {
          console.log("chunks");
          console.log(audioChunks);
          // const audioBlob = new Blob(audioChunks);
          // console.log("blob");
          // console.log(audioBlob);
          const audioURL = URL.createObjectURL(event.data);
          console.log("url");
          console.log(audioURL);
          const audio = new Audio(audioURL);
          const play = () => audio.play();
          resolve({ audioBlob, audioURL, play });
        });
        mediaRecorder.stop();
        stream.getTracks().forEach((track) => track.stop());
      });

    resolve({ start, stop, pause, resume });
  });

export default recordAudio;
