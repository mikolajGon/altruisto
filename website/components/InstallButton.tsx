import React from "react"
import { useCta } from "hooks/use-cta"

const InstallButton: React.FC = () => {
  const cta = useCta()
  return (
    <section id="are-you-ready">
      <div className="grey-box container py-5 px-md-3">
        <div className="row">
          <div className="col-md-6 text-center">
            <h2>Are you ready</h2>
            <h2 className="text-gradient pt-2">to make a difference?</h2>
          </div>
          <div className="col-md-6 mt-3 mt-md-0 column-center">
            <a href={cta} className="button install-button">
              Start helping
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstallButton
