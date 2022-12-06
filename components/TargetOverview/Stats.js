import styles from './Stats.module.css';

export default function Stats() {
  return (
    <ul className={styles.stats}>
      <li>
        COMMANDER ALDOOSI <img src='./images/alien-name.svg' alt='' width={105} height={20} />
      </li>
      <li>Escaped LunerMax Prison: November 12, 2022</li>
      <li>Changes color with mood: Pink is bad news.</li>
      <li>Likely in hiding at Fulton Fish Market, Hunts Point.</li>
    </ul>
  );
}
