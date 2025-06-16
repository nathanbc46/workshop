//Type Guards
interface User {
    id: number;
    name: string;
    email: string;
    active: boolean;
}

const users: User[] = [
    { id: 1, name: 'Nathan', email: 'nathan@gmail.com', active: true },
    { id: 2, name: 'Jim', email: 'jim@example.com', active: false }
]

function getUserById(id: number): User | undefined {
    return users.find(u => u.id === id);
}

const userinfo = getUserById(3); // Output: { id: 1, name: 'Nathan', email: '
//console.log(userinfo?.name); // Output: undefined

if (userinfo) {
    console.log(userinfo.name); // Output: undefined
}

function setHeight(height: number | string): string {
    if (typeof height === 'number') {
        return `${height}px`;
    }
    return !height.endsWith('px') ? `${height}px` : height;
}

console.log(setHeight(180)); // Output: "180px"
console.log(setHeight('150')); // Output: "150px"

//Throw
interface Product {
    id: number
    title: string
    cost: number
    quantity: number
}

const products: Product[] = [
    { id: 1, title: 'Product 1', cost: 100, quantity: 10 },
    { id: 2, title: 'Product 2', cost: 200, quantity: 5 },
]

function showProduct(id: number): string {
    const product = products.find(product => product.id === id)
    // product: Product | undefined
    if (!product) { // Must not undefined
        throw new Error('Product not found')
    }
    // product: Product
    return `Product: ${product.title}, Cost: ${product.cost}, Quantity: ${product.quantity}`
}

try {
    console.log(showProduct(3)) // Output: Product: Product 1, Cost: 100, Quantity: 10
}
catch (error: any) {
    console.error(error.message) // Output: Product not found
}

//Equality
type APIResponse =
    | { status: 'success'; data: string }
    | { status: 'error'; error: string }
    | { status: 'loading' }
    
function handleResponse(response: APIResponse) {
    if (response.status === 'success') {
        console.log('Data:', response.data);
    } else if (response.status === 'error') {
        console.error('Error:', response.error);
    } else if (response.status === 'loading') {
        console.log('Loading...');
    }
}

handleResponse({ status: 'success', data: 'Here the data' })
handleResponse({ status: 'error', error: 'There is error' })
handleResponse({ status: 'loading' })

//in
type APIStatus =
  | { status: 'success'; data: string }
  | { status: 'error'; error: string }
  | { status: 'loading' }

function handleResponse2(response: APIStatus) {
  if ('data' in response) {
    console.log(response.data)
  } else if ('error' in response) {
    console.error(response.error)
  } else {
    console.log('Loading...')
  }
}

handleResponse2({ status: 'success', data: 'Here the data' })
handleResponse2({ status: 'error', error: 'There is error' })
handleResponse2({ status: 'loading' })