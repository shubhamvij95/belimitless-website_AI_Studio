const fs = require('fs');

async function scrape() {
  const res = await fetch('https://drive.google.com/drive/folders/1aKQzvNs0PmGKKuGAOtgglXcKJApqsfyh');
  const text = await res.text();
  
  const matches = [...text.matchAll(/\[null,&quot;([a-zA-Z0-9_-]{33})&quot;\].{0,500}?&quot;([^&quot;]+\.jpg)&quot;/g)];
  
  const files = {};
  for (const match of matches) {
    files[match[2]] = match[1];
  }
  
  console.log(files);
}

scrape();
