export default function Networking() {
  return (
    <div>
      <h2>Networking Concepts</h2>

      <h3>DNS</h3>
      <p>
        Our domain, ashaiman.github.io,  uses DNS to link the domain name into a machine readable IP address so the browser can locate the server.
        As shown below, the nslookup command shows our doman points to Github Pages. 
        This allows the public to access the site using a name instead of a numeric IP address.
      </p>

      <h3>IP Addressing</h3>
      <p>
        IP addresses identify devices on the internet. IPv4 uses numbers like
        192.168.1.1, while IPv6 uses longer hexadecimal addresses.
      </p>

      <h3>HTTP vs HTTPS</h3>
      <p>
        HTTP transfers web data, while HTTPS encrypts communication using TLS.
      </p>
    </div>
  );
}
