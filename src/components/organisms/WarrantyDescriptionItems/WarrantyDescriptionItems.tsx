import React from 'react';
import {
  ContainerWarranty,
  WarrantyItemFullHeight,
  WarrantyItemSubTitle,
  WarrantyItemTitle,
  WarrantyList,
  WrapperWarrantyItems,
  WrapperWarrantyTitles,
} from 'components/organisms/WarrantyDescriptionItems/WarrantyDescriptionItems.styles';
import RichText from 'components/atoms/RichText';
import FadeIn from 'components/atoms/FadeIn';

export type ItemWarrantyList = {
  contentItem: {
    typeContent: ItemWarrantyType;
    titleNumber: number;
    subTitle: string;
    listsWarranty: {
      titleList: string;
      subItemsList: {
        subTitleItem: string;
      }[];
    }[];
  }[];
};

export interface IItemWarrantyStyle {
  type: ItemWarrantyType;
}

export type ItemWarrantyType = 'full-height' | 'full-width' | 'half-billowyClouds' | 'half-white';
const WarrantyDescriptionItems = ({ contentItem }: ItemWarrantyList) => (
  <ContainerWarranty>
    <WrapperWarrantyItems>
      {contentItem.map((item) => (
        <WarrantyItemFullHeight
          className={item.typeContent}
          key={item.subTitle + item.titleNumber}
          type={item.typeContent}
          as={FadeIn}
        >
          <WrapperWarrantyTitles>
            <WarrantyItemTitle>{item.titleNumber}</WarrantyItemTitle>
            <WarrantyItemSubTitle>{item.subTitle}</WarrantyItemSubTitle>
          </WrapperWarrantyTitles>
          <WarrantyList>
            {item.listsWarranty.map((itemList) => (
              <li key={itemList.titleList}>
                <RichText html={itemList.titleList} />
                {itemList.subItemsList ? (
                  <ul>
                    {itemList.subItemsList.map((subItem) => (
                      <li key={subItem.subTitleItem}>
                        <RichText html={subItem.subTitleItem} />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </WarrantyList>
        </WarrantyItemFullHeight>
      ))}
    </WrapperWarrantyItems>
  </ContainerWarranty>
);
export default WarrantyDescriptionItems;
