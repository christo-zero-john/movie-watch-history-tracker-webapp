# Contributing Guidelines

Thank you for considering contributing to **Movie Folio**! To keep the codebase clean, consistent, and easy to maintain, please follow these guidelines.

---

## 📦 Getting Started

1. **Fork** the repository and clone your fork.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```
---

## 🧑‍💻 Code Style

- **Use Prettier formatting** (2 spaces, single quotes, trailing commas where valid).
- **Use ES6+ syntax** (arrow functions, destructuring, etc.).
- **React Components:** Use functional components and hooks.
- **Naming:** Use `camelCase` for variables/functions, `PascalCase` for components.
- **Imports:** Group external imports first, then internal modules.
- **No unused variables** or imports.
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
