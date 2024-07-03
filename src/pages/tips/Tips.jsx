import styles from './Tips.module.css';

const Tips = [
  "No arrojes colillas de cigarro al suelo.",
  "Evita encender fogatas en áreas forestales.",
  "Mantén limpia tu área de acampada.",
  "Reporta cualquier indicio de incendio a las autoridades.",
  "No dejes botellas de vidrio en el campo.",
  "Haz fuego solo en áreas permitidas.",
  "Ten a mano herramientas para apagar fuego.",
  "No uses pirotecnia en zonas de vegetación.",
  "Respeta las señales de advertencia de incendios.",
  "Infórmate sobre el riesgo de incendios en tu zona.",
  "Despeja la vegetación alrededor de tu casa.",
  "En caso de incendio, evacúa inmediatamente.",
];

const leftTips = Tips.slice(0, Math.ceil(Tips.length / 2));
const rightTips = Tips.slice(Math.ceil(Tips.length / 2));

const Real_data = "Los incendios forestales son eventos naturales que pueden ser destructivos pero también juegan un papel ecológico importante. Cada año, se queman alrededor de 400 millones de hectáreas de tierra en todo el mundo. Estos incendios contribuyen al 70% de las emisiones de CO2 durante los meses de verano y la mayoría son causados por actividades humanas. A pesar de su impacto negativo, los incendios pueden ser beneficiosos para algunos ecosistemas, ayudando a germinar semillas y renovar vegetación. La gestión adecuada de los incendios es esencial para equilibrar sus beneficios y daños. La detección temprana mediante tecnologías como satélites y drones ha mejorado, ayudando a manejar los incendios de manera más efectiva.";

const PreventionTips = () => {
  return (
    <div className={styles.container}>
      <div className={styles.real_fire_data}>
        <h1>Datos Reales de Incendios</h1>
        <p>{Real_data}</p>
      </div>
      <div className={styles.prevention_tips}>      
        <div className={styles.column}>
          <h2>Tips de Prevención</h2>
          <ul>
            {leftTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h2>&nbsp;</h2>
          <ul>
            {rightTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PreventionTips;
