import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    select *
    from "grades";
    `;
    const result = await db.query(sql);
    res.status(200).json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, 'gradeId must be an integer');
    }
    const sql = `
    select *
    from "grades"
    where "gradeId" = $1
    `;
    const result = await db.query(sql, [gradeId]);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, `gradeId not found`);
    }
    res.status(200).json(film);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!name || !course || !score) {
      throw new ClientError(400, 'name, course, and grade are required');
    }
    if (!Number.isInteger(Number(score))) {
      throw new ClientError(400, 'invalid score');
    }
    if (score < 0 && score > 100) {
      throw new ClientError(400, 'invalid grade');
    }
    const sql = `
  insert into "grades" ("name", "course", "score")
  values ($1, $2, $3)
  returning *
  `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    res.status(201).json(grade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    const { name, course, score } = req.body;

    if (!name || !course || !score) {
      throw new ClientError(400, 'name, course, and grade are required');
    }
    if (!Number.isInteger(Number(gradeId))) {
      throw new ClientError(400, 'invalid gradeId');
    }
    if (score < 0 && score > 100) {
      throw new ClientError(400, 'score must be between 0 and 100');
    }
    const sql = `
      update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
      where "gradeId" = $4
      returning *
    `;

    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const updatedGrade = result.rows[0];
    if (!updatedGrade) {
      throw new ClientError(404, `grade ID not found`);
    }
    res.status(200).json(updatedGrade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!gradeId) {
      throw new ClientError(400, 'invalid grade');
    }
    const sql = `
      delete from "grades"
      where "gradeId" = $1
      returning *
    `;
    const result = await db.query(sql, [gradeId]);
    if (result.rowCount === 0) {
      throw new ClientError(404, 'grade ID not found');
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
