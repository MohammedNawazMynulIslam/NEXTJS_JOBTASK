const express = require('express');
const app = express();

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database/dua_main.sqlite', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database.');

        const data =  db.all('SELECT * FROM category', (err, rows) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log('Retrieved data:', rows);
            }
        });


        app.get('/api/categories', async (req, res) => {
          try {
            const rows = await db.all('SELECT * FROM category');
            res.json(rows);
          } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Failed to retrieve categories' });
          }
        });
        const port = 3001; // Or your desired port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

    }
});
