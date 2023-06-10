import MailPage from './MailPage'

export default function ContactMail () {
  return (
    <>
      <section className='section section-with-shape-divider position-relative bg-dark border-0 m-0'>
        <div
          className='shape-divider shape-divider-reverse-x z-index-3'
          style={{ height: 102 }}
        >
          <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            x='0px'
            y='0px'
            viewBox='0 0 1920 102'
            preserveAspectRatio='xMinYMin'
          >
            <polygon
              fill='#F3F3F3'
              points='0,65 220,35 562,63 931,10 1410,68 1920,16 1920,103 0,103 '
            />
            <polygon
              fill='#EDEDED'
              points='0,82 219,51 562,78 931,26 1409,83 1920,32 1920,103 0,103 '
            />
          </svg>
        </div>
        <MailPage />
      </section>
    </>
  )
}
