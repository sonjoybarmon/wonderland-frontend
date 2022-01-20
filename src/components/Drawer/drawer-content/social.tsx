import { Link } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import DiscordIcon from "../../../assets/Discord.png";

export default function Social() {
    return (
        <div className="social-row" style={{ backgroundColor: "#ffc768" }}>
            <Link href="https://github.com/Wonderland-Money/wonderland-frontend" target="_blank">
                <GitHubIcon style={{ color: "#000000", fontSize: "30px" }} />
            </Link>

            <Link href="https://twitter.com/wonderland_fi?s=21" target="_blank">
                <TwitterIcon style={{ color: "#000000", fontSize: "30px" }} />
            </Link>

            <Link href="https://t.me/joinchat/6UybL5rJMEhjN2Y5" target="_blank">
                <TelegramIcon style={{ color: "#000000", fontSize: "30px" }} />
            </Link>

            <Link href="https://discord.gg/thDHseaHUt" target="_blank">
                <img src={DiscordIcon} alt="" style={{ width: "30px", height: "30px" }} />
            </Link>
        </div>
    );
}
