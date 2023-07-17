export default async function load() {
    const url =  'https://oauth.iamickdev.com/tiget/getAllEvent';
    const res =  await fetch(url);
    const data =  await res.json();
    console.log(data)
    return data;
}

