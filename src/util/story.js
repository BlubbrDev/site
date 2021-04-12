import Menu from "../components/icons/menu";
import ReplitLogo from "../components/icons/replit";
import IPOLogo from "../components/icons/ipo";
import InstitutionIcon from "../components/icons/institution";
import NewsScrapingIcon from "../components/icons/news_scraping";
// import Icon from "../components/icons/icon";

const data = [
  {
    title: "What is a SPAC?",
    image: "/assets/images/base_whale_460_200.png",
    content: [
      {
        body:
          "SPAC stands for Special Purpose Acquisition Company or Special Purpose Asquisition Corporation.",
        icon: <Menu />,
      },
      {
        body:
          "SPACs are publically traded companies with only cash and no operations.",
        icon: <InstitutionIcon />,
      },
      {
        body:
          "Their sole purpose is to raise money, search for a revolutionary private company, and take them public.",
        icon: <Menu />,
      },
    ],
  },
  {
    title: "If Blubbr was a SPAC",
    image: "/assets/images/around_the_world_460_200.png",
    content: [
      {
        body:
          "We would IPO our SPAC, Blubbr A, under the ticker BLBA with a share price of $10.",
        icon: <IPOLogo />,
      },
      {
        body:
          "If we started with $100 million in our bank account, we could issue 100,000 shares of BLBA.",
        icon: <Menu />,
      },
      {
        body:
          "Our management team would be seeking to acquire a company worth around $100M.",
        icon: <Menu />,
      },
    ],
  },
  {
    title: "SPAC Patrol Bot",
    image: "/assets/images/alert_whale_460_200.png",
    content: [
      {
        body:
          "When BLBA files its IPO with the SEC, it registers a CIK and submits an S-1 form.",
        icon: <Menu />,
      },
      {
        body:
          "Our SPAC Patrol bot immediately identifies the new registration and S-1 filings and notifies our community.",
        icon: <NewsScrapingIcon />,
      },
      {
        body:
          "Community members read our SPAC summary and decide if they want to invest.",
        icon: <Menu />,
      },
    ],
  },
  {
    title: "Media Coverage",
    image: "/assets/images/tv_news_460_200.png",
    content: [
      {
        body:
          "Before the merger is announced, media companies might release articles about potential targets for BLBA.",
        icon: <Menu />,
      },
      {
        body:
          "For example, BLBA might be looking to acquire a company such as Replit.",
        icon: <ReplitLogo />,
      },
      {
        body:
          "If the market thinks this is a good acquisition, the BLBA share price will increase above $10 a share.",
        icon: <Menu />,
      },
    ],
  },
  {
    title: "NotiFi News Bot",
    image: "/assets/images/news_whale_460_200.png",
    content: [
      {
        body:
          "Monitors news for all SPACs and instantly notifies our community regarding potential mergers.",
        icon: <Menu />,
      },
      {
        body:
          "We instantly notify our community when news articles are released that detail information about SPAC mergers.",
        icon: <Menu />,
      },
      {
        body:
          "They can choose to open BLBA positions before the news is priced into BLBA’s price following its article release.",
        icon: <Menu />,
      },
    ],
  },
  {
    title: "Blubbr Strikes Back",
    image: "/assets/images/paper_charts_460_200.png",
    content: [
      {
        body:
          "SPAC issuers will often create subsequent SPACs after finding acquisitions for their current SPACs.",
        icon: <Menu />,
      },
      {
        body:
          "If the Blubbr team believes BLBA is close to finalizing a deal, Blubbr may file for a second SPAC, BLBB.",
        icon: <Menu />,
      },
      {
        body:
          "This indicates BLBA is likely to merge soon and will likely see a price increase.",
        icon: <Menu />,
      },
    ],
  },
  {
    title: "Whale Watcher Bot",
    image: "/assets/images/whale_watch_460_200.png",
    content: [
      {
        body:
          "Watches for instances like this where the parent company of a current SPAC files for a second SPAC IPO.",
        icon: <Menu />,
      },
      {
        body:
          "The Blubbr community is the first to find out SPAC sponsors release new SPACs.",
        icon: <Menu />,
      },
      {
        body:
          "Instant notifications following subsequent filings mean our community members can get in before the new filing is priced in.",
        icon: <Menu />,
      },
    ],
  },
  {
    title: "The Merger",
    image: "/assets/images/to_the_moon_460_200.png",
    content: [
      {
        body:
          "Blubbr and Replit file with the SEC to officially announce they are merging.",
        icon: <Menu />,
      },
      {
        body:
          "In 3 months, the BLBR ticker will change to REPL and all Blubbr shares become Replit shares.",
        icon: <Menu />,
      },
      {
        body:
          "BLBR price will likely have strong price movements to reflect the merger confirmation.",
        icon: <Menu />,
      },
    ],
  },
  {
    title: "SPAC Merger Bot",
    image: "/assets/images/whale_fam_460_200.png",
    content: [
      {
        body:
          "Prior to announcing a merger, the SEC requires SPACs to file a 425 form detailing the merger.",
        icon: <Menu />,
      },
      {
        body:
          "The SPAC Merger Bot instantly notifies our community upon new 425 filings. ",
        icon: <Menu />,
      },
      {
        body: "Blubbr members are the first to hear when SPACs finally merge!",
        icon: <Menu />,
      },
    ],
  },
];

export default data;
