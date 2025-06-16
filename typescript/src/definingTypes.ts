//กำหนดตัวแปรแบบ Inference 
const myname = 'Nathan'
let mylocation = 'Thailand'
let age = 40
let isMarried = true

age = 41 // This is fine, as age is a number

//กำหนดตัวแปรแบบ Reference (กำหนด Type โดยตรง)
let productName: string = 'Laptop'
let productPrice: number = 999.99
let isAvailable: boolean = true

let productDetails: string = `Product: ${productName}, Price: $${productPrice}, Available: ${isAvailable}`
console.log(productDetails);

//Type Annotation (การระบุ Type)
const birthDate: Date = new Date('1983-01-01');
const classroom: string[] = ['a1', 'b1', 'c1'];
const studentScores: Record<string, number> = {
    'John': 85,
    'Jane': 92,
    'Jim': 78
};
const subjects: {subject: string, score: number}[] = [
    { subject: 'Math', score: 95 },
    { subject: 'Science', score: 88 },
    { subject: 'History', score: 90 }
]

//ประกาศตัวแปรมารับ function กำหนด parameter เป็น string, return เป็น number
const getSubjectScroe1: (subject: string) => number = (subject) =>{
    return subjects.find(s => s.subject === subject)?.score || 0;
}

//กำหนดใน function  กำหนด parameter เป็น string, return เป็น number
function getSubjectScroe2(subject: string): number {
    return subjects.find(s => s.subject === subject)?.score || 0;
}

console.log(getSubjectScroe1('Math')); // Output: 95
console.log(getSubjectScroe2('Science')); // Output: 88

// Type Aliases
type UserName = string;
type UserAge = number;
const username: UserName = 'Nathan';
const userage: UserAge = 40;

//Union (Composing)
const bill1: number | number[] = 1000; // Single number
const bill2: number | number[] = [500, 300, 200]; // Array of numbers
const bill3: (number | string)[] = [1000, 500, '300', 200]; // Mixed array

//Tuple (composing)
const user: [string, number, boolean] = ['Nathan', 40, true]; // Tuple with string, number, and boolean


// Optional Parameters (การใช้ ? เพื่อระบุว่า parameter นั้นอาจจะไม่มีก็ได้)
type Config = {
  mode: 'production' | 'development' | 'testing'
  url: string
  port?: number
  debug: boolean | undefined // ใช้แบบ ?: แทนได้
  experimental?: {
    featureA?: boolean
    featureB?: boolean
    featureC?: boolean
  }
}

const config: Config = {
  mode: 'development',
  url: 'https://example.com',
  debug: true,
}


function addUser(name: string, birthDate?: Date, location?: string) {
  // Error เพราะว่า birthDate อาจจะไม่มีก็ได้ ควรใช้ ?: สำหรับ Optional Parameters
}
addUser('Nathan')