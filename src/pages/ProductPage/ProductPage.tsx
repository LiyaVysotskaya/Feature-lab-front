import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useProductQuery } from '../../api/queries';
import { Main } from '../../components/Main/Main';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { LeadSection } from '../../components/_sections/LeadSection/LeadSection';
import { ProductSliderSection } from '../../components/_sections/ProductSliderSection/ProductSliderSection';
import { ProductStagesSection } from '../../components/_sections/ProductStagesSection/ProductStagesSection';
import s from './ProductPage.module.scss';

export const ProductPage: FC = () => {
  const { productSlug } = useParams();

  const { data: product, isLoading, isRefetching } = useProductQuery(productSlug);

  if (isLoading || isRefetching || !product) {
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
