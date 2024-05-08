import cn from 'classnames';
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

  const notCustomerProducts = products.filter((item) => !item.is_custom_product);

  if (notCustomerProducts.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Продукты"
      className={cn(
        s.submenu,
        {
          [s.submenuVisible]: isVisible,
        },
        className,
      )}>
      <ul className={cn(s.submenuList)}>
        {notCustomerProducts.map((item) => (
          <li className={s.submenuItem} key={uuidv4()}>
            <NavLink
              to={`${ROUTE_PRODUCTS}/${item.slug}`}
              className={({ isActive }) => cn(s.submenuLink, { [s.submenuLinkActive]: isActive })}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
