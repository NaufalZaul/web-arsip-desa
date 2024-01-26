'use client';
// import fs from 'fs/promises.js'
import { jsPDF } from 'jspdf';
import React, { useEffect, useState } from "react";
import element from './element';
// const element = `
// <h1>This is a custom HTML content</h1>
//   <p>You can include any HTML content here.</p>
//   <ul>
//      <li>Item 1</li>
//      <li>Item 2</li>
//      <li>Item 3</li>
//   </ul>`;


export default function PrintPDF({ params }) {

  const handleClicked = async () => {
    const doc = new jsPDF();

    html2pdf(`<div>${element}</div>`, { jsPDF: doc }).then(() => {
      doc.save();
    })
  }
  return (
    <button type="button" className="dropdown-item" onClick={() => handleClicked()}>
      <i class="fas fa-print mr-2 text-gray-400"></i>
      Cetak
    </button>
  )
};
