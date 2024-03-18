import cl from 'classnames';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { products } from '../../_mockData/productsMockData';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import s from './ProductsSection.module.scss';

export interface IProductsSectionProps {
  className?: string;
  title: string;
}

export const ProductsSection: FC<IProductsSectionProps> = ({ className = '', title }) => {
  return (
    <section className={cl(s.productsSection, className)}>
      <SectionTitle text={title} />

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
