import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { LeadSection } from '../../components/LeadSection/LeadSection';
import { Main } from '../../components/Main/Main';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { ProductSliderSection } from '../../components/ProductSliderSection/ProductSliderSection';
import { ProductStagesSection } from '../../components/ProductStagesSection/ProductStagesSection';
import s from './ProductPage.module.scss';
import { useProductQuery } from '../../api/queries';

export const ProductPage: FC = () => {
  const { productSlug } = useParams();

  const { data: product, isLoading, isRefetching } = useProductQuery(productSlug);

  if (isLoading || isRefetching || !product) {
    return null;
  }

  const leadSectionData = {
    description: product.description,
    detailed_description: product.description,
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
