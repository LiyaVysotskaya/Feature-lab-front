import cl from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useProductsQuery } from '../../../api/queries';
import { ROUTE_PRODUCTS } from '../../../constants/routesConstants';
import s from './SubMenu.module.scss';

type IProps = {
  className?: string;
  isVisible: boolean;
};

export const ProductsSubMenu: FC<IProps> = ({ className = '', isVisible }) => {
  const { data: products, isLoading } = useProductsQuery();

  if (isLoading || !products) {
    return null;
  }

  return (
    <nav
      aria-label="Продукты"
      id="productsSubMenu"
      className={cl(
        s.submenu,
        {
          [s.submenuVisible]: isVisible,
        },
        className,
      )}>
      <ul className={cl(s.submenuList)}>
        {products.map((item) => (
          <li className={s.submenuItem} key={uuidv4()}>
            <NavLink
              to={`${ROUTE_PRODUCTS}/${item.slug}`}
              className={({ isActive }) => cl(s.submenuLink, { [s.submenuLinkActive]: isActive })}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
