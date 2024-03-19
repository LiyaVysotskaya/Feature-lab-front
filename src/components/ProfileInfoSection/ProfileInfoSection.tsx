import cl from 'classnames';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useUserProfileQuery } from '../../api/queries';
import { ROUTE_CHANGE_PASSWORD } from '../../constants/routesConstants';
import s from './ProfileInfoSection.module.scss';

export interface IProductsSectionProps {
  className?: string;
}

export const ProfileInfoSection: FC<IProductsSectionProps> = ({ className = '' }) => {
  const { data: userProfile } = useUserProfileQuery();
  const navigate = useNavigate();

  if (!userProfile) return null;

  const profile: Record<string, string> = {
    'Юридическое лицо': userProfile.company_name,
    ФИО: `${userProfile.first_name} ${userProfile.last_name}`,
    Должность: userProfile.position,
    Телефон: userProfile.phone_number,
    Email: userProfile.email,
  };

  const profileEntries = Object.entries(profile);

  return (
    <section className={cl(s.profileSection, className)}>
      <h1 className={cl(s.sectionTitle, className)}>Профиль</h1>

      <ul className={s.list}>
        {profileEntries.map(([key, value]) => (
          <li className={cl(s.item)} key={uuidv4()}>
            <p className={s.itemName}>{key}</p>
            <p className={s.itemValue}>{value}</p>
          </li>
        ))}
        <li className={cl(s.item)} key={uuidv4()}>
          <p className={s.itemName}>Пароль</p>
          <button
            type="button"
            className={cl(s.itemValue, s.btn)}
            onClick={() => {
              navigate(ROUTE_CHANGE_PASSWORD);
            }}>
            Сменить пароль?
          </button>
        </li>
      </ul>
    </section>
  );
};
