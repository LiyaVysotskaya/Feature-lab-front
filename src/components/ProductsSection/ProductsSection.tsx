import cl from 'classnames';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import s from './ProductsSection.module.scss';
import { useProductsQuery } from '../../api/queries';

export interface IProductsSectionProps {
  className?: string;
  title: string;
  competenceId?: string;
}

export const ProductsSection: FC<IProductsSectionProps> = ({
  className = '',
  title,
  competenceId = '',
}) => {
  const { data: products, isLoading } = useProductsQuery();

  if (isLoading || !products) {
    return null;
  }

  // filter products by competenceId
  const filteredProducts = products.filter((product) => {
    if (competenceId === '') {
      return product;
    }
    return product.competence === competenceId ? product : null;
  });

  if (filteredProducts.length === 0) {
    return null;
  }

  return (
    <section className={cl(s.productsSection, className)}>
      <SectionTitle text={title} />

      <ul className={s.list}>
        {filteredProducts.map((product) => (
          <li className={cl(s.product)} key={uuidv4()}>
            <div className={s.productHeader}>
              <p className={s.productTitle}>{product.name}</p>
              <p className={s.productInfo}>{product.description}</p>
            </div>
            <div className={s.productFooter}>
              {product.tags.map((tag) => (
                <p className={s.productTag} key={uuidv4()}>{`${tag} /`}</p>
              ))}
              <a href={product.url} className={s.productLink}>
                ссылка
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
