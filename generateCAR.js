const { join } = require("path");
const fs = require("fs");

function generate() {
  const metadata = {
    image: "https://app.trace.top/image/car.png",
    image_url: "https://app.trace.top/image/car.png",
    animation_url: "https://app.trace.top/image/car.mp4",
    name: "Trace NFT Car",
    description: "Trace NFT Car.",
  };

  for (let i = 9999; i <= 14999; i++) {
    fs.writeFile(
      join(__dirname, "car", i + ""),
      JSON.stringify({
        ...metadata,
        ...{ name: `Trace NFT Car #${i}` },
      }),
      function (err) {
        if (err) throw err;
        console.log(`Complete ${i}`);
      }
    );
  }
}

generate();
