'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const handleToggle = (headerElement: HTMLElement) => {
      const body = headerElement.nextElementSibling as HTMLElement
      if (body) {
        body.classList.toggle('open')
        const btn = headerElement.querySelector('.toggle-btn') as HTMLElement
        if (btn) {
          btn.textContent = body.classList.contains('open') ? 'collapse' : 'expand'
        }
      }
    }

    const headers = document.querySelectorAll('.exp-card-header')
    headers.forEach((header) => {
      header.addEventListener('click', () => {
        handleToggle(header as HTMLElement)
      })
    })

    return () => {
      headers.forEach((header) => {
        header.removeEventListener('click', () => {
          handleToggle(header as HTMLElement)
        })
      })
    }
  }, [])

  return (
    <>
      <header>
        <div className="header-inner">
          <div className="badge">Lab Manual — Experiments 1–14</div>
          <h1>Full Stack <span>Development</span><br/>Experiments</h1>
          <p>// TypeScript · ExpressJS · ReactJS · MongoDB</p>
        </div>
      </header>

      <nav className="nav-bar">
        <a href="#exp1" className="ts">1. TypeScript</a>
        <a href="#exp2" className="ex">2. Express Routing</a>
        <a href="#exp3" className="ex">3. Express Templating</a>
        <a href="#exp4" className="ex">4. Express Auth</a>
        <a href="#exp5" className="ex">5. Express DB</a>
        <a href="#exp6" className="re">6. React HTML/JSX</a>
        <a href="#exp7" className="re">7. React Props/State</a>
        <a href="#exp8" className="re">8. React Conditional</a>
        <a href="#exp9" className="re">9. React Router</a>
        <a href="#exp10" className="re">10. React Hooks</a>
        <a href="#exp11" className="re">11. React Todo/Quiz</a>
        <a href="#exp12" className="mg">12. MongoDB CRUD</a>
        <a href="#exp13" className="mg">13. MongoDB Records</a>
        <a href="#exp14" className="ex">14. Augmented</a>
      </nav>

      <main>
        {/* SECTION 1: TYPESCRIPT */}
        <div className="section" id="exp1">
          <div className="section-header">
            <span className="section-num">01</span>
            <h2 className="section-title">TypeScript</h2>
            <span className="tag ts">TypeScript</span>
          </div>

          {/* 1a */}
          <div className="exp-card">
            <div className="exp-card-header">
              <span className="exp-label">1a</span>
              <span className="exp-title">Simple and Special Types</span>
              <button className="toggle-btn">expand</button>
            </div>
            <div className="exp-body">
              <div className="code-label">// main.ts</div>
              <pre>{`let name: string = "SKAV";
let age: number = 21;
let isActive: boolean = true;
let score: number = 9.5;

// Arrays and Tuples
let skills: string[] = ["TypeScript", "React", "Node"];
let coords: [number, number] = [16.5, 80.6];

// Enum
enum Direction { Up, Down, Left, Right }
let move: Direction = Direction.Up;

// Special Types
let anything: any = "can be anything";
anything = 42; // no error

let unknown: unknown = "safe unknown";

function neverReturns(): never {
  throw new Error("This function never returns");
}

function logMessage(): void {
  console.log("Hello from TypeScript!");
}

console.log(\`Name: \${name}, Age: \${age}, Active: \${isActive}\`);
console.log("Skills:", skills);
console.log("Direction:", Direction[move]);
logMessage();`}</pre>
              <div className="output-block">
                <div className="output-title">Expected Output</div>
                <div className="output-pre">{`Name: SKAV, Age: 21, Active: true
Skills: [ 'TypeScript', 'React', 'Node' ]
Direction: Up
Hello from TypeScript!`}</div>
              </div>
            </div>
          </div>

          {/* 1b */}
          <div className="exp-card">
            <div className="exp-card-header">
              <span className="exp-label">1b</span>
              <span className="exp-title">Function Parameter and Return Types</span>
              <button className="toggle-btn">expand</button>
            </div>
            <div className="exp-body">
              <div className="code-label">// functions.ts</div>
              <pre>{`function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

function printInfo(msg: string): void {
  console.log(msg);
}

// Union return type
function parseId(id: string | number): string {
  if (typeof id === "number") return id.toString();
  return id;
}

console.log(add(10, 20));
console.log(greet("SKAV"));
printInfo("TypeScript is statically typed");
console.log(parseId(101));
console.log(parseId("TS-202"));`}</pre>
              <div className="output-block">
                <div className="output-title">Expected Output</div>
                <div className="output-pre">{`30
Hello, SKAV!
TypeScript is statically typed
101
TS-202`}</div>
              </div>
            </div>
          </div>

          {/* 1c */}
          <div className="exp-card">
            <div className="exp-card-header">
              <span className="exp-label">1c</span>
              <span className="exp-title">Arrow Functions — Optional, Default, REST Parameters</span>
              <button className="toggle-btn">expand</button>
            </div>
            <div className="exp-body">
              <div className="code-label">// arrow.ts</div>
              <pre>{`// Arrow Function
const multiply = (a: number, b: number): number => a * b;

// Default Parameter
const greet = (name: string, greeting: string = "Hello"): string =>
  \`\${greeting}, \${name}!\`;

// Optional Parameter
const displayAge = (name: string, age?: number): string =>
  age ? \`\${name} is \${age} years old\` : \`\${name}'s age is unknown\`;

// REST Parameter
const sumAll = (...nums: number[]): number =>
  nums.reduce((acc, n) => acc + n, 0);

console.log(multiply(4, 5));
console.log(greet("SKAV"));
console.log(greet("SKAV", "Hi"));
console.log(displayAge("SKAV", 21));
console.log(displayAge("Unknown"));
console.log(sumAll(1, 2, 3, 4, 5));`}</pre>
              <div className="output-block">
                <div className="output-title">Expected Output</div>
                <div className="output-pre">{`20
Hello, SKAV!
Hi, SKAV!
SKAV is 21 years old
Unknown's age is unknown
15`}</div>
              </div>
            </div>
          </div>

          {/* 1d */}
          <div className="exp-card">
            <div className="exp-card-header">
              <span className="exp-label">1d</span>
              <span className="exp-title">Classes — Constructor, Properties, Methods, Access Specifiers</span>
              <button className="toggle-btn">expand</button>
            </div>
            <div className="exp-body">
              <div className="code-label">// classes.ts</div>
              <pre>{`class Person {
  public name: string;
  private age: number;
  protected email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  public getInfo(): string {
    return \`Name: \${this.name}, Age: \${this.age}\`;
  }

  private secretMethod(): string {
    return "This is private";
  }
}

class Student extends Person {
  private rollNo: number;

  constructor(name: string, age: number, email: string, rollNo: number) {
    super(name, age, email);
    this.rollNo = rollNo;
  }

  public getStudentInfo(): string {
    return \`\${this.getInfo()}, Roll: \${this.rollNo}, Email: \${this.email}\`;
  }
}

const s = new Student("SKAV", 21, "skav@tech.com", 101);
console.log(s.getStudentInfo());
console.log(s.name); // public — accessible`}</pre>
              <div className="output-block">
                <div className="output-title">Expected Output</div>
                <div className="output-pre">{`Name: SKAV, Age: 21, Roll: 101, Email: skav@tech.com
SKAV`}</div>
              </div>
            </div>
          </div>

          {/* 1e */}
          <div className="exp-card">
            <div className="exp-card-header">
              <span className="exp-label">1e</span>
              <span className="exp-title">Namespaces and Modules</span>
              <button className="toggle-btn">expand</button>
            </div>
            <div className="exp-body">
              <div className="code-label">// mathUtils.ts (module)</div>
              <pre>{`// Export as a module
export function add(a: number, b: number): number { return a + b; }
export function subtract(a: number, b: number): number { return a - b; }
export const PI = 3.14159;`}</pre>
              <div className="code-label">// main.ts</div>
              <pre>{`import { add, subtract, PI } from "./mathUtils";

// Namespace
namespace Geometry {
  export function circleArea(r: number): number {
    return PI * r * r;
  }
  export function rectArea(w: number, h: number): number {
    return w * h;
  }
}

console.log("Add:", add(10, 5));
console.log("Subtract:", subtract(20, 7));
console.log("Circle Area (r=5):", Geometry.circleArea(5).toFixed(2));
console.log("Rect Area (5x10):", Geometry.rectArea(5, 10));`}</pre>
              <div className="output-block">
                <div className="output-title">Expected Output</div>
                <div className="output-pre">{`Add: 15
Subtract: 13
Circle Area (r=5): 78.54
Rect Area (5x10): 50`}</div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          © 2024 Full Stack Development Lab Manual | Sandeep Kasturi
        </footer>
      </main>
    </>
  )
}
