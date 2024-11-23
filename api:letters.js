let letters = []; // 메모리에 편지 저장 (임시 데이터베이스 대체)

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { text, timestamp } = req.body;
    const letter = { text, timestamp };
    letters.push(letter);
    res.status(201).json(letter); // 저장된 편지 반환
  } else if (req.method === 'GET') {
    res.status(200).json(letters); // 저장된 모든 편지 반환
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
const apiUrl = 'https://kamarie.vercel.app';
