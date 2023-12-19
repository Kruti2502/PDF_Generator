import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import debounce from "../utility/debounce";
import jsPDF from "jspdf";

function CreatePdf() {
  const componentPDF = useRef<HTMLTextAreaElement>(null);

  const [pdfContent, setPdfContent] = useState("");

  const handleGeneratePdf = () => {
    var htmlContent = document.getElementById("myTable");
    // Generate PDF content based on your requirements
    const content = htmlContent;
    // setPdfContent(content);

    // Generate PDF using jsPDF
    const pdf = new jsPDF();
    pdf.html(content!, {
      callback: () => {
        const dataUri = pdf.output("datauristring");
        setPdfContent(dataUri);
      },
    });
  };

  const handlePrint = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "UserData",
  });

  const onTextChange = debounce(handleGeneratePdf, 200);

  useEffect(() => {
    console.log("Some data has been changed!");
  }, [document.getElementById("myTable")]);

  return (
    <div>
      <textarea
        ref={componentPDF}
        onChange={onTextChange}
        title="bodyArea"
        id="myTable"
        name="w3review"
        rows={4}
        cols={50}
      />
      <button onClick={handlePrint}>Export as PDF</button>
      {pdfContent && (
        <div>
          <iframe
            title="PDF Preview"
            src={pdfContent}
            width="55%"
            height="500px"
          />
        </div>
      )}
    </div>
  );
}

export default CreatePdf;
