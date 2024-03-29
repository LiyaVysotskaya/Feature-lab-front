import cl from 'classnames';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TProperty } from '../../types/publicData';
import { LeadSectionCards } from './LeadSectionCards/LeadSectionCards';
import s from './LeadSection.module.scss';

type IProps = {
  className?: string;
  data: {
    description: string;
    detailed_description: string;
    properties: TProperty[];

    // if it is a product
    product_type: string;
    url: string;
  };
};

export const LeadSection: FC<IProps> = ({ className = '', data }) => {
  return (
    <section className={cl(s.lead, className)}>
      <p className={cl(s.info)}>{data.description}</p>

      <div className={cl(s.description)}>
        {data.detailed_description.split('\n').map((item) => (
          <p key={uuidv4()}>{item}</p>
        ))}
      </div>

      <LeadSectionCards
        key={uuidv4()}
        properties={data.properties}
        url={data.url}
        productType={data.product_type}
      />
    </section>
  );
};
