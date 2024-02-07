import cl from 'classnames';
import { NavLink } from 'react-router-dom';
import { CubeIcon, FolderOpenIcon, GearSixIcon, SkipForwardIcon } from '../ui/icons';
import {
  ROUTE_PROFILE_DASHBOARD,
  ROUTE_PROFILE_DOCS,
  ROUTE_PROFILE_SETTINGS,
} from '../../constants/constants';
import s from './ProfileNav.module.scss';
import { ProfileProjectsNav } from './ProfileProjectsNav/ProfileProjectsNav';

export const ProfileNav: React.FC = () => {
  // const [isSubMenuVisible, setSubMenuVisible] = useState(false);
  // const location = useLocation();
  // const navigate = useNavigate();

  return (
    <nav aria-label="Меню личного кабинета" className={cl(s.nav)}>
      <ul className={cl(s.list)}>
        <li className={cl(s.listItem)}>
          <NavLink
            to={ROUTE_PROFILE_DASHBOARD}
            className={({ isActive }) => cl(s.link, { [s.linkActive]: isActive })}>
            {({ isActive }) => (
              <>
                <CubeIcon filled={isActive} />
                Главная
              </>
            )}
          </NavLink>
        </li>

        <li className={cl(s.listItem)}>
          <ProfileProjectsNav />
        </li>

        <li className={cl(s.listItem)}>
          <NavLink
            to={ROUTE_PROFILE_DOCS}
            className={({ isActive }) => cl(s.link, { [s.linkActive]: isActive })}>
            {({ isActive }) => (
              <>
                <FolderOpenIcon filled={isActive} />
                Документы
              </>
            )}
          </NavLink>
        </li>

        <li className={cl(s.listItem)}>
          <NavLink
            to={ROUTE_PROFILE_SETTINGS}
            className={({ isActive }) => cl(s.link, { [s.linkActive]: isActive })}>
            {({ isActive }) => (
              <>
                <GearSixIcon filled={isActive} />
                Профиль
              </>
            )}
          </NavLink>
        </li>

        <li className={cl(s.listItem)}>
          <button type="button" className={cl(s.link)}>
            <SkipForwardIcon /> Выход
          </button>
        </li>
      </ul>
    </nav>
  );
};
