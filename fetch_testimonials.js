import https from 'https';

https.get('https://biomarked.in/static/js/main.49e608a9.js', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    // Look for arrays of objects that look like testimonials
    const matches = data.match(/\{[^}]*name:"[^"]+"[^}]*review:"[^"]+"[^}]*\}/g);
    if (matches) {
      console.log("Found matches:", matches);
    } else {
      console.log("No matches found with 'review'. Trying 'testimonial' or 'quote'...");
      const matches2 = data.match(/\{[^}]*name:"[^"]+"[^}]*text:"[^"]+"[^}]*\}/g);
      if (matches2) console.log("Found matches2:", matches2);
      
      const matches3 = data.match(/\{[^}]*name:"[^"]+"[^}]*content:"[^"]+"[^}]*\}/g);
      if (matches3) console.log("Found matches3:", matches3);
      
      const matches4 = data.match(/\{[^}]*name:"[^"]+"[^}]*desc:"[^"]+"[^}]*\}/g);
      if (matches4) console.log("Found matches4:", matches4);
    }
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
