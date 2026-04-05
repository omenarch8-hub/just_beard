# Repository Guidelines

## Project Structure & Module Organization
This repository is currently a minimal scaffold with no application source, test suite, or build configuration checked in yet. Treat the repository root as the control point for future setup. When adding code, keep a predictable layout:

- `src/` for application code
- `tests/` for automated tests
- `assets/` for static files such as images or fixtures
- `docs/` for design notes or architecture decisions

Keep top-level clutter low. Prefer small, focused modules over large multi-purpose files.

## Build, Test, and Development Commands
There are no project-specific build or test commands yet. Until tooling is introduced, use basic repository checks:

- `ls -la` to inspect the working tree
- `find . -maxdepth 2 -type f` to review created files
- `git status` to confirm staged and unstaged changes

When adding a runtime or framework, document its primary commands here immediately, for example `npm test`, `pytest`, or `make build`.

## Coding Style & Naming Conventions
Use 4 spaces for indentation in prose-oriented or Python-style files, and follow the formatter defaults of the chosen language once tooling exists. Prefer:

- `snake_case` for files and directories
- `PascalCase` for classes and component-style types
- `camelCase` for variables and functions where that matches the language ecosystem

Keep filenames descriptive, for example `src/beard_parser.py` or `tests/test_beard_parser.py`. Do not introduce broad utility files without a clear need.

## Testing Guidelines
No testing framework is configured yet. Add tests alongside the first functional code change rather than postponing coverage. Place tests in `tests/` and mirror source names where possible, such as `tests/test_<module>.py` or `<name>.spec.ts`.

Every pull request that adds behavior should add or update tests. If tests are not possible yet, state the gap explicitly in the PR description.

## Commit & Pull Request Guidelines
Git history is empty, so use a simple conventional format from the start: `feat: add initial parser`, `fix: handle empty input`, `docs: add contributor guide`.

Pull requests should include:

- a short description of the change
- linked issue or task reference when available
- test evidence or a clear note that no tests exist yet
- screenshots only for visual changes
