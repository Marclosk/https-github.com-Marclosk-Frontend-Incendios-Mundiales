import Map from "../../components/map/Map";
import "./home.css";

const Home = () => {
    return (
        <>
            <section className="container seccion-mapa">
                <h1>Focos Activos en España</h1>
                <Map />
            </section>
            <section></section>
        </>
    );
};

export default Home;
