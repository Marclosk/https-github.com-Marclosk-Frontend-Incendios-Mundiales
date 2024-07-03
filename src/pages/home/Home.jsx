import ActiveFiresMap from "../../components/map/ActiveFiresMap";
import './home.css'

const Home = () => {
    return (
        <>
            <section className="title container">
                <h1>Mapa en Tiempo Real de Incendios: Mantente Informado, Mantente Seguro</h1>
            </section>
            <ActiveFiresMap />
        </>
    );
};

export default Home;
