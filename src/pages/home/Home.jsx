import Map from "../../components/map/Map";
import './home.css'

const Home = () => {
    return (
        <>
            <section className="title container">
                <h1>Mapa en Tiempo Real de Incendios: Mantente Informado, Mantente Seguro</h1>
            </section>
            <Map />
        </>
    );
};

export default Home;
