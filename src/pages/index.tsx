import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): ReactNode {
  return (
    <Layout
      title="Aula de Desarrollo"
      description="Cursos de programación y desarrollo web"
    >
      <main>
        <header className="hero hero--primary">
          <div className="container">
            <h1 className="hero__title">Aula de Desarrollo</h1>

            <p className="hero__subtitle">
              Cursos de programación y desarrollo web
            </p>

            <div>
              <Link
                className="button button--secondary button--lg"
                to="/docs/lenguajes-de-marcas/html/introduccion"
              >
                Comenzar con Lenguajes de Marcas
              </Link>
            </div>
          </div>
        </header>

        <section className="container margin-vert--xl">
          <div className="row">
            <div className="col col--4">
              <h2>Lenguajes de Marcas</h2>
              <p>
                Aprende HTML, CSS, JavaScript y otras tecnologías
                relacionadas con el desarrollo web.
              </p>
            </div>

            <div className="col col--4">
              <h2>Programación Java</h2>
              <p>
                Fundamentos de programación, orientación a objetos,
                colecciones y mucho más.
              </p>
            </div>

            <div className="col col--4">
              <h2>Desarrollo en Entorno Servidor</h2>
              <p>
                Desarrollo de aplicaciones web utilizando Java,
                Spring y tecnologías relacionadas.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}