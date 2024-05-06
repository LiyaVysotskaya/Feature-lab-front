import cl from 'classnames';
import { FC } from 'react';
import { useProductsQuery } from '../../api/queries';
import { ROUTE_PRODUCTS } from '../../constants/routesConstants';
import { ListEl } from '../ListEl/ListEl';
import s from './ListProducts.module.scss';

type IProps = {
  className?: string;
};

export const ListProducts: FC<IProps> = ({ className = '' }) => {
  const { data: products, isLoading } = useProductsQuery();

  if (isLoading || !products) {
    return null;
  }

  const notCustomerProducts = products.filter((item) => !item.is_custom_product);

  if (notCustomerProducts.length === 0) {
    return null;
  }

  return (
    <section className={cl(s.section, className)}>
      <ul className={s.list}>
        {notCustomerProducts.map((product, index) => {
          return (
            <ListEl
              index={index}
              key={product.id}
              title={product.name}
              text={product.description}
              desription=""
              link={`${ROUTE_PRODUCTS}/${product.slug}`}
            />
          );
        })}
      </ul>
    </section>
  );
};
