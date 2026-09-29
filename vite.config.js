import { readFileSync } from 'node:fs'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { githubUsername, projects as manualProjects } from './src/data.js'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'))

const VIRTUAL_ID = 'virtual:github-repos'
const RESOLVED_ID = '\0' + VIRTUAL_ID

// The portfolio repos themselves must never show up as portfolio projects.
const PORTFOLIO_REPOS = new Set(
  [pkg.name, `${pkg.name}-react`, 'nitheesh-portfolio', 'nitheesh-portfolio-react', 'portfolio'].map(
    (n) => n.toLowerCase(),
  ),
)

// Repo names already featured as hand-curated entries in `src/data.js`,
// extracted from their GitHub links so they aren't rendered twice.
function coveredRepoNames() {
  const covered = new Set()
  for (const project of manualProjects) {
    for (const link of project.links) {
      const match = link.url.match(/github\.com\/[^/]+\/([^/.]+)/i)
      if (match) covered.add(match[1].toLowerCase())
    }
  }
  return covered
}

function formatRepoName(name) {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

function pickIcon(repo) {
  const haystack = [repo.language, ...(repo.topics ?? [])].join(' ').toLowerCase()
  if (/(chat|rag|llm|agent|assistant|nlp|genai)/.test(haystack)) return 'chat'
  if (/(vision|detection|yolo|opencv|image|segment)/.test(haystack)) return 'camera'
  return 'code'
}

function normalizeUrl(url) {
  if (!url) return null
  const trimmed = url.trim()
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`
}

async function fetchAutoProjects() {
  try {
    const headers = {
      Accept: 'application/vnd.github+json',
      'User-Agent': `${pkg.name}-build`,
    }
    // Optional: raises the rate limit from 60 to 5,000 req/h when present.
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`

    const res = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?per_page=100&type=owner&sort=updated`,
      { headers },
    )
    if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`)

    const repos = await res.json()
    const covered = coveredRepoNames()

    const projects = repos
      .filter((r) => !r.fork && !r.archived)
      .filter((r) => typeof r.description === 'string' && r.description.trim() !== '')
      .filter((r) => !PORTFOLIO_REPOS.has(r.name.toLowerCase()))
      .filter((r) => !covered.has(r.name.toLowerCase()))
      .map((r) => {
        const homepage = normalizeUrl(r.homepage)
        return {
          id: `gh-${r.name}`,
          name: formatRepoName(r.name),
          desc: r.description.trim(),
          stack:
            r.topics?.length > 0
              ? r.topics.slice(0, 6).map(formatRepoName)
              : [r.language].filter(Boolean),
          links: [
            { label: 'repo', url: r.html_url },
            ...(homepage ? [{ label: 'live demo', url: homepage }] : []),
          ],
          icon: pickIcon(r),
          auto: true,
        }
      })

    console.log(`[github-repos] ${projects.length} auto-fetched project(s)`)
    return projects
  } catch (err) {
    console.warn(`[github-repos] ${err.message} — building without auto-fetched projects.`)
    return []
  }
}

// Resolves `virtual:github-repos` by pulling the GitHub repo list once per
// dev-server run / build, so new repos appear on the next build with no
// manual edits. Never fails the build — falls back to an empty list.
function githubRepos() {
  let pending
  return {
    name: 'github-repos',
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID
    },
    load(id) {
      if (id !== RESOLVED_ID) return
      pending ??= fetchAutoProjects()
      return pending.then((projects) => `export default ${JSON.stringify(projects)}`)
    },
  }
}

export default defineConfig({
  plugins: [react(), githubRepos()],
})
