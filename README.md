# 🎬 Movie Listing App

A modern **React + Vite** web application that fetches movie data from the **TMDB (The Movie Database) API**.  
Users can explore popular movies, search by title, and "like" their favorite movies to keep them saved for later.

---

## ✨ Features
- 🔍 Search movies by title using TMDB API  
- 🎞️ Browse popular & trending movies  
- ❤️ Like (favorite) movies and keep them stored locally  
- ⚡ Built with **Vite** for fast development and hot reload  
- 🎨 Responsive UI for a smooth user experience  

---

## 🛠️ Tech Stack
- **Frontend:** React + Vite  
- **Styling:** CSS / Tailwind (depending on your setup)  
- **API:** [TMDB API](https://developer.themoviedb.org/docs)  
- **State Management:** React hooks (`useState`, `useEffect`)  

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/movie-listing-app.git
cd movie-listing-app

### 2. Install dependencies

```bash
npm install
```

### 3. Configure API Key

Inside the `src/services/api.js` (or whichever service file you created),
replace `YOUR_API_KEY` with your TMDB API key:

```javascript
const API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  return res.json();
};

export const searchMovies = async (query) => {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  return res.json();
};
```



### 4. Run the app locally

```bash
npm run dev
```

The app will start on `http://localhost:5173/`

---


## 📂 Project Structure

```
movie-listing-app/
├── src/
│   ├── components/   # Reusable components (MovieCard, Navbar, etc.)
│   ├── pages/        # Page components
│   ├── services/     # API logic (with TMDB key)
│   ├── App.jsx       # Main entry point
│   └── main.jsx      # Vite/React bootstrap
├── public/           # Static assets
├── package.json
└── vite.config.js
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repo
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m "Add feature XYZ"`
4. Push branch: `git push origin feature-name`
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🙌 Acknowledgements

* [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing movie data
* [Vite](https://vitejs.dev/) for fast React development

```



