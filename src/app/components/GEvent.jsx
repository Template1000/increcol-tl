'use client'

import Script from 'next/script'

const GoogleEvent = ({ GA_TRACKING_ID }) => {
  return (
    <Script id='google-event' strategy='afterInteractive'>
      {`
      gtag('event', 'conversion', {'send_to': '${GA_TRACKING_ID}/JU0kCNCagL0YEI636vop'});
      `}
    </Script>
  )
}

export default GoogleEvent
