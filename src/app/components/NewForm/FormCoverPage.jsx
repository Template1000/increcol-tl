import Form from './Form'

export default function FormCoverPage () {
  return (
    <div className="row">
      <div className="col-xl-7 ms-xl-auto z-index-10">
        <div className="bg-color-grey h-100 w-lg-75pct rounded-4">
          <div
            className="text-center text-md-start p-5 h-100 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={750}
          >
            <h2 className="text-color-primary font-weight-bold text-5 mb-0 mt-1 mt-lg-0">
              ¡Contáctanos Ya!
            </h2>
            <p className="text-3 font-weight-medium mb-2">
              Solicite un asesor en minutos...
            </p>
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}
