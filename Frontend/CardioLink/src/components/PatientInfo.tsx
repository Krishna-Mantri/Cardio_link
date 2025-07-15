"use client";
import React from "react";

export default function PatientInfo() {
  const handleGenerateReport = async () => {
    try {
      const response = await fetch("http://localhost:5000/generate-report", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to generate report");
      }

      // Extract filename from response headers if available
      const disposition = response.headers.get("Content-Disposition");
      let filename = "CardioLink_Report.pdf";
      if (disposition && disposition.includes("filename=")) {
        const match = disposition.match(/filename="?([^"]+)"?/);
        if (match?.[1]) {
          filename = match[1];
        }
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating report:", error);
      alert("❌ Report generation failed.");
    }
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow space-y-1 text-gray-700">
      <h2 className="text-lg font-semibold text-gray-800">Patient Info</h2>
      <p>🧑 Age: 45</p>
      <p>🩸 Blood Type: O+</p>
      <p>❤️ Condition: Stable</p>

      <button
        onClick={handleGenerateReport}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        📄 Generate Report
      </button>
    </div>
  );
}
