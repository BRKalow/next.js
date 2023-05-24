import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts')

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))

export function getPosts() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      frontmatter: data,
      filePath,
    }
  })

  return posts
}

// This method will attempt to read a file and return its mdx content
export const getPostSource = async (slug) => {
  try {
    const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`)
    const source = fs.readFileSync(postFilePath, 'utf-8')

    return source
  } catch {}
}
