import fs from 'fs';

export const uploadFile = (req, res) => {
  if (typeof req.file !== 'undefined') {
    res.json({
      code: 1,
      result: req.file.path,
    });
  } else {
    res.json({
      code: 0,
      error: 'null',
    });
  }
};

export const removeFile = (req, res) => {
  const filePath = req.body.path.trim();

  fs.unlink(filePath, (err) => {
    if (err) {
      res.json({
        code: 0,
        message: 'file not found',
      });
    } else {
      res.json({
        code: 1,
      });
    }
  });
};
