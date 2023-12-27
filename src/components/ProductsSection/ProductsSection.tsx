import cl from 'classnames';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './ProductsSection.module.scss';

import { products } from './productsMockData';

export interface IProductsSectionProps {
  className?: string;
}

export const ProductsSection: FC<IProductsSectionProps> = ({ className = '' }) => {
  return (
    <section className={cl(s.productsSection, className)}>
      <h2 className={s.sectionTitle}>Продуктовая разработка</h2>

      <ul className={s.list}>
        {products.map((product) => (
          <li className={cl(s.product)} key={uuidv4()}>
            <div className={s.productHeader}>
              <p className={s.productTitle}>{product.title}</p>
              <p className={s.productInfo}>{product.info}</p>
            </div>
            <div className={s.productFooter}>
              <p>{product.labels}</p>
              <p className={s.divider}>/</p>
              <a href="/" className={s.productLink}>
                ссылка на сайт
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
