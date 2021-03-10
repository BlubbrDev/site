// Props shared by all sections
export interface SectionBase {
  topOuterDivider?: boolean;
  bottomOuterDivider?: boolean;
  topDivider?: boolean;
  bottomDivider?: boolean;
  hasBgColor?: boolean;
  invertColor?: boolean;
}

export const defaultSectionBase: SectionBase = {
  topOuterDivider: false,
  bottomOuterDivider: false,
  topDivider: false,
  bottomDivider: false,
  hasBgColor: false,
  invertColor: false,
};

// Default section props
export interface SectionProps extends SectionBase {
  className?: String;
}

export const defaultSectionProps: SectionProps = {
  ...defaultSectionBase,
  className: "",
};

// Section split props
export interface SectionSplitProps extends SectionProps {
  invertMobile: boolean;
  invertDesktop: boolean;
  alignTop: boolean;
  imageFill: boolean;
}

export const defaultSectionSplitProps: SectionSplitProps = {
  ...defaultSectionProps,
  invertMobile: false,
  invertDesktop: false,
  alignTop: false,
  imageFill: false,
};

// Section tiles props
export interface SectionTileProps extends SectionProps {
  pushLeft?: boolean;
}

export const defaultSectionTileProps: SectionTileProps = {
  ...defaultSectionProps,
  pushLeft: false,
};
