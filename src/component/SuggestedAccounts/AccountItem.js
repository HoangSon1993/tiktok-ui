import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/557695794d1cb0b4a32322da33aac45d~c5_100x100.jpeg?x-expires=1690304400&x-signature=i%2BSejqJMo9FhE3xOizG2j6s%2FZ0c%3D"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nick-name')}>
                    <strong>Quoc Nguyen PHu</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Quoc Nguyen Phu</p>
            </div>
        </div>
    );
}
AccountItem.propTypes = {};
export default AccountItem;
