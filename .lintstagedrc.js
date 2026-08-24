export default {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{json,md,yml,yaml}": ["prettier --write"],
  "apps/api/**/*.py": ["uv run ruff check --fix", "uv run ruff format"]
};
