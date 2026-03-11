import puppeteer from 'puppeteer';
import fs from 'fs';

async function scrape() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://drive.google.com/drive/folders/1aKQzvNs0PmGKKuGAOtgglXcKJApqsfyh?usp=drive_link', { waitUntil: 'networkidle2' });
  
  // Scroll down to load all items
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if(totalHeight >= scrollHeight - window.innerHeight){
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
  
  // Extract file names and IDs
  const files = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll('div[data-id]'));
    return items.map(item => ({
      id: item.getAttribute('data-id'),
      name: item.getAttribute('aria-label') || item.innerText
    })).filter(f => f.id && f.name);
  });
  
  console.log(JSON.stringify(files, null, 2));
  await browser.close();
}

scrape().catch(console.error);
