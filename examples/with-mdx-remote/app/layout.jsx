import './style.css'

export const metadata = {
  title: 'next-mdx-remote example',
}

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <div className="wrapper">{children}</div>
      </body>
    </html>
  )
}
