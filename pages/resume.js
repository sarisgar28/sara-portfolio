import React from "react";
import {Button} from 'react-bootstrap'
import useDownloader from "react-use-downloader";
  
export default function Resume() {
  const { size, elapsed, percentage, download,
        cancel, error, isInProgress } =
    useDownloader();
  
  const fileUrl = "/Users/saragarcia/workspace/sara-portfolio/public/assets/resumepdf.pdf";
  const filename = "File.pdf";
  
  return (
    <div>
      <h3>CV Downloader</h3>
      <p>Download is in {isInProgress ? 
        "in progress" : "stopped"}</p>
  
      <Button onClick={() => download(fileUrl, filename)}>
        Click to download the file
      </Button>
      <Button onClick={() => cancel()}>
        Cancel the download
      </Button>
      <p>Download size in bytes {size}</p>
  
      <label htmlFor="file">Downloading progress:</label>
      <progress id="file" value={percentage} max="100" />
      <p>Elapsed time in seconds {elapsed}</p>
      {error && <p>possible error {JSON.stringify(error)}</p>}
    </div>
  );
}