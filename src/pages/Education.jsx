import Container from '../layouts/Container'
import db from '../../public/db/db.json'
const { education } = db

export default function Studies() {
  return (
    <Container>
        <h1 className="mt-5 text-4xl text-slate-200 font-bold">Education</h1>
        <ul className="timeline">
          {education?.map((study, index) => (
            <div key={study.id} className="container left">
              <div className="content">
                <li data-content="📚">
                  <div className="prettyscroll mb-8 pr-4 overflow-y-auto text-left">
                    <h3 className="text-lg font-semibold text-slate-300">{study.title}</h3>
                    <p className="text-secondary text-right text-sm mb-2">
                      {study.center}
                    </p>
                    <p className="text-sm">{study.description}</p>
                    <p>{study.id}</p>
                    <div className="divider" />
                  </div>
                </li>
              </div>
            </div>
          ))}
        </ul>
    </Container>
  )
}
