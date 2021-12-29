import getDistros from "../lib/db"

export default function Distros(props) {
    const { distros } = props
    return (
        <>
            <h1>Distribuciones GNU/Linux</h1>
            <p>El siguiente listado se obtiene de una base de datos SQLite:</p>
            <ul>
                {
                    distros.map(
                        (item) => <>
                            <li key={item.id}>{item.name} {item.version}</li>
                        </>
                    )
                }
            </ul>

        </>
    )
}

export async function getStaticProps() {
    const distros = getDistros()
    return {
        props: {
            distros
        }
    }
}
