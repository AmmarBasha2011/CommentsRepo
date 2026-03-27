# Arabic YouTube Comments Generator API

This project provides an API that returns a random Arabic YouTube comment from a list of 1,000,000 generated comments. It is designed to be deployed on **Netlify** using Netlify Functions.

## 🚀 Getting Started

### 1. Generate the Comments
Due to the large file size, you need to generate the `comments.json` file yourself (e.g., on Google Colab if your local machine is limited).

1. Copy the content of `generator.py`.
2. Run it in your preferred Python environment (Python 3.x).
3. It will create a `comments.json` file in the same directory.
4. Place this `comments.json` file in the root directory of this project.

### 2. Deployment on Netlify
1. Push this repository to GitHub.
2. Connect your GitHub repository to Netlify.
3. Netlify will automatically detect the `netlify.toml` and configure the functions.

## 📡 API Endpoints

### Get Random Comment
- **Endpoint:** `/getcomment`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "comment": "فيديو رائع جداً، استمر يا بطل!"
  }
  ```

## 📂 Project Structure
- `generator.py`: Python script to generate 1,000,000 comments.
- `netlify/functions/getcomment.js`: The API logic for Netlify.
- `netlify.toml`: Configuration for Netlify deployment and routing.
- `package.json`: Node.js dependencies.

## ⚠️ Important Note
Make sure `comments.json` is present in the root folder before deploying, or the API will return a 404 error. Note that large JSON files might exceed Netlify's bundle size limit (typically 50MB); if this happens, consider splitting the file or using a database.
