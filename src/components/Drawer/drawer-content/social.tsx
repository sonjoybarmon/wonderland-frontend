import { SvgIcon, Link } from "@material-ui/core";
// import { ReactComponent as GitHub } from "../../../assets/icons/github.svg";
// import { ReactComponent as Twitter } from "../../../assets/icons/twitter.svg";
// import { ReactComponent as Telegram } from "../../../assets/icons/telegram.svg";
import { ReactComponent as Discord } from "../../../assets/icons/discord.svg";

import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import DiscordIcon from "../../../assets/Discord.png";

export default function Social() {
    return (
        <div className="social-row" style={{ backgroundColor: "#ffc768" }}>
            <Link href="https://github.com/Wonderland-Money/wonderland-frontend" target="_blank">
                {/* <SvgIcon color="primary" component={GitHub} style={{ color: "#000000", fontSize: "30px" }} /> */}
                <GitHubIcon style={{ color: "#000000", fontSize: "30px" }} />
            </Link>

            <Link href="https://twitter.com/wonderland_fi?s=21" target="_blank">
                <TwitterIcon style={{ color: "#000000", fontSize: "30px" }} />
                {/* <SvgIcon color="primary" component={Twitter} style={{ color: "#000000", fontSize: "30px" }} /> */}
            </Link>

            <Link href="https://t.me/joinchat/6UybL5rJMEhjN2Y5" target="_blank">
                {/* <SvgIcon viewBox="0 0 32 32" color="primary" component={Telegram} style={{ color: "#000000", fontSize: "30px" }} /> */}
                <TelegramIcon style={{ color: "#000000", fontSize: "30px" }} />
            </Link>

            <Link href="https://discord.gg/thDHseaHUt" target="_blank">
                {/* <SvgIcon color="primary" component={Discord} style={{ color: "#000000", fontSize: "30px" }} /> */}
                {/* <Discord style={{ color: "#000000", fontSize: "30px" }} /> */}
                <img src={DiscordIcon} alt="" style={{ width: "30px", height: "30px" }} />
            </Link>
        </div>
    );
}
