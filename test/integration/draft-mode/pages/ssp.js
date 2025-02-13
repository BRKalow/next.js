import Link from 'next/link'

export function getServerSideProps({ res, draftMode }) {
  // test override header
  res.setHeader('Cache-Control', 'public, max-age=3600')
  return {
    props: {
      random: Math.random(),
      draftMode: Boolean(draftMode).toString(),
    },
  }
}

export default function SSP(props) {
  return (
    <>
      <h1>Server Side Props</h1>
      <p>
        Draft Mode: <em id="draft">{props.draftMode}</em>
      </p>
      <p>
        Random: <em id="rand">{props.random}</em>
      </p>
      <Link href="/">Go home</Link>
    </>
  )
}
