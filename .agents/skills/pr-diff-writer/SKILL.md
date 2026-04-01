---
name: pr-diff-writer
description: Generates English pull request titles and bodies by comparing the current branch with main. Use when the user asks to draft PR content, summarize branch changes, or produce a PR title/body from git diff.
---

# PR Diff Writer

## Purpose

Create an English PR title and PR body by analyzing the current branch against `main`.

## When To Use

Use this skill when the user asks things like:

- "Generate PR title/content"
- "Summarize current branch for PR"
- "Write PR body from diff with main"
- "Draft a pull request description"

## Workflow

Follow these steps in order:

1. Identify branch and base:
   - Get current branch name.
   - Prefer `origin/main` as the base if available.
   - Fallback to local `main` if remote base is unavailable.

2. Gather change context:
   - Commit history between base and `HEAD`.
   - File-level changes (added/modified/deleted).
   - Key code diff hunks that affect behavior, API, tests, docs, or build.

3. Determine PR intent:
   - Classify dominant change type: `feat`, `fix`, `docs`, `chore`, `refactor`, `perf`, or `test`.
   - Identify affected package scopes:
     - `@agentscope-ai/design` (`packages/spark-design`)
     - `@agentscope-ai/chat` (`packages/spark-chat`)
     - `@agentscope-ai/flow` (`packages/spark-flow`)
     - `@agentscope-ai/clawd-chat-ui` (`packages/clawd-chat-ui`)
     - Repository-only engineering changes

4. Draft title:
   - Must be in English.
   - Use Conventional Commit style when possible, for example:
     - `feat(chat): add session API fallback for starter runtime`
     - `fix(design): correct dropdown keyboard navigation state`
   - Keep it concise and specific (usually <= 72 chars preferred).

5. Draft PR body:
   - Must be fully in English.
   - Use this structure:

```markdown
## Change Type

- [ ] feat (new feature)
- [ ] fix (bug fix)
- [ ] docs (documentation)
- [ ] chore (build/deps/infra)
- [ ] refactor (code refactoring)
- [ ] perf (performance)
- [ ] test (tests)

## Affected Scope (Required)

- [ ] `@agentscope-ai/design` (`packages/spark-design`)
- [ ] `@agentscope-ai/chat` (`packages/spark-chat`)
- [ ] `@agentscope-ai/flow` (`packages/spark-flow`)
- [ ] `@agentscope-ai/clawd-chat-ui` (`packages/clawd-chat-ui`)
- [ ] Repository-only changes (no npm package impact)

## Description

<!-- What changed, why, and notable implementation details -->

## Validation

- [ ] Verified locally: `pnpm run lint`
- [ ] Verified locally: `pnpm run build`
- [ ] Verified locally (if applicable): `pnpm run docs:build`

## Release Impact (Maintainer)

- [ ] Release required
- [ ] No release required
```

6. Add concise, evidence-based summary:
   - Mention meaningful user-facing behavior changes.
   - Mention risk areas and compatibility concerns if any.
   - Mention tests added/updated or why tests are not needed.

## Output Requirements

- Always output both:
  - `PR Title: ...`
  - `PR Body:` (full markdown block)
- English only for title and body text.
- Do not invent changes not present in the diff.
- If diff is empty, state that clearly and ask for guidance.

## Quality Checklist

Before final output, verify:

- Title matches dominant change intent.
- Body checkboxes are aligned with actual changes.
- Affected scope includes every touched package.
- Description explains "why" and not only "what".
- All generated PR text is in English.
