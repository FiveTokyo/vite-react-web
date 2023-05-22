/**
 * @author tokyo
 * @date 2023-05-20 09:32
 * @since 0.0.1
 */

import { memo, ReactElement } from "react";
// import classnames from 'classnames'
import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import styles from "./style.module.less";
import { Image, message, Tooltip } from "antd";
import { copyText } from "@/src/utils";

export interface FileListProps {
  uid: string;
  //本地预览base64URL
  previewUrl: string;
  //图片连接
  url?: string;
  //文件名
  name: string;
  //删除文件
  deleteFile?: (uid: string) => void;
  //进度条
  progress?: number;
  [key: string]: any;
}

/**
interface FileListRef {

}
*/

const FileList = (props: FileListProps): ReactElement => {
  const { name, url = "", progress = 0, previewUrl, uid, deleteFile } = props;

  const fontStyle = {
    fontSize: "18px",
    cursor: "pointer",
    marginRight: "10px",
  };

  const copyUrl = () => {
    copyText(url);
    message.success("复制成功");
  };

  const deleteUrl = () => {
    deleteFile?.(uid);
    message.success("删除成功");
  };

  return (
    <div className={styles.fileList}>
      <Image width={100} src={previewUrl} alt={name} />
      <div className={styles.fileInfo}>
        <div className={styles.name}>{name}</div>
        <div className={styles.url}>
          <a className={styles.href} onClick={() => window.open(url)}>
            {url}
          </a>
          <div className={styles.icon}>
            <Tooltip title="复制">
              <CopyOutlined style={fontStyle} onClick={copyUrl} />
            </Tooltip>
            <Tooltip title="删除">
              <DeleteOutlined style={fontStyle} onClick={deleteUrl} />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(FileList);
