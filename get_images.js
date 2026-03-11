async function scrape() {
  const res = await fetch('https://drive.google.com/drive/folders/1aKQzvNs0PmGKKuGAOtgglXcKJApqsfyh');
  const text = await res.text();
  
  const matches = [...text.matchAll(/\[null,&quot;([a-zA-Z0-9_-]{33})&quot;\].{0,1000}?\[&quot;([^&quot;]+)&quot;,null,true\]/g)];
  
  for (const match of matches) {
    console.log(`${match[2]}: ${match[1]}`);
  }
}

scrape();
