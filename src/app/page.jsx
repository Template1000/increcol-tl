import Script from 'next/script'
import Main from './containers/Main/Main'
import ScriptLoader from './components/ScriptLoader'

export default function Home () {
  return (
    <>
      <Main />
      <Script src='/js/plugins/js/plugins.min.js' />
      {/* <Script src='/js/owl.carousel.js' /> */}
      <Script src='/js/theme.js' />
      <ScriptLoader src='/js/theme.js' />
      <ScriptLoader src='/js/theme.init.js' />
    </>
  )
}
