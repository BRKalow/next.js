import { /* MDXRemote ,*/ compileMDX } from 'next-mdx-remote/rsc'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import Head from 'next/head'
import Link from 'next/link'
import CustomLink from './_components/CustomLink'
import { postFilePaths, getPostSource } from '../../../utils/mdxUtils'

import styles from './post.module.css'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  TestComponent: dynamic(() => import('./_components/TestComponent')),
}

export default async function PostPage({ params }) {
  const source = await getPostSource(params.slug)

  if (!source) notFound()

  // The compileMDX() function lets you access frontmatter outside of your content
  const { content, frontmatter } = await compileMDX({
    source,
    components,
    options: {
      parseFrontmatter: true,
      // Optionally pass remark/rehype plugins
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
    },
  })

  return (
    <>
      <header>
        <nav>
          <Link href="/">👈 Go back home</Link>
        </nav>
      </header>
      <div className={styles['post-header']}>
        <h1>{frontmatter.title}</h1>
        {frontmatter.description && (
          <p className={styles.description}>{frontmatter.description}</p>
        )}
      </div>
      <main>
        {content}
        {/* If you don't need access to frontmatter outside of your content, you can also pass raw MDX to <MDXRemote /> directly:
        <MDXRemote source={source} {components} /> */}
      </main>
    </>
  )
}

export const generateStaticParams = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ slug }))

  return paths
}
