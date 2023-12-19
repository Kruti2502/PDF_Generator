import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import debounce from "../utility/debounce";
import jsPDF from "jspdf";
import "./CreatePdf.css";

function CreatePdf() {
  const componentPDF = useRef<HTMLTextAreaElement>(null);
  const [pdfContent, setPdfContent] = useState("");

  const handleGeneratePdf = () => {
    var htmlContent = document.getElementById("myTable");
    // Generate PDF content based on your requirements
    const content = htmlContent;

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

  return (
    <>
      <button className="btn" onClick={handlePrint}>
        Export as PDF
      </button>
      <div className="preview_container">
        <div className="input_container">
          <textarea
            ref={componentPDF}
            onChange={onTextChange}
            title="bodyArea"
            id="myTable"
            name="w3review"
            rows={35}
            cols={50}
          />
        </div>
        {pdfContent && (
          <div className="preview_pdf">
            <iframe
              title="PDF Preview"
              src={pdfContent}
              width="80%"
              height="550px"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default CreatePdf;
