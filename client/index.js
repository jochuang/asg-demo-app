document.addEventListener('DOMContentLoaded', () => {
    getIPAddress();
})

const getIPAddress = async () => {
    const response = await fetch('/ipaddress');
    const data = await response.json();
    const ip = document.querySelector('#ip-address');
    ip.innerText = `The current public IP address is ${data}`; 
}
