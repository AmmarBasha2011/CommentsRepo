# Arabic YouTube Comments Generator API (V2 - 1 Billion+)

This is **Version 2.0** of the Arabic YouTube Comments API. It now supports over **1,000,000,000 (1 Billion)** possible unique-ish comment combinations through an expanded set of dynamic templates and word lists.

## 🚀 What's New in V2?
- **Combinatorial Explosion:** Increased word lists (subjects, adjectives, impacts, origins, reactions, timeframes) to reach 1 Billion+ combinations.
- **Improved Context:** Added regional origins (e.g., "from Saudi Arabia", "from Egypt") and emotional reactions.
- **Enhanced Variety:** 16 distinct sentence templates with multiple variable slots.
- **Ultra Lightweight:** Still zero storage required. Everything is generated on-the-fly.

## 📡 API Endpoints

### Get Random Comment
- **Endpoint:** `/getcomment`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "comment": "من أجمل ما شاهدت اليوم، فيديو رائع بـ إخراج أسطوري.",
    "version": "2.0.0",
    "combinations": "1 Billion+"
  }
  ```

## 🛠️ Deployment
Same as V1. Push to GitHub and connect to Netlify.

## 📂 Project Structure
- `netlify/functions/getcomment.js`: The V2 logic with massive word lists.
- `netlify.toml`: Routing.
- `package.json`: Metadata.

## 🧪 Local Testing
```bash
netlify dev
```
Then visit `http://localhost:8888/getcomment`.
