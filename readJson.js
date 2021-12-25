import fs from 'fs/promises';

export default async function readJson() {
  try {
    const data = await fs.readFile('./details.json');
    const res = await JSON.parse(data.toString());
    return res;
  } catch (error) {
    throw error;
  }
}
