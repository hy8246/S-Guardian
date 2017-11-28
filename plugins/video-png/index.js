function video(name, deps) {
    
    var latestImage;
    var frameCounter = 0;
    var period = 5000; // Save a frame every 5000 ms.
    var lastFrameTime = 0;
    // Add a new route to fetch camera image
    deps.app.get('/camera/:id', function(req, res) 
    {
      res.writeHead(200, {'Content-Type': 'image/png'});
      return res.end(latestImage, "binary");
    });

    // Add a handler on images update
    deps.client.getPngStream()
      .on('error', console.log)
      .on('data', function(frame) 
      { 
        latestImage = frame; 
      var now = (new Date()).getTime();
      if (now - lastFrameTime > period) {
      frameCounter++;
      lastFrameTime = now;
      console.log('Saving frame');
      fs.writeFile('frame' + frameCounter + '.png', frame, function(err) {
        if (err) {
          console.log('Error saving PNG: ' + err);
        }
      });
    }

    }); 
};

module.exports = video;
