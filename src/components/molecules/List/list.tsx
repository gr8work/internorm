import React, { useEffect, useState } from 'react';
import Link from 'components/atoms/Link';
import { IList } from './interface';
import { Wrapper, Row, Content } from './styles';
import { useLocation } from '@reach/router';

export const List = ({ items, type = 'default', className, index, handleClick, changedIndexList }: IList) => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>();
  const [activeSubIndex, setActiveSubIndex] = useState<number | undefined>();
  const [activeSubInIndex, setActiveSubInIndex] = useState<number | undefined>();
  const location = useLocation();
  const listType = type;

  const listClassRender = (isParent: boolean, className?: string, active?: boolean, link?: string) => {
    let listClass = className;
    isParent ? listClass += ' parent' : null;
    active ? listClass += ' active' : null;
    link && location.pathname.includes(link) ? listClass += ' active-link' : null;
    return listClass;
  }

  useEffect(() => setActiveIndex(index),[index])

  useEffect(() => changedIndexList && changedIndexList(activeIndex), [activeIndex])

  return (
    <Wrapper type={type} className={className + ' ' + type}>
      {items && items.map(({ to, type, children, items, isLink }, index) => (
        <li
          key={index}
          className={listClassRender(items?.length === 0, type, activeIndex === index, to)}
        >
          <div className='list-item' onClick={() => listType === 'links-navbar' && children == 'Oferta' ? handleClick() : (activeIndex === index ? setActiveIndex(undefined) : setActiveIndex(index))}>
            {(listType !== 'links-navbar' && items?.length === 0) || (listType === 'links-navbar' && children !== 'Oferta') ? (
              <Link to={to} type={type}>
                {children}
              </Link>
            ) : (
              children
            )}
            {items && items?.length !== 0 &&<button onClick={() => activeIndex === index ? setActiveIndex(undefined) : setActiveIndex(index)}></button>}
          </div>
          {items && items?.length !== 0 && (
            <Content className={activeIndex === index && items?.length !== 0 && items ? 'active' : 'hide'}>
              {items.map(({ to, type, children, items, isLink }, index) => (
                <li className={listClassRender(items?.length === 0, type, activeSubIndex === index)} key={index}>
                  <div>
                    {isLink ? (
                      <Link to={to} type={type}>
                        {children}
                      </Link>
                    ) : (
                      children
                    )}
                    {items && items?.length !== 0 &&<button onClick={() => activeSubIndex === index ? setActiveSubIndex(undefined) : setActiveSubIndex(index)}></button>}
                  </div>
                  {items && items?.length !== 0 && (
                    <Content className={activeSubIndex === index && items?.length !== 0 && items ? 'active' : 'hide'}>
                      {items.map(({ to, type, children, items, isLink }, index) => (
                        <li className={listClassRender(items?.length === 0, type, activeSubInIndex === index)} key={index}>
                          <div>
                            {isLink ? (
                              <Link to={to} type={type}>
                                {children}
                              </Link>
                            ) : (
                              children
                            )}
                            {items && items?.length !== 0 &&<button onClick={() => activeSubInIndex === index ? setActiveSubInIndex(undefined) : setActiveSubInIndex(index)}></button>}
                          </div>
                          {items && items?.length !== 0 && (
                            <Content className={activeSubInIndex === index && items?.length !== 0 && items ? 'active' : 'hide'}>
                              {items.map(({ to, type, children, items, isLink }, index) => (
                                <li className={listClassRender(items?.length === 0, type)} key={index}>
                                  {isLink ? (
                                    <Link to={to} type={type}>
                                      {children}
                                    </Link>
                                  ) : (
                                    children
                                  )}
                                </li>
                              ))}
                            </Content>
                          )}
                        </li>
                      ))}
                    </Content>
                  )}
                </li>
              ))}
            </Content>
          )}
        </li>
      ))}
    </Wrapper>
  );
};
