import { Banner1 } from './blocks/banner';


const demoData = {
  title: "🚀 This project is an ongoing community effort.",
  description: "Data might be",
  linkText: "inaccurate",
  linkUrl: "#",
  defaultVisible: true,
};

export function BetaBanner() {
  return <Banner1 {...demoData} />;
}
