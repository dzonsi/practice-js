// utility types

// Partial<T>
// all properties of T set to optional

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
};

const todo2 = updateTodo(todo1, {
  description: 'throw out trash',
});

console.log(todo2);

// Readonly<T>
// all properties of T set to readonly

interface Todo2 {
    title: string;
}

const todo: Readonly<Todo2> = {
    title: 'Delete inactive users',
};

// todo.title = 'Hello'; error

// Record<K,T>
// constructs a type with a set of properties K of type T

interface PageInfo {
    title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' },
};

// Pick<T,K>
// constructs a type by picking the set of properties K from T

interface Todo3 {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo3, 'title' | 'completed'>;

const todo3: TodoPreview = {
    title: 'Clean room',
    completed: false,
};

// Omit<T,K>
// picking all properties from T and then removing K

interface Todo4 {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview2 = Omit<Todo4, 'description'>;

const todo4: TodoPreview = {
    title: 'Clean room',
    completed: false,
};

// Exclude<T, U>
// excluding from T all properties that are assignable to U

type T0 = Exclude<"a" | "b" | "c", "a">;  // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;  // "c"
type T2 = Exclude<string | number | (() => void), Function>;  // string | number

// Extract<T,U>
// extracting from T all properties that are assignable to U.

type T3 = Extract<"a" | "b" | "c", "a" | "f">;  // "a"
type T4 = Extract<string | number | (() => void), Function>;  // () => void

// NonNullable<T>
// excluding null and undefined from T

type T5 = NonNullable<string | number | undefined>;  // string | number
type T6 = NonNullable<string[] | null | undefined>;  // string[]


// Parameters<T>
// constructs a tuple type of the types of the parameters of a function type T

declare function f1(arg: { a: number, b: string }): void
type T7 = Parameters<() => string>;  // []
type T8 = Parameters<(s: string) => void>;  // [string]
type T9 = Parameters<(<T>(arg: T) => T)>;  // [unknown]
type T10 = Parameters<typeof f1>;  // [{ a: number, b: string }]

// ConstructorParameters<T>
// it produces a tuple type with all the parameter
// types of a constructor function type

type T11 = ConstructorParameters<ErrorConstructor>;  // [(string | undefined)?]
type T12 = ConstructorParameters<FunctionConstructor>;  // string[]
type T13 = ConstructorParameters<RegExpConstructor>;  // [string, (string | undefined)?]

// ReturnType<T>
// constructs a type consisting of the return type of function T

declare function f1(): { a: number, b: string }
type T14 = ReturnType<typeof f1>;  // { a: number, b: string }
type T15 = ReturnType<() => string>;  // string
type T16 = ReturnType<(s: string) => void>;  // void
type T17 = ReturnType<(<T>() => T)>;  // {}

//InstanceType<T>

// constructs a type consisting of the instance type of a constructor function type T

class C {
  x = 0;
  y = 0;
}

type T18 = InstanceType<typeof C>;  // C

// Required<T>
// constructs a type consisting of all properties of T set to required

interface Props {
  a?: number;
  b?: string;
};

const obj: Props = { a: 5 }; // ok
// const obj2: Required<Props> = { a: 7, c: 9 }; error
// const obj3: Required<Props> = { a: 5 }; error

// ThisParameterType
// Extracts the type of the this parameter of a function type,
// or unknown if the function type has no this parameter

function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}

// OmitThisParameter
// removes the 'this' paramter from a function type

// ThisType<T>