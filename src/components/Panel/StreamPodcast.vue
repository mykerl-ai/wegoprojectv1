<template>
  <main>
    <div class="w-1/2 shadow-lg py-2 px-2 mt-4 cursor-pointer">
      Start Stream
    </div>

    <div id="basic" style="text-align:center;">
      <video ref="video" autoplay="" controls></video>
      <audio ref="audio" autoplay=""></audio>
      <div class="space-x-10">
        <button @click="startStream()">Start</button>
        <button class="">Hide Camera</button>
        <button @click="stopStream()">Stop</button>
      </div>
    </div>

    <div>
      <p>Demo Stream</p>
      <div>
        <video id="video2" ref="video2" autoplay="" controls></video>
        <audio id="audio2" ref="audio2" autoplay=""></audio>
        <button @click="connectStream()">Connect to Stream</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      arrayOfBlobs: [],
    };
  },
  computed: {},

  methods: {
    startStream() {
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
          video: true,
        })
        .then((stream) => {
          console.log(stream, "wtf");
          window.localStream = stream;
          this.$refs.video.srcObject = stream;
          this.$refs.audio.srcObject = stream;

          // use MediaStream Recording API (Send blob every 5 seconds)
          const recorder = new MediaRecorder(stream);

          // fires every one second and passes an BlobEvent
          recorder.ondataavailable = async (event) => {
            // get the Blob from the event
            const blob = await event.data.arrayBuffer();
            this.arrayOfBlobs.push(blob);
            // console.log(blob, "blobby");

            // and send that blob to the server...
          };

          // make data available event fire every one second
          recorder.start(1000);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    stopStream() {
      localStream.getVideoTracks()[0].stop();
      this.$refs.video.src = "";

      localStream.getAudioTracks()[0].stop();
      this.$refs.audio.src = "";
    },

    connectStream() {
      var arrayOfBlobs = this.arrayOfBlobs;
      setInterval(function() {
        // arrayOfBlobs.append(nextChunk());
        // NEW: Try to flush our queue of video data to the video element
        appendToSourceBuffer();
      }, 1000);

      var mediaSource = new MediaSource();

      var url = URL.createObjectURL(mediaSource);

      var video = document.getElementById("video2");
      var audio = document.getElementById("audio2");
      video.src = url;
      audio.src = url;

      var sourceBuffer = null;
      var audioSourceBuffer = null;
      mediaSource.addEventListener("sourceopen", function() {
        // NOTE: Browsers are VERY picky about the codec being EXACTLY
        // right here. Make sure you know which codecs you're using!
        sourceBuffer = mediaSource.addSourceBuffer(
          "video/webm; codecs=opus,vp8;"
        );
        // audioSourceBuffer = mediaSource.addSourceBuffer(
        //   "audio/mpeg;"
        // );

        // If we requested any video data prior to setting up the SourceBuffer,
        // we want to make sure we only append one blob at a time
        sourceBuffer.addEventListener("updateend", appendToSourceBuffer);
        // audioSourceBuffer.addEventListener("updateend", appendToSourceBuffer);
      });

      function appendToSourceBuffer() {
        if (
          mediaSource.readyState === "open" &&
          sourceBuffer &&
          sourceBuffer.updating === false
        ) {
          sourceBuffer.appendBuffer(arrayOfBlobs.shift());
        }

        // Limit the total buffer size to 20 minutes
        // This way we don't run out of RAM
        if (
          video.buffered.length &&
          video.buffered.end(0) - video.buffered.start(0) > 1200
        ) {
          sourceBuffer.remove(0, video.buffered.end(0) - 1200);
        }

        if (
          audio.buffered.length &&
          audio.buffered.end(0) - audio.buffered.start(0) > 1200
        ) {
          sourceBuffer.remove(0, audio.buffered.end(0) - 1200);
        }
      }
    },
  },

  mounted() {},
};
</script>
