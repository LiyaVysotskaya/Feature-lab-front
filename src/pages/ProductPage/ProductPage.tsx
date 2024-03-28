import { useAtom } from 'jotai';
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductQuery } from '../../api/queries';
import { isProductLoadingAtom } from '../../atoms/isLoadingAtom';
import { LeadSection } from '../../components/LeadSection/LeadSection';
import { Main } from '../../components/Main/Main';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { ProductSliderSection } from '../../components/ProductSliderSection/ProductSliderSection';
import { ProductStagesSection } from '../../components/ProductStagesSection/ProductStagesSection';
import s from './ProductPage.module.scss';

export const ProductPage: FC = () => {
  const { productSlug } = useParams();
  const [isProductLoading, setIsLoading] = useAtom(isProductLoadingAtom);

  const { data: product, isLoading: isDataLoading, isRefetching } = useProductQuery(productSlug);

  useEffect(() => {
    setIsLoading(isDataLoading);
    console.log('isProductLoading : ', isProductLoading);
  }, [isDataLoading, setIsLoading, isProductLoading]);

  if (isDataLoading || isRefetching || !product) {
    return null;
  }

  const leadSectionData = {
    description: product.description,
    detailed_description: product.detailed_description,
    properties: product.properties,

    product_type: product.product_type,
    url: product.url,
  };

  return (
    <Main>
      <PageTitle
        className={s.pageTitle}
        pageTitle={product.name}
        subTitle={product.detailed_name}
      />

      <LeadSection className={s.pageSection} data={leadSectionData} />

      <ProductStagesSection className={s.pageSection} stages={product.phases} />

      <ProductSliderSection className={s.pageSection} imgLinks={product.gallery} />
    </Main>
  );
};
