const $ = document;
const connectwallet = $.querySelector('#connectwallet')
const wineth = window.ethereum ;

connectwallet.addEventListener('click', () => {
if (wineth) {
    const web3 = new Web3(wineth);
    try {
    wineth.send('eth_requestAccounts');
    return web3;
    } catch (e) {
    console.error(e);
    }
}else if (window.web3) {
    const web3 = window.web3;
    console.log('Injected web3 detected');
    return web3;
}else {
    const provider = new Web3.providers.HttpProvider('http://127.0.0.1:2411');
    const web3 = new Web3(provider);
    console.log('No web3 instance injected');
    return web3;
}});