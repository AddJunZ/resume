import Avatar from '../../components/Avatar';
import bigoLiveLogo from '../../assets/bigo-live.png';
import qqPenguinLogo from '../../assets/qq-penguin.svg';
import shopeeLogo from '../../assets/shopee.png';
import styles from './index.module.scss';

const EMPLOYERS = [
  { name: 'Tencent', logo: qqPenguinLogo },
  { name: 'BIGO LIVE', logo: bigoLiveLogo },
  { name: 'Shopee', logo: shopeeLogo },
] as const;

const Home = () => (
  <div className={styles.homeContainer}>
    <Avatar className={styles.avatar} />
    <div className={styles.name}>Jiajun Zheng</div>
    <div className={styles.desc}>FrontEnd Engineer</div>
    <section className={styles.section}>
      <div className={styles.sectionTitle}>My Skills</div>
      <ul className={styles.skills}>
        <li className={styles.skill}>Vue、React、RN、Node、Go</li>
        <li className={styles.skill}>Webpack、Vite、Rollup</li>
        <li className={styles.skill}>CICD、Git、Mysql</li>
        <li className={styles.skill}>Agent、Skills、Mcp</li>
      </ul>
    </section>
    <section className={styles.section}>
      <div className={styles.sectionTitle}>Previous Employers</div>
      <ul className={styles.employers}>
        {EMPLOYERS.map(({ name, logo }) => (
          <li className={styles.employer} key={name}>
            <img
              className={styles.employerLogo}
              src={logo}
              alt=''
              width={120}
              height={64}
              loading='lazy'
              decoding='async'
            />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </section>
    <section className={styles.section}>
      <div className={styles.sectionTitle}>My Contact Details</div>
      <ul>
        <li>Email: addjunz@163.com</li>
        <div style={{ color: 'red' }}>
          If you have a job, pls contact me.Thx 🥹🥹🥹
        </div>
      </ul>
    </section>
  </div>
);

export default Home;
