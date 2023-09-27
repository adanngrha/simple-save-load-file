import fsPromises from 'fs/promises';
import path from 'path';

const dataPath = path.join(process.cwd(), 'save.json');

export default async function handler(req, res) {
  if (req.method === 'GET') { 
    const jsonData = await fsPromises.readFile(dataPath);
    const objectData = JSON.parse(jsonData);

    res.status(200).json(objectData);
  }
  
  if (req.method === 'POST') {
    try {
      const updatedData = JSON.stringify({
        "users": req.body
      });

      await fsPromises.writeFile(dataPath, updatedData);

      res.status(200).json({ message: 'Data saved!' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  } 
}