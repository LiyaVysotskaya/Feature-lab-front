import cl from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useProductsQuery } from '../../api/queries';
import { ROUTE_PRODUCTS } from '../../constants/routesConstants';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import s from './ProductsSection.module.scss';

type IProps = {
  className?: string;
  title: string;
  competenceId?: string;
};

export const ProductsSection: FC<IProps> = ({ className = '', title, competenceId = '' }) => {
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
              <Link className={s.productTitle} to={`${ROUTE_PRODUCTS}/${product.slug}`}>
                {product.name}
              </Link>
              <p className={s.productInfo}>{product.description}</p>
            </div>
            <div className={s.productFooter}>
              {product.tags.map((tag) => (
                <p className={s.productTag} key={uuidv4()}>{`${tag} /`}</p>
              ))}
              <Link
                to={product.url}
                className={s.productLink}
                target="_blank"
                rel="noopener noreferrer">
                ссылка
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
