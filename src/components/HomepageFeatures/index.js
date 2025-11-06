import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '1r DAW',
    Svg: require('@site/static/img/ordinador.svg').default,
    description: (
      <>
        Desenvolupament d'Aplicacions Web
      </>
    ),
  },
  {
    title: 'Projecte Intermodular',
    Svg: require('@site/static/img/projecte.svg').default,
    description: (
      <>
        Introdució a docusaurus
      </>
    ),
  },
  {
    title: 'IES Lluís Simarro',
    Svg: require('@site/static/img/xativa.svg').default,
    description: (
      <>
       Xàtiva
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
