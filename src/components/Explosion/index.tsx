import React, { useEffect } from 'react';
import styles from './Explosion.module.scss';
import { observer } from 'mobx-react-lite';
import store from '../../stores/explosion/store';

type Props = {
  waitBeforeShow?: number;
};

const Explosion: React.FC<Props> = ({
  waitBeforeShow = 500
}) => {
  const explosion = (
    <div className={styles.explosion}>
      <img
        src={require('../../assets/gif/explosion-1.gif')}
        alt="Explosion"
      />
    </div>
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      store.changeShowExplosion(false);
    }, waitBeforeShow);

    return () => clearTimeout(timer);

  }, [store.showExplosion, waitBeforeShow]);

  return store.showExplosion ? explosion : null;
}

export default observer(Explosion)