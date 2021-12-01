import Navigation from './nav'


export default function Layout({ children }) {
  return (
    <>
      <Navigation/>
      <main>{children}</main>

    </>
  )
}