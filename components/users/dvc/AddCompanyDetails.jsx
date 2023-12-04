"use client";
import React, { useState, useRef } from "react";
import { addCard } from "@/services/dvcService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Editor } from '@tinymce/tinymce-react';

const AddCompanyDetails = (params) => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [clicked, setClicked] = useState(false);
  const [noteData, setNoteData] = useState("");
  const editorRef = useRef(null);
  const [card, setCard] = useState({
    domainName:"",
    companyName: "",
    companyEmail: "",
    designation:"",
    phone_no:"",
    alternate_no:"",
    whatsapp_no:"",
    companyAddress:"",
    businessLocation:"",
    note:noteData,
    establishmentDate:"",
    userId: params.userId,
  });
  const handleUpdateCard = async (event) => {``
  event.preventDefault();
  // validate task data
  try {
    const result = await updateCard(card);
    //console.log(result);
    toast.success("Your Theme is added !!", {
      position: "top-center",
    });

    setCard({
      name: "",
      category: "",
    });
    setIsDataSaved('companyDetails');
    setCurrentStep((prevStep) => prevStep + 1);
  } catch (error) {
    console.log(error);
    toast.error("Theme not added !!", {
      position: "top-center",
    });
  }
};

  return (
    <div className="flex flex-col text-left  ">
      <h1 className="text-xl font-medium title-font  text-gray-900 underline mb-10 ml-56">Company-Details</h1>
      <form className="w-full  lg:w-2/3 mx-auto leading-relaxed text-base" action="#!" onSubmit={handleUpdateCard}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                </svg>
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a Company Logo</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                </svg>
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a Contact QR Code</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>

          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                </svg>
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a Brochure</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>

          </div>

        </div>

        <div className="flex flex-col text-left">
          <h1 className="text-xl font-medium title-font  text-gray-900 underline mb-10">Personal Details</h1>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
              Name
            </label>
            <input onChange={(event) => {
                    setCard({
                      ...card,
                      companyName: event.target.value,
                    });
                  }}
                  value={card.companyName}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
              Email *
            </label>
            <div className="relative">
              <input onChange={(event) => {
                    setCard({
                      ...card,
                      companyEmail: event.target.value,
                    });
                  }}
                  value={card.companyEmail}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
              Designation *
            </label>
            <input
            onChange={(event) => {
              setCard({
                ...card,
                designation: event.target.value,
              });
            }}
            value={card.designation} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
              Phone No. *
            </label>
            <input onChange={(event) => {
                    setCard({
                      ...card,
                      phone_no: event.target.value,
                    });
                  }}
                  value={card.phone_no} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
              Alternate No. *
            </label>
            <div className="relative">
              <input onChange={(event) => {
                    setCard({
                      ...card,
                      alternate_no: event.target.value,
                    });
                  }}
                  value={card.alternate_no}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />

            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
              Whatsapp No.*
            </label>
            <input onChange={(event) => {
                    setCard({
                      ...card,
                      whatsapp_no: event.target.value,
                    });
                  }}
                  value={card.whatsapp_no}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Address
            </label>
            <textarea className={`appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-whiteresize rounded-md`} onChange={(event) => {
              setCard({
                ...card,
                companyAddress: event.target.value,
              });
            }} defaultValue={card.companyAddress}></textarea>
            {error && (
              <p className="text-red-500 text-xs italic"> {error}</p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Business Location *
            </label>
            <textarea className={`appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-whiteresize rounded-md`} onChange={(event) => {
              setCard({
                ...card,
                businessLocation: event.target.value,
              });
            }} defaultValue={card.businessLocation}></textarea>
            {error && (
              <p className="text-red-500 text-xs italic"> {error}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Establishment Date
            </label>
            <DatePicker
              placeholderText="Select Establish Date"
              showIcon icon="fa fa-calendar"
              wrapperClassName="w-full p-0 block py-3 px-4 mb-3 focus:outline-none focus:bg-whiteresize rounded-md"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 focus:outline-none focus:bg-whiteresize rounded-md"
                onChange={(event) => {
                setCard({
                  ...card,
                  establishmentDate: event,
                });
              }}
              selected={card.establishmentDate}
            />
            {error && (
              <p className="text-red-500 text-xs italic"> {error}</p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Domain Name <span className="text-red">*</span>
            </label>
            <input onChange={(event) => {
              setCard({
                ...card,
                domainName: event.target.value,
              });
            }}
              value={card.domainName} className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="grid-first-name" type="text" placeholder="Domain Name" />
            {error && (
              <p className="text-red-500 text-xs italic"> {error}</p>
            )}
          </div>
        </div>
        <div className="w-full md:w-full px-3 mb-6 md:mb-0">
          <div className="col-span-full">
            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">About</label>
            <div className="mt-2">
              <Editor
                onEditorChange={(newText) => setNoteData(newText)}
                apiKey='corm88rtq50km03chdbpu78h7wvhy54ar6bogzmo6myh20h7'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue=""
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                  ],
                  toolbar: 'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                  content_style: 'body { background-color:#E5E7EB ; font-family:Helvetica,Arial,sans-serif; font-size:14px } '
                  
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
                <button className="bg-blue-600 py-2 px-3 rounded-lg text-white hover:bg-blue-800">
                  Add {" "}
                </button>
                <button className="bg-red-600 py-2 px-3 rounded-lg text-white hover:bg-red-800 ms-3">
                  Clear
                </button>
              </div>
      </form>
    </div>

  );
};

export default AddCompanyDetails;
