import fs from 'fs';
import path from 'path';

const files = [
  { "id": "1fyG77pBqQPwYzd69aEot94JwN_m6hxfx", "name": "Achin_Garg.jpeg" },
  { "id": "1WmTTvv-mY-zExdHNWbv4jwd_AGWEXzyj", "name": "Amit_Anand.jpg" },
  { "id": "11KQH7yUjWKxw09jXueMXLiEH860SC14Q", "name": "Kajal_Singh.jpeg" },
  { "id": "1RTxgN_qTcxHleBRUuUobU3M7IMFoAHMN", "name": "Karan_Mange.PNG" },
  { "id": "1heG-GGb7U-J-Ash1_8dKoVBf449UliRW", "name": "Kartikay_Kaushik.jpg" },
  { "id": "1BgoP5WFqZr-WrdwO4Uk7F81_lLLFH1P5", "name": "Kuldeep_IIT_Roorkee.PNG" },
  { "id": "1Xw7Cqbl75Eiu1S_-G3AGJyc3XiDt3EOX", "name": "Meghna_UK.jpeg" },
  { "id": "1nFRVeIj1ZrW9p0bAD-2-CbCRXPeFDfNs", "name": "Pranali_Gandhi.jpeg" },
  { "id": "1bdkGCee9fSzfVhkl-nOp1RQr36P2Ggv5", "name": "Raghav_Singal.jpg" },
  { "id": "1YySU66AN6fBZdsFVhLkmy4wrXsTeG_Eg", "name": "Rahul_Punia.jpg" },
  { "id": "19A9d4EUH82t9UPemam89xKaXNPPDQ1QA", "name": "Rohit_Gaur.jpeg" },
  { "id": "1YJbQ5__H_Mi9BZLRg9K1Ad1b67VwBkLo", "name": "Ruchi_Goil.jpg" },
  { "id": "1BdamoyXp_O15cuUdHBxgxpqrzkG19Z6J", "name": "Subham_Barnwal.jpg" },
  { "id": "1k51uXIV4D9UFpUA0qjF38m200YVcWlI1", "name": "Tanveer_Kaur.jpg" }
];

const publicDir = path.join(process.cwd(), 'public', 'testimonials');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

async function downloadFile(id, filename) {
  const url = `https://drive.google.com/uc?export=download&id=${id}`;
  const dest = path.join(publicDir, filename);
  
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
  
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(dest, Buffer.from(buffer));
}

async function main() {
  for (const file of files) {
    console.log(`Downloading ${file.name}...`);
    try {
      await downloadFile(file.id, file.name);
      console.log(`Downloaded ${file.name}`);
    } catch (e) {
      console.error(`Failed to download ${file.name}:`, e);
    }
  }
}

main();
