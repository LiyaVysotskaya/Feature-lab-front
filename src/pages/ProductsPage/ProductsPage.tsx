import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Navigate, Outlet, useMatch } from 'react-router-dom';
import { ListProducts } from '../../components/ListProducts/ListProducts';
import { Main } from '../../components/Main/Main';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { ROUTE_HOME, ROUTE_PRODUCTS } from '../../constants/routesConstants';
import s from './ProductsPage.module.scss';

export const ProductsPage: FC = () => {
  const isProductsDefaultPage = useMatch(ROUTE_PRODUCTS);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  if (isMobile) {
    return <Navigate to={ROUTE_HOME} />;
  }

  if (isProductsDefaultPage) {
    return (
      <Main>
        <PageTitle className={s.pageTitle} pageTitle="Продукты" subTitle="Наши разработки" />

        <ListProducts />
      </Main>
    );
  }
  return <Outlet />;
};
