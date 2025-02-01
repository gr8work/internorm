export type MeasurePropertyType = 'auto' | 'inherit' | 'initial' | LengthUnitType;

export type AbsoluteLengthType =
  | `${number}cm`
  | `${number}mm`
  | `${number}in`
  | `${number}pc`
  | `${number}pt`
  | `${number}px`;

export type RelativeLengthType =
  | `${number}em`
  | `${number}ex`
  | `${number}ch`
  | `${number}rem`
  | `${number}vw`
  | `${number}vh`
  | `${number}vmin`
  | `${number}vmax`
  | `${number}%`;

export type BoxSizingType =
  | 'auto'
  | 'inherit'
  | 'initial'
  | 'unset'
  | 'fit-content'
  | 'max-content'
  | 'min-content'
  | 'available';

export type LengthUnitType = AbsoluteLengthType | RelativeLengthType;

export type PageContextType = {
  breadcrumb: BreadcrumbType;
  title?: string;
};

export type BreadcrumbType = {
  location: string;
  crumbs: CrumbType[];
};

export type CrumbType = {
  pathname: string;
  crumbLabel: string;
};

export type CommonPageQueryType = {
  title: string;
  uri: string;
  id: string;
};

export type SeoType = {
  title: string;
  metaDesc: string;
  focuskw: string;
  metaKeywords: string;
  metaRobotsNoindex: string;
  metaRobotsNofollow: string;
  opengraphTitle: string;
  opengraphDescription: string;
  opengraphImage: string | null;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string | null;
  canonical: string;
  cornerstone: boolean;
  schema: SeoSchemaType;
};

export type SeoSchemaType = {
  articleType: unknown[];
  pageType: string[];
  raw: string;
};
