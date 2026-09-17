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
          </div>
        </header>

        <section className="container margin-vert--xl">
          <div className="row">

            {/* Lenguajes de Marcas */}
            <div className="col col--4 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <h2>Lenguajes de Marcas</h2>
                </div>

                <div className="card__body">
                  <p>
                    Aprende HTML, CSS y otras tecnologías relacionadas
                    con el desarrollo web.
                  </p>
                </div>

                <div className="card__footer">
                  <Link
                    className="button button--primary button--block"
                    to="/lenguajes-de-marcas/html/introduccion"
                  >
                    Entrar al curso
                  </Link>
                </div>
              </div>
            </div>

            {/* Programación */}
            <div className="col col--4 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <h2>Programación</h2>
                </div>

                <div className="card__body">
                  <p>
                    Aprende los fundamentos de programación con Java,
                    orientación a objetos, colecciones y mucho más.
                  </p>
                </div>

                <div className="card__footer">
                  <Link
                    className="button button--primary button--block"
                    to="/programacion-java/introduccion"
                  >
                    Entrar al curso
                  </Link>
                </div>
              </div>
            </div>

            {/* Desarrollo en Entorno Servidor */}
            <div className="col col--4 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <h2>Desarrollo en Entorno Servidor</h2>
                </div>

                <div className="card__body">
                  <p>
                    Aprende desarrollo de aplicaciones web en entorno
                    servidor y las tecnologías relacionadas.
                  </p>
                </div>

                <div className="card__footer">
                  <Link
                    className="button button--primary button--block"
                    to="/desarrollo-servidor/ut1-arquitectura-web/arquitectura-aplicaciones-web"
                  >
                    Entrar al curso
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </Layout>
  );
}