// Props shared by all sections
export interface SectionBase {
  topouterdivider?: string;
  bottomouterdivider?: string;
  topdivider?: string;
  bottomdivider?: string;
  hasbgcolor?: string;
  invertcolor?: string;
}

export const defaultSectionBase: SectionBase = {
  topouterdivider: "false",
  bottomouterdivider: "false",
  topdivider: "false",
  bottomdivider: "false",
  hasbgcolor: "false",
  invertcolor: "false",
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
  invertmobile?: string;
  invertdesktop?: string;
  aligntop?: string;
  imagefill?: string;
}

export const defaultSectionSplitProps: SectionSplitProps = {
  ...defaultSectionProps,
  invertmobile: "false",
  invertdesktop: "false",
  aligntop: "false",
  imagefill: "false",
};

// Section tiles props
export interface SectionTileProps extends SectionProps {
  pushleft?: string;
}

export const defaultSectionTileProps: SectionTileProps = {
  ...defaultSectionProps,
  pushleft: "false",
};

// Call to action props
export interface CallToActionProps extends SectionProps {
  split?: string;
}

export const defaultCallToActionProps: CallToActionProps = {
  ...defaultSectionProps,
  split: "true",
};
