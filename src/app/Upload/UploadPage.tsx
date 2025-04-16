import { useState } from 'react';
import { Content, FileUpload, PageSection, Tab, Tabs, TabTitleText } from '@patternfly/react-core';

const UploadPage = () => {
  const [value, setValue] = useState('');
  const [filename, setFilename] = useState('');
  const [activeTabKey, setActiveTabKey] = useState<string | number>(0);
  const [isBox, setIsBox] = useState<boolean>(false);

  // Toggle currently active tab
  const handleTabClick = (
    _event: React.MouseEvent<unknown> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number,
  ) => {
    setActiveTabKey(tabIndex);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleBox = (checked: boolean) => {
    setIsBox(checked);
  };

  const handleFileInputChange = (_, file: File) => {
    setFilename(file.name);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClear = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setFilename('');
    setValue('');
  };

  return (
    <>
      <PageSection hasBodyWrapper={false}>
        <Content>
          <h1>Upload</h1>
        </Content>
      </PageSection>
      <PageSection hasBodyWrapper={false}>
        <Tabs
          activeKey={activeTabKey}
          onSelect={handleTabClick}
          isBox={isBox}
          aria-label="Tabs in the default example"
          role="region"
        >
          <Tab eventKey={0} title={<TabTitleText>SBOM</TabTitleText>} aria-label="SBOM">
            <FileUpload
              id="upload-sbom"
              value={value}
              filename={filename}
              filenamePlaceholder="Accepted file types: .json, .bz2, .gz"
              onFileInputChange={handleFileInputChange}
              onClearClick={handleClear}
              browseButtonText="Upload"
            />
          </Tab>
          <Tab eventKey={1} title={<TabTitleText>Advisory</TabTitleText>}>
            <FileUpload
              id="upload-advisory"
              value={value}
              filename={filename}
              filenamePlaceholder="Accepted file types: .json, .bz2, .gz"
              onFileInputChange={handleFileInputChange}
              onClearClick={handleClear}
              browseButtonText="Upload"
            />
          </Tab>
        </Tabs>
      </PageSection>
    </>
  );
};

export { UploadPage };
