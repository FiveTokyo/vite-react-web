/**
 * @author tokyo
 * @date 2023-05-19 17:55
 * @since 0.0.1
 */

import { FC, useState, useEffect, useMemo } from "react";
// import classnames from 'classnames'
import { InboxOutlined } from '@ant-design/icons';
import { Upload, message } from "antd";
import styles from "./style.module.less";
import FileList, { FileListProps } from "./components/FileList";

const { Dragger } = Upload;

export interface UploadProps {
  [key: string]: any;
}

const UploadFile: FC<UploadProps> = (props) => {
  // const { config } = useRequest();
  const [fileList, setFileList] = useState<FileListProps[]>([]);

  const uploadProps: UploadProps = {
    multiple: true,
    accept:  'data:image,.webp,.svg,.png,.gif,.jpg,.jpeg,.jfif,.bmp,.dpg,.ico',
    showUploadList: false,
    customRequest({ file }: any) {
      if (file.size >= 2 * 1024 * 1024) {
        message.error(`${file.name} 文件大小超过2MB限制,请压缩图片后再来上传！`);
        return false;
      }
      const reader = new FileReader() as any;

      reader.onload = () => {
        const base64String = reader.result
          .replace("data:", "")
          .replace(/^.+,/, "");
        const newFileList = [...fileList];
        newFileList.push({
          uid: file.uid,
          previewUrl: `data:${file.type};base64,` + base64String,
          name: file.name,
          url: "https://images.pexels.com/photos/16217600/pexels-photo-16217600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        });
        setFileList(newFileList);
      };
      reader.readAsDataURL(file);
    },
  };

  const deleteFile = (uid: string) => {
    const targetIndex = fileList.findIndex((x) => x.uid === uid);
    const newFileList = [...fileList];
    newFileList.splice(targetIndex, 1);
    setFileList(newFileList);
  };

  const renderFileList = useMemo(() => {
    return fileList.map((file) => (
      <FileList key={file.uid} {...file} deleteFile={deleteFile} />
    ));
  }, [fileList]);

  return (
    <div className={styles.pages}>
      <span className={styles.tip}>
        如果图片超过2M请去
        <a onClick={() => window.open("https://tinypng.com/")}>
          https://tinypng.com/
        </a>
        压缩
      </span>
      <Dragger {...props} {...uploadProps} className={styles.dragger}>
        <p className="ant-upload-drag-icon"><InboxOutlined /></p>
        <p className="ant-upload-text">单击或拖动图片到此区域进行上传</p>
        <p className="ant-upload-hint">仅支持svg、jpeg、png</p>
      </Dragger>
      {renderFileList}
    </div>
  );
};

export default UploadFile;
