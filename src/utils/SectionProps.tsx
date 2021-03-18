// Props shared by all sections
export interface SectionBase {
  topouterdivider?: boolean;
  bottomouterdivider?: boolean;
  topdivider?: boolean;
  bottomdivider?: boolean;
  hasbgcolor?: boolean;
  invertcolor?: boolean;
}

export const defaultSectionBase: SectionBase = {
  topouterdivider: false,
  bottomouterdivider: false,
  topdivider: false,
  bottomdivider: false,
  hasbgcolor: false,
  invertcolor: false,
};

// Default section props
export interface SectionProps extends SectionBase {
  className?: string;
}

export const defaultSectionProps: SectionProps = {
  ...defaultSectionBase,
  className: "",
};

// Section split props
export interface SectionSplitProps extends SectionProps {
  invertmobile?: boolean;
  invertdesktop?: boolean;
  aligntop?: boolean;
  imagefill?: boolean;
}

export const defaultSectionSplitProps: SectionSplitProps = {
  ...defaultSectionProps,
  invertmobile: false,
  invertdesktop: false,
  aligntop: false,
  imagefill: false,
};

// Section tiles props
export interface SectionTileProps extends SectionProps {
  pushleft?: boolean;
}

export const defaultSectionTileProps: SectionTileProps = {
  ...defaultSectionProps,
  pushleft: false,
};

// Call to action props
export interface CallToActionProps extends SectionProps {
  split?: string;
}

export const defaultCallToActionProps: CallToActionProps = {
  ...defaultSectionProps,
  split: "true",
};
