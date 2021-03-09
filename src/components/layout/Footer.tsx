import classNames from "classnames";
import Logo from "components/layout/partials/Logo";
import FooterNav from "components/layout/partials/FooterNav";
import FooterSocial from "components/layout/partials/FooterSocial";

interface FooterProp {
  className?: String;
  topOuterDivider?: boolean;
  topDivider?: boolean;
}

const defaultProps: FooterProp = {
  className: undefined,
  topOuterDivider: false,
  topDivider: false,
};

export default function Footer(
  footerProp: FooterProp = defaultProps,
  ...props: any[]
) {
  const classes = classNames(
    "site-footer center-content-mobile",
    footerProp.topOuterDivider && "has-top-divider",
    footerProp.className
  );

  return (
    <footer {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-footer-inner",
            footerProp.topDivider && "has-top-divider"
          )}
        >
          <div className="footer-top space-between text-xxs">
            <Logo />
            <FooterSocial />
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <FooterNav />
            <div className="footer-copyright">
              Made by the <a href="https://blubbr.io"> blubbr</a> team in
              Seattle, Washington. All right reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
