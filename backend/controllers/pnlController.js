const db = require('../models/db');

exports.getClientPnl = (req, res) => {
  const userId = req.user.id;
  db.query('SELECT * FROM pnl_records WHERE user_id = ?', [userId], (err, results) => {
    if (err) return res.sendStatus(500);
    res.json(results);
  });
};

exports.uploadManualPnl = (req, res) => {
  const { user_id, month, year, invested, current, profit_loss } = req.body;
  db.query(
    'INSERT INTO pnl_records (user_id, month, year, invested_amount, current_value, profit_loss) VALUES (?, ?, ?, ?, ?, ?)',
    [user_id, month, year, invested, current, profit_loss],
    (err) => {
      if (err) return res.sendStatus(500);
      res.json({ message: 'P&L Uploaded' });
    }
  );
};
