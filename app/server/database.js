const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../../dua_main.sqlite'); // Adjust path if needed

const closeConnection = () => {
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err.message);
    } else {
      console.log('Database connection closed.');
    }
  });
};

// Close connection gracefully on exit
process.on('SIGINT', closeConnection); // For Ctrl+C termination
process.on('SIGTERM', closeConnection); // For termination signals
