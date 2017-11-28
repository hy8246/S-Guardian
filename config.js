var config = {
        plugins: [
         "video-png"
          ,"video-stream"  // Display the video as a native h264 stream decoded in JS 
          , "hud"           // Display the artificial horizon, altimeter, compass, etc.
          , "battery"       // Display a simple battery widget in the header bar
          , "pilot"         // Pilot the drone with the keyboard
          , "facedetection"
          , "tracker"
         
        ],

        // Config for pilot plugin
        keyboard: 'azerty',

        // Config for blackbox plugin. Path is an existing folder where to store mission data
        // Each new mission will have its own timestamped folder.
        blackbox: 
        {
            path: "/tmp"
        },

        // Config for replay plugin. Path points to a specific mission folder to be replayed.
        replay: {
            path: "/tmp/"
        }
};

module.exports = config;

