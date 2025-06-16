//function
// นิยมใช้ T ย่อมาจาก Type (เหมือน i ย่อมาจาก Index)
function getFirst<T>(arr: T[]): T { 
  return arr[0];
}

// Example Usage
const num = getFirst([1, 2, 3]); // num is inferred as number
const str = getFirst(['a', 'b', 'c']); // str is inferred as string
const multi = getFirst([1, 'a', true]); // multi is inferred as (number | string | boolean)
console.log(num, str, multi);

// T, U, V เหมือนกับชื่อตัวแปร i, j, k ตอนลูป
function map<T, U>(arr: T[], fn: (item: T) => U): U[] {
  return arr.map(fn)
}

// 👉 Inference
const multipleNumbers = map([1, 2, 3], (num) => num * 2)


//class
class Member {
  role = 'member'
  email: string
  constructor(email: string) {
    this.email = email
  }
}

class Admin {
  role = 'admin'
  email: string
  sudo: boolean = false
  constructor(email: string) {
    this.email = email
  }
  enableSudoMode() {
    this.sudo = true
  }
}

class SaveSession<T extends { role: string; email: string }> {
  static id = 0
  data: T
  constructor (data: T) {
    SaveSession.id++
    this.data = data
  }
  parseSession(): string {
    return JSON.stringify(this.data)
  }
}

const member = new Member('john@example.com')
const admin = new Admin('admin@example.com')

const memberSession = new SaveSession(member)
const adminSession = new SaveSession(admin)

adminSession.data.enableSudoMode()
console.log(adminSession.parseSession())