const url = 'https://course-api.com/javascript-store-products';

const fetchFunction = async () => {
    let e = await fetch (url);
    let a = await e.json();
    let list = a[2].id;
    console.log(list);
    
};

const list = fetchFunction();
console.log(list);

