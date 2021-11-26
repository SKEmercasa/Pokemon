import styles from './Header.module.css';
import GameButton from './gameButton/GameButton';
import Progress from './progress/Progress';
import AvatarButton from './avatarButton/AvatarButton';
import Nickname from './nickname/Nickname';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div className={styles.header}>
      <GameButton />
      <NavLink to='/'>Главная</NavLink>
      <NavLink to='/collection'>Коллекция</NavLink>
      <NavLink to='/editor'>Редактор</NavLink>
      <Progress />
      <AvatarButton />
      <Nickname />
    </div>
  );
}