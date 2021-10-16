import styles from './Header.module.css';
import MainButton from './mainButton/MainButton';
import GameButton from './gameButton/GameButton';
import PokeballButton from './pokeballButton/PokeballButton';
import StatistButton from './statistButton/StatistButton';
import Progress from './progress/Progress';
import AvatarButton from './avatarButton/AvatarButton';
import Nickname from './nickname/Nickname';

function Header() {
  return (
    <div className={styles.header}>
      <MainButton />
      <GameButton />
      <PokeballButton />
      <StatistButton />
      <Progress />
      <AvatarButton />
      <Nickname />
    </div>
  );
}

export default Header;