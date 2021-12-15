import React from "react";

export default function App() {
  const cbMultiple = document.getElementById("multiple");
  const cbName = document.getElementById("name");
  const cbEmail = document.getElementById("email");
  const cbTel = document.getElementById("tel");
  const cbAddress = document.getElementById("address");
  const cbIcon = document.getElementById("icon");
  const ulResults = document.getElementById("results");

  const supported = "contacts" in navigator && "ContactsManager" in window;

  if (supported) {
    alert("Browser Supported");
    checkProperties();
  }

  async function checkProperties() {
    const supportedProperties = await navigator.contacts.getProperties();
    if (supportedProperties.includes("name")) {
      enableProp(cbName);
    }
    if (supportedProperties.includes("email")) {
      enableProp(cbEmail);
    }
    if (supportedProperties.includes("tel")) {
      enableProp(cbTel);
    }
    if (supportedProperties.includes("address")) {
      enableProp(cbAddress);
    }
    if (supportedProperties.includes("icon")) {
      enableProp(cbIcon);
    }
  }

  async function getContacts() {
    const props = [];
    if (cbName.checked) props.push("name");
    if (cbEmail.checked) props.push("email");
    if (cbTel.checked) props.push("tel");
    if (cbAddress.checked) props.push("address");
    if (cbIcon.checked) props.push("icon");

    const opts = { multiple: cbMultiple.checked };

    try {
      const contacts = await navigator.contacts.select(props, opts);
      handleResults(contacts);
    } catch (ex) {
      ulResults.classList.toggle("error", true);
      ulResults.classList.toggle("success", false);
      ulResults.innerText = ex.toString();
    }
  }

  function handleResults(contacts) {
    alert(JSON.stringify(contacts));
  }

  function enableProp(cbox) {}

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "80vh",
      }}
    >
      <button
        style={{ padding: 10, cursor: "pointer" }}
        onClick={
          window.width < 768
            ? getContacts
            : () => alert("Please try in mobile phone ")
        }
      >
        Request contact List Persmissions
      </button>
      <br />
      <br />
      <h1>Contact Picker API</h1>

      <p>Please try in mobile phone not in PC</p>
    </div>
  );
}
