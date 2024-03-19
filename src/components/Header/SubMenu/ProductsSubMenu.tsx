import cl from 'classnames';
import { FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useProductsQuery } from '../../../api/queries';
import { ROUTE_PRODUCTS } from '../../../constants/routesConstants';
import s from './SubMenu.module.scss';

interface Props {
  className?: string;
  isVisible: boolean;
}

export const ProductsSubMenu: FC<Props> = ({ className = '', isVisible }) => {
  // prevent the flickering transition effect of submenu when the viewport is resized
  useEffect(() => {
    const handleResize = () => {
      const submenuEl = document.getElementById('productsSubMenu');

      if (submenuEl) {
        submenuEl.classList.add(s.stopTransition);

        setTimeout(() => {
          submenuEl.classList.remove(s.stopTransition);
        }, 100);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
