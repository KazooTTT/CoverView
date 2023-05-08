interface IconItem {
  name: string;
  tags?: string[];
  versions?: Versions;
  color?: string;
  aliases?: Alias[];
}

interface Alias {
  base: string;
  alias: string;
}

interface Versions {
  svg: string[];
  font: string[];
}

interface ThemeItem {
  bgColor: string;
  bdColor: string;
}

interface SettingsProps {
  title?: string;
  icon?: SingleValue<{
    label: string;
    value: string;
  }>;
  bgColor?: string;
  borderColor?: string;
  pattern?: string;
  download?: string;
  author?: string;
  devIconOptions?: {
    label: string;
    value: string;
  }[];
  font?: string;
  theme: string;
  customIcon?: string;
  platform?: string;
}
