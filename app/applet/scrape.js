const fs = require('fs');

async function scrape() {
  const res = await fetch('https://drive.google.com/drive/folders/1aKQzvNs0PmGKKuGAOtgglXcKJApqsfyh');
  const text = await res.text();
  
  // The data is embedded in the HTML. We can use regex to find file IDs and names.
  // Pattern: "1bdkGCee9fSzfVhkl-nOp1RQr36P2Ggv5" ... "Raghav Singal.jpg"
  // Let's find all 33-char IDs and the next .jpg string
  
  const matches = [...text.matchAll(/\[null,&quot;([a-zA-Z0-9_-]{33})&quot;\].*?&quot;([^&quot;]+\.jpg)&quot;/g)];
  
  const files = {};
  for (const match of matches) {
    files[match[2]] = match[1];
  }
  
  console.log(files);
}

scrape();
