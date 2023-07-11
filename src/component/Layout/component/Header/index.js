import classNames from "classnames/bind"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss"
import images from "~/assets/images"
const cx = classNames.bind(styles)
function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='tiktok' />
            </div>
            <div className={cx("search")}>
                <input placeholder="Search accounts videos" spellCheck={false} />
                <button>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <button className={cx("clear")}>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                </button>
                <button className={cx("search-btn")}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>            
            </div>
            <div className={cx("action")}>Action</div>
        </div>
    </header>
}

export default Header;