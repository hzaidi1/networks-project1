import { useState } from "react";

export default function Networking() {
  const [message, setMessage] = useState("");

  const sendPacket = (device) => {
    setMessage(`Packet sent from ${device} to Router`);
  };

  return (
    <main className="landing-page">
      <h1>Networking Concepts</h1>
      <p>This page demonstrates how networking concepts are applied to our website deployment.</p>

      <div className="card">
        <h2>DNS</h2>
        <p>Our domain, ashaiman.github.io,  uses DNS to link the domain name into a machine readable IP address so the browser can locate the server.
        As shown below, the nslookup command shows our doman points to Github Pages. 
        This allows the public to access the site using a name instead of a numeric IP address.</p>
      </div>

      <div className="card">
        <h2>IP Addressing</h2>
        <p>
          We identified the following public IP address:

            Detected IP: 75.137.6.232

          This address allows for end-to-end communication across the internet.
        </p>
      </div>

      <div className="card">
        <h2>Protocols (HTTP vs HTTPS)</h2>
        <p>This site enforces HTTPS, ensuring that data is encrypted during transit. This uses the TCP/IP protocol for reliable delivery.</p>
        <button onClick={() => sendPacket("Laptop")}>Send Packet</button>
        <p>{message}</p>
      </div>
    </main>
  );
}