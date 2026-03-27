# Arabic YouTube Comments Generator API (Dynamic)

This project provides an API that returns a random Arabic YouTube comment. Unlike traditional APIs that store large datasets, this one **generates** comments dynamically on-the-fly using smart templates, providing over **1,000,000+** possible unique combinations without needing a large `comments.json` file.

## 🚀 Features
- **Zero Storage:** No massive JSON files to manage.
- **Fast:** Instant response from Netlify Functions.
- **High Variety:** Millions of possible combinations of prefixes, subjects, adjectives, and closing remarks.
- **CORS Enabled:** Can be used from any website.

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

## 🛠️ How to Deploy
1. Fork or Clone this repository.
2. Push to your GitHub.
3. Connect to **Netlify**.
4. Netlify will automatically deploy the function based on `netlify.toml`.

## 📂 Project Structure
- `netlify/functions/getcomment.js`: The logic that dynamically generates the comment.
- `netlify.toml`: Routing configuration.
- `package.json`: Project metadata.

## 🧪 Local Testing
You can test locally using the Netlify CLI:
```bash
npm install -g netlify-cli
netlify dev
```
Then visit `http://localhost:8888/getcomment`.
