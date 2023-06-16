import { db } from "../db.js";

export const getExpense = (_, res) => {
  const q = "SELECT * FROM pnl where color = 'error'";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};


export const getIncome = (_, res) => {
  const q = "SELECT * FROM pnl where color = 'success'";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getNetIncome = (_, res) => {
  const q = "select '' as type,  IFNULL(sum(case when color = 'error' then - value else value end), 0) as value from pnl";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getTotal = (_, res) => {
  const q = "select type,  sum(value) as value from (SELECT case when color = 'error' then 'Total Expense' when color = 'success' then 'Total Revenue' end as type, sum(value+0) as value FROM pnl group by color union SELECT  'Total Expense'  type, 0 as value FROM pnl union SELECT  'Total Revenue'  type, 0 as value FROM pnl) base where type = 'Total Revenue' group by type;";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getTotalExpanse = (_, res) => {
  const q = "select type,  sum(value) as value from (SELECT case when color = 'error' then 'Total Expense' when color = 'success' then 'Total Revenue' end as type, sum(value+0) as value FROM pnl group by color union SELECT  'Total Expense'  type, 0 as value FROM pnl union SELECT  'Total Revenue'  type, 0 as value FROM pnl) base where type = 'Total Expense' group by type;";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO pnl(`name`, `color`, `icon`, `value`) VALUES(?)";

  const values = [
    req.body.description,
    req.body.record_type,
    req.body.icon,
    req.body.amount,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Record Included");
  });
};



export const deleteUser = (req, res) => {
  const q = "DELETE FROM pnl WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Register deleted");
  });
};
