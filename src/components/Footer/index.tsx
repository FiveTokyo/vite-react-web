/**
 * @author 
 * @date 2023-04-10 15:35
 * @since 0.0.1
 */

import { memo, ReactElement } from 'react'
// import classnames from 'classnames'
import styles from './style.module.less'

export interface FooterProps {
    [key: string]: any
}

/**
interface FooterRef {

}
*/

const Footer = (props: FooterProps): ReactElement => {

    const { } = props;

    return (
        <div>
        Footer
        </div>
    )
}

export default memo(Footer)
