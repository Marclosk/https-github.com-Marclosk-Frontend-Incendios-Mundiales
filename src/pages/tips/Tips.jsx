import styles from './Tips.module.css';
import botella from '../../images/botella.jpg'
import fuego from '../../images/fuego.jpg'
import bomberos from '../../images/bomberos.jpg'

const TIPS = [
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

const IMAGES = [
  botella,
  fuego,
  bomberos
];

const PreventionTips = () => (
  <div className={styles.container}>
    <div className={styles.prevention_tips}>
      <h2>Tips de Prevención</h2>
      <div className={styles.tips_container}>
        {[0, 1, 2].map((groupIndex) => (
          <div 
            className={groupIndex % 2 === 0 ? styles.tip_group_left : styles.tip_group_right} 
            key={groupIndex}
          >
            <img src={IMAGES[groupIndex]} alt={`Imagen de prevención ${groupIndex + 1}`} className={styles.image} />
            <ul>
              {TIPS.slice(groupIndex * 3, groupIndex * 3 + 3).map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PreventionTips;
