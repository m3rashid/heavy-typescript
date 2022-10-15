export interface IA {
  a: string;
  b: {
    c: string;
  };
  d: {
    e: number;
    f: IA;
  };
}

type a = IA["a"]; // type a = number
type f = IA["d"]["f"]; // type f = IA | null
type innerF = IA["d"]["f"]["a"]; // type innerF = string

// in this way lookup types can be used to confirming to the existing types and generate new types on that basis
