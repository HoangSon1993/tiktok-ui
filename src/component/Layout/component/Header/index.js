import { useEffect, useState } from "react";
import classNames from "classnames/bind"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import Button from "~/component/Button";
import { Wrapper as PopperWrapper } from "~/component/Popper";
import styles from "./Header.module.scss"
import images from "~/assets/images"
import AccountItem from "~/component/AccountItem";

const cx = classNames.bind(styles)
function Header() {
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img src={images.logo} alt='tiktok' />

            <Tippy
                interactive
                visible={setSearchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabindex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx("search")}>
                    <input placeholder="Search accounts videos" spellCheck={false} />
                    <button className={cx("clear")}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <button className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                    <button className={cx("search-btn")}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>

            <div className={cx("action")}>
                <Button text>Upload</Button>
                <Button primary>Log in</Button>
            </div>
        </div>
    </header>
}

export default Header;