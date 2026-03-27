const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    const commentsPath = path.resolve(__dirname, '../../comments.json');
    
    if (!fs.existsSync(commentsPath)) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "comments.json not found. Please run generator.py and add the file to the project root." }),
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      };
    }

    const data = fs.readFileSync(commentsPath, 'utf8');
    const comments = JSON.parse(data);
    const randomComment = comments[Math.floor(Math.random() * comments.length)];

    return {
      statusCode: 200,
      body: JSON.stringify({ comment: randomComment }),
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error", message: error.message }),
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    };
  }
};
