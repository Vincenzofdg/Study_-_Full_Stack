const { readFile, writeFile } = require('fs/promises');

const FILE = './talker.json'; 
const CREATED_STATUS = 201;
const ERROR_STATUS = 500;

const createTalker = async (req, res) => {
    const { name, age, talk } = req.body;
    
    try {
        const file = await readFile(FILE, 'utf-8').then((f) => JSON.parse(f));
        const obj = {
            name,
            age,
            id: (file.length + 1),
            talk,
        };
        await writeFile(FILE, JSON.stringify([...file, obj]));
        res.status(CREATED_STATUS).json(obj);
    } catch (error) {
        res.status(ERROR_STATUS).end();
    }
};

module.exports = createTalker;