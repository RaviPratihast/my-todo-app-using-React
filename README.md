# Personal Note

Personal Note is a React note-taking app with authentication, rich text editing, archive/bin flows, responsive layouts, and a card detail experience for reading long notes comfortably.

## Features

- Auth flow with login, signup, and guest login
- Header avatar for logged-in user (including guest)
- Create notes with rich text editor (Quill)
- Search notes by title
- Archive / unarchive notes
- Move notes to bin / restore / delete permanently
- Responsive layouts for desktop and mobile
- Click a card to open a full detail modal view
- Dot-grid workspace background on Notes, Archive, and Bin

## Tech Stack

- React 18
- React Router DOM
- React Quill
- React Toastify
- React Icons + MUI Icons
- Plain CSS (component/page scoped styles)

## Getting Started

### 1) Clone and install

```bash
git clone https://github.com/RaviPratihast/my-todo-app-using-React.git
cd my-todo-app-using-React
npm install
```

### 2) Run locally

```bash
npm start
```

App runs at [http://localhost:3000](http://localhost:3000).

### 3) Build for production

```bash
npm run build
```

## Scripts

- `npm start` - run development server
- `npm run build` - create production build
- `npm test` - run tests

## Project Structure (high level)

- `src/Pages` - page-level screens (Notes, Archive, Bin, Login, SignIn, Landing)
- `src/components` - reusable UI pieces (Header, Sidenav, Cards, Input, Search)
- `src/Context` - app state contexts (auth + notes)
- `src/Reducers` - reducer logic for auth and notes
- `public` - static assets (including `image-landing.jpeg` and `Dot grid@2x.png`)

## Notes

- Default demo credentials in current setup: `a / 1`
- Guest login is available from login screen

## Resources

- [Material Symbols & Icons](https://fonts.google.com/icons)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Quill](https://github.com/zenoamaro/react-quill)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
