# Contributing Guidelines

Thank you for considering contributing to **Movie Folio**! To keep the codebase clean, consistent, and easy to maintain, please follow these guidelines.

---

## 📦 Getting Started

1. Clone the repository

```bash
git clone https://github.com/christo-zero-john/movie-watch-history-tracker-webapp.git
cd movie-watch-history-tracker-webapp
```

2. Create your feature branch (`git checkout -b feature/AmazingFeature`)

3. Install dependencies

```bash
npm install
# or
pnpm install
```

4. Create a `.env` file in the root directory and add your [TMDB API key](https://www.themoviedb.org/settings/api) (Make sure you [register for an API key](https://www.themoviedb.org/settings/api)). Save your TMDB TOKEN as `VITE_TMDB_TOKEN` in the `env` file.

```env
VITE_TMDB_TOKEN = your_api_key_here
```

5. Start the development server

```bash
npm run dev
# or
pnpm dev
```

6. Explore the issues in the repository or add your recommendations as a new issue and start developing.

> **Note:** Once you choose to work on an issue, assign it to yourself or request to be assigned, so that others know that you are working on it. It is recommended to work on issues that no one else is working on.

7. Commit your changes (`git commit -m 'Add some AmazingFeature'`)

8. Push to the branch (`git push origin feature/AmazingFeature`)
9. Open a Pull Request to the `main` branch.

---

## 🧑‍💻 Code Style

- **Use Prettier formatting** (2 spaces, single quotes, trailing commas where valid).
- **Use ES6+ syntax** (arrow functions, destructuring, etc.).
- **React Components:** Use functional components and hooks.
- **Naming:** Use `camelCase` for variables/functions, `PascalCase` for components, and words seperated by hyphen(`-`) all in small letters for file names. You can use camelCase for JS class modules.
- **Imports:** Group external imports first, then internal modules.
- **Remove all unused variables or imports.**
- **Prefer `const`** over `let` unless reassignment is needed.
- **Add JSDoc comments** for complex functions or modules.

---

## 📝 Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) style:

```
<type>(scope): short description

[optional body]
[optional footer]
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Formatting, missing semi colons, etc.
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `test`: Adding or updating tests
- `chore`: Build process or auxiliary tool changes

**Examples:**

```
feat(dashboard): add genre analysis chart
fix(movie-details): handle missing poster images
docs: update README with new usage instructions
```

- Before opening a pull request try grouping all commits related to a specific feature into one single commit, to avoid complexity.

---

## 🚦 Pull Requests

- Open pull requests into main branch only.
- Ensure your branch is up to date with `main`.
- Open a pull request with a clear description of your changes. Open pull requests to the main branch.
- Reference related issues (e.g., `Closes #12`).
- Be responsive to feedback and make requested changes.

#### NOTE: NEVER MAKE CREATE PULL REQUESTS TO `production` BRANCH. IT WILL NEVER BE MERGED. ONLY PULL TO `main` BRANCH.

---

## 💡 Additional Tips

- Keep pull requests focused and small.
- If you’re unsure about a feature or fix, open an issue first to discuss.
- Be respectful and constructive in code reviews and discussions.

---

Thank you for helping make **Movie Folio** awesome!  
If you have any questions, feel free to open an issue or contact the maintainers.
